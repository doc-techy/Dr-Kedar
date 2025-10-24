'use client'
import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/images/Dr-Kedar-Hibare-01.jpg'
import { useTheme } from '@/contexts/ThemeContext'

export default function HeroSection() {
  const { isDarkMode } = useTheme()
  
  return (
    <section className="relative overflow-hidden min-h-screen">
      
             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-20">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Professional Badge - Liquid Glass */}
            {/* <div className={`inline-flex items-center gap-3 ${isDarkMode ? 'bg-white/8 backdrop-blur-2xl border border-white/15' : 'bg-blue-50 border border-blue-200'} rounded-full px-6 py-3 shadow-2xl relative overflow-hidden group`}>
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/20 via-transparent to-white/10' : 'bg-gradient-to-r from-blue-100 via-transparent to-blue-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse relative z-10"></div>
              <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-700'} font-semibold text-sm uppercase tracking-wider relative z-10`}>
                Lead Consultant Pulmonologist
              </span>
            </div> */}
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                Dr. Kedar Hibare
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400"></div>
              <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Interventional Pulmonology Expert</span>
              </h2>
            </div>
            
            {/* Professional Credentials */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-teal-600">20+</div>
                <div className="text-sm text-gray-600 font-medium">Publications</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-green-600">1st</div>
                <div className="text-sm text-gray-600 font-medium">in India IAB</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-purple-600">🇩🇪</div>
                <div className="text-sm text-gray-600 font-medium">Germany Trained</div>
              </div>
            </div> */}
            
            {/* Description */}
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-xl`}>
              Internationally trained specialist in advanced bronchoscopy and interventional pulmonology. 
              Expert in minimally invasive procedures for complex respiratory conditions with a focus on 
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}> patient-centered care and cutting-edge treatment</span>.
            </p>
            
            {/* Specializations */}
            <div className="space-y-3">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Specializations</h3>
              <div className="flex flex-wrap gap-2">
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-blue-300 border border-white/15' : 'bg-blue-50 text-blue-700 border border-blue-200'} px-4 py-2 rounded-full text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-blue-100 via-transparent to-blue-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Advanced Bronchoscopy</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-teal-300 border border-white/15' : 'bg-teal-50 text-teal-700 border border-teal-200'} px-4 py-2 rounded-full text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-teal-100 via-transparent to-teal-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">EBUS Procedures</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-green-300 border border-white/15' : 'bg-green-50 text-green-700 border border-green-200'} px-4 py-2 rounded-full text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-green-100 via-transparent to-green-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Thoracic Oncology</span>
                </span>
                <span className={`${isDarkMode ? 'bg-white/8 backdrop-blur-2xl text-purple-300 border border-white/15' : 'bg-purple-50 text-purple-700 border border-purple-200'} px-4 py-2 rounded-full text-sm font-medium shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                  <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-white/15 via-transparent to-white/5' : 'bg-gradient-to-r from-purple-100 via-transparent to-purple-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative z-10">Airway Interventions</span>
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                href="/book-appointment"
                className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-4 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a 
                href="tel:08061222000"
                className={`border-2 ${isDarkMode ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400' : 'border-gray-400 hover:border-blue-600 text-gray-700 hover:text-blue-600'} px-8 py-4 font-semibold text-lg transition-all duration-300 group`}
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </span>
              </a>
            </div>
          </div>
          
          {/* Doctor Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              
                             {/* Professional frame */}
               <div className="relative bg-white/8 backdrop-blur-3xl border border-white/15 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                 {/* Specular highlights for Liquid Glass effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="relative w-full max-w-md mx-auto">
                   
                   {/* Background decorative elements */}
                   <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/30 rounded-full opacity-60"></div>
                   <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-400/30 rounded-full opacity-40"></div>
                   
                   {/* Main image */}
                   <div className="relative rounded-xl overflow-hidden">
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