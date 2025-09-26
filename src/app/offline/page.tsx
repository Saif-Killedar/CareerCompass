'use client'

import { useEffect, useState } from 'react'
import { Wifi, WifiOff, RefreshCw, Home, BookOpen, Users } from 'lucide-react'
import Link from 'next/link'

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true)
  const [isRetrying, setIsRetrying] = useState(false)

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine)

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = async () => {
    setIsRetrying(true)
    
    try {
      // Try to fetch the homepage to check connectivity
      const response = await fetch('/', { cache: 'no-cache' })
      if (response.ok) {
        // If successful, redirect to home
        window.location.href = '/'
      }
    } catch (error) {
      console.log('Still offline')
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Status Icon */}
        <div className="mb-6">
          {isOnline ? (
            <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-10 h-10 text-success-600" />
            </div>
          ) : (
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <WifiOff className="w-10 h-10 text-neutral-500" />
            </div>
          )}
        </div>

        {/* Status Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-800 mb-2">
            {isOnline ? 'Connection Restored!' : 'You\'re Offline'}
          </h1>
          <p className="text-neutral-600">
            {isOnline 
              ? 'Great! Your internet connection is back. You can now access all features.'
              : 'No internet connection detected. You can still access some features offline.'
            }
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          {isOnline ? (
            <Link 
              href="/"
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          ) : (
            <button
              onClick={handleRetry}
              disabled={isRetrying}
              className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-5 h-5 ${isRetrying ? 'animate-spin' : ''}`} />
              {isRetrying ? 'Checking...' : 'Try Again'}
            </button>
          )}
        </div>

        {/* Offline Features */}
        {!isOnline && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-neutral-800 mb-4">
              Available Offline
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <Link 
                href="/quiz"
                className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-primary-600" />
                <div className="text-left">
                  <div className="font-medium text-neutral-800">Career Quiz</div>
                  <div className="text-sm text-neutral-600">Take the quiz offline</div>
                </div>
              </Link>
              
              <Link 
                href="/careers"
                className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <Users className="w-5 h-5 text-primary-600" />
                <div className="text-left">
                  <div className="font-medium text-neutral-800">Career Paths</div>
                  <div className="text-sm text-neutral-600">Browse cached careers</div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Connection Status */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-success-500' : 'bg-neutral-400'}`}></div>
            <span className="text-neutral-600">
              {isOnline ? 'Connected' : 'Offline Mode'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
