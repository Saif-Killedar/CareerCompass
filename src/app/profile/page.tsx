'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Edit, BookOpen, Target, Calendar, Award, Settings, Bell, HelpCircle, LogOut, MapPin, Phone, Mail, GraduationCap, TrendingUp, Save, X } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  class: string;
  stream: string;
  interests: string[];
  completedQuiz: boolean;
  savedColleges: number;
  applications: number;
}

const mockUser: UserProfile = {
  name: "Arjun Kumar",
  email: "arjun.kumar@email.com",
  phone: "+91-9876543210",
  location: "Srinagar, Jammu & Kashmir",
  class: "12th",
  stream: "Science",
  interests: ["Engineering", "Medical", "Research"],
  completedQuiz: true,
  savedColleges: 5,
  applications: 2
};

const recentActivity = [
  {
    id: 1,
    action: "Completed Career Quiz",
    description: "Recommended stream: Science",
    date: "2 days ago",
    icon: <Target className="w-5 h-5 text-green-600" />
  },
  {
    id: 2,
    action: "Saved College",
    description: "Government Degree College Srinagar",
    date: "3 days ago",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />
  },
  {
    id: 3,
    action: "Applied for Scholarship",
    description: "PMSSS Scholarship Application",
    date: "1 week ago",
    icon: <Award className="w-5 h-5 text-purple-600" />
  }
];

const quickActions = [
  {
    title: "Retake Quiz",
    description: "Update your career preferences",
    icon: <Target className="w-6 h-6 text-primary-600" />,
    link: "/quiz",
    color: "bg-primary-50 hover:bg-primary-100"
  },
  {
    title: "Browse Colleges",
    description: "Find government colleges near you",
    icon: <GraduationCap className="w-6 h-6 text-green-600" />,
    link: "/colleges",
    color: "bg-green-50 hover:bg-green-100"
  },
  {
    title: "Explore Careers",
    description: "Discover career opportunities",
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    link: "/careers",
    color: "bg-purple-50 hover:bg-purple-100"
  },
  {
    title: "Check Timeline",
    description: "View important dates & deadlines",
    icon: <Calendar className="w-6 h-6 text-orange-600" />,
    link: "/timeline",
    color: "bg-orange-50 hover:bg-orange-100"
  }
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [editForm, setEditForm] = useState(mockUser);

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(user);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-primary-600 shadow-lg border-b-2 border-primary-700">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-white hover:text-primary-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Home</span>
            </Link>
            <h1 className="text-lg font-bold text-white">Profile</h1>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleCancel}
                    className="p-2 text-white hover:bg-red-500 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleSave}
                    className="p-2 text-white hover:bg-green-500 rounded-lg transition-colors"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 text-white hover:bg-primary-500 rounded-lg transition-colors"
                >
                  <Edit className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-container py-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
          {/* Profile Header */}
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mr-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full text-xl font-bold text-neutral-800 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Full Name"
                  />
                  <div className="flex space-x-2">
                    <select
                      value={editForm.class}
                      onChange={(e) => handleInputChange('class', e.target.value)}
                      className="flex-1 text-neutral-600 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                    <select
                      value={editForm.stream}
                      onChange={(e) => handleInputChange('stream', e.target.value)}
                      className="flex-1 text-neutral-600 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full text-sm text-neutral-500 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Location"
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-neutral-800 mb-1">{user.name}</h2>
                  <p className="text-neutral-600 mb-1">{user.class} Student • {user.stream} Stream</p>
                  <div className="flex items-center text-neutral-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-neutral-400 mr-3" />
              {isEditing ? (
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 text-neutral-700 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Email Address"
                />
              ) : (
                <span className="text-neutral-700">{user.email}</span>
              )}
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-neutral-400 mr-3" />
              {isEditing ? (
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="flex-1 text-neutral-700 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Phone Number"
                />
              ) : (
                <span className="text-neutral-700">{user.phone}</span>
              )}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-700 mb-2">Career Interests</h3>
            <div className="flex flex-wrap gap-2">
              {user.interests.map(interest => (
                <span key={interest} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-lg text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{user.savedColleges}</div>
              <div className="text-xs text-neutral-600">Saved Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{user.applications}</div>
              <div className="text-xs text-neutral-600">Applications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1</div>
              <div className="text-xs text-neutral-600">Quiz Completed</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.link}
                className={`${action.color} rounded-2xl p-4 transition-colors`}
              >
                <div className="flex flex-col items-center text-center">
                  {action.icon}
                  <h4 className="font-semibold text-neutral-800 mt-2 mb-1">{action.title}</h4>
                  <p className="text-xs text-neutral-600">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Recent Activity</h3>
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start">
                  <div className="mr-3 mt-1">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-800 mb-1">{activity.action}</h4>
                    <p className="text-sm text-neutral-600 mb-1">{activity.description}</p>
                    <span className="text-xs text-neutral-500">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Your Progress</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Target className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-neutral-700">Career Quiz</span>
              </div>
              <span className="text-green-600 font-semibold">Completed</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-neutral-700">College Research</span>
              </div>
              <span className="text-blue-600 font-semibold">In Progress</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-neutral-400 mr-3" />
                <span className="text-neutral-500">Scholarship Applications</span>
              </div>
              <span className="text-neutral-500">Pending</span>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Settings</h3>
          
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-neutral-600 mr-3" />
                <span className="text-neutral-700">Notifications</span>
              </div>
              <span className="text-neutral-400">›</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors">
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-neutral-600 mr-3" />
                <span className="text-neutral-700">Account Settings</span>
              </div>
              <span className="text-neutral-400">›</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-neutral-600 mr-3" />
                <span className="text-neutral-700">Help & Support</span>
              </div>
              <span className="text-neutral-400">›</span>
            </button>
            
            <Link 
              href="/signout"
              className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-colors text-red-600"
            >
              <div className="flex items-center">
                <LogOut className="w-5 h-5 mr-3" />
                <span>Sign Out</span>
              </div>
              <span className="text-red-400">›</span>
            </Link>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-6 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Knowledge Is Power</h3>
            <p className="text-primary-100 text-sm">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
