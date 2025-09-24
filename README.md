# CareerCompass J&K - Mobile Career Guidance Platform

**Knowledge Is Power** - One-Stop Career & Education Advisor for Students of Jammu & Kashmir

[![Government of J&K](https://img.shields.io/badge/Government-Jammu%20%26%20Kashmir-blue)](https://jk.gov.in)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue)](https://tailwindcss.com)
[![Mobile First](https://img.shields.io/badge/Mobile-First-green)](https://web.dev/mobile-first)

## 🎯 Problem Statement 25094

**Challenge**: Students in Jammu & Kashmir face significant challenges in career guidance and educational planning:
- Limited access to comprehensive career information
- Confusion about career paths and educational requirements
- Low enrollment in government colleges despite available opportunities
- Missed scholarship and application deadlines
- Lack of personalized guidance based on individual interests and aptitude

**Solution**: CareerCompass J&K - A comprehensive, mobile-first platform providing personalized career guidance, college information, and educational resources specifically designed for J&K students.

## 🌟 Key Features

### 🎓 **Core Functionality**
- **Interactive Career Quiz** - Personalized aptitude assessment with stream recommendations
- **Government College Directory** - Complete database of 142+ J&K government colleges
- **Career Roadmaps** - Visual pathways from education to career opportunities
- **Timeline Management** - Important dates, deadlines, and scholarship alerts
- **User Profiles** - Personalized dashboards with progress tracking

### 📱 **Mobile-First Design**
- **Instagram/YouTube Style Navigation** - Thumb-friendly bottom navigation
- **Professional Government Branding** - Kashmir Sky Blue theme with Chinar Gold accents
- **Responsive Design** - Optimized for smartphones (primary device for J&K students)
- **Touch-Optimized Interface** - Large touch targets and smooth animations

### 🚀 **Advanced Features**
- **Smart Search** - Intelligent search with filters and suggestions
- **Real-time Validation** - Form validation with auto-save functionality
- **Interactive Roadmaps** - Clickable career progression paths
- **Personalized Recommendations** - AI-driven suggestions based on user profile
- **Professional Loading States** - Skeleton screens for better UX
- **Government Authentication** - Secure login with J&K district verification

## 🏗️ Technical Architecture

### **Frontend Stack**
```
Next.js 14 (App Router)
├── TypeScript 5.0
├── Tailwind CSS 3.0
├── Lucide React Icons
├── Professional Components
└── Mobile-First Responsive Design
```

### **Key Technologies**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom J&K color palette
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter (body), Playfair Display (headings)
- **State Management**: React hooks and local state
- **Form Handling**: Custom validation with real-time feedback

## 📁 Project Structure

```
careercompass-mobile/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── quiz/              # Career quiz
│   │   ├── colleges/          # College directory
│   │   ├── careers/           # Career paths
│   │   ├── timeline/          # Important dates
│   │   ├── profile/           # User dashboard
│   │   ├── login/             # Authentication
│   │   ├── register/          # User registration
│   │   ├── signout/           # Sign out flow
│   │   ├── about/             # Platform info
│   │   ├── loading.tsx        # Global loading
│   │   ├── error.tsx          # Error boundary
│   │   ├── not-found.tsx      # 404 page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
│       ├── MobileNavigation.tsx
│       ├── SkeletonLoader.tsx
│       ├── SmartFormField.tsx
│       ├── SmartSearch.tsx
│       ├── CareerRoadmap.tsx
│       └── RecommendationEngine.tsx
├── public/                    # Static assets
├── README.md                  # This file
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Design System

### **Color Palette**
```css
/* Primary - Kashmir Sky Blue */
--primary-50: #f0f9ff;
--primary-500: #0ea5e9;
--primary-600: #0284c7;
--primary-700: #0369a1;

/* Government Gold - Chinar Leaf */
--government-500: #d4af37;
--government-600: #b8860b;

/* Professional Neutrals */
--neutral-50: #f8fafc;
--neutral-600: #475569;
--neutral-800: #1e293b;
```

### **Typography**
- **Headings**: Playfair Display (Government-style serif)
- **Body**: Inter (Professional sans-serif)
- **UI Elements**: IBM Plex Sans (Clean interface font)
- **Quotes**: Source Serif 4 (Formal content)

### **Components**
- **Mobile Navigation**: Professional gradient with government colors
- **Form Fields**: Real-time validation with visual feedback
- **Cards**: Soft shadows with government-appropriate styling
- **Buttons**: Gradient backgrounds with hover effects

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Modern web browser

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/Saif-Killedar/CareerCompass.git
cd CareerCompass
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

### **Build for Production**
```bash
npm run build
npm start
```

## 📱 Mobile Optimization

### **Performance Features**
- **Mobile-First Design** - Optimized for smartphones
- **Lazy Loading** - Components load as needed
- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic bundle splitting
- **PWA Ready** - Service worker and manifest included

### **UX Features**
- **Touch Targets** - Minimum 44px for accessibility
- **Thumb Navigation** - Bottom navigation for easy reach
- **Smooth Animations** - 60fps transitions
- **Loading States** - Professional skeleton screens
- **Offline Support** - Basic offline functionality

## 🎯 Target Audience

### **Primary Users**
- **Students** (Class 10-12, Graduates) in Jammu & Kashmir
- **Parents** seeking guidance for their children
- **Career Counselors** in educational institutions
- **Government Officials** monitoring education metrics

### **User Personas**
1. **Arjun** - 12th class student from Srinagar, confused about career options
2. **Priya** - Graduate from Jammu, looking for government job opportunities
3. **Mohammad** - 10th class student from Baramulla, interested in medical field
4. **Sunita** - Parent from Kathua, wants best education for her daughter

## 🏛️ Government Integration

### **Official Features**
- **Government Verification** - Official J&K government platform
- **District-wise Data** - Localized information for all J&K districts
- **Government College Database** - Complete and updated information
- **Scholarship Integration** - PMSSS and other government schemes
- **Official Branding** - Government-appropriate design and colors

### **Compliance**
- **Data Privacy** - Compliant with government data policies
- **Accessibility** - WCAG 2.1 AA compliance
- **Security** - Government-grade security measures
- **Multi-language** - Support for English, Hindi, Urdu (future)

## 📊 Impact Metrics

### **Expected Outcomes**
- **50,000+ Students** guided annually
- **30% Increase** in government college enrollment
- **90% Reduction** in missed scholarship deadlines
- **85% User Satisfaction** rate
- **24/7 Availability** for career guidance

### **Success Indicators**
- User engagement and retention rates
- Career quiz completion rates
- College application success rates
- Scholarship application rates
- User feedback and ratings

## 🛠️ Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### **Code Quality**
- **TypeScript** - Full type safety
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality checks

### **Testing**
```bash
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:coverage # Generate coverage report
```

## 🤝 Contributing

We welcome contributions from developers, designers, and education experts!

### **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure mobile-first design principles
- Maintain government-appropriate branding

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏛️ Government Partnership

**Developed in partnership with:**
- Government of Jammu & Kashmir
- Department of Higher Education, J&K
- Directorate of Technical Education, J&K
- J&K Board of School Education

## 📞 Support & Contact

### **Technical Support**
- **Email**: support@careercompass-jk.gov.in
- **Phone**: +91-194-2440000
- **Website**: https://careercompass-jk.gov.in

### **Government Offices**
- **Higher Education Department**: Srinagar, J&K
- **Technical Education**: Jammu, J&K
- **Student Helpline**: 1800-XXX-XXXX

## 🙏 Acknowledgments

- **Government of Jammu & Kashmir** for vision and support
- **Students of J&K** for feedback and testing
- **Educational Institutions** for collaboration
- **Open Source Community** for tools and libraries
- **Design Inspiration** from government portals and mobile-first platforms

---

**"Knowledge Is Power"** - Empowering every student in Jammu & Kashmir to make informed career decisions and achieve their dreams.

Made with ❤️ for the students of Jammu & Kashmir | Government of J&K Initiative
