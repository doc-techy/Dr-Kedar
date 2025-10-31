'use client'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ServicesSection() {
  const { isDarkMode } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const scrollRight = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const services = [
    {
      title: "Advanced Bronchoscopy",
      description: "Rigid & Flexible bronchoscopy procedures for precise lung diagnosis and treatment planning with state-of-the-art imaging technology.",
      icon: "🩺",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      features: ["Rigid Bronchoscopy", "Flexible Bronchoscopy", "Real-time Imaging"]
    },
    {
      title: "Endobronchial Ultrasound (EBUS)",
      description: "TBNA & Transbronchial Cryobiopsy for accurate tissue sampling and comprehensive lung disease diagnosis.",
      icon: "🔬",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      features: ["EBUS-TBNA", "Cryobiopsy", "Tissue Analysis"]
    },
    {
      title: "Airway Interventions",
      description: "Cryotherapy, APC, Laser Therapy, Balloon Dilation & Airway Stenting for complex airway tumors and obstructions.",
      icon: "⚕️",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      features: ["Laser Therapy", "Balloon Dilation", "Airway Stenting"]
    },
    {
      title: "Lung Cancer Diagnosis",
      description: "Comprehensive thoracic oncology care with cutting-edge diagnostic and personalized treatment solutions.",
      icon: "🫀",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      features: ["Early Detection", "Staging", "Treatment Planning"]
    },
    {
      title: "Interstitial Lung Diseases",
      description: "Expert diagnosis and management of complex lung conditions, pulmonary fibrosis, and rare respiratory disorders.",
      icon: "🫁",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      features: ["ILD Diagnosis", "Pulmonary Function", "Treatment Plans"]
    },
    {
      title: "Therapeutic Thoracoscopy",
      description: "Minimally invasive procedures including pleuroscopy and IPC placement for pleural conditions and lung diseases.",
      icon: "🏥",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      features: ["Pleuroscopy", "IPC Placement", "Pleural Biopsy"]
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If at the last slide, go back to the first slide (infinite loop)
        if (prevIndex === services.length - 1) {
          return 0
        }
        // Otherwise, go to the next slide
        return prevIndex + 1
      })
    }, 3000) // Auto-slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section id="services" className="relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in">
          {/* <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Advanced Medical Services
          </div> */}
              <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Specialized Pulmonology Services</span>
              </h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed hidden md:block`}>
            Comprehensive respiratory care services with advanced interventional pulmonology 
            procedures designed to provide precise diagnosis and effective treatment for lung diseases.
          </p>
        </div>
        
        {/* Mobile carousel with prev/next */}
        <div className="sm:hidden pt-8 pb-8 mb-6">
          {services.slice(currentIndex, currentIndex + 1).map((service, index) => (
                <div 
                  key={index} 
                  className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-6 sm:p-5 lg:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-xl sm:rounded-2xl relative overflow-hidden`}
              style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Specular highlights for Liquid Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Service Icon */}
              <div className="relative mb-4 sm:mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-xl sm:rounded-2xl scale-110 opacity-50 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="relative w-16 h-16 sm:w-12 sm:h-12 mx-auto bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl sm:text-xl lg:text-2xl medical-icon">{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
                  <h3 className={`text-xl sm:text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} mb-3 sm:mb-3 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4 sm:mb-4 text-sm sm:text-sm`}>
                    {service.description}
                  </p>
              
              {/* Features */}
              <div className="space-y-2 mb-3 sm:mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-start text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-2 mt-1 group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
          
          {/* Mobile navigation controls below content */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={scrollLeft} 
              disabled={currentIndex === 0}
              className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Round slider indicators */}
            <div className="flex items-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? `${isDarkMode ? 'bg-white' : 'bg-gray-900'} w-2.5 h-2.5`
                      : `${isDarkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-400 hover:bg-gray-600'} w-2 h-2`
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={scrollRight} 
              disabled={currentIndex === services.length - 1}
              className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-2 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid on tablet/desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 mb-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-4 sm:p-5 lg:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-xl sm:rounded-2xl relative overflow-hidden`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Specular highlights for Liquid Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Service Icon */}
              <div className="relative mb-3 sm:mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-xl sm:rounded-2xl scale-110 opacity-50 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl medical-icon">{service.icon}</span>
                </div>
              </div>
              {/* Content */}
              <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} mb-2 sm:mb-3 transition-colors duration-300`}>
                {service.title}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm`}>
                {service.description}
              </p>
              {/* Features */}
              <div className="space-y-1 mb-3 sm:mb-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-start text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 mt-0.5 group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                    <span className="leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Desktop navigation controls below content */}
        <div className="hidden sm:flex items-center justify-center gap-4 mt-8 mb-8 sm:mb-12 lg:mb-16">
          <button 
            onClick={scrollLeft} 
            disabled={currentIndex === 0}
            className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-3 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed hover:shadow-lg`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Round slider indicators */}
          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? `${isDarkMode ? 'bg-white' : 'bg-gray-900'} w-3 h-3`
                    : `${isDarkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-400 hover:bg-gray-600'} w-2.5 h-2.5`
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={scrollRight} 
            disabled={currentIndex === services.length - 1}
            className={`${isDarkMode ? 'text-white/80 hover:text-white disabled:text-white/30' : 'text-gray-700 hover:text-gray-900 disabled:text-gray-300'} p-3 rounded-full border ${isDarkMode ? 'border-white/20 hover:border-white/40 disabled:border-white/10' : 'border-gray-300 hover:border-gray-400 disabled:border-gray-200'} transition-all duration-300 disabled:cursor-not-allowed hover:shadow-lg`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        
      </div>
    </section>
  )
} 