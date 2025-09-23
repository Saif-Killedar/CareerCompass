'use client';

import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Clock, Star, ArrowRight, BookOpen, Briefcase, Trophy } from 'lucide-react';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'education' | 'skill' | 'experience' | 'certification' | 'milestone';
  status: 'completed' | 'current' | 'upcoming' | 'optional';
  requirements?: string[];
  outcomes?: string[];
  resources?: {
    title: string;
    type: 'course' | 'book' | 'website' | 'college';
    url?: string;
  }[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
}

interface CareerPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  popularity: number;
  steps: RoadmapStep[];
  totalDuration: string;
  averageSalary?: {
    min: number;
    max: number;
    currency: string;
  };
}

interface CareerRoadmapProps {
  careerPaths: CareerPath[];
  selectedPathId?: string;
  onPathSelect?: (pathId: string) => void;
  onStepClick?: (step: RoadmapStep) => void;
  showProgress?: boolean;
}

export default function CareerRoadmap({
  careerPaths,
  selectedPathId,
  onPathSelect,
  onStepClick,
  showProgress = true
}: CareerRoadmapProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [expandedPath, setExpandedPath] = useState<string | null>(selectedPathId || null);

  const selectedPath = careerPaths.find(path => path.id === expandedPath);

  const getStepIcon = (type: RoadmapStep['type'], status: RoadmapStep['status']) => {
    const iconClass = `w-6 h-6 ${
      status === 'completed' ? 'text-green-500' :
      status === 'current' ? 'text-primary-600' :
      status === 'upcoming' ? 'text-neutral-400' :
      'text-neutral-300'
    }`;

    switch (type) {
      case 'education':
        return <BookOpen className={iconClass} />;
      case 'skill':
        return <Star className={iconClass} />;
      case 'experience':
        return <Briefcase className={iconClass} />;
      case 'certification':
        return <Trophy className={iconClass} />;
      case 'milestone':
        return <CheckCircle className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
    }
  };

  const getStatusColor = (status: RoadmapStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'current':
        return 'bg-primary-100 border-primary-300 text-primary-800';
      case 'upcoming':
        return 'bg-neutral-100 border-neutral-300 text-neutral-600';
      case 'optional':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default:
        return 'bg-neutral-100 border-neutral-300 text-neutral-600';
    }
  };

  const getDifficultyColor = (difficulty: CareerPath['difficulty']) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  const formatSalary = (salary: { min: number; max: number; currency: string }) => {
    return `${salary.currency}${salary.min.toLocaleString()} - ${salary.currency}${salary.max.toLocaleString()}`;
  };

  const calculateProgress = (steps: RoadmapStep[]) => {
    const completed = steps.filter(step => step.status === 'completed').length;
    return Math.round((completed / steps.length) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Career Path Selection */}
      {!selectedPath && (
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Choose Your Career Path</h2>
          {careerPaths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6 cursor-pointer hover:shadow-medium transition-all duration-200"
              onClick={() => {
                setExpandedPath(path.id);
                onPathSelect?.(path.id);
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{path.title}</h3>
                  <p className="text-neutral-600 mb-3">{path.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(path.difficulty)}`}>
                      {path.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {path.totalDuration}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {path.popularity}% popularity
                    </span>
                  </div>

                  {path.averageSalary && (
                    <div className="text-sm text-neutral-600">
                      Average Salary: <span className="font-semibold text-green-600">
                        {formatSalary(path.averageSalary)}
                      </span>
                    </div>
                  )}
                </div>
                
                <ChevronRight className="w-6 h-6 text-neutral-400 ml-4" />
              </div>

              {showProgress && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-700">Progress</span>
                    <span className="text-sm text-neutral-600">{calculateProgress(path.steps)}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(path.steps)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Selected Path Roadmap */}
      {selectedPath && (
        <div className="space-y-6">
          {/* Path Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
            <button
              onClick={() => setExpandedPath(null)}
              className="text-primary-200 hover:text-white mb-4 flex items-center"
            >
              ← Back to all paths
            </button>
            
            <h2 className="text-2xl font-bold mb-2">{selectedPath.title}</h2>
            <p className="text-primary-100 mb-4">{selectedPath.description}</p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {selectedPath.difficulty}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {selectedPath.totalDuration}
              </span>
              {selectedPath.averageSalary && (
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {formatSalary(selectedPath.averageSalary)}
                </span>
              )}
            </div>

            {showProgress && (
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-100">Your Progress</span>
                  <span className="text-white font-semibold">{calculateProgress(selectedPath.steps)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-300"
                    style={{ width: `${calculateProgress(selectedPath.steps)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Roadmap Steps */}
          <div className="space-y-4">
            {selectedPath.steps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white rounded-2xl shadow-soft border-2 transition-all duration-200 cursor-pointer ${
                  activeStep === step.id ? 'border-primary-300 shadow-medium' : 'border-neutral-200 hover:border-primary-200'
                } ${getStatusColor(step.status)}`}
                onClick={() => {
                  setActiveStep(activeStep === step.id ? null : step.id);
                  onStepClick?.(step);
                }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'current' ? 'bg-primary-600' :
                        'bg-neutral-300'
                      }`}>
                        {getStepIcon(step.type, step.status)}
                      </div>
                      {index < selectedPath.steps.length - 1 && (
                        <div className="w-0.5 h-8 bg-neutral-300 mt-2" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-neutral-800">{step.title}</h3>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-sm text-neutral-500">{step.duration}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(step.status)}`}>
                            {step.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-neutral-600 mb-3">{step.description}</p>

                      {step.salary && (
                        <div className="text-sm text-green-600 font-semibold mb-3">
                          Expected Salary: {formatSalary(step.salary)}
                        </div>
                      )}

                      {/* Expanded Content */}
                      {activeStep === step.id && (
                        <div className="mt-4 space-y-4 border-t border-neutral-200 pt-4">
                          {/* Requirements */}
                          {step.requirements && step.requirements.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-2">Requirements:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600">
                                {step.requirements.map((req, idx) => (
                                  <li key={idx}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Outcomes */}
                          {step.outcomes && step.outcomes.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-2">What you'll gain:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600">
                                {step.outcomes.map((outcome, idx) => (
                                  <li key={idx}>{outcome}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Resources */}
                          {step.resources && step.resources.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-neutral-800 mb-2">Recommended Resources:</h4>
                              <div className="grid gap-2">
                                {step.resources.map((resource, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div>
                                      <span className="font-medium text-neutral-800">{resource.title}</span>
                                      <span className="text-sm text-neutral-500 ml-2">({resource.type})</span>
                                    </div>
                                    {resource.url && (
                                      <ArrowRight className="w-4 h-4 text-primary-600" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Action Button */}
                          <div className="flex justify-end">
                            <button className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                              step.status === 'completed' ? 'bg-green-100 text-green-800' :
                              step.status === 'current' ? 'bg-primary-600 hover:bg-primary-700 text-white' :
                              'bg-neutral-200 hover:bg-neutral-300 text-neutral-700'
                            }`}>
                              {step.status === 'completed' ? 'Completed' :
                               step.status === 'current' ? 'Continue' :
                               'Start'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
