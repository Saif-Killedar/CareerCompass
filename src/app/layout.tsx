import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import MobileNavigation from '../components/MobileNavigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CareerCompass J&K | One-Stop Career & Education Advisor',
  description: 'Official career guidance platform for students of Jammu & Kashmir. Discover your ideal career path, explore government colleges, and never miss important deadlines.',
  keywords: [
    'career guidance',
    'Jammu Kashmir education',
    'government colleges JK',
    'career counseling',
    'student guidance',
    'higher education JK',
    'aptitude test',
    'college admissions'
  ],
  authors: [{ name: 'Government of Jammu & Kashmir - Higher Education Department' }],
  creator: 'Government of Jammu & Kashmir',
  publisher: 'Higher Education Department, J&K',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://careercompass-jk.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CareerCompass J&K | One-Stop Career & Education Advisor',
    description: 'Official career guidance platform for students of Jammu & Kashmir',
    url: 'https://careercompass-jk.vercel.app',
    siteName: 'CareerCompass J&K',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CareerCompass J&K - Career Guidance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerCompass J&K | Career & Education Advisor',
    description: 'Official career guidance platform for J&K students',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="application-name" content="CareerCompass J&K" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CareerCompass J&K" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0284c7" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-900`}>
        <main className="min-h-screen">
          {children}
        </main>
        <MobileNavigation />
      </body>
    </html>
  )
}
