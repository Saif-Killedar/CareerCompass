import Link from 'next/link';
import { ArrowLeft, Target, Users, BookOpen, Award, Shield, Heart, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Personalized Career Guidance",
      description: "AI-powered recommendations based on your interests, aptitude, and local opportunities in Jammu & Kashmir."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Government College Directory",
      description: "Complete database of 142+ government degree colleges across J&K with courses, fees, and facilities."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Scholarship Alerts",
      description: "Never miss PMSSS, Post-Matric, and other scholarship opportunities with automated reminders."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Career Roadmaps",
      description: "Visual pathways showing how different streams lead to government jobs, private careers, and entrepreneurship."
    }
  ];

  const stats = [
    { number: "142+", label: "Government Colleges", color: "text-blue-600" },
    { number: "50,000+", label: "Students Helped", color: "text-green-600" },
    { number: "200+", label: "Career Paths", color: "text-purple-600" },
    { number: "24/7", label: "Support Available", color: "text-orange-600" }
  ];

  const team = [
    {
      name: "Problem Statement 25094",
      role: "Smart Education Initiative",
      description: "Government of Jammu & Kashmir - Department of Higher Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-primary-700 hover:text-primary-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">Back</span>
            </Link>
            <h1 className="text-lg font-bold text-neutral-800">About CareerCompass</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="mobile-container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Knowledge Is Power</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            CareerCompass is a digital career guidance platform designed specifically for students in 
            Jammu & Kashmir, helping them make informed decisions about their educational and career paths.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
            <Heart className="w-6 h-6 text-red-500 mr-3" />
            Our Mission
          </h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            To bridge the awareness gap between students and their future prospects by providing 
            personalized career advice, connecting interests to career paths, and promoting 
            government colleges in Jammu & Kashmir.
          </p>
          <div className="bg-primary-50 rounded-xl p-4">
            <p className="text-primary-800 font-medium text-sm">
              "Let us reignite the future by ensuring no student is lost in confusion. 
              Together, we can restore confidence in higher education."
            </p>
          </div>
        </div>

        {/* Problem We Solve */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-4">The Problem We Solve</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-700">High Dropout Rates</h4>
                <p className="text-sm text-neutral-600">16.1% of students drop out at secondary level due to lack of career clarity</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-700">Low Government College Enrollment</h4>
                <p className="text-sm text-neutral-600">Many seats remain vacant despite quality education and low fees</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-700">Career Confusion</h4>
                <p className="text-sm text-neutral-600">Students and parents lack awareness about career opportunities after different streams</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-6 text-center">How We Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-neutral-800 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-6 text-center">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Partnership */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center">
            <Shield className="w-6 h-6 text-green-500 mr-3" />
            Government Partnership
          </h3>
          <div className="space-y-4">
            {team.map((member, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-government-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-800">{member.name}</h4>
                  <p className="text-primary-600 font-medium text-sm">{member.role}</p>
                  <p className="text-neutral-600 text-sm mt-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Government Colleges */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-xl font-bold text-neutral-800 mb-4">Why Choose Government Colleges?</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-neutral-700">Affordable fees - Starting from ₹5,500/year</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-neutral-700">Government job opportunities through various exams</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-neutral-700">Quality education with experienced faculty</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-neutral-700">Scholarship opportunities (PMSSS, Post-Matric, etc.)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-neutral-700">Local accessibility across all districts</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-600 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to Start Your Journey?</h3>
          <p className="text-primary-100 mb-6">
            Join thousands of students who have found their career path through CareerCompass
          </p>
          <div className="space-y-3">
            <Link 
              href="/quiz"
              className="w-full bg-white hover:bg-neutral-100 text-primary-600 font-semibold py-3 px-6 rounded-xl transition-colors inline-block"
            >
              Take Career Quiz
            </Link>
            <Link 
              href="/colleges"
              className="w-full bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-xl transition-colors border-2 border-white/30 hover:border-white/50 inline-block"
            >
              Explore Colleges
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 text-sm">
            For support and queries, contact the Department of Higher Education, 
            Government of Jammu & Kashmir
          </p>
        </div>
      </div>
    </div>
  );
}
