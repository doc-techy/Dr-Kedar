'use client'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/images/Dr-Kedar-Hibare-01.jpg'
import { useTheme } from '@/contexts/ThemeContext'

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  
  return (
    <section className="relative overflow-hidden min-h-screen pb-6 sm:pb-8 lg:pb-10">
      
             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen pt-16 sm:pt-20">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                Dr. Kedar Hibare
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400"></div>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Interventional Pulmonology Expert</span>
              </h2>
            </div>
            
            {/* Description */}
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-xl`}>
              Internationally trained specialist in advanced bronchoscopy and interventional pulmonology. 
              Expert in minimally invasive procedures for complex respiratory conditions with a focus on 
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}> patient-centered care and cutting-edge treatment</span>.
            </p>
            
            {/* Specializations */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Specializations</h3>
              <div className="flex flex-wrap gap-2">
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-blue-300 border border-white/15' : 'bg-blue-50 text-blue-700 border border-blue-200'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-blue-100 via-transparent to-blue-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Advanced Bronchoscopy</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-teal-300 border border-white/15' : 'bg-teal-50 text-teal-700 border border-teal-200'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-teal-100 via-transparent to-teal-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">EBUS Procedures</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-green-300 border border-white/15' : 'bg-green-50 text-green-700 border border-green-200'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-green-100 via-transparent to-green-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Thoracic Oncology</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-purple-300 border border-white/15' : 'bg-purple-50 text-purple-700 border border-purple-200'} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-purple-100 via-transparent to-purple-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Airway Interventions</span>
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link 
                href="/book-appointment"
                className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a 
                href="tel:08061222000"
                className={`border-2 ${isDarkMode ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400' : 'border-gray-400 hover:border-blue-600 text-gray-700 hover:text-blue-600'} px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-300 group`}
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </span>
              </a>
            </div>
          </div>
          
          {/* Doctor Image Section */}
          <div className="order-1 lg:order-2 relative mt-4 sm:mt-6 lg:mt-0">
            <div className="relative">
              
                             {/* Professional frame */}
               <div className="relative bg-white/8 backdrop-blur-3xl border border-white/15 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                 {/* Specular highlights for Liquid Glass effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                   
                   {/* Background decorative elements */}
                   <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 md:-top-4 md:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-blue-400/30 rounded-full opacity-60"></div>
                   <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 md:-bottom-4 md:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-teal-400/30 rounded-full opacity-40"></div>
                   
                   {/* Main image */}
                   <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                     <Image
                       src={img}
                       alt="Dr. Kedar Hibare - Lead Consultant Interventional Pulmonologist"
                       width={500}
                       height={600}
                       className="w-full h-auto object-cover"
                       priority
                     />
                   </div>
                 </div>
                             </div>
             </div>
          </div>
                 </div>
       </div>
    </section>
  )
} 