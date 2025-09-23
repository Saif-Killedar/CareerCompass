'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, TrendingUp, DollarSign, Users, BookOpen, Award, Building, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

interface Career {
  id: number;
  title: string;
  category: 'government' | 'private' | 'entrepreneurship';
  stream: 'science' | 'commerce' | 'arts' | 'vocational' | 'any';
  education: string;
  salaryRange: string;
  growth: 'high' | 'medium' | 'low';
  description: string;
  skills: string[];
  exams?: string[];
  companies?: string[];
  opportunities: number;
}

const careers: Career[] = [
  // Government Careers
  {
    id: 1,
    title: "IAS/IPS Officer",
    category: "government",
    stream: "any",
    education: "Bachelor's Degree",
    salaryRange: "₹56,000 - ₹2,50,000/month",
    growth: "high",
    description: "Administrative service officers who implement government policies and maintain law & order.",
    skills: ["Leadership", "Public Administration", "Communication", "Decision Making"],
    exams: ["UPSC Civil Services"],
    opportunities: 1000
  },
  {
    id: 2,
    title: "Bank PO/Clerk",
    category: "government",
    stream: "commerce",
    education: "Bachelor's Degree",
    salaryRange: "₹25,000 - ₹80,000/month",
    growth: "medium",
    description: "Banking professionals handling customer service, loans, and financial operations.",
    skills: ["Banking Knowledge", "Customer Service", "Financial Analysis", "Computer Skills"],
    exams: ["IBPS PO", "SBI PO", "RRB"],
    opportunities: 5000
  },
  {
    id: 3,
    title: "Government Teacher",
    category: "government",
    stream: "any",
    education: "B.Ed + Subject Degree",
    salaryRange: "₹35,000 - ₹1,00,000/month",
    growth: "medium",
    description: "Educators in government schools shaping the future of students.",
    skills: ["Teaching", "Subject Expertise", "Communication", "Patience"],
    exams: ["JKSSB TET", "CTET"],
    opportunities: 3000
  },
  
  // Private Sector Careers
  {
    id: 4,
    title: "Software Engineer",
    category: "private",
    stream: "science",
    education: "B.Tech/BCA/BSc IT",
    salaryRange: "₹30,000 - ₹1,50,000/month",
    growth: "high",
    description: "Develop software applications, websites, and digital solutions for businesses.",
    skills: ["Programming", "Problem Solving", "Teamwork", "Continuous Learning"],
    companies: ["TCS", "Infosys", "Google", "Microsoft"],
    opportunities: 10000
  },
  {
    id: 5,
    title: "Chartered Accountant",
    category: "private",
    stream: "commerce",
    education: "CA Course",
    salaryRange: "₹40,000 - ₹2,00,000/month",
    growth: "high",
    description: "Financial experts handling auditing, taxation, and business advisory services.",
    skills: ["Accounting", "Taxation", "Financial Analysis", "Attention to Detail"],
    companies: ["Big 4 Firms", "Corporate Houses", "Practice"],
    opportunities: 2000
  },
  {
    id: 6,
    title: "Marketing Manager",
    category: "private",
    stream: "commerce",
    education: "MBA/BBA",
    salaryRange: "₹35,000 - ₹1,20,000/month",
    growth: "high",
    description: "Plan and execute marketing strategies to promote products and services.",
    skills: ["Marketing Strategy", "Communication", "Analytics", "Creativity"],
    companies: ["FMCG", "Tech Companies", "Startups"],
    opportunities: 4000
  },
  
  // Entrepreneurship
  {
    id: 7,
    title: "Tech Startup Founder",
    category: "entrepreneurship",
    stream: "any",
    education: "Any Degree + Skills",
    salaryRange: "Variable (₹0 - ₹10,00,000+/month)",
    growth: "high",
    description: "Create innovative technology solutions and build scalable businesses.",
    skills: ["Innovation", "Leadership", "Risk Taking", "Technical Knowledge"],
    opportunities: 1000
  },
  {
    id: 8,
    title: "E-commerce Business Owner",
    category: "entrepreneurship",
    stream: "commerce",
    education: "Any Degree",
    salaryRange: "₹20,000 - ₹5,00,000/month",
    growth: "high",
    description: "Sell products online through platforms like Amazon, Flipkart, or own website.",
    skills: ["Digital Marketing", "Supply Chain", "Customer Service", "Analytics"],
    opportunities: 5000
  }
];

