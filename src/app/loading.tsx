import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-10 h-10 text-white animate-spin" />
        </div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-bold text-neutral-800 mb-2">Loading CareerCompass</h2>
        <p className="text-neutral-600 mb-6">Preparing your career guidance experience...</p>
        
        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Motivational Quote */}
        <div className="mt-8 max-w-md">
          <p className="text-sm text-neutral-500 italic">
            "Knowledge Is Power - Every moment of learning brings you closer to your dreams"
          </p>
        </div>
      </div>
    </div>
  );
}
