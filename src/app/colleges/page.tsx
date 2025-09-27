'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, MapPin, Users, BookOpen, Wifi, Home, Car, Filter, Star, Phone, Globe } from 'lucide-react';

interface College {
  id: number;
  name: string;
  location: string;
  district: string;
  courses: string[];
  facilities: string[];
  hostel: boolean;
  fees: string;
  cutoff: string;
  contact: string;
  website?: string;
  rating: number;
  students: number;
}

const colleges: College[] = [
  {
    id: 1,
    name: "Government Degree College Srinagar",
    location: "Bemina, Srinagar",
    district: "Srinagar",
    courses: ["BA", "BSc", "BCom", "BCA", "BBA"],
    facilities: ["Library", "Computer Lab", "Sports Complex", "Canteen", "WiFi"],
    hostel: true,
    fees: "₹8,000/year",
    cutoff: "65%",
    contact: "+91-194-2345678",
    website: "gdcsrinagar.edu.in",
    rating: 4.2,
    students: 2500
  },
  {
    id: 2,
    name: "Government Degree College Jammu",
    location: "Parade Ground, Jammu",
    district: "Jammu",
    courses: ["BA", "BSc", "BCom", "BBA", "B.Ed"],
    facilities: ["Library", "Science Labs", "Auditorium", "Sports Ground", "Canteen"],
    hostel: true,
    fees: "₹7,500/year",
    cutoff: "60%",
    contact: "+91-191-2345678",
    rating: 4.0,
    students: 2200
  },
  {
    id: 3,
    name: "Government Degree College Baramulla",
    location: "Baramulla Town",
    district: "Baramulla",
    courses: ["BA", "BSc", "BCom", "BCA"],
    facilities: ["Library", "Computer Lab", "Science Labs", "Sports Ground"],
    hostel: false,
    fees: "₹6,000/year",
    cutoff: "55%",
    contact: "+91-194-2345679",
    rating: 3.8,
    students: 1800
  },
  {
    id: 4,
    name: "Government Degree College Anantnag",
    location: "Anantnag City",
    district: "Anantnag",
    courses: ["BA", "BSc", "BCom", "B.Ed"],
    facilities: ["Library", "Science Labs", "Computer Lab", "Canteen"],
    hostel: true,
    fees: "₹6,500/year",
    cutoff: "58%",
    contact: "+91-193-2345678",
    rating: 3.9,
    students: 1600
  },
  {
    id: 5,
    name: "Government Degree College Rajouri",
    location: "Rajouri Town",
    district: "Rajouri",
    courses: ["BA", "BSc", "BCom"],
    facilities: ["Library", "Computer Lab", "Sports Ground", "Canteen"],
    hostel: false,
    fees: "₹5,500/year",
    cutoff: "50%",
    contact: "+91-196-2345678",
    rating: 3.6,
    students: 1200
  },
  {
    id: 6,
    name: "Government Degree College Kathua",
    location: "Kathua City",
    district: "Kathua",
    courses: ["BA", "BSc", "BCom", "BCA"],
    facilities: ["Library", "Science Labs", "Computer Lab", "WiFi"],
    hostel: true,
    fees: "₹6,000/year",
    cutoff: "52%",
    contact: "+91-192-2345678",
    rating: 3.7,
    students: 1400
  }
];

