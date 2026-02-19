'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const { isDarkMode } = useTheme()
  
  const blogCategories = [
    {
      title: 'Asthma Triggers & Precautions',
      id: 'asthma',
      description: 'Understanding asthma management, treatment options, and lifestyle modifications for better respiratory health.',
      available: true,
      icon: '🫁',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      color: 'emerald',
      image: '/images/asthma.jpeg',
      imageAlt: 'Asthma triggers guide'
    },
    {
      title: 'Steroids in Asthma',
      id: 'asthma-steroids',
      description: 'Steroids are central to asthma treatment, yet often misunderstood. Learn the key differences between inhaled and oral steroids.',
      available: true,
      icon: '💊',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      color: 'blue',
      image: '/images/astma2.jpeg',
      imageAlt: 'Steroids in asthma guide'
    },
    {
      title: 'COPD',
      id: 'copd',
      description: 'Chronic Obstructive Pulmonary Disease: prevention, management, and advanced treatment approaches.',
      available: false,
      icon: '🌬️',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Interstitial Lung Disease',
      id: 'interstitial-lung-disease',
      description: 'Comprehensive information about interstitial lung diseases, diagnosis, and treatment modalities.',
      available: false,
      icon: '🔬',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Pulmonary Hypertension',
      id: 'pulmonary-hypertension',
      description: 'Understanding pulmonary hypertension, its causes, symptoms, and modern treatment strategies.',
      available: false,
      icon: '💓',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Tuberculosis',
      id: 'tuberculosis',
      description: 'TB awareness, prevention, diagnosis, and treatment protocols for effective management.',
      available: false,
      icon: '🦠',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Lung Function Testing',
      id: 'lung-function-testing',
      description: 'Learn about various pulmonary function tests, their significance, and what to expect.',
      available: false,
      icon: '📊',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Smoking Cessation',
      id: 'smoking-cessation',
      description: 'Resources and strategies to help quit smoking and improve lung health.',
      available: false,
      icon: '🚭',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Lung Cancer',
      id: 'lung-cancer',
      description: 'Early detection, screening, diagnosis, and treatment options for lung cancer.',
      available: false,
      icon: '🎗️',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Bronchoscopy',
      id: 'bronchoscopy',
      description: 'Advanced bronchoscopic procedures, indications, and what patients need to know.',
      available: false,
      icon: '🔍',
      gradient: 'from-slate-400 to-slate-500',
      color: 'slate'
    }
  ]
  
  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Uniform background for entire webpage */}
      <SectionBackground variant="gradient" />
      
      {/* Background floating circles for Liquid Glass effect - only in dark mode */}
      {isDarkMode && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-tr from-teal-500/40 to-cyan-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/40 to-rose-600/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/40 to-blue-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-tr from-purple-500/35 to-pink-500/35 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </>
      )}
      
      <Header />
      
      {/* Main content */}
      <main className={`relative pt-32 pb-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Medical Blog</span>
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Educational content on respiratory health, pulmonary diseases, and treatment options
            </p>
          </div>

          {/* Blog Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {blogCategories.map((category, index) => {
              const categoryLink = `/blog/${category.id}`
              const isAvailable = category.available
              
              if (isAvailable) {
                return (
                  <Link
                    key={category.id}
                    href={categoryLink}
                    className={`group relative flex flex-col h-full overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                      isDarkMode 
                        ? 'border border-blue-400/30 hover:border-blue-400/60 shadow-lg shadow-blue-500/10' 
                        : 'border border-blue-200 hover:border-blue-400 shadow-lg'
                    }`}
                  >
                    {/* Image at top - for available blogs with images */}
                    {category.image && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.imageAlt || category.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Fade effect at bottom of image */}
                        <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${
                          isDarkMode 
                            ? 'from-gray-900/95 to-transparent' 
                            : 'from-white/95 to-transparent'
                        }`}></div>
                      </div>
                    )}
                    
                    {/* Text content with faded background */}
                    <div className={`flex-1 relative ${
                      category.image
                        ? `px-6 pt-6 pb-4 ${
                            isDarkMode
                              ? 'bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-sm'
                              : 'bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-sm'
                          }`
                        : `px-6 pt-6 pb-4 ${
                            isDarkMode
                              ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90'
                              : 'bg-white'
                          }`
                    }`}>
                      {/* Title and Learn More on same line */}
                      <div className="flex items-center justify-between mb-2 gap-4">
                        <h2 className={`text-2xl font-bold transition-colors duration-300 flex-1 ${
                          isDarkMode 
                            ? 'text-white group-hover:text-blue-400' 
                            : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
                          {category.title}
                        </h2>
                        
                        {/* Learn More */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-300 whitespace-nowrap ${
                          isDarkMode
                            ? 'bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30 backdrop-blur-sm'
                            : 'bg-blue-100/90 text-blue-700 group-hover:bg-blue-200 backdrop-blur-sm'
                        }`}>
                          <span>Learn More</span>
                          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {category.description}
                      </p>
                      
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  </Link>
                )
              }
              
              // Coming Soon
              return (
                <div
                  key={category.id}
                  className="relative"
                >
                  <div className={`relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 opacity-75' 
                      : 'bg-gray-100 border border-gray-300 opacity-75'
                  }`}>
                    
                    {/* Disabled shimmer */}
                    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <h2 className={`text-2xl font-bold mb-3 ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {category.title}
                      </h2>
                      
                      <p className={`text-sm leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {category.description}
                      </p>
                      
                      <div className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm ${
                        isDarkMode
                          ? 'bg-gray-800/50 text-gray-500 border border-gray-700/50'
                          : 'bg-gray-100/50 text-gray-400 border border-gray-300/50'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-400/30' 
              : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Have Questions?
            </h3>
            <p className={`text-lg mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Schedule a consultation to discuss your respiratory health concerns
            </p>
            <Link
              href="/book-appointment"
              className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}