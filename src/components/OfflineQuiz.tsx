'use client'

import { useState, useEffect } from 'react'
import { Wifi, WifiOff, Save, Upload } from 'lucide-react'
import { offlineStorage } from '../utils/offlineStorage'

interface Question {
  id: string
  text: string
  options: string[]
  category: string
}

interface OfflineQuizProps {
  questions: Question[]
  onComplete?: (result: any) => void
}

export default function OfflineQuiz({ questions, onComplete }: OfflineQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isOnline, setIsOnline] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [savedOffline, setSavedOffline] = useState(false)

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestion].id
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      handleQuizComplete()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const calculateResult = () => {
    // Simple career matching logic
    const categories = questions.reduce((acc, question) => {
      const answer = answers[question.id]
      if (answer) {
        acc[question.category] = (acc[question.category] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    const topCategory = Object.entries(categories)
      .sort(([,a], [,b]) => b - a)[0]

    const careerMap: Record<string, string> = {
      'technology': 'Software Engineer',
      'healthcare': 'Doctor',
      'education': 'Teacher',
      'business': 'Business Analyst',
      'creative': 'Designer',
      'science': 'Researcher'
    }

    return careerMap[topCategory?.[0]] || 'General Career Guidance Needed'
  }

  const handleQuizComplete = async () => {
    setIsSaving(true)
    
    const result = calculateResult()
    const quizData = {
      answers,
      result,
      userId: undefined // Will be set when user logs in
    }

    try {
      if (isOnline) {
        // Try to save online first
        try {
          const response = await fetch('/api/quiz/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(quizData)
          })
          
          if (response.ok) {
            onComplete?.(quizData)
            return
          }
        } catch (error) {
          console.log('Online save failed, saving offline')
        }
      }

      // Save offline
      await offlineStorage.saveQuizResult(quizData)
      setSavedOffline(true)
      onComplete?.(quizData)
      
    } catch (error) {
      console.error('Failed to save quiz result:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const syncOfflineData = async () => {
    if (!isOnline) return

    try {
      const unsyncedResults = await offlineStorage.getUnsyncedQuizResults()
      
      for (const result of unsyncedResults) {
        try {
          const response = await fetch('/api/quiz/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              answers: result.answers,
              result: result.result,
              userId: result.userId
            })
          })
          
          if (response.ok) {
            await offlineStorage.markQuizResultSynced(result.id)
          }
        } catch (error) {
          console.error('Failed to sync result:', result.id, error)
        }
      }
    } catch (error) {
      console.error('Failed to sync offline data:', error)
    }
  }

  useEffect(() => {
    if (isOnline) {
      syncOfflineData()
    }
  }, [isOnline])

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (currentQuestion >= questions.length) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {savedOffline ? <Save className="w-8 h-8 text-success-600" /> : <Upload className="w-8 h-8 text-success-600" />}
          </div>
          
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">
            Quiz Completed!
          </h2>
          
          <p className="text-neutral-600 mb-4">
            Your career recommendation: <strong>{calculateResult()}</strong>
          </p>
          
          {savedOffline && (
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 text-warning-800">
                <WifiOff className="w-5 h-5" />
                <span className="font-medium">Saved Offline</span>
              </div>
              <p className="text-sm text-warning-700 mt-1">
                Your results will be synced when you're back online.
              </p>
            </div>
          )}
          
          {isOnline && (
            <button
              onClick={syncOfflineData}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Sync Offline Data
            </button>
          )}
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* Connection Status */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="w-5 h-5 text-success-600" />
          ) : (
            <WifiOff className="w-5 h-5 text-warning-600" />
          )}
          <span className={`text-sm font-medium ${isOnline ? 'text-success-600' : 'text-warning-600'}`}>
            {isOnline ? 'Online' : 'Offline Mode'}
          </span>
        </div>
        
        <div className="text-sm text-neutral-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-neutral-200 rounded-full h-2 mb-8">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-neutral-800 mb-6">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                answers[question.id] === option
                  ? 'border-primary-600 bg-primary-50 text-primary-800'
                  : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 text-neutral-600 hover:text-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={!answers[question.id] || isSaving}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Saving...
            </>
          ) : (
            currentQuestion === questions.length - 1 ? 'Complete Quiz' : 'Next'
          )}
        </button>
      </div>
    </div>
  )
}
