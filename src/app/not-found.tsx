import Link from 'next/link';
import { Home, ArrowLeft, Search, BookOpen, Target, Users } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
          <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-800 mb-2">Page Not Found</h1>
          <p className="text-neutral-600 mb-6">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, your career journey continues!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link 
            href="/"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Home
          </Link>
          
          <Link 
            href="/quiz"
            className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-primary-200 hover:border-primary-300 flex items-center justify-center"
          >
            <Target className="w-5 h-5 mr-2" />
            Take Career Quiz
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
          <h3 className="text-lg font-bold text-neutral-800 mb-4">Popular Pages</h3>
          <div className="space-y-3">
            <Link 
              href="/colleges"
              className="flex items-center p-3 hover:bg-primary-50 rounded-xl transition-colors"
            >
              <BookOpen className="w-5 h-5 text-primary-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-neutral-800">Government Colleges</div>
                <div className="text-sm text-neutral-600">Find colleges in J&K</div>
              </div>
            </Link>
            
            <Link 
              href="/careers"
              className="flex items-center p-3 hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Users className="w-5 h-5 text-primary-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-neutral-800">Career Paths</div>
                <div className="text-sm text-neutral-600">Explore opportunities</div>
              </div>
            </Link>
            
            <Link 
              href="/timeline"
              className="flex items-center p-3 hover:bg-primary-50 rounded-xl transition-colors"
            >
              <Target className="w-5 h-5 text-primary-600 mr-3" />
              <div className="text-left">
                <div className="font-semibold text-neutral-800">Important Timeline</div>
                <div className="text-sm text-neutral-600">Deadlines & dates</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-2">Knowledge Is Power</h3>
            <p className="text-primary-100 text-sm">
              "Every expert was once a beginner. Every pro was once an amateur."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