const categories = ["All Categories", "Government", "Private", "Entrepreneurship"];
const streams = ["All Streams", "Science", "Commerce", "Arts", "Vocational", "Any Stream"];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStream, setSelectedStream] = useState('All Streams');
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || 
                           career.category === selectedCategory.toLowerCase();
    const matchesStream = selectedStream === 'All Streams' || 
                         career.stream === selectedStream.toLowerCase() ||
                         career.stream === 'any';
    
    return matchesSearch && matchesCategory && matchesStream;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'government': return <Building className="w-5 h-5" />;
      case 'private': return <Briefcase className="w-5 h-5" />;
      case 'entrepreneurship': return <TrendingUp className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'government': return 'bg-blue-100 text-blue-800';
      case 'private': return 'bg-green-100 text-green-800';
      case 'entrepreneurship': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  if (selectedCareer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 pb-20 md:pb-8">
        {/* Header */}
        <header className="bg-white shadow-lg border-b-2 border-primary-200">
          <div className="mobile-container">
            <div className="flex items-center justify-between h-16">
              <button 
                onClick={() => setSelectedCareer(null)}
                className="flex items-center text-primary-700 hover:text-primary-800"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-semibold">Back</span>
              </button>
              <h1 className="text-lg font-bold text-neutral-800">Career Details</h1>
              <div className="w-20"></div>
            </div>
          </div>
        </header>

        {/* Career Details */}
        <div className="mobile-container py-8">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-neutral-800 mb-2">{selectedCareer.title}</h2>
                <div className="flex items-center space-x-4 mb-3">
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium capitalize ${getCategoryColor(selectedCareer.category)}`}>
                    {getCategoryIcon(selectedCareer.category)}
                    <span className="ml-1">{selectedCareer.category}</span>
                  </span>
                  <div className="flex items-center text-neutral-600">
                    <TrendingUp className={`w-4 h-4 mr-1 ${getGrowthColor(selectedCareer.growth)}`} />
                    <span className="text-sm capitalize">{selectedCareer.growth} Growth</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{selectedCareer.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wide">Salary Range</span>
                <p className="font-semibold text-neutral-800">{selectedCareer.salaryRange}</p>
              </div>
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wide">Education Required</span>
                <p className="font-semibold text-neutral-800">{selectedCareer.education}</p>
              </div>
            </div>
          </div>

          {/* Skills Required */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {selectedCareer.skills.map(skill => (
                <span key={skill} className="bg-primary-100 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Exams/Companies */}
          {selectedCareer.exams && (
            <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-4">Required Exams</h3>
              <div className="space-y-2">
                {selectedCareer.exams.map(exam => (
                  <div key={exam} className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="font-medium text-blue-800">{exam}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedCareer.companies && (
            <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-4">Top Employers</h3>
              <div className="space-y-2">
                {selectedCareer.companies.map(company => (
                  <div key={company} className="flex items-center p-3 bg-green-50 rounded-lg">
                    <Building className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-medium text-green-800">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Opportunities */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">Career Opportunities</h3>
            <div className="flex items-center">
              <Users className="w-8 h-8 text-primary-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-neutral-800">{selectedCareer.opportunities.toLocaleString()}+</p>
                <p className="text-sm text-neutral-600">Job openings annually in India</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/colleges"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Find Relevant Colleges
            </Link>
            
            <Link 
              href="/timeline"
              className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-primary-200 hover:border-primary-300 flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Important Dates
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-primary-700 hover:text-primary-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">Back</span>
            </Link>
            <h1 className="text-lg font-bold text-neutral-800">Career Paths</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mobile-container py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {streams.map(stream => (
                <option key={stream} value={stream}>{stream}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mobile-container py-4">
        <p className="text-sm text-neutral-600">
          Found {filteredCareers.length} career paths
        </p>
      </div>

      {/* Careers List */}
      <div className="mobile-container space-y-4">
        {filteredCareers.map(career => (
          <div 
            key={career.id} 
            className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 cursor-pointer hover:shadow-medium transition-shadow"
            onClick={() => setSelectedCareer(career)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-800 mb-1">{career.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{career.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-neutral-400 ml-2" />
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-lg text-sm font-medium capitalize ${getCategoryColor(career.category)}`}>
                {career.category}
              </span>
              <div className="flex items-center text-neutral-600">
                <DollarSign className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{career.salaryRange.split(' - ')[0]}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-600">
              <span>{career.education}</span>
              <div className="flex items-center">
                <TrendingUp className={`w-4 h-4 mr-1 ${getGrowthColor(career.growth)}`} />
                <span className="capitalize">{career.growth} Growth</span>
              </div>
            </div>
          </div>
        ))}

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-neutral-600 mb-2">No careers found</h3>
            <p className="text-neutral-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
