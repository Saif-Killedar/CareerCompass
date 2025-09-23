'use client';

import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Users, Clock, MapPin, GraduationCap, Briefcase, Heart, X } from 'lucide-react';

interface UserProfile {
  interests: string[];
  skills: string[];
  location: string;
  educationLevel: string;
  preferredSalaryRange: { min: number; max: number };
  workStyle: 'remote' | 'office' | 'hybrid' | 'any';
  careerGoals: string[];
}

interface Recommendation {
  id: string;
  type: 'career' | 'college' | 'course' | 'scholarship';
  title: string;
  description: string;
  matchScore: number;
  reasons: string[];
  metadata: {
    location?: string;
    salary?: { min: number; max: number };
    duration?: string;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    popularity?: number;
    deadline?: string;
  };
  tags: string[];
  image?: string;
  url?: string;
}

interface RecommendationEngineProps {
  userProfile: UserProfile;
  recommendations: Recommendation[];
  onRecommendationClick?: (recommendation: Recommendation) => void;
  onFeedback?: (recommendationId: string, feedback: 'like' | 'dislike' | 'save') => void;
  showFilters?: boolean;
}

export default function RecommendationEngine({
  userProfile,
  recommendations,
  onRecommendationClick,
  onFeedback,
  showFilters = true
}: RecommendationEngineProps) {
  const [filteredRecommendations, setFilteredRecommendations] = useState<Recommendation[]>(recommendations);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['career', 'college', 'course', 'scholarship']);
  const [minMatchScore, setMinMatchScore] = useState(70);
  const [sortBy, setSortBy] = useState<'matchScore' | 'popularity' | 'salary'>('matchScore');
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set());

  // Filter and sort recommendations
  useEffect(() => {
    let filtered = recommendations.filter(rec => 
      selectedTypes.includes(rec.type) && rec.matchScore >= minMatchScore
    );

    // Sort recommendations
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'matchScore':
          return b.matchScore - a.matchScore;
        case 'popularity':
          return (b.metadata.popularity || 0) - (a.metadata.popularity || 0);
        case 'salary':
          const aSalary = a.metadata.salary ? (a.metadata.salary.min + a.metadata.salary.max) / 2 : 0;
          const bSalary = b.metadata.salary ? (b.metadata.salary.min + b.metadata.salary.max) / 2 : 0;
          return bSalary - aSalary;
        default:
          return b.matchScore - a.matchScore;
      }
    });

    setFilteredRecommendations(filtered);
  }, [recommendations, selectedTypes, minMatchScore, sortBy]);

  const handleFeedback = (recommendationId: string, feedback: 'like' | 'dislike' | 'save') => {
    if (feedback === 'like') {
      setLikedItems(prev => new Set(prev).add(recommendationId));
    } else if (feedback === 'save') {
      setSavedItems(prev => new Set(prev).add(recommendationId));
    }
    onFeedback?.(recommendationId, feedback);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'career':
        return <Briefcase className="w-5 h-5" />;
      case 'college':
        return <GraduationCap className="w-5 h-5" />;
      case 'course':
        return <Star className="w-5 h-5" />;
      case 'scholarship':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'career':
        return 'bg-blue-100 text-blue-800';
      case 'college':
        return 'bg-green-100 text-green-800';
      case 'course':
        return 'bg-purple-100 text-purple-800';
      case 'scholarship':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-neutral-600 bg-neutral-100';
  };

  const formatSalary = (salary: { min: number; max: number }) => {
    return `₹${salary.min.toLocaleString()} - ₹${salary.max.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Personalized Recommendations</h2>
        <p className="text-primary-100 mb-4">
          Based on your interests in {userProfile.interests.slice(0, 3).join(', ')} and more
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
            {filteredRecommendations.length} recommendations
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
            {userProfile.location}
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
            {userProfile.educationLevel}
          </span>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-4">
          <h3 className="font-semibold text-neutral-800 mb-4">Filters & Sorting</h3>
          
          <div className="grid gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Types</label>
              <div className="flex flex-wrap gap-2">
                {['career', 'college', 'course', 'scholarship'].map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedTypes(prev => 
                        prev.includes(type) 
                          ? prev.filter(t => t !== type)
                          : [...prev, type]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedTypes.includes(type)
                        ? getTypeColor(type)
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Match Score Filter */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Minimum Match Score: {minMatchScore}%
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={minMatchScore}
                onChange={(e) => setMinMatchScore(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="matchScore">Match Score</option>
                <option value="popularity">Popularity</option>
                <option value="salary">Salary</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations List */}
      <div className="space-y-4">
        {filteredRecommendations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">No recommendations found</h3>
            <p className="text-neutral-600">Try adjusting your filters to see more results.</p>
          </div>
        ) : (
          filteredRecommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className="bg-white rounded-2xl shadow-soft border border-neutral-200 hover:shadow-medium transition-all duration-200 cursor-pointer"
              onClick={() => onRecommendationClick?.(recommendation)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(recommendation.type)}`}>
                      {getTypeIcon(recommendation.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-800">{recommendation.title}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getMatchScoreColor(recommendation.matchScore)}`}>
                        {recommendation.matchScore}% match
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeedback(recommendation.id, 'like');
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        likedItems.has(recommendation.id)
                          ? 'bg-red-100 text-red-600'
                          : 'text-neutral-400 hover:text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeedback(recommendation.id, 'save');
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        savedItems.has(recommendation.id)
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-neutral-400 hover:text-blue-500 hover:bg-blue-50'
                      }`}
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 mb-4">{recommendation.description}</p>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {recommendation.metadata.location && (
                    <div className="flex items-center text-sm text-neutral-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {recommendation.metadata.location}
                    </div>
                  )}
                  {recommendation.metadata.salary && (
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {formatSalary(recommendation.metadata.salary)}
                    </div>
                  )}
                  {recommendation.metadata.duration && (
                    <div className="flex items-center text-sm text-neutral-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {recommendation.metadata.duration}
                    </div>
                  )}
                  {recommendation.metadata.popularity && (
                    <div className="flex items-center text-sm text-neutral-600">
                      <Users className="w-4 h-4 mr-2" />
                      {recommendation.metadata.popularity}% popularity
                    </div>
                  )}
                </div>

                {/* Why Recommended */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-800 mb-2">Why recommended for you:</h4>
                  <div className="flex flex-wrap gap-1">
                    {recommendation.reasons.slice(0, 3).map((reason, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs">
                        {reason}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {recommendation.tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      {filteredRecommendations.length > 0 && (
        <div className="text-center">
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors">
            Load More Recommendations
          </button>
        </div>
      )}
    </div>
  );
}
