'use client'

import { useState } from 'react'
import { Bell, BellRing, Award, Calendar, DollarSign, Users, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface Scholarship {
  id: string
  title: string
  provider: string
  amount: string
  deadline: string
  eligibility: string[]
  category: 'government' | 'merit' | 'need-based' | 'minority' | 'jk-special'
  status: 'new' | 'deadline-soon' | 'applied' | 'expired'
  description: string
  location: string
}

const mockScholarships: Scholarship[] = [
  {
    id: '1',
    title: 'J&K Merit Scholarship 2024',
    provider: 'Government of J&K',
    amount: '₹50,000/year',
    deadline: '2024-10-15',
    eligibility: ['12th Pass', 'Minimum 75%', 'J&K Domicile'],
    category: 'jk-special',
    status: 'new',
    description: 'Merit-based scholarship for students pursuing higher education',
    location: 'Jammu & Kashmir'
  },
  {
    id: '2',
    title: 'National Scholarship Portal - Minority',
    provider: 'Ministry of Minority Affairs',
    amount: '₹25,000/year',
    deadline: '2024-09-30',
    eligibility: ['Minority Community', 'Family Income < 2 Lakh', 'Class 10th Pass'],
    category: 'minority',
    status: 'deadline-soon',
    description: 'Financial assistance for minority community students',
    location: 'All India'
  },
  {
    id: '3',
    title: 'PM Scholarship Scheme',
    provider: 'Ministry of Defence',
    amount: '₹30,000/year',
    deadline: '2024-11-20',
    eligibility: ['Armed Forces Family', 'Technical/Professional Course'],
    category: 'government',
    status: 'new',
    description: 'For children of armed forces personnel',
    location: 'All India'
  },
  {
    id: '4',
    title: 'Kashmir University Merit Award',
    provider: 'University of Kashmir',
    amount: '₹15,000/year',
    deadline: '2024-08-15',
    eligibility: ['University Student', 'CGPA > 8.0'],
    category: 'merit',
    status: 'expired',
    description: 'University-specific merit scholarship',
    location: 'Kashmir'
  }
]

export default function ScholarshipAlerts() {
  const [notifications, setNotifications] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [scholarships] = useState(mockScholarships)

  const getStatusColor = (status: Scholarship['status']) => {
    switch (status) {
      case 'new': return 'bg-success-100 text-success-800 border-success-200'
      case 'deadline-soon': return 'bg-warning-100 text-warning-800 border-warning-200'
      case 'applied': return 'bg-primary-100 text-primary-800 border-primary-200'
      case 'expired': return 'bg-neutral-100 text-neutral-600 border-neutral-200'
      default: return 'bg-neutral-100 text-neutral-600 border-neutral-200'
    }
  }

  const getCategoryIcon = (category: Scholarship['category']) => {
    switch (category) {
      case 'government': return <Award className="w-4 h-4" />
      case 'merit': return <Users className="w-4 h-4" />
      case 'need-based': return <DollarSign className="w-4 h-4" />
      case 'minority': return <Users className="w-4 h-4" />
      case 'jk-special': return <MapPin className="w-4 h-4" />
      default: return <Award className="w-4 h-4" />
    }
  }

  const filteredScholarships = selectedCategory === 'all' 
    ? scholarships 
    : scholarships.filter(s => s.category === selectedCategory)

  const activeScholarships = scholarships.filter(s => s.status === 'new' || s.status === 'deadline-soon').length

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            {notifications ? (
              <BellRing className="w-6 h-6 text-primary-600" />
            ) : (
              <Bell className="w-6 h-6 text-neutral-400" />
            )}
            {activeScholarships > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-danger-500 text-white text-xs rounded-full flex items-center justify-center">
                {activeScholarships}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-800">Scholarship Alerts</h2>
            <p className="text-sm text-neutral-600">
              {activeScholarships} new opportunities available
            </p>
          </div>
        </div>

        <button
          onClick={() => setNotifications(!notifications)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            notifications 
              ? 'bg-primary-600 text-white hover:bg-primary-700' 
              : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
          }`}
        >
          {notifications ? 'Notifications On' : 'Enable Alerts'}
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'all', label: 'All Scholarships' },
          { key: 'jk-special', label: 'J&K Special' },
          { key: 'government', label: 'Government' },
          { key: 'merit', label: 'Merit-Based' },
          { key: 'minority', label: 'Minority' },
          { key: 'need-based', label: 'Need-Based' }
        ].map(category => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.key
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Scholarships List - Horizontal Swappable */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {filteredScholarships.map(scholarship => (
          <div
            key={scholarship.id}
            className={`flex-shrink-0 w-80 border rounded-xl p-4 transition-all hover:shadow-md snap-start ${
              scholarship.status === 'expired' ? 'opacity-60' : ''
            }`}
          >
            {/* Scholarship Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  {getCategoryIcon(scholarship.category)}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">
                    {scholarship.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{scholarship.provider}</p>
                </div>
              </div>
              
              <div className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(scholarship.status)}`}>
                {scholarship.status === 'new' && 'New'}
                {scholarship.status === 'deadline-soon' && 'Deadline Soon'}
                {scholarship.status === 'applied' && 'Applied'}
                {scholarship.status === 'expired' && 'Expired'}
              </div>
            </div>

            {/* Scholarship Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <DollarSign className="w-4 h-4" />
                <span>{scholarship.amount}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Calendar className="w-4 h-4" />
                <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="w-4 h-4" />
                <span>{scholarship.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Clock className="w-4 h-4" />
                <span>
                  {Math.ceil((new Date(scholarship.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 mb-3">{scholarship.description}</p>

            {/* Eligibility */}
            <div className="mb-4">
              <p className="text-xs font-medium text-neutral-700 mb-2">Eligibility:</p>
              <div className="flex flex-wrap gap-1">
                {scholarship.eligibility.map((criteria, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-md"
                  >
                    {criteria}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {scholarship.status !== 'expired' && scholarship.status !== 'applied' && (
                <>
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors">
                    Save
                  </button>
                </>
              )}
              {scholarship.status === 'applied' && (
                <div className="flex items-center gap-2 text-success-600 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Application Submitted
                </div>
              )}
              {scholarship.status === 'expired' && (
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Application Deadline Passed
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Alert Settings */}
      {notifications && (
        <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <div className="flex items-center gap-2 mb-2">
            <BellRing className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-800">Alert Preferences</span>
          </div>
          <p className="text-xs text-primary-700 mb-3">
            You'll receive notifications for scholarships matching your profile
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>New scholarships</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Deadline reminders</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>Status updates</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Weekly digest</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}
