'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, ArrowLeft, CheckCircle, User, Target, BookOpen } from 'lucide-react';

export default function SignOutPage() {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signedOut, setSignedOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    
    try {
      // Simulate sign out process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear user data from localStorage/sessionStorage
      localStorage.removeItem('user');
      sessionStorage.clear();
      
      setSignedOut(true);
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
      
    } catch (error) {
      console.error('Sign out failed:', error);
      setIsSigningOut(false);
    }
  };

  if (signedOut) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-neutral-800 mb-2">Successfully Signed Out</h1>
            <p className="text-neutral-600 mb-6">
              You have been safely signed out of your CareerCompass account.
            </p>
            <p className="text-sm text-neutral-500">
              Redirecting you to the home page...
            </p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
            >
              Go to Home
            </Link>
            
            <Link 
              href="/login"
              className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-primary-200 hover:border-primary-300 flex items-center justify-center"
            >
              Sign In Again
            </Link>
          </div>

          {/* Motivational Quote */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Knowledge Is Power</h3>
              <p className="text-primary-100 text-sm">
                "Your education is a dress rehearsal for a life that is yours to lead."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/profile" className="flex items-center text-primary-700 hover:text-primary-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">Back to Profile</span>
            </Link>
            <h1 className="text-lg font-bold text-neutral-800">Sign Out</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <div className="mobile-container py-8">
        {/* Sign Out Confirmation */}
        <div className="max-w-md mx-auto">
          {/* Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">Sign Out Confirmation</h2>
            <p className="text-neutral-600">
              Are you sure you want to sign out of your CareerCompass account?
            </p>
          </div>

          {/* User Info Reminder */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">You'll lose access to:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-neutral-700">Your personalized profile and progress</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-neutral-700">Saved career quiz results and recommendations</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-neutral-700">Saved colleges and application tracking</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
            >
              {isSigningOut ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing Out...
                </>
              ) : (
                <>
                  <LogOut className="w-5 h-5 mr-2" />
                  Yes, Sign Me Out
                </>
              )}
            </button>
            
            <Link 
              href="/profile"
              className="w-full bg-white hover:bg-neutral-50 text-neutral-700 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-neutral-200 hover:border-neutral-300 flex items-center justify-center"
            >
              Cancel, Keep Me Signed In
            </Link>
          </div>

          {/* Security Note */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Security Tip</h4>
            <p className="text-blue-700 text-sm">
              Always sign out when using CareerCompass on shared or public devices to protect your personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
