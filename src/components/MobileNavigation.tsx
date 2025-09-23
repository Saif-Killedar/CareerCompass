'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Target, GraduationCap, TrendingUp, Clock, Users } from 'lucide-react';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    activeColor: 'bg-primary-600',
    hoverColor: 'group-hover:bg-primary-600'
  },
  {
    name: 'Quiz',
    href: '/quiz',
    icon: Target,
    activeColor: 'bg-primary-600',
    hoverColor: 'group-hover:bg-primary-600'
  },
  {
    name: 'Colleges',
    href: '/colleges',
    icon: GraduationCap,
    activeColor: 'bg-primary-600',
    hoverColor: 'group-hover:bg-primary-600'
  },
  {
    name: 'Careers',
    href: '/careers',
    icon: TrendingUp,
    activeColor: 'bg-primary-600',
    hoverColor: 'group-hover:bg-primary-600'
  },
  {
    name: 'Timeline',
    href: '/timeline',
    icon: Clock,
    activeColor: 'bg-primary-600',
    hoverColor: 'group-hover:bg-primary-600'
  }
];

export default function MobileNavigation() {
  const pathname = usePathname();

  // Show navigation on all pages except auth pages
  if (pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 border-t-2 border-government-500 shadow-2xl z-50 lg:hidden">
      <div className="safe-area-bottom">
        <div className="flex items-center justify-around px-2 py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center py-2 px-3 min-w-0 flex-1 group relative transition-all duration-200"
              >
                <div className={`w-11 h-11 mb-1 flex items-center justify-center rounded-2xl transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-white text-primary-700 shadow-lg scale-105' 
                    : 'bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-105'
                }`}>
                  <Icon className="w-5 h-5 transition-all duration-300" />
                </div>
                <span className={`text-xs font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-primary-200 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                
                {/* Professional Active Indicator */}
                {isActive && (
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-government-400 rounded-full shadow-sm"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
