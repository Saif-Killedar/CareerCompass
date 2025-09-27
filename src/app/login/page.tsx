'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Eye, EyeOff, User, Mail, Phone, MapPin, 
  CheckCircle, AlertCircle, Upload, FileText, Camera, GraduationCap,
  BookOpen, Target, Shield, Users, Check, Lock
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const { login, register } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        // Login with phone/email and password
        const success = await login(formData.phone || formData.email, formData.password);
        if (success) {
          router.push('/');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } else {
        // Register new user
        const success = await register(formData);
        if (success) {
          router.push('/');
        } else {
          alert('Registration failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 mobile-safe-bottom">
      {/* Header */}
      <header className="bg-primary-600 shadow-lg border-b-2 border-primary-700">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-white hover:text-primary-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold text-white absolute left-1/2 transform -translate-x-1/2">
              {isLogin ? 'Login' : 'Create Account'}
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="mobile-container py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">
            {isLogin ? 'Welcome Back!' : 'Join CareerCompass'}
          </h2>
          <p className="text-neutral-600">
            {isLogin 
              ? 'Sign in to continue your career journey' 
              : 'Start your personalized career guidance journey'
            }
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Mobile Number Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>


            {/* Location Field (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5 z-10" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                    required={!isLogin}
                  >
                    <option value="">Select your district</option>
                    <option value="Srinagar">Srinagar</option>
                    <option value="Jammu">Jammu</option>
                    <option value="Baramulla">Baramulla</option>
                    <option value="Anantnag">Anantnag</option>
                    <option value="Rajouri">Rajouri</option>
                    <option value="Kathua">Kathua</option>
                    <option value="Udhampur">Udhampur</option>
                    <option value="Pulwama">Pulwama</option>
                    <option value="Kishtwar">Kishtwar</option>
                    <option value="Doda">Doda</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="text-right">
                <button 
                  type="button"
                  onClick={() => alert('Forgot password feature coming soon!')}
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>

        {/* Toggle Auth Mode */}
        <div className="text-center mb-6">
          <p className="text-neutral-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              {isLogin ? "Create Account" : "Sign In"}
            </button>
          </p>
        </div>

        {/* Benefits Section (Register only) */}
        {!isLogin && (
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">Why Join CareerCompass?</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-neutral-700">Personalized Career Guidance</h4>
                  <p className="text-sm text-neutral-600">Get recommendations based on your interests and aptitude</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-neutral-700">Government College Directory</h4>
                  <p className="text-sm text-neutral-600">Access complete information about J&K government colleges</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-neutral-700">Scholarship Alerts</h4>
                  <p className="text-sm text-neutral-600">Never miss important scholarship deadlines and opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-neutral-700">Career Roadmaps</h4>
                  <p className="text-sm text-neutral-600">Clear pathways from education to career opportunities</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-6 text-neutral-500">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Government Verified</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
