'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [activeYear, setActiveYear] = useState('2025')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Timeline Data
  const timelineData = [
    {
      year: '2025',
      title: 'Lead Consultant',
      subtitle: 'SPARSH Hospital',
      description: 'Leading advanced pulmonology services and pioneering interventional procedures in Bangalore',
      icon: '🏥',
      color: 'from-blue-500 to-cyan-500',
      achievements: ['Advanced Procedures', 'Team Leadership', 'Patient Care Excellence'],
      type: 'professional'
    },
    {
      year: '2016',
      title: 'International Fellowship',
      subtitle: 'Ruhrlandklinik, Germany',
      description: 'Advanced training in cutting-edge interventional pulmonology techniques at world-renowned center',
      icon: '🌍',
      color: 'from-purple-500 to-pink-500',
      achievements: ['Global Expertise', 'Advanced Techniques', 'International Recognition'],
      type: 'professional'
    },
    {
      year: '2016',
      title: 'International Observership',
      subtitle: 'Singapore & Malaysia',
      description: 'National University Hospital, Singapore & Serdang Hospital, Malaysia - Global perspective on respiratory care',
      icon: '🔬',
      color: 'from-cyan-500 to-blue-500',
      achievements: ['Global Perspective', 'International Exposure', 'Advanced Learning'],
      type: 'educational'
    },
    {
      year: '2015',
      title: 'Fellowship Training',
      subtitle: 'Rajiv Gandhi Cancer Institute',
      description: 'Specialized training in thoracic oncology and interventional pulmonology procedures',
      icon: '🎯',
      color: 'from-green-500 to-teal-500',
      achievements: ['Specialized Training', 'Cancer Care', 'Interventional Skills'],
      type: 'professional'
    },
    {
      year: '2012',
      title: 'DNB Qualification',
      subtitle: 'St John\'s Academy',
      description: 'Advanced qualification in Respiratory Diseases from premier medical institution',
      icon: '🎓',
      color: 'from-orange-500 to-red-500',
      achievements: ['Advanced Qualification', 'Medical Excellence', 'Specialized Knowledge'],
      type: 'educational'
    },
    {
      year: '2006',
      title: 'Medical Foundation',
      subtitle: 'Dr B R Ambedkar Medical College',
      description: 'Strong foundation in medical sciences and patient care principles',
      icon: '⚕️',
      color: 'from-indigo-500 to-blue-500',
      achievements: ['Medical Foundation', 'Patient Care', 'Clinical Skills'],
      type: 'educational'
    }
  ]

  // Key Statistics
  const stats = [
    { number: '1st', label: 'Pioneer in India', description: 'IAB-recognized Fellowship' },
    { number: '20+', label: 'Publications', description: 'Research Excellence' },
    { number: '15+', label: 'Years Experience', description: 'Clinical Practice' },
    { number: '1000+', label: 'Patients Treated', description: 'Successful Outcomes' }
  ]

  const activeData = timelineData.find(item => item.year === activeYear) || timelineData[0]

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gradient-to-r from-blue-200 to-purple-300'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-teal-400 to-cyan-600' : 'bg-gradient-to-r from-teal-200 to-cyan-300'
        } blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span>Medical Excellence & Innovation</span>
          </div>
          
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 leading-tight`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Dr. Kedar Hibare
            </span>
          </h1>
          
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-medium`}>
            Pioneering interventional pulmonologist with international expertise, bringing cutting-edge respiratory care to India
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>
                {stat.label}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-12`}>
            Professional Journey
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Navigation */}
            <div className="lg:col-span-1">
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 sticky top-8`}>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-6`}>
                  Timeline
                </h3>
                <div className="space-y-3">
                  {timelineData.map((item, index) => (
                    <button
                      key={`${item.year}-${index}`}
                      onClick={() => setActiveYear(item.year)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                        activeYear === item.year
                          ? `${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900 text-white'} shadow-lg`
                          : `${isDarkMode ? 'hover:bg-white/5 text-gray-300 hover:text-white' : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'}`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="text-2xl">{item.icon}</span>
                          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                            item.type === 'professional' 
                              ? 'bg-blue-500' 
                              : 'bg-green-500'
                          }`}></div>
                        </div>
                        <div>
                          <div className="font-semibold">{item.year}</div>
                          <div className="text-sm opacity-80">{item.title}</div>
                          <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                            item.type === 'professional'
                              ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`
                              : `${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`
                          }`}>
                            {item.type === 'professional' ? 'Professional' : 'Educational'}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:col-span-2">
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-8 transition-all duration-500`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeData.color} flex items-center justify-center text-3xl`}>
                    {activeData.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>
                        {activeData.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activeData.type === 'professional'
                          ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`
                          : `${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`
                      }`}>
                        {activeData.type === 'professional' ? 'Professional' : 'Educational'}
                      </span>
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold`}>
                      {activeData.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                  {activeData.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {activeData.achievements.map((achievement, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-white/10 text-white border border-white/20' 
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className={`${isDarkMode ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20' : 'bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 border border-gray-200'} rounded-3xl p-12 max-w-4xl mx-auto`}>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl font-bold mb-6`}>
              Experience World-Class Pulmonology Care
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8 max-w-2xl mx-auto`}>
              Book a consultation with Dr. Kedar Hibare and benefit from international expertise combined with personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Book Consultation
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/#video-publications"
                className={`inline-flex items-center gap-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'} px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                View Research
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 