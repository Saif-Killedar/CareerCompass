'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  User, 
  BookOpen, 
  Target, 
  TrendingUp, 
  MapPin, 
  GraduationCap, 
  Clock, 
  Star, 
  Award, 
  Brain, 
  Lightbulb,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Play,
  FileText,
  Calendar,
  BarChart3,
  PieChart,
  Zap,
  Shield,
  DollarSign,
  Users,
  Globe,
  Bookmark,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react';

interface StudentProfile {
  name: string;
  class: string;
  stream: string;
  location: string;
  interests: string[];
  academicPerformance: string;
  careerGoals: string[];
  constraints: string[];
  completedAssessment: boolean;
}

const mockStudent: StudentProfile = {
  name: "Arjun Kumar",
  class: "12th",
  stream: "Science",
  location: "Srinagar, J&K",
  interests: ["Technology", "Medicine", "Research"],
  academicPerformance: "Good",
  careerGoals: ["Engineering", "Medical"],
  constraints: ["Financial", "Location"],
  completedAssessment: true
};

const personalizedRecommendations = {
  courses: [
    {
      title: "B.Tech Computer Science",
      institution: "NIT Srinagar",
      match: 95,
      reason: "Perfect match for your tech interests and local preference",
      fees: "Government subsidized",
      duration: "4 years"
    },
    {
      title: "MBBS",
      institution: "Government Medical College Srinagar",
      match: 88,
      reason: "Aligns with medical interests, excellent local option",
      fees: "₹50,000/year",
      duration: "5.5 years"
    },
    {
      title: "B.Sc Physics Honors",
      institution: "University of Kashmir",
      match: 82,
      reason: "Strong foundation for research career",
      fees: "₹15,000/year",
      duration: "3 years"
    }
  ],
  careers: [
    {
      title: "Software Engineer",
      growth: "High",
      salary: "₹8-25 LPA",
      demand: "Very High",
      localOpportunities: "Growing IT sector in Srinagar"
    },
    {
      title: "Medical Doctor",
      growth: "Stable",
      salary: "₹10-50 LPA",
      demand: "High",
      localOpportunities: "High demand in J&K healthcare"
    },
    {
      title: "Research Scientist",
      growth: "Moderate",
      salary: "₹6-20 LPA",
      demand: "Moderate",
      localOpportunities: "Universities and research institutes"
    }
  ],
  resources: [
    {
      title: "JEE Main Preparation",
      type: "Course",
      provider: "Khan Academy",
      relevance: "Essential for engineering admission",
      duration: "6 months"
    },
    {
      title: "NEET Biology Masterclass",
      type: "Video Series",
      provider: "Unacademy",
      relevance: "Medical entrance preparation",
      duration: "4 months"
    },
    {
      title: "Programming Fundamentals",
      type: "Interactive Course",
      provider: "Codecademy",
      relevance: "Foundation for tech career",
      duration: "3 months"
    }
  ]
};

export default function PersonalizedDashboard() {
  const [student] = useState(mockStudent);
  const [activeTab, setActiveTab] = useState('recommendations');

  return (
    <div className="min-h-screen bg-neutral-50 pb-20 md:pb-8">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="mobile-container">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-lg font-bold text-neutral-800">Career Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="mobile-container py-6 space-y-6">
        {/* Professional Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{student.name}</h2>
                  <p className="text-primary-100 text-sm">{student.class} {student.stream} Student</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-primary-200 text-xs">Profile Match</div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-center">
              {/* Custom Pie Chart */}
              <div className="relative w-40 h-40">
                {/* SVG Pie Chart */}
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="8"
                  />
                  
                  {/* Courses Segment (33.33% - Green) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="8"
                    strokeDasharray="83.78 251.33"
                    strokeDashoffset="0"
                    className="transition-all duration-1000 ease-out"
                  />
                  
                  {/* Career Paths Segment (33.33% - Blue) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray="83.78 251.33"
                    strokeDashoffset="-83.78"
                    className="transition-all duration-1000 ease-out delay-300"
                  />
                  
                  {/* Learning Resources Segment (33.33% - Purple) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="8"
                    strokeDasharray="83.78 251.33"
                    strokeDashoffset="-167.56"
                    className="transition-all duration-1000 ease-out delay-600"
                  />
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-neutral-800">9</div>
                  <div className="text-xs text-neutral-500">Total Options</div>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-neutral-700">{personalizedRecommendations.courses.length}</span>
                </div>
                <div className="text-xs text-neutral-500">Matched Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-neutral-700">{personalizedRecommendations.careers.length}</span>
                </div>
                <div className="text-xs text-neutral-500">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-neutral-700">{personalizedRecommendations.resources.length}</span>
                </div>
                <div className="text-xs text-neutral-500">Learning Resources</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-neutral-800">Your Progress</h3>
            <span className="text-sm text-neutral-500">Swipe to explore</span>
          </div>
          
          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex space-x-4 pb-2">
              {/* Career Assessment Card */}
              <div className="flex-shrink-0 w-72 p-5 bg-green-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-neutral-800 mb-1">Career Assessment</div>
                    <div className="text-sm text-neutral-500">Completed with 95% accuracy</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">Complete</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-green-600">Accuracy</div>
                  </div>
                </div>
              </div>
              
              {/* Academic Analysis Card */}
              <div className="flex-shrink-0 w-72 p-5 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-neutral-800 mb-1">Academic Analysis</div>
                    <div className="text-sm text-neutral-500">Performance review completed</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm bg-blue-100 px-3 py-1 rounded-full">Complete</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">A+</div>
                    <div className="text-xs text-blue-600">Grade</div>
                  </div>
                </div>
              </div>
              
              {/* Aptitude Test Card */}
              <div className="flex-shrink-0 w-72 p-5 bg-orange-50 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-neutral-800 mb-1">Aptitude Test</div>
                    <div className="text-sm text-neutral-500">Enhance your recommendations</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/quiz" className="text-orange-600 font-semibold text-sm bg-orange-100 px-3 py-1 rounded-full hover:bg-orange-200 transition-colors">
                    Take Test
                  </Link>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">?</div>
                    <div className="text-xs text-orange-600">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-2">
          <div className="grid grid-cols-3 gap-1">
            <button
              onClick={() => setActiveTab('recommendations')}
              className={`flex items-center justify-center py-3 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'recommendations' 
                  ? 'bg-primary-600 text-white shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
              }`}
            >
              Recommended
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center justify-center py-3 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'analytics' 
                  ? 'bg-primary-600 text-white shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex items-center justify-center py-3 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'resources' 
                  ? 'bg-primary-600 text-white shadow-sm' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
              }`}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Recommendations Tab */}
        {activeTab === 'recommendations' && (
          <div className="space-y-6">
            {/* Top Course Recommendations */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-800">Recommended Courses</h3>
                <span className="text-sm text-neutral-500">Swipe to explore</span>
              </div>
              
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                <div className="flex space-x-4 pb-2">
                  {personalizedRecommendations.courses.map((course, index) => (
                    <div key={index} className="flex-shrink-0 w-80 border border-neutral-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-neutral-800 mb-1">{course.title}</h4>
                          <p className="text-neutral-600 font-medium mb-2">{course.institution}</p>
                          <p className="text-sm text-neutral-500">{course.reason}</p>
                        </div>
                        <div className="ml-4 text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            course.match >= 90 ? 'bg-green-100 text-green-700' :
                            course.match >= 80 ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {course.match}% Match
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 pt-3 border-t border-neutral-100">
                        <div className="grid grid-cols-2 gap-2 text-sm text-neutral-600">
                          <div><strong>Fees:</strong> {course.fees}</div>
                          <div><strong>Duration:</strong> {course.duration}</div>
                        </div>
                        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-800">Career Opportunities</h3>
                <span className="text-sm text-neutral-500">Swipe to explore</span>
              </div>
              
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                <div className="flex space-x-4 pb-2">
                  {personalizedRecommendations.careers.map((career, index) => (
                    <div key={index} className="flex-shrink-0 w-72 border border-neutral-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-bold text-neutral-800">{career.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          career.growth === 'High' ? 'bg-green-100 text-green-700' :
                          career.growth === 'Stable' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {career.growth} Growth
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-sm text-neutral-500">Salary Range</div>
                          <div className="font-semibold text-neutral-800 text-sm">{career.salary}</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-500">Market Demand</div>
                          <div className="font-semibold text-neutral-800 text-sm">{career.demand}</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <div className="text-sm font-medium text-blue-800 mb-1">Local Opportunities</div>
                        <div className="text-xs text-blue-700">{career.localOpportunities}</div>
                      </div>
                      
                      <button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Explore Career
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Profile Strength */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-6">Profile Strength Analysis</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-800">Academic Performance</div>
                      <div className="text-sm text-neutral-500">Strong foundation in Science stream</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">85%</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-800">Interest Alignment</div>
                      <div className="text-sm text-neutral-500">Technology & Medical fields</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">92%</div>
                    <div className="text-xs text-blue-600">Very High</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-800">Local Opportunities</div>
                      <div className="text-sm text-neutral-500">Available options in J&K</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">78%</div>
                    <div className="text-xs text-orange-600">Good</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Trends */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-6">Market Trends & Insights</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">↑ 23%</div>
                  <div className="text-sm text-neutral-600">Tech Job Growth</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">₹12L</div>
                  <div className="text-sm text-neutral-600">Avg. Starting Salary</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-neutral-600">Placement Rate</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-neutral-600">Top Companies</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            {/* Learning Resources */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-800">Curated Learning Resources</h3>
                <span className="text-sm text-neutral-500">Swipe to explore</span>
              </div>
              
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                <div className="flex space-x-4 pb-2">
                  {personalizedRecommendations.resources.map((resource, index) => (
                    <div key={index} className="flex-shrink-0 w-80 border border-neutral-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-neutral-800 mb-2">{resource.title}</h4>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-sm text-neutral-600 font-medium">{resource.provider}</span>
                            <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">{resource.type}</span>
                          </div>
                          <p className="text-sm text-neutral-500">{resource.relevance}</p>
                        </div>
                        <div className="ml-4 text-right">
                          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                            {resource.duration}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                          <Play className="w-4 h-4 mr-2" />
                          Start Learning
                        </button>
                        <button className="w-full border border-neutral-300 text-neutral-600 hover:bg-neutral-50 py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Preview
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Study Plan */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-800 mb-6">Recommended Study Plan</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm">1</div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-800">Complete Career Assessment</div>
                    <div className="text-sm text-neutral-500">Take our comprehensive aptitude test</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                
                <div className="flex items-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm">2</div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-800">Start JEE Preparation</div>
                    <div className="text-sm text-neutral-500">Begin with Mathematics fundamentals</div>
                  </div>
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                
                <div className="flex items-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="w-8 h-8 bg-neutral-400 text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm">3</div>
                  <div className="flex-1">
                    <div className="font-medium text-neutral-800">Explore Programming</div>
                    <div className="text-sm text-neutral-500">Learn Python basics for tech career</div>
                  </div>
                  <AlertCircle className="w-5 h-5 text-neutral-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
