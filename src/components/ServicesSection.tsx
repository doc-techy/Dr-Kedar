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
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-2xl relative overflow-hidden`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Specular highlights for Liquid Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Service Icon */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} rounded-2xl scale-110 opacity-50 group-hover:scale-125 transition-transform duration-500`}></div>
                <div className="relative w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl medical-icon">{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
                  <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} mb-3 transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4 text-sm`}>
                    {service.description}
                  </p>
              
              {/* Features */}
              <div className="space-y-1 mb-4">
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

        {/* Mobile Scrolling View */}
        <div className="md:hidden mb-16">
          {/* Mobile Service Card */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-2xl relative overflow-hidden flex flex-col items-center text-center`}>
                    {/* Specular highlights for Liquid Glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-3xl`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Service Description */}
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4 text-sm`}>
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-start justify-center text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 mt-0.5 shadow-sm flex-shrink-0`}></div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Line */}
                    <div className={`w-full h-0.5 bg-gradient-to-r ${service.gradient} rounded-full mt-4 opacity-60`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Moved below content */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full ${isDarkMode ? 'bg-white/20 border border-white/40 text-white' : 'bg-gray-100 border border-gray-300'} ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'} transition-all duration-300`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2 justify-center">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? (isDarkMode ? 'bg-blue-400' : 'bg-blue-600') 
                      : (isDarkMode ? 'bg-white/30' : 'bg-gray-300')
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollRight}
              disabled={currentIndex === services.length - 1}
              className={`p-3 rounded-full ${isDarkMode ? 'bg-white/20 border border-white/40 text-white' : 'bg-gray-100 border border-gray-300'} ${currentIndex === services.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'} transition-all duration-300`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
} 