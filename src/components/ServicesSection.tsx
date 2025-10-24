'use client'
import { useTheme } from '@/contexts/ThemeContext'

export default function ServicesSection() {
  const { isDarkMode } = useTheme()
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
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Comprehensive respiratory care services with advanced interventional pulmonology 
            procedures designed to provide precise diagnosis and effective treatment for lung diseases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <div key={featureIndex} className={`flex items-center text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 group-hover:scale-125 transition-transform duration-300`}></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
} 