const districts = ["All Districts", "Srinagar", "Jammu", "Baramulla", "Anantnag", "Rajouri", "Kathua"];
const courses = ["All Courses", "BA", "BSc", "BCom", "BCA", "BBA", "B.Ed"];

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [showFilters, setShowFilters] = useState(false);

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === 'All Districts' || college.district === selectedDistrict;
    const matchesCourse = selectedCourse === 'All Courses' || college.courses.includes(selectedCourse);
    
    return matchesSearch && matchesDistrict && matchesCourse;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-primary-600 shadow-lg border-b-2 border-primary-700">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-primary-100 hover:text-white transition-colors lg:block hidden">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold text-white">Government Colleges</h1>
            <div className="lg:block hidden w-5"></div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mobile-container py-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search colleges... (e.g., Srinagar, Jammu, BSc, BCom)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-3">
              <p className="text-xs text-neutral-500 mb-2">💡 Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSearchTerm('Srinagar')}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                >
                  🏔️ Srinagar
                </button>
                <button
                  onClick={() => setSearchTerm('Jammu')}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition-colors"
                >
                  🏛️ Jammu
                </button>
                <button
                  onClick={() => setSearchTerm('BSc')}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors"
                >
                  🔬 BSc Science
                </button>
                <button
                  onClick={() => setSearchTerm('BCom')}
                  className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium hover:bg-orange-200 transition-colors"
                >
                  💼 BCom Commerce
                </button>
                <button
                  onClick={() => setSearchTerm('BCA')}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors"
                >
                  💻 BCA Computer
                </button>
                <button
                  onClick={() => setSearchTerm('Government')}
                  className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium hover:bg-pink-200 transition-colors"
                >
                  🏛️ Government
                </button>
                <button
                  onClick={() => setSearchTerm('Baramulla')}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium hover:bg-teal-200 transition-colors"
                >
                  🌲 Baramulla
                </button>
                <button
                  onClick={() => setSearchTerm('BA')}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium hover:bg-yellow-200 transition-colors"
                >
                  📖 BA Arts
                </button>
              </div>
            </div>
          </div>

          {/* Professional Filter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-700 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter Colleges
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* District Filter */}
              <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl p-4 border border-blue-200">
                <label className="flex items-center text-sm font-semibold text-blue-700 mb-3">
                  📍 Select District
                </label>
                <div className="relative">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full p-4 border-2 border-blue-300 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm font-medium shadow-sm appearance-none cursor-pointer hover:border-blue-400 transition-colors"
                  >
                    <option value="All Districts" className="font-medium py-2">🌍 All Districts in J&K</option>
                    <option value="Srinagar" className="py-2">🏔️ Srinagar</option>
                    <option value="Jammu" className="py-2">🏛️ Jammu</option>
                    <option value="Baramulla" className="py-2">🌲 Baramulla</option>
                    <option value="Anantnag" className="py-2">🏞️ Anantnag</option>
                    <option value="Rajouri" className="py-2">⛰️ Rajouri</option>
                    <option value="Kathua" className="py-2">🌾 Kathua</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-blue-600 mt-2">Choose your preferred district</p>
              </div>

              {/* Course Filter */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <label className="flex items-center text-sm font-semibold text-green-700 mb-3">
                  🎓 Select Course
                </label>
                <div className="relative">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-4 border-2 border-green-300 rounded-xl focus:ring-3 focus:ring-green-500 focus:border-green-500 bg-white text-sm font-medium shadow-sm appearance-none cursor-pointer hover:border-green-400 transition-colors"
                  >
                    <option value="All Courses" className="font-medium py-2">📚 All Available Courses</option>
                    <option value="BA" className="py-2">📖 Bachelor of Arts (BA)</option>
                    <option value="BSc" className="py-2">🔬 Bachelor of Science (BSc)</option>
                    <option value="BCom" className="py-2">💼 Bachelor of Commerce (BCom)</option>
                    <option value="BCA" className="py-2">💻 Bachelor of Computer Applications (BCA)</option>
                    <option value="BBA" className="py-2">📊 Bachelor of Business Administration (BBA)</option>
                    <option value="B.Ed" className="py-2">👨‍🏫 Bachelor of Education (B.Ed)</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-2">Pick your desired program</p>
              </div>
            </div>

            {/* Filter Results Summary */}
            <div className="bg-primary-50 rounded-lg p-3">
              <p className="text-sm text-primary-700 font-medium">
                📊 Found {filteredColleges.length} colleges
                {selectedDistrict !== 'All Districts' && ` in ${selectedDistrict}`}
                {selectedCourse !== 'All Courses' && ` offering ${selectedCourse}`}
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Colleges List */}
      <div className="mobile-container space-y-4">
        {filteredColleges.map(college => (
          <div key={college.id} className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
            {/* College Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-800 mb-1">{college.name}</h3>
                <div className="flex items-center text-neutral-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{college.location}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{college.rating}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{college.students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
              {college.hostel && (
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium">
                  Hostel Available
                </div>
              )}
            </div>

            {/* Course Tags */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-neutral-700 mb-2">Courses Offered:</h4>
              <div className="flex flex-wrap gap-2">
                {college.courses.map(course => (
                  <span key={course} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wide">Annual Fees</span>
                <p className="font-semibold text-neutral-800">{college.fees}</p>
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wide">Min. Cutoff</span>
                <p className="font-semibold text-neutral-800">{college.cutoff}</p>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-neutral-700 mb-2">Facilities:</h4>
              <div className="flex flex-wrap gap-2">
                {college.facilities.map(facility => (
                  <span key={facility} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-xs">
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-200">
              <a 
                href={`tel:${college.contact}`}
                className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call College
              </a>
              {college.website && (
                <a 
                  href={`https://${college.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  Visit Website
                </a>
              )}
              <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Get Directions
              </button>
            </div>
          </div>
        ))}

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-neutral-600 mb-2">No colleges found</h3>
            <p className="text-neutral-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mobile-container mt-8">
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 text-center">
          <h3 className="text-lg font-bold text-neutral-800 mb-2">Need Help Choosing?</h3>
          <p className="text-neutral-600 mb-4">Take our career quiz to get personalized college recommendations</p>
          <Link 
            href="/quiz"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Take Career Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
