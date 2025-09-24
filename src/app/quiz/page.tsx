'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Circle, ArrowRight, Target, BookOpen, Users, Lightbulb } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    stream: 'science' | 'commerce' | 'arts' | 'vocational';
    weight: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { text: "Solving math problems and conducting experiments", stream: 'science', weight: 3 },
      { text: "Managing money and understanding business", stream: 'commerce', weight: 3 },
      { text: "Reading, writing, and creative expression", stream: 'arts', weight: 3 },
      { text: "Hands-on work and practical skills", stream: 'vocational', weight: 3 }
    ]
  },
  {
    id: 2,
    question: "Which subjects interest you the most?",
    options: [
      { text: "Physics, Chemistry, Biology, Mathematics", stream: 'science', weight: 3 },
      { text: "Economics, Accountancy, Business Studies", stream: 'commerce', weight: 3 },
      { text: "History, Literature, Psychology, Political Science", stream: 'arts', weight: 3 },
      { text: "Computer Applications, Skill-based courses", stream: 'vocational', weight: 3 }
    ]
  },
  {
    id: 3,
    question: "What kind of career appeals to you?",
    options: [
      { text: "Doctor, Engineer, Scientist, Researcher", stream: 'science', weight: 3 },
      { text: "Business Owner, Accountant, Banker, Manager", stream: 'commerce', weight: 3 },
      { text: "Teacher, Lawyer, Journalist, Civil Servant", stream: 'arts', weight: 3 },
      { text: "Technician, Designer, Skilled Worker", stream: 'vocational', weight: 3 }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Through logical analysis and experimentation", stream: 'science', weight: 2 },
      { text: "By analyzing data and market trends", stream: 'commerce', weight: 2 },
      { text: "Through discussion and understanding people", stream: 'arts', weight: 2 },
      { text: "By working with my hands and tools", stream: 'vocational', weight: 2 }
    ]
  },
  {
    id: 5,
    question: "What motivates you most?",
    options: [
      { text: "Discovering new things and innovation", stream: 'science', weight: 2 },
      { text: "Financial success and business growth", stream: 'commerce', weight: 2 },
      { text: "Helping society and making a difference", stream: 'arts', weight: 2 },
      { text: "Creating something with practical value", stream: 'vocational', weight: 2 }
    ]
  }
];

const streamResults = {
  science: {
    title: "Science Stream",
    description: "🔬 Excellent Choice! You're naturally curious about how things work and love solving complex problems through scientific methods and logical thinking.",
    careers: ["Doctor", "Engineer", "Scientist", "Researcher", "Lab Technician", "Data Analyst"],
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    color: "bg-blue-500"
  },
  commerce: {
    title: "Commerce Stream",
    description: "💼 Great Fit! You have a sharp business mind and understand money matters. You're destined for the world of business and finance.",
    careers: ["CA/CS", "Business Owner", "Banker", "Manager", "Economist", "Financial Advisor"],
    subjects: ["Economics", "Accountancy", "Business Studies", "Mathematics"],
    color: "bg-green-500"
  },
  arts: {
    title: "Arts/Humanities Stream",
    description: "📚 Perfect Match! You're a natural communicator with deep empathy and social awareness. You understand people and society well.",
    careers: ["IAS/IPS", "Lawyer", "Teacher", "Journalist", "Psychologist", "Social Worker"],
    subjects: ["History", "Political Science", "Psychology", "Literature"],
    color: "bg-purple-500"
  },
  vocational: {
    title: "Vocational & Technical Skills",
    description: "🎯 Perfect Match! You're a hands-on learner who excels in practical, skill-based work. You prefer learning by doing and creating real-world solutions.",
    careers: ["Software Developer", "Graphic Designer", "Digital Marketer", "Technician", "Entrepreneur", "Web Developer"],
    subjects: ["Computer Applications", "Digital Skills", "Trade Courses", "Entrepreneurship", "Technical Training"],
    color: "bg-orange-500"
  }
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const scores = {
      science: 0,
      commerce: 0,
      arts: 0,
      vocational: 0
    };

    questions.forEach((question, qIndex) => {
      const answerIndex = answers[qIndex];
      if (answerIndex !== undefined) {
        const option = question.options[answerIndex];
        scores[option.stream] += option.weight;
      }
    });

    const topStream = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as keyof typeof streamResults;

    setResults({
      recommendedStream: topStream,
      scores,
      details: streamResults[topStream]
    });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults(null);
  };

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 mobile-safe-bottom">
        {/* Header */}
        <header className="bg-white shadow-lg border-b-2 border-primary-200">
          <div className="mobile-container">
            <div className="flex items-center justify-center h-16">
              <h1 className="text-lg font-bold text-neutral-800">Quiz Results</h1>
            </div>
          </div>
        </header>

        {/* Results */}
        <div className="mobile-container py-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">Your Recommended Stream</h2>
            <p className="text-neutral-600">Based on your interests and preferences</p>
          </div>

          {/* Main Result Card */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <div className="text-center mb-6">
              <div className={`w-16 h-16 ${results.details.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">{results.details.title}</h3>
              <div className={`w-full h-3 ${results.details.color} rounded-full mb-4 opacity-20`}></div>
              <p className="text-neutral-700 text-lg leading-relaxed">{results.details.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-neutral-700 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Recommended Subjects
                </h4>
                <ul className="space-y-1">
                  {results.details.subjects.map((subject: string, index: number) => (
                    <li key={index} className="text-sm text-neutral-600 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-neutral-700 mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  🚀 Career Opportunities
                </h4>
                <div className="space-y-2">
                  {results.details.careers.map((career: string, index: number) => (
                    <div key={index} className="bg-primary-50 rounded-lg p-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-neutral-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">Your Interest Profile</h3>
            <div className="space-y-3">
              {Object.entries(results.scores).map(([stream, score]) => (
                <div key={stream} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-700 capitalize">{stream}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${streamResults[stream as keyof typeof streamResults].color}`}
                        style={{ width: `${((score as number) / 15) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-neutral-600 w-8">{score as number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/colleges" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Government Colleges
            </Link>
            
            <button 
              onClick={resetQuiz}
              className="w-full bg-white hover:bg-neutral-50 text-primary-600 font-semibold py-4 px-6 rounded-xl transition-colors border-2 border-primary-200 hover:border-primary-300"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-government-50 to-official-50 mobile-safe-bottom">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-primary-200">
        <div className="mobile-container">
          <div className="flex items-center justify-between h-16">
            <div className="text-sm text-neutral-600">
              {currentQuestion + 1}/{questions.length}
            </div>
            <h1 className="text-lg font-bold text-neutral-800">Career Quiz</h1>
            <div className="text-sm text-neutral-600">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="mobile-container py-4">
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="mobile-container py-8 pb-24">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-neutral-800 mb-2">
            Question {currentQuestion + 1}
          </h2>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-soft border border-primary-100 p-6 mb-8">
          <h3 className="text-lg font-semibold text-neutral-800 mb-6 text-center">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center ${
                  answers[currentQuestion] === index
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <div className="mr-3">
                  {answers[currentQuestion] === index ? (
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-neutral-400" />
                  )}
                </div>
                <span className="font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between space-x-4">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors ${
              currentQuestion === 0
                ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === undefined}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center ${
              answers[currentQuestion] === undefined
                ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 text-white'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
