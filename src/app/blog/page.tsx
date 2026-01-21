'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'

export default function Blog() {
  const { isDarkMode } = useTheme()
  
  const blogCategories = [
    {
      title: 'Asthma',
      id: 'asthma',
      description: 'Understanding asthma management, treatment options, and lifestyle modifications for better respiratory health.',
      available: true
    },
    {
      title: 'COPD',
      id: 'copd',
      description: 'Chronic Obstructive Pulmonary Disease: prevention, management, and advanced treatment approaches.',
      available: false
    },
    {
      title: 'Interstitial Lung Disease',
      id: 'interstitial-lung-disease',
      description: 'Comprehensive information about interstitial lung diseases, diagnosis, and treatment modalities.',
      available: false
    },
    {
      title: 'Pulmonary Hypertension',
      id: 'pulmonary-hypertension',
      description: 'Understanding pulmonary hypertension, its causes, symptoms, and modern treatment strategies.',
      available: false
    },
    {
      title: 'Tuberculosis',
      id: 'tuberculosis',
      description: 'TB awareness, prevention, diagnosis, and treatment protocols for effective management.',
      available: false
    },
    {
      title: 'Lung Function Testing',
      id: 'lung-function-testing',
      description: 'Learn about various pulmonary function tests, their significance, and what to expect.',
      available: false
    },
    {
      title: 'Smoking Cessation',
      id: 'smoking-cessation',
      description: 'Resources and strategies to help quit smoking and improve lung health.',
      available: false
    },
    {
      title: 'Lung Cancer',
      id: 'lung-cancer',
      description: 'Early detection, screening, diagnosis, and treatment options for lung cancer.',
      available: false
    },
    {
      title: 'Bronchoscopy',
      id: 'bronchoscopy',
      description: 'Advanced bronchoscopic procedures, indications, and what patients need to know.',
      available: false
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
              Medical Blog
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Educational content on respiratory health, pulmonary diseases, and treatment options
            </p>
          </div>

          {/* Blog Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogCategories.map((category, index) => {
              const categoryLink = `/blog/${category.id}`
              const isAvailable = category.available
              
              // If available, render as clickable Link
              if (isAvailable) {
                return (
                  <Link
                    key={category.id}
                    href={categoryLink}
                    className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl block cursor-pointer ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-blue-400/30 hover:border-blue-400/60' 
                        : 'bg-white border border-blue-200 hover:border-blue-400 shadow-lg'
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/0 to-teal-600/0 group-hover:from-blue-600/10 group-hover:to-teal-600/10 transition-all duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Category Number */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-blue-500 to-teal-500' 
                          : 'bg-gradient-to-br from-blue-600 to-teal-600'
                      }`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      
                      {/* Category Title */}
                      <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-white group-hover:text-blue-400' 
                          : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {category.title}
                      </h2>
                      
                      {/* Category Description */}
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {category.description}
                      </p>
                      
                      {/* Learn More Arrow */}
                      <div className="mt-6 flex items-center">
                        <span className={`text-sm font-medium mr-2 ${
                          isDarkMode 
                            ? 'text-blue-400 group-hover:text-blue-300' 
                            : 'text-blue-600 group-hover:text-blue-700'
                        }`}>
                          Learn More
                        </span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1 ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              }
              
              // If not available, render as non-clickable div
              return (
                <div
                  key={category.id}
                  className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 opacity-75' 
                      : 'bg-gray-100 border border-gray-300 opacity-75'
                  }`}
                >
                  <div className="relative z-10">
                    {/* Category Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-600 to-gray-700' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    
                    {/* Category Title */}
                    <h2 className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {category.title}
                    </h2>
                    
                    {/* Category Description */}
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {category.description}
                    </p>
                    
                    {/* Coming Soon */}
                    <div className="mt-6 flex items-center">
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        Coming Soon
                      </span>
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
            <a
              href="/book-appointment"
              className="inline-block bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-lg"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}