'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Heart,
  Shield,
  Lightbulb,
  Globe,
  Brain,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const knowledgeBenefits = [
    {
      icon: Brain,
      title: 'Better Decision Making',
      description: 'Knowledge helps you choose the right career path based on facts, not confusion',
      stat: '85% better career satisfaction'
    },
    {
      icon: TrendingUp,
      title: 'Higher Income Potential',
      description: 'Educated individuals earn 3x more than those without proper guidance',
      stat: '₹8-50 LPA salary range'
    },
    {
      icon: Shield,
      title: 'Job Security & Respect',
      description: 'Government jobs and professional careers provide stability and social status',
      stat: '90% job security in govt sector'
    },
    {
      icon: Award,
      title: 'Leadership Opportunities',
      description: 'Education opens doors to IAS, IPS, and other prestigious positions',
      stat: 'Unlimited growth potential'
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'AI-Powered Career Quiz',
      description: 'Discover your ideal career path with scientific aptitude assessment',
      color: 'bg-primary-500',
      href: '/quiz',
      guestAccess: true
    },
    {
      icon: GraduationCap,
      title: 'Government College Directory',
      description: 'Explore 142+ government colleges across Jammu & Kashmir',
      color: 'bg-success-500',
      href: '/colleges',
      guestAccess: true
    },
    {
      icon: TrendingUp,
      title: 'Interactive Career Mapping',
      description: 'Visual pathways from education to your dream career',
      color: 'bg-secondary-500',
      href: '/careers',
      guestAccess: true
    },
    {
      icon: Clock,
      title: 'Timeline Tracker & Alerts',
      description: 'Never miss admission deadlines and scholarship opportunities',
      color: 'bg-danger-500',
      href: '/timeline',
      guestAccess: false,
      loginRequired: 'Get personalized notifications'
    }
  ]

  // Updated for fresh deployment
  const successStories = [
    {
      name: 'Arjun Kumar',
      from: 'Srinagar',
      achievement: 'IAS Officer',
      quote: 'CareerCompass helped me understand the path from B.A. to civil services',
      image: '/images/students/success-1.jpg'
    },
    {
      name: 'Priya Sharma',
      from: 'Jammu',
      achievement: 'Software Engineer',
      quote: 'I discovered my passion for technology through the career quiz',
      image: '/images/students/success-2.jpg'
    },
    {
      name: 'Mohammad Ali',
      from: 'Baramulla',
      achievement: 'Doctor',
      quote: 'The platform showed me how to get into Government Medical College',
      image: '/images/students/success-3.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-First Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-600 shadow-lg">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Text-Based Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Target className="w-5 h-5 text-white" /></div><h1 className="text-xl sm:text-2xl font-bold text-white">
                CareerCompass
              </h1>
              <p className="text-xs text-primary-100">
                
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/quiz" className="font-medium text-white hover:text-primary-200 transition-colors">
                Career Quiz
              </Link>
              <Link href="/colleges" className="font-medium text-white hover:text-primary-200 transition-colors">
                Colleges
              </Link>
              <Link href="/careers" className="font-medium text-white hover:text-primary-200 transition-colors">
                Career Paths
              </Link>
              <Link href="/timeline" className="font-medium text-white hover:text-primary-200 transition-colors">
                Timeline
              </Link>
            </nav>

            {/* Profile/Auth Options */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile Profile/Login */}
              <div className="flex items-center space-x-2">
                <Link href="/profile" className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
                  <Users className="w-5 h-5" />
                </Link>
                
                {/* Desktop Auth */}
                <div className="hidden sm:flex items-center space-x-3">
                  <Link href="/login" className="font-medium text-white hover:bg-white/10 transition-colors px-3 py-2 rounded-lg">
                    Login
                  </Link>
                  <Link href="/register" className="gov-button text-sm">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Full-Screen Hero Section - Knowledge Is Power */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero-bg.jpg')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-government-50/70 to-official-50/80"></div>
        </div>

        <div className="mobile-container relative z-10 py-8">
          <div className="text-center flex flex-col min-h-[80vh]">
            
            {/* Main Heading - Professional Typography - Centered */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="font-butler font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight tracking-wide">
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
                  <span className="text-primary-600">Knowledge Is Power</span>
                </span>
              </h1>
              
              <div className="font-display text-lg sm:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto space-y-1 sm:space-y-2">
                <p className="font-normal">It helps you make smarter decisions, solve problems, and get more opportunities to succeed.</p>
                <p className="font-normal">Don't guess your career. Guide it.</p>
              </div>
            </div>
            
            {/* Bottom Content - Button and Quote */}
            <div className="pb-8">
              {/* Call-to-Action Button */}
              <div className="flex justify-center mb-6">
                <Link href="/quiz" className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-200 shadow-strong">
                  <div className="flex items-center justify-center">
                    <Target className="w-6 h-6 mr-3" />
                    Start Career Quiz
                  </div>
                </Link>
              </div>

              {/* Chanakya Quote */}
              <div className="px-4">
                <div className="relative rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-soft border border-primary-100 overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/hero/quote-bg.jpg')",
                    }}
                  >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
                  </div>
                  
                  {/* Quote Content */}
                  <div className="relative z-10">
                    <blockquote className="font-serif text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed italic mb-3">
                      "Education is the best friend. An educated person is respected everywhere. 
                      Education beats the beauty and the youth."
                    </blockquote>
                    <p className="text-sm sm:text-base text-neutral-500 font-medium">
                      — Chanakya, Ancient Indian Strategist & Philosopher
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Knowledge Is Your Greatest Asset Section */}
      <section className="mobile-section bg-white">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Why <span className="text-primary-600">Knowledge</span> Is Your Greatest Asset
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See the real impact of education on your life, career, and social status
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-strong bg-neutral-900">
                {/* Video Container */}
                <div className="relative aspect-video">
                  <video 
                    className="w-full h-full object-cover" 
                    controls
                    poster="/images/hero/video-thumbnail.jpg"
                    onPlay={(e) => {
                      const video = e.target as HTMLVideoElement;
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                          if (!entry.isIntersecting && !video.paused) {
                            video.pause();
                          }
                        });
                      }, { threshold: 0.3 });
                      observer.observe(video);
                      
                      const overlay = video.nextElementSibling as HTMLElement;
                      if (overlay && overlay.classList.contains("video-overlay")) {
                        overlay.style.display = "none";
                      }
                    }}
                    onPause={(e) => {
                      const video = e.target as HTMLVideoElement;
                      const overlay = video.nextElementSibling as HTMLElement;
                      if (overlay && overlay.classList.contains("video-overlay")) {
                        overlay.style.display = "flex";
                      }
                    }}
                  >
                    <source src="/videos/demos/knowledge-impact.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors duration-300 group pointer-events-none video-overlay">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video Caption */}
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                    The Power of Knowledge in Career Success
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    Watch how education transforms lives and opens doors to unlimited opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="mobile-section bg-neutral-50">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Simple steps to discover your ideal career path
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-12 sm:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-strong bg-neutral-900">
                {/* Video Container */}
                <div className="relative aspect-video">
                  <video 
                    className="w-full h-full object-cover" 
                    controls
                    poster="/images/steps/how-it-works-thumbnail.jpg"
                    onPlay={(e) => {
                      const video = e.target as HTMLVideoElement;
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                          if (!entry.isIntersecting && !video.paused) {
                            video.pause();
                          }
                        });
                      }, { threshold: 0.3 });
                      observer.observe(video);
                      
                      const overlay = video.nextElementSibling as HTMLElement;
                      if (overlay && overlay.classList.contains("video-overlay")) {
                        overlay.style.display = "none";
                      }
                    }}
                    onPause={(e) => {
                      const video = e.target as HTMLVideoElement;
                      const overlay = video.nextElementSibling as HTMLElement;
                      if (overlay && overlay.classList.contains("video-overlay")) {
                        overlay.style.display = "flex";
                      }
                    }}
                  >
                    
                    <source src="/videos/tutorials/how-it-works.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors duration-300 group pointer-events-none video-overlay">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video Caption */}
                <div className="p-4 sm:p-6 bg-white">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                    Step-by-Step Career Discovery Process
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    Watch our complete guide on how to discover your ideal career path through our platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mobile-section bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="mobile-container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of J&K students who are making informed career decisions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/quiz" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-medium">
              <Target className="w-5 h-5 mr-2 inline" />
              Start Free Career Quiz
            </Link>
            <Link href="/register" className="w-full sm:w-auto bg-government-500 hover:bg-government-400 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-medium">
              <Users className="w-5 h-5 mr-2 inline" />
              Create Account
            </Link>
          </div>
          
          <p className="text-sm text-primary-200 mt-4">
            No credit card required • Free forever • Government verified
          </p>
        </div>
      </section>

      {/* Features Section - Guest vs Logged In */}
      <section className="mobile-section bg-neutral-50">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Explore Our Platform
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Start exploring immediately or create an account for personalized features
            </p>
          </div>

          {/* Horizontal Scrollable Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              id="scroll-left"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
              onClick={() => {
                const container = document.getElementById('features-container');
                container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              id="scroll-right"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
              onClick={() => {
                const container = document.getElementById('features-container');
                container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              id="features-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 gov-card hover:shadow-medium transition-all duration-300 group"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {feature.guestAccess ? (
                    <div className="space-y-3">
                      <div className="flex items-center text-success-600 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Free access for everyone
                      </div>
                      <Link 
                        href={feature.href}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                      >
                        Try Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center text-secondary-600 text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        {feature.loginRequired}
                      </div>
                      <Link 
                        href="/register"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                      >
                        Create Account <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-neutral-300 transition-colors duration-300"
                  id={`indicator-${index}`}
                ></div>
              ))}
            </div>
          </div>

          {/* CSS for hiding scrollbar */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section>

      {/* Important Deadlines Section */}
      <section className="mobile-section bg-gradient-to-br from-danger-50 to-orange-50">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-danger-100 text-danger-700 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Critical Deadlines Alert
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Don't Miss These Important Dates
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Stay updated with admission deadlines, scholarship applications, and exam dates
            </p>
          </div>

          {/* Horizontal Scrollable Deadlines Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              id="deadlines-scroll-left"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-danger-50 transition-colors duration-200"
              onClick={() => {
                const container = document.getElementById('deadlines-container');
                container.scrollBy({ left: -350, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-danger-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              id="deadlines-scroll-right"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-danger-50 transition-colors duration-200"
              onClick={() => {
                const container = document.getElementById('deadlines-container');
                container.scrollBy({ left: 350, behavior: 'smooth' });
              }}
            >
              <svg className="w-6 h-6 text-danger-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Container */}
            <div 
              id="deadlines-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* JEE Main Alert */}
              <div className="flex-shrink-0 w-80 bg-white border-l-4 border-danger-500 rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-shadow duration-300" style={{ scrollSnapAlign: 'start' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-danger-500 rounded-full flex items-center justify-center mr-3">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-danger-900 text-sm">JEE Main 2025 Registration</h3>
                    </div>
                    <span className="inline-block mb-3 px-2 py-1 bg-danger-100 text-danger-700 rounded-full text-xs font-medium">
                      23 days left
                    </span>
                    <p className="text-neutral-700 mb-3 text-sm leading-relaxed">
                      Last chance to register for India's biggest engineering entrance exam. Don't miss this opportunity!
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link href="/timeline" className="inline-flex items-center text-danger-600 hover:text-danger-700 font-medium text-sm">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link href="/register" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                        Set Reminder <Star className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEET Alert */}
              <div className="flex-shrink-0 w-80 bg-white border-l-4 border-secondary-500 rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-shadow duration-300" style={{ scrollSnapAlign: 'start' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-secondary-900 text-sm">NEET-UG 2025 Application</h3>
                    </div>
                    <span className="inline-block mb-3 px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                      40 days left
                    </span>
                    <p className="text-neutral-700 mb-3 text-sm leading-relaxed">
                      Medical entrance exam registration opens soon. Prepare your documents now.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link href="/timeline" className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium text-sm">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link href="/register" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                        Set Reminder <Star className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* J&K Board Exams */}
              <div className="flex-shrink-0 w-80 bg-white border-l-4 border-primary-500 rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-shadow duration-300" style={{ scrollSnapAlign: 'start' }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-primary-900 text-sm">J&K Board Class 12 Exams</h3>
                    </div>
                    <span className="inline-block mb-3 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      83 days left
                    </span>
                    <p className="text-neutral-700 mb-3 text-sm leading-relaxed">
                      Annual board examinations starting March 2025. Start your preparation now.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link href="/timeline" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link href="/quiz" className="inline-flex items-center text-success-600 hover:text-success-700 font-medium text-sm">
                        Career Guidance <Target className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 rounded-full bg-danger-300 transition-colors duration-300"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300 transition-colors duration-300"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-300 transition-colors duration-300"></div>
            </div>
          </div>

          {/* CSS for hiding scrollbar */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/timeline" className="gov-button">
              <Clock className="w-5 h-5 mr-2" />
              View All Deadlines
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mobile-section bg-white">
        <div className="mobile-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories from J&K
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real students who transformed their lives through proper career guidance
            </p>
          </div>

          {/* Auto-Swapping Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-government-50 shadow-strong">
              {/* Carousel Container */}
              <div className="relative h-96 sm:h-80">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                    style={{
                      animation: `carousel-slide 12s infinite ${index * 4}s`
                    }}
                  >
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Student Image */}
                      <div className="flex-shrink-0 w-full sm:w-1/3 relative">
                        <div className="h-48 sm:h-full relative overflow-hidden">
                          <img
                            src={`/images/students/${story.name.toLowerCase().replace(' ', '-')}.jpg`}
                            alt={story.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to avatar if image not found
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const sibling = target.nextElementSibling as HTMLElement;
                              if (sibling) {
                                sibling.style.display = 'flex';
                              }
                            }}
                          />
                          {/* Fallback Avatar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 items-center justify-center text-white font-bold text-4xl sm:text-6xl hidden">
                            {story.name.charAt(0).toUpperCase()}
                          </div>
                        </div>
                      </div>
                      
                      {/* Student Info */}
                      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                        <div className="mb-4">
                          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                            {story.name}
                          </h3>
                          <p className="text-primary-600 font-medium mb-3">
                            📍 {story.from}
                          </p>
                          <div className="inline-flex items-center px-4 py-2 bg-success-100 text-success-700 rounded-full font-semibold">
                            <Award className="w-4 h-4 mr-2" />
                            {story.achievement}
                          </div>
                        </div>
                        
                        <blockquote className="text-lg sm:text-xl text-neutral-700 italic leading-relaxed mb-4">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="text-sm text-neutral-500">
                          — Success Story from CareerCompass
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {successStories.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-white/50 transition-all duration-300"
                    style={{
                      animation: `indicator-pulse 12s infinite ${index * 4}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* CSS Animations */}
          <style jsx>{`
            @keyframes carousel-slide {
              0%, 25% { opacity: 1; transform: translateX(0); }
              33.33%, 91.67% { opacity: 0; transform: translateX(-100%); }
              100% { opacity: 0; transform: translateX(100%); }
            }
            
            @keyframes indicator-pulse {
              0%, 25% { background-color: rgba(255, 255, 255, 1); transform: scale(1.2); }
              33.33%, 100% { background-color: rgba(255, 255, 255, 0.5); transform: scale(1); }
            }
          `}</style>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 sm:py-12 mobile-safe-bottom">
        <div className="mobile-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">CareerCompass</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Career guidance platform for students of Jammu & Kashmir
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/quiz" className="block text-neutral-400 hover:text-white transition-colors">Career Quiz</Link>
                <Link href="/colleges" className="block text-neutral-400 hover:text-white transition-colors">Colleges</Link>
                <Link href="/careers" className="block text-neutral-400 hover:text-white transition-colors">Career Paths</Link>
                <Link href="/timeline" className="block text-neutral-400 hover:text-white transition-colors">Timeline</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/help" className="block text-neutral-400 hover:text-white transition-colors">Help Center</Link>
                <Link href="/contact" className="block text-neutral-400 hover:text-white transition-colors">Contact Us</Link>
                <Link href="/about" className="block text-neutral-400 hover:text-white transition-colors">About</Link>
                <Link href="/privacy" className="block text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>CareerCompass J&K</p>
                <p>Jammu & Kashmir</p>
                <p>India - 190001</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-6 text-center text-sm text-neutral-400">
            <p>&copy; 2025 CareerCompass J&K. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
