'use client'

import { useState, useEffect } from 'react'
import { 
  Target, 
  BookOpen, 
  Users, 
  Clock, 
  MapPin, 
  Star,
  ChevronRight,
  GraduationCap,
  TrendingUp,
  Award,
  Shield,
  Lightbulb,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

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

  const successStories = [
    {
      name: 'Arjun Kumar',
      from: 'Srinagar',
      achievement: 'IAS Officer',
      quote: 'CareerCompass helped me understand the path from B.A. to civil services',
      image: '/success-1.jpg'
    },
    {
      name: 'Priya Sharma',
      from: 'Jammu',
      achievement: 'Software Engineer',
      quote: 'I discovered my passion for technology through the career quiz',
      image: '/success-2.jpg'
    },
    {
      name: 'Mohammad Ali',
      from: 'Baramulla',
      achievement: 'Doctor',
      quote: 'The platform showed me how to get into Government Medical College',
      image: '/success-3.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-First Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'gov-header shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Text-Based Logo */}
            <Link href="/" className="flex flex-col">
              <h1 className={`text-xl sm:text-2xl font-bold transition-colors ${isScrolled ? 'text-white' : 'text-primary-700'}`}>
                CareerCompass
              </h1>
              <p className={`text-xs transition-colors ${isScrolled ? 'text-primary-100' : 'text-neutral-600'}`}>
                J&K Career Guidance
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/quiz" className={`font-medium transition-colors ${isScrolled ? 'text-white hover:text-primary-200' : 'text-neutral-700 hover:text-primary-600'}`}>
                Career Quiz
              </Link>
              <Link href="/colleges" className={`font-medium transition-colors ${isScrolled ? 'text-white hover:text-primary-200' : 'text-neutral-700 hover:text-primary-600'}`}>
                Colleges
              </Link>
              <Link href="/careers" className={`font-medium transition-colors ${isScrolled ? 'text-white hover:text-primary-200' : 'text-neutral-700 hover:text-primary-600'}`}>
                Career Paths
              </Link>
              <Link href="/timeline" className={`font-medium transition-colors ${isScrolled ? 'text-white hover:text-primary-200' : 'text-neutral-700 hover:text-primary-600'}`}>
                Timeline
              </Link>
            </nav>

            {/* Profile/Auth Options */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile Profile/Login */}
              <div className="flex items-center space-x-2">
                <Link href="/profile" className={`p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}>
                  <Users className="w-5 h-5" />
                </Link>
                
                {/* Desktop Auth */}
                <div className="hidden sm:flex items-center space-x-3">
                  <Link href="/login" className={`font-medium transition-colors px-3 py-2 rounded-lg ${
                    isScrolled 
                      ? 'text-white hover:bg-white/10' 
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}>
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-government-50 to-official-50">

        <div className="mobile-container relative z-10 pt-20 pb-12">
          <div className="text-center">
            
            {/* Main Heading - Professional Typography */}
            <div className="mb-12 sm:mb-16">
              <h1 className="font-butler font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight tracking-wide">
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
                  <span className="text-primary-600">Knowledge Is Power</span>
                </span>
              </h1>
              
              <div className="font-display text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-8 sm:mb-10 max-w-3xl mx-auto space-y-1 sm:space-y-2">
                <p className="font-medium"></p>
                <p className="font-normal">Don't guess your career. Guide it.</p>
                <p className="font-semibold text-primary-700"></p>
              </div>
            </div>
            
            {/* Chanakya Quote */}
            <div className="mb-8 sm:mb-12 px-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-soft border border-primary-100">
                <blockquote className="font-serif text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed italic mb-3">
                  "Education is the best friend. An educated person is respected everywhere. 
                  Education beats the beauty and the youth."
                </blockquote>
                <p className="text-sm sm:text-base text-neutral-500 font-medium">
                  — Chanakya, Ancient Indian Strategist & Philosopher
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/quiz" className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-200 shadow-strong">
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 mr-3" />
                  Start Career Quiz
                </div>
              </Link>
              <Link href="/colleges" className="w-full sm:w-auto bg-white hover:bg-primary-50 text-primary-600 font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-colors duration-200 shadow-medium border-2 border-primary-200 hover:border-primary-300">
                <div className="flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Explore Colleges
                </div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 sm:mt-16">
              <p className="text-sm sm:text-base text-neutral-500 mb-4 select-none">
                Trusted by both parents and students across J&K
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-neutral-400 select-none touch-none">
                <div className="flex items-center select-none">
                  <Shield className="w-5 h-5 mr-2 flex-shrink-0 select-none" />
                  <span className="text-sm whitespace-nowrap select-none">Government Verified</span>
                </div>
                <div className="flex items-center select-none">
                  <Users className="w-5 h-5 mr-2 flex-shrink-0 select-none" />
                  <span className="text-sm whitespace-nowrap select-none">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Why Knowledge Is Power Section */}
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

          <div className="mobile-grid gap-6 sm:gap-8">
            {knowledgeBenefits.map((benefit, index) => (
              <div key={index} className="gov-card hover:shadow-medium transition-all duration-300 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-government-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 mb-3 sm:mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
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

          <div className="mobile-grid gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="gov-card hover:shadow-medium transition-all duration-300 group">
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

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {/* JEE Main Alert */}
            <div className="bg-white border-l-4 border-danger-500 rounded-xl p-4 sm:p-6 shadow-soft">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-danger-500 rounded-full flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-danger-900">JEE Main 2025 Registration</h3>
                    <span className="ml-2 px-2 py-1 bg-danger-100 text-danger-700 rounded-full text-xs font-medium">
                      23 days left
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-3">
                    Last chance to register for India's biggest engineering entrance exam. Don't miss this opportunity!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
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
            <div className="bg-white border-l-4 border-secondary-500 rounded-xl p-4 sm:p-6 shadow-soft">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center mr-3">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-secondary-900">NEET-UG 2025 Application</h3>
                    <span className="ml-2 px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                      40 days left
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-3">
                    Medical entrance exam registration opens soon. Prepare your documents now.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
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
            <div className="bg-white border-l-4 border-primary-500 rounded-xl p-4 sm:p-6 shadow-soft">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-primary-900">J&K Board Class 12 Exams</h3>
                    <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      83 days left
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-3">
                    Annual board examinations starting March 2025. Start your preparation now.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
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

          <div className="mobile-grid gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="gov-card hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-neutral-900">{story.name}</h4>
                    <p className="text-sm text-neutral-600">{story.from}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                    <Award className="w-3 h-3 mr-1" />
                    {story.achievement}
                  </span>
                </div>
                
                <blockquote className="text-neutral-700 italic leading-relaxed">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
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
