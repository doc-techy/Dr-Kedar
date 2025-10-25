'use client'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState('professional')
  // Professional Background Data Array
  const professionalBackground = [
    {
      id: 1,
      role: "Lead Consultant - Clinical & Interventional Pulmonologist",
      hospital: "SPARSH Hospital",
      timePeriod: "Aug 2025 - Present",
      location: "Bangalore",
      color: "blue",
      icon: "🏥"
    },
    {
      id: 2,
      role: "International Fellowship",
      hospital: "Ruhrlandklinik – West German Lung Center",
      timePeriod: "2016",
      location: "Essen, Germany",
      color: "blue",
      icon: "🌍"
    },
    {
      id: 3,
      role: "Fellowship in Interventional Pulmonology",
      hospital: "Rajiv Gandhi Cancer Institute",
      timePeriod: "2015",
      location: "New Delhi",
      color: "blue",
      icon: "🎓"
    },
    {
      id: 4,
      role: "Clinical Experience",
      hospital: "Various prestigious institutions",
      timePeriod: "2006 - Present",
      location: "Multiple locations",
      color: "blue",
      icon: "⚕️"
    },
    {
      id: 5,
      role: "",
      hospital: "",
      timePeriod: "",
      location: "",
      color: "",
      icon: ""
    }
  ];

  // Educational Background Data Array
  const educationalBackground = [
    {
      id: 1,
      title: "International Observership",
      description: "National University Hospital, Singapore & Serdang Hospital, Malaysia",
      location: "Singapore & Malaysia",
      timePeriod: "2016",
      color: "blue",
      icon: "🔬"
    },
    {
      id: 2,
      title: "Fellowship in Interventional Pulmonology",
      description: "Ruhrlandklinik West Germany Lung Center",
      location: "Essen, Germany",
      timePeriod: "2016",
      color: "blue",
      icon: "🌍"
    },
    {
      id: 3,
      title: "Fellowship in Interventional Pulmonology & Thoracic Oncology",
      description: "Rajiv Gandhi Cancer Institute & Research Center",
      location: "New Delhi",
      timePeriod: "2015",
      color: "blue",
      icon: "🎯"
    },
    {
      id: 4,
      title: "DNB (Respiratory Diseases)",
      description: "St John's National Academy of Health Sciences",
      location: "Bangalore, Karnataka",
      timePeriod: "2012",
      color: "blue",
      icon: "🏥"
    },
    {
      id: 5,
      title: "MBBS",
      description: "Dr B R Ambedkar Medical College & Hospital",
      location: "Bangalore, Karnataka",
      timePeriod: "2006",
      color: "blue",
      icon: "🎓"
    }
  ];

  // Achievement Highlights Data Array
  const achievements = [
    {
      id: 1,
      title: "Pioneer in India",
      description: "First in India to complete IAB-recognized Interventional Pulmonology Fellowship",
      icon: "🥇",
      color: "blue"
    },
    {
      id: 2,
      title: "International Training",
      description: "Advanced training at West German Lung Center, bringing global expertise to India",
      icon: "🌍",
      color: "teal"
    },
    {
      id: 3,
      title: "Research Excellence",
      description: "20+ publications and pioneer in 3D printing technology for airway disorders",
      icon: "🔬",
      color: "purple"
    }
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' = 'bg') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-teal-500'
      },
      teal: {
        bg: 'bg-teal-50',
        text: 'text-teal-600',
        border: 'border-teal-200',
        gradient: 'from-teal-500 to-blue-500'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-blue-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="about" className="py-6 lg:py-8 relative overflow-hidden min-h-[calc(100vh-148px)]">
      
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Professional Excellence
          </div> */}
          
              <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Academic Excellence & Professional Mastery</span>
              </h2>
              {/* <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm max-w-2xl mx-auto`}>Leading pulmonology expert with international training and cutting-edge expertise</p> */}
        </div>
        
        {/* Combined Professional & Academic Journey */}
        <div className="animate-fade-in">
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl'} rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500`}>
            {/* Specular highlights for Liquid Glass effect */}
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-white/15 via-transparent to-white/5' : 'bg-gradient-to-br from-blue-50/30 via-transparent to-teal-50/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            <div className={`absolute top-0 left-0 w-full h-1 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/25 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-200/50 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Mobile Toggle Button - Only visible on mobile */}
            <div className="lg:hidden mb-8">
              <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl p-2 shadow-lg relative w-full max-w-lg mx-auto flex`}>
                <div 
                  className={`absolute top-2 bottom-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg transition-all duration-300 ease-in-out ${
                    activeTab === 'professional' 
                      ? 'left-2 w-[calc(50%-0.5rem)]' 
                      : 'left-[calc(50%-0.5rem)] w-[calc(50%-0.5rem)]'
                  }`}
                ></div>
                <button
                  onClick={() => setActiveTab('professional')}
                  className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer relative z-10 ${
                    activeTab === 'professional'
                      ? 'text-white'
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  <span className="text-base">💼</span>
                  Professional
                </button>
                <button
                  onClick={() => setActiveTab('academic')}
                  className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer relative z-10 ${
                    activeTab === 'academic'
                      ? 'text-white'
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  <span className="text-base">🎓</span>
                  Academic
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Professional Background */}
              <div className={`space-y-4 ${activeTab === 'professional' ? 'block' : 'hidden'} lg:block`}>
                <div className="text-center mb-4">
                      <h4 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center justify-center`}>
                        {/* <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-sm"></div> */}
                        Professional Journey
                      </h4>
                      <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto"></div>
                </div>
                {Array.from({ length: 5 }, (_, index) => {
                  const item = professionalBackground[index] || { id: index + 1, role: '', hospital: '', timePeriod: '', location: '', color: 'blue', icon: '' };
                  const colorClasses = getColorClasses(item.color);
                  const lightModeClasses = `${colorClasses.bg} ${colorClasses.border} backdrop-blur-sm shadow-md`;
                  return (
                    <div key={item.id} className={`${isDarkMode ? 'bg-white/6 backdrop-blur-2xl border border-white/12' : lightModeClasses} p-4 rounded-lg shadow-lg relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out h-auto lg:h-[110px] lg:flex lg:items-center cursor-pointer isolate hover:z-10`}>
                      <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 w-full">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                            <div className="flex-1">
                              {item.role ? (
                                <>
                                  <p className={`font-semibold ${isDarkMode ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'} text-base leading-tight transition-colors duration-300`}>{item.role}</p>
                                  <p className={`${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'} text-sm font-medium mt-1 transition-colors duration-300`}>{item.hospital}</p>
                                </>
                              ) : (
                                <div className="h-8"></div>
                              )}
                            </div>
                            <div className="lg:text-right flex-shrink-0 lg:ml-2 mt-2 lg:mt-0">
                              {item.timePeriod ? (
                                <>
                                  <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'} text-sm font-medium block`}>
                                    {item.timePeriod}
                                  </span>
                                  <p className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'} text-sm mt-1`}>{item.location}</p>
                                </>
                              ) : (
                                <div className="h-8"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Educational Background */}
              <div className={`space-y-4 ${activeTab === 'academic' ? 'block' : 'hidden'} lg:block`}>
                <div className="text-center mb-4">
                      <h4 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 flex items-center justify-center`}>
                        {/* <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mr-3 shadow-sm"></div> */}
                        Academic Journey
                      </h4>
                      <div className="w-20 h-0.5 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full mx-auto"></div>
                </div>
                {Array.from({ length: 5 }, (_, index) => {
                  const item = educationalBackground[index] || { id: index + 1, title: '', description: '', timePeriod: '', location: '', color: 'blue', icon: '' };
                  const colorClasses = getColorClasses(item.color);
                  const lightModeClasses = `${colorClasses.bg} ${colorClasses.border} backdrop-blur-sm shadow-md`;
                  return (
                    <div key={item.id} className={`${isDarkMode ? 'bg-white/6 backdrop-blur-2xl border border-white/12' : lightModeClasses} p-4 rounded-lg shadow-lg relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out h-auto lg:h-[110px] lg:flex lg:items-center cursor-pointer isolate hover:z-10`}>
                      <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 w-full">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                            <div className="flex-1">
                              {item.title ? (
                                <>
                                  <p className={`font-semibold ${isDarkMode ? 'text-white group-hover:text-teal-300' : 'text-gray-900 group-hover:text-teal-600'} text-base leading-tight transition-colors duration-300`}>{item.title}</p>
                                  <p className={`${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'} text-sm font-medium mt-1 transition-colors duration-300`}>{item.description}</p>
                                </>
                              ) : (
                                <div className="h-8"></div>
                              )}
                            </div>
                            <div className="lg:text-right flex-shrink-0 lg:ml-2 mt-2 lg:mt-0">
                              {item.timePeriod ? (
                                <>
                                  <span className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'} text-sm font-medium block`}>
                                    {item.timePeriod}
                                  </span>
                                  <p className={`${isDarkMode ? 'text-blue-300' : 'text-blue-600'} text-sm mt-1`}>{item.location}</p>
                                </>
                              ) : (
                                <div className="h-8"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement highlights */}
        
      </div>
    </section>
  )
} 