'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Bell, AlertCircle, CheckCircle, Filter, BookOpen, Award, DollarSign } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  deadline: string;
  category: 'admission' | 'scholarship' | 'exam' | 'result';
  priority: 'high' | 'medium' | 'low';
  status: 'upcoming' | 'ongoing' | 'completed';
  link?: string;
  requirements?: string[];
}

const events: TimelineEvent[] = [
  {
    id: 1,
    title: "J&K Government College Admissions",
    description: "Online application process for undergraduate courses in all government degree colleges",
    date: "March 15, 2024",
    deadline: "April 30, 2024",
    category: "admission",
    priority: "high",
    status: "upcoming",
    requirements: ["12th Pass Certificate", "Domicile Certificate", "Category Certificate (if applicable)"]
  },
  {
    id: 2,
    title: "PMSSS Scholarship Application",
    description: "Prime Minister's Special Scholarship Scheme for J&K students",
    date: "February 1, 2024",
    deadline: "March 31, 2024",
    category: "scholarship",
    priority: "high",
    status: "ongoing",
    requirements: ["12th Pass (60% for General, 55% for Reserved)", "Family Income < ₹8 Lakhs", "Domicile Certificate"]
  },
  {
    id: 3,
    title: "JEE Main 2024 Session 2",
    description: "Joint Entrance Examination for Engineering admissions",
    date: "April 1, 2024",
    deadline: "April 6, 2024",
    category: "exam",
    priority: "high",
    status: "upcoming",
    requirements: ["12th with PCM", "Online Registration", "Application Fee"]
  },
  {
    id: 4,
    title: "NEET UG 2024",
    description: "National Eligibility cum Entrance Test for Medical courses",
    date: "May 5, 2024",
    deadline: "May 5, 2024",
    category: "exam",
    priority: "high",
    status: "upcoming",
    requirements: ["12th with PCB", "Age: 17-25 years", "Online Registration"]
  },
  {
    id: 5,
    title: "J&K Bank PO Recruitment",
    description: "Probationary Officer recruitment in Jammu & Kashmir Bank",
    date: "January 15, 2024",
    deadline: "February 15, 2024",
    category: "exam",
    priority: "medium",
    status: "completed",
    requirements: ["Graduate Degree", "Age: 21-30 years", "Local Domicile"]
  },
  {
    id: 6,
    title: "Post Matric Scholarship",
    description: "Scholarship for SC/ST/OBC students pursuing higher education",
    date: "June 1, 2024",
    deadline: "July 31, 2024",
    category: "scholarship",
    priority: "medium",
    status: "upcoming",
    requirements: ["Category Certificate", "Income Certificate", "Previous Year Marksheet"]
  },
  {
    id: 7,
    title: "CUET UG 2024",
    description: "Common University Entrance Test for undergraduate admissions",
    date: "March 15, 2024",
    deadline: "March 29, 2024",
    category: "exam",
    priority: "medium",
    status: "upcoming",
    requirements: ["12th Pass", "Subject Selection", "Online Registration"]
  },
  {
    id: 8,
    title: "Kashmir University Results",
    description: "Semester examination results for undergraduate courses",
    date: "February 28, 2024",
    deadline: "February 28, 2024",
    category: "result",
    priority: "low",
    status: "completed"
  }
];

const categories = ["All", "Admission", "Scholarship", "Exam", "Result"];
const priorities = ["All", "High", "Medium", "Low"];
const statuses = ["All", "Upcoming", "Ongoing", "Completed"];

export default function TimelinePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory.toLowerCase();
    const matchesPriority = selectedPriority === 'All' || event.priority === selectedPriority.toLowerCase();
    const matchesStatus = selectedStatus === 'All' || event.status === selectedStatus.toLowerCase();
    
    return matchesCategory && matchesPriority && matchesStatus;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'admission': return <BookOpen className="w-4 h-4" />;
      case 'scholarship': return <DollarSign className="w-4 h-4" />;
      case 'exam': return <Award className="w-4 h-4" />;
      case 'result': return <CheckCircle className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'admission': return 'bg-blue-100 text-blue-800';
      case 'scholarship': return 'bg-green-100 text-green-800';
      case 'exam': return 'bg-orange-100 text-orange-800';
      case 'result': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-50';
      case 'ongoing': return 'text-orange-600 bg-orange-50';
      case 'completed': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDaysUntil = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Passed';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

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
            <h1 className="text-lg font-bold text-neutral-800">Important Timeline</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white border-b border-neutral-200">
          <div className="mobile-container py-4">
            <div className="grid grid-cols-3 gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="p-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="p-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mobile-container py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-soft">
            <div className="text-2xl font-bold text-red-600">
              {events.filter(e => e.priority === 'high' && e.status !== 'completed').length}
            </div>
            <div className="text-xs text-neutral-600">High Priority</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-soft">
            <div className="text-2xl font-bold text-orange-600">
              {events.filter(e => e.status === 'ongoing').length}
            </div>
            <div className="text-xs text-neutral-600">Ongoing</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-soft">
            <div className="text-2xl font-bold text-blue-600">
              {events.filter(e => e.status === 'upcoming').length}
            </div>
            <div className="text-xs text-neutral-600">Upcoming</div>
          </div>
        </div>
      </div>

      {/* Timeline Events */}
      <div className="mobile-container">
        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 relative">
              {/* Priority Indicator */}
              {event.priority === 'high' && (
                <div className="absolute top-4 right-4">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
              )}

              {/* Event Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">{event.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{event.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium capitalize ${getCategoryColor(event.category)}`}>
                  {getCategoryIcon(event.category)}
                  <span className="ml-1">{event.category}</span>
                </span>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium capitalize ${getPriorityColor(event.priority)}`}>
                  {event.priority}
                </span>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium capitalize ${getStatusColor(event.status)}`}>
                  {event.status}
                </span>
              </div>

              {/* Date Information */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wide">Event Date</span>
                  <div className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 text-neutral-400 mr-2" />
                    <span className="text-sm font-medium text-neutral-800">{event.date}</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wide">Deadline</span>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 text-neutral-400 mr-2" />
                    <span className="text-sm font-medium text-neutral-800">{event.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Days Until */}
              {event.status !== 'completed' && (
                <div className="mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    getDaysUntil(event.deadline) === 'Today' || getDaysUntil(event.deadline) === 'Tomorrow' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    <Bell className="w-4 h-4 mr-1" />
                    {getDaysUntil(event.deadline)} until deadline
                  </div>
                </div>
              )}

              {/* Requirements */}
              {event.requirements && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {event.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-neutral-600 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              {event.status !== 'completed' && (
                <div className="pt-4 border-t border-neutral-200">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
                    {event.category === 'admission' ? 'Apply Now' : 
                     event.category === 'scholarship' ? 'Apply for Scholarship' :
                     event.category === 'exam' ? 'Register for Exam' : 'Learn More'}
                  </button>
                </div>
              )}
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-600 mb-2">No events found</h3>
              <p className="text-neutral-500">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mobile-container mt-8">
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 text-center">
          <Bell className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-neutral-800 mb-2">Never Miss Important Dates</h3>
          <p className="text-neutral-600 mb-4">Enable notifications to get reminders about deadlines and important events</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
            Enable Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
