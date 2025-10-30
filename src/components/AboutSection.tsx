'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  // Data
  // Removed other sections per request; keeping only Experience and Education

  const experience = [
    { title: 'Lead Consultant - Interventional Pulmonology', place: 'SPARSH Hospital, Bengaluru', period: '2025 – Present' },
    { title: 'Lead Consultant - Clinical & Interventional Pulmonology', place: 'Narayana Multispeciality Hospital, Bengaluru', period: '2012 – 2025' },
  ]

  const education = [
    { title: 'Fellowship – Interventional Pulmonology & Thoracic Oncology', place: 'Rajiv Gandhi Cancer Institute, New Delhi', period: '2015' },
    { title: 'Fellowship – Interventional Pulmonology', place: 'Ruhrlandklinik, West German Lung Center', period: '2016' },
    { title: "DNB (Respiratory Diseases)", place: "St John's National Academy of Health Sciences", period: '2012' },
    { title: 'MBBS', place: 'Dr B R Ambedkar Medical College & Hospital', period: '2006' },
  ]

  // Certifications/Highlights/Focus areas removed

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (kept) */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className={`inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'} px-6 py-3 rounded-full text-sm font-semibold mb-6`}>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold`}>Medical Excellence & Innovation</span>
          </div>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 leading-tight`}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Meet Dr. Kedar Hibare
            </span>
          </h1>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium`}>
            Pioneering interventional pulmonologist with international expertise, bringing cutting-edge respiratory care to India
          </p>
        </div>

        {/* Only Experience & Education retained */}

        {/* Experience (top, two horizontal boxes) */}
        <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} p-6 mb-8`}>
          <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl lg:text-3xl font-extrabold mb-5`}>Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {experience.slice(0, 2).map((e, i) => (
              <div key={`exp-top-${i}`} className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} group border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden`}>
                <div className={`absolute inset-0 pointer-events-none ${isDarkMode ? 'bg-gradient-to-br from-white/0 via-white/0 to-white/5' : 'bg-gradient-to-br from-white/0 via-white/0 to-white/40'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base lg:text-lg font-bold mb-1.5`}>{e.title}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium`}>{e.place}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{e.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education (second) */}
        <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} p-6`}>
          <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl lg:text-3xl font-extrabold mb-5`}>Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {education.map((e, i) => (
              <div key={`edu-${i}`} className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} group border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden`}>
                <div className={`absolute inset-0 pointer-events-none ${isDarkMode ? 'bg-gradient-to-br from-white/0 via-white/0 to-white/5' : 'bg-gradient-to-br from-white/0 via-white/0 to-white/40'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base lg:text-lg font-bold mb-1.5`}>{e.title}</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium`}>{e.place}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{e.period}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
} 