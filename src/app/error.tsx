'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Target } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-800 mb-2">Oops! Something went wrong</h1>
          <p className="text-neutral-600 mb-4">
            We encountered an unexpected error. Don't worry, your career journey doesn't stop here!
          </p>
          
          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
              <p className="text-sm text-red-700 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={reset}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <Link 
            href="/"
            className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-primary-200 hover:border-primary-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Home
          </Link>
        </div>

        {/* Alternative Actions */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Continue Your Journey</h3>
          <div className="space-y-3">
            <Link 
              href="/quiz"
              className="flex items-center p-3 hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Target className="w-5 h-5 text-primary-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-neutral-800">Take Career Quiz</div>
                <div className="text-sm text-neutral-600">Discover your ideal career path</div>
              </div>
            </Link>
            
            <Link 
              href="/colleges"
              className="flex items-center p-3 hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Home className="w-5 h-5 text-primary-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-neutral-800">Browse Colleges</div>
                <div className="text-sm text-neutral-600">Find government colleges</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Support Message */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-primary-100 text-sm">
              If this problem persists, please contact our support team. 
              We're here to ensure your career guidance experience is smooth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
