'use client'

import { useState, useEffect } from 'react'
import { Wifi, WifiOff, CloudOff, RefreshCw } from 'lucide-react'

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)
  const [pendingSync, setPendingSync] = useState(false)

  useEffect(() => {
    // Check initial online status
    setIsOnline(navigator.onLine)

    const handleOnline = () => {
      setIsOnline(true)
      setShowIndicator(true)
      
      // Hide indicator after 3 seconds when back online
      setTimeout(() => setShowIndicator(false), 3000)
      
      // Check for pending sync
      checkPendingSync()
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowIndicator(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Check for pending sync on load
    checkPendingSync()

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const checkPendingSync = async () => {
    try {
      // Check if there's any unsynced data
      if (typeof window !== 'undefined' && 'indexedDB' in window) {
        // This would check your offline storage for unsynced data
        // For now, we'll simulate it
        const hasUnsyncedData = localStorage.getItem('hasUnsyncedData') === 'true'
        setPendingSync(hasUnsyncedData)
      }
    } catch (error) {
      console.error('Error checking pending sync:', error)
    }
  }

  const handleSync = async () => {
    try {
      // Trigger manual sync
      const event = new CustomEvent('manualSync')
      window.dispatchEvent(event)
      
      // Simulate sync completion
      setTimeout(() => {
        setPendingSync(false)
        localStorage.removeItem('hasUnsyncedData')
      }, 2000)
    } catch (error) {
      console.error('Manual sync failed:', error)
    }
  }

  // Don't show if online and no pending sync
  if (isOnline && !pendingSync && !showIndicator) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`
        flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-all duration-300
        ${isOnline 
          ? 'bg-success-100 border border-success-200 text-success-800' 
          : 'bg-warning-100 border border-warning-200 text-warning-800'
        }
      `}>
        {/* Connection Icon */}
        {isOnline ? (
          <Wifi className="w-4 h-4" />
        ) : (
          <WifiOff className="w-4 h-4" />
        )}

        {/* Status Text */}
        <span className="text-sm font-medium">
          {isOnline ? 'Back Online' : 'Offline Mode'}
        </span>

        {/* Pending Sync Indicator */}
        {pendingSync && (
          <>
            <CloudOff className="w-4 h-4 text-warning-600" />
            <button
              onClick={handleSync}
              className="flex items-center gap-1 text-xs bg-white/50 hover:bg-white/70 px-2 py-1 rounded transition-colors"
              title="Sync pending data"
            >
              <RefreshCw className="w-3 h-3" />
              Sync
            </button>
          </>
        )}
      </div>
    </div>
  )
}
