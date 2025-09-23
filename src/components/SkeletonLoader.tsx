'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave';
}

export function Skeleton({ 
  className = '', 
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const baseClasses = `bg-neutral-200 ${animation === 'pulse' ? 'animate-pulse' : 'animate-wave'}`;
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style = {
    width: width || undefined,
    height: height || undefined
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton variant="circular" className="w-10 h-10" />
      </div>
      <Skeleton className="h-8 w-1/3 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  );
}

export function CollegeSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <Skeleton className="h-6 w-4/5 mb-2" />
          <Skeleton className="h-4 w-2/3 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      
      <div className="mb-4">
        <Skeleton className="h-4 w-24 mb-2" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-lg" />
          <Skeleton className="h-6 w-18 rounded-lg" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Skeleton className="h-3 w-16 mb-1" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div>
          <Skeleton className="h-3 w-16 mb-1" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      
      <Skeleton className="h-10 w-full rounded-xl" />
    </div>
  );
}

export function QuizSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-6 animate-pulse">
      <div className="text-center mb-8">
        <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-4" />
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
      </div>
      
      <div className="mb-6">
        <Skeleton className="h-6 w-full mb-6" />
        
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center p-4 border-2 border-neutral-200 rounded-xl">
              <Skeleton variant="circular" className="w-5 h-5 mr-3" />
              <Skeleton className="h-4 flex-1" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between space-x-4">
        <Skeleton className="h-12 w-24 rounded-xl" />
        <Skeleton className="h-12 w-24 rounded-xl" />
      </div>
    </div>
  );
}

export function ListSkeleton({ 
  items = 5, 
  type = 'card' 
}: { 
  items?: number; 
  type?: 'card' | 'college' | 'quiz' 
}) {
  const SkeletonComponent = {
    card: CardSkeleton,
    college: CollegeSkeleton,
    quiz: QuizSkeleton
  }[type];

  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </div>
  );
}

interface PageSkeletonProps {
  title?: boolean;
  filters?: boolean;
  list?: boolean;
  listItems?: number;
  listType?: 'card' | 'college' | 'quiz';
}

export function PageSkeleton({ 
  title = true,
  filters = false,
  list = true,
  listItems = 5,
  listType = 'card'
}: PageSkeletonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 mobile-safe-bottom">
      {/* Header Skeleton */}
      <div className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="mobile-container py-8">
        {title && (
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        )}

        {filters && (
          <div className="bg-white border-b border-neutral-200 mb-6">
            <div className="p-4">
              <Skeleton className="h-10 w-full mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        )}

        {list && (
          <ListSkeleton items={listItems} type={listType} />
        )}
      </div>
    </div>
  );
}
