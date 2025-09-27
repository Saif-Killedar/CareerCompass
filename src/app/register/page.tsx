'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { 
  ArrowLeft, ArrowRight, Eye, EyeOff, User, Mail, Phone, MapPin, 
  CheckCircle, AlertCircle, Upload, FileText, Camera, GraduationCap,
  BookOpen, Target, Shield, Users, Check, Lock
} from 'lucide-react';

interface FormData {
  // Step 1: Basic Account Details
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePhoto: File | null;
  
  // Step 2: Educational Details
  currentClass: string;
  stream: string;
  board: string;
  schoolName: string;
  yearOfPassing: string;
  marksPercentage: string;
  careerInterests: string[];
  
  // Step 3: Location Details
  state: string;
  district: string;
  city: string;
  pincode: string;
  studyRadius: number;
  
  // Step 4: Document Upload
  marksCard: File | null;
  governmentId: File | null;
  
  // Step 5: Legal Consent
  agreeToTerms: boolean;
  agreeToPrivacy: boolean;
  parentalConsent: boolean;
  communicationConsent: boolean;
}

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const totalSteps = 5;
  const stepTitles = [
    'Account Setup',
    'Education Info', 
    'Location Details',
    'Document Upload',
    'Legal Consent'
  ];

  const [formData, setFormData] = useState<FormData>({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profilePhoto: null,
    
    // Step 2
    currentClass: '',
    stream: '',
    board: '',
    schoolName: '',
    yearOfPassing: '',
    marksPercentage: '',
    careerInterests: [],
    
    // Step 3
    state: '',
    district: '',
    city: '',
    pincode: '',
    studyRadius: 25,
    
    // Step 4
    marksCard: null,
    governmentId: null,
    
    // Step 5
    agreeToTerms: false,
    agreeToPrivacy: false,
    parentalConsent: false,
    communicationConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  const handleCareerInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      careerInterests: prev.careerInterests.includes(interest)
        ? prev.careerInterests.filter(i => i !== interest)
        : [...prev.careerInterests, interest]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      alert('Please agree to the Terms and Conditions and Privacy Policy');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await register(formData);
      if (success) {
        alert('Account created successfully! Welcome to CareerCompass!');
        router.push('/');
      } else {
        setErrors({ submit: 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 mobile-safe-bottom">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-primary-700 hover:text-primary-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-lg font-bold text-neutral-800 absolute left-1/2 transform -translate-x-1/2">Create Account</h1>
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
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Join CareerCompass</h2>
          <p className="text-neutral-600">
            Start your personalized career guidance journey in Jammu & Kashmir
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-4 mb-6">
          <div className="flex items-center justify-between">
            {stepTitles.map((title, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index + 1 === currentStep 
                    ? 'bg-primary-500 text-white' 
                    : index + 1 < currentStep 
                      ? 'bg-green-500 text-white' 
                      : 'bg-neutral-200 text-neutral-500'
                }`}>
                  {index + 1 < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                {index < stepTitles.length - 1 && (
                  <div className={`w-6 h-0.5 mx-1 ${
                    index + 1 < currentStep ? 'bg-green-500' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <span className="text-sm font-medium text-neutral-700">
              Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
            </span>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-red-700 text-sm">{errors.submit}</span>
              </div>
            )}

            {/* Step Content */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary-500" />
                  Basic Account Details
                </h3>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number *
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

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
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

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Educational Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary-500" />
                  Educational Details
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Help us personalize your career recommendations
                </p>

                {/* Current Class */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Current Class *
                  </label>
                  <select
                    name="currentClass"
                    value={formData.currentClass}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    required
                  >
                    <option value="">Select your current class</option>
                    <option value="10th">10th Standard</option>
                    <option value="11th">11th Standard</option>
                    <option value="12th">12th Standard</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post-Graduate">Post-Graduate</option>
                  </select>
                </div>

                {/* Stream */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Stream (if applicable)
                  </label>
                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select your stream</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts/Humanities</option>
                  </select>
                </div>

                {/* Board */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Board *
                  </label>
                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    required
                  >
                    <option value="">Select your board</option>
                    <option value="JKBOSE">JKBOSE</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Location Details */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                  Location Details
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Find nearby colleges and opportunities
                </p>

                {/* District */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    required
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
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    City/Town/Village *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city/town/village"
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Enter your pincode"
                    className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Document Upload */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-primary-500" />
                  Document Upload (Optional)
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Upload documents for better recommendations and scholarship matching
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 font-medium">Secure & Private</p>
                      <p className="text-xs text-blue-600">Documents are encrypted and used only for personalized recommendations</p>
                    </div>
                  </div>
                </div>

                {/* Marks Card Upload */}
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Latest Marks Card/Report Card
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                    <FileText className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                    <p className="text-sm text-neutral-600 mb-2">Upload PDF or Image</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'marksCard')}
                      className="hidden"
                      id="marksCard"
                    />
                    <label
                      htmlFor="marksCard"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose File
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Legal Consent */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary-500" />
                  Legal Consent & Agreements
                </h3>

                <div className="space-y-4">
                  {/* Terms & Conditions */}
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 appearance-none border-2 border-neutral-300 rounded bg-white checked:bg-primary-600 checked:border-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0"
                        required
                      />
                      {formData.agreeToTerms && (
                        <Check className="absolute top-1.5 left-0.5 w-4 h-4 text-white pointer-events-none" />
                      )}
                    </div>
                    <label htmlFor="agreeToTerms" className="text-sm text-neutral-700">
                      I agree to the <Link href="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link> *
                    </label>
                  </div>

                  {/* Parental Consent */}
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="parentalConsent"
                        name="parentalConsent"
                        checked={formData.parentalConsent}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 appearance-none border-2 border-neutral-300 rounded bg-white checked:bg-primary-600 checked:border-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0"
                        required
                      />
                      {formData.parentalConsent && (
                        <Check className="absolute top-1.5 left-0.5 w-4 h-4 text-white pointer-events-none" />
                      )}
                    </div>
                    <label htmlFor="parentalConsent" className="text-sm text-neutral-700">
                      I am above 18 OR I have parental/guardian permission to use this platform *
                    </label>
                  </div>

                  {/* Communication Consent */}
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="communicationConsent"
                        name="communicationConsent"
                        checked={formData.communicationConsent}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 appearance-none border-2 border-neutral-300 rounded bg-white checked:bg-primary-600 checked:border-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0"
                      />
                      {formData.communicationConsent && (
                        <Check className="absolute top-1.5 left-0.5 w-4 h-4 text-white pointer-events-none" />
                      )}
                    </div>
                    <label htmlFor="communicationConsent" className="text-sm text-neutral-700">
                      I agree to receive career updates and notifications (optional)
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-neutral-200 gap-4">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-colors min-w-[120px] ${
                  currentStep === 1
                    ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center justify-center px-6 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors min-w-[120px]"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center px-6 py-4 rounded-xl font-medium transition-colors min-w-[140px] ${
                    isSubmitting
                      ? 'bg-neutral-400 text-neutral-600 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-neutral-300 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Create Account
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-neutral-600">
            Already have an account?{' '}
            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
