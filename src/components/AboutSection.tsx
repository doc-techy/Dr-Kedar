'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  // Data
  // Removed other sections per request; keeping only Experience and Education

  const experience = [
    { title: 'Lead Clinical & Interventional Pulmonologist' , place: 'SPARSH Hospital, Bengaluru', period: '2025 – Present' },
    { title: 'Consultant - International Pulmonologist', place: 'Narayana Multispeciality Hospital, Bengaluru', period: '2012 – 2025' },
  ]

  const education = [
    { title: 'Fellowship – Interventional Pulmonology & Thoracic Oncology', place: 'Rajiv Gandhi Cancer Institute, New Delhi', period: '2015' },
    { title: 'Fellowship – Interventional Pulmonology', place: 'Ruhrlandklinik, West German Lung Center', period: '2016' },
    { title: "DNB (Respiratory Diseases)", place: "St John's National Academy of Health Sciences", period: '2012' },
  ]

  // Certifications/Highlights/Focus areas removed

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="mt-8 sm:mt-0 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (kept) */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>

          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 leading-tight`}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Meet Dr. Kedar Hibare
            </span>
          </h1>
          {/* <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xs sm:text-sm lg:text-base max-w-4xl mx-auto leading-relaxed font-medium`}>
            Pioneering interventional pulmonologist with international expertise, bringing cutting-edge respiratory care to India
          </p> */}
          <div className="mt-8 space-y-4 text-left max-w-5xl mx-auto">
            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} text-lg sm:text-lg leading-relaxed`}>
            I am a pulmonologist with a passion for Interstitial Lung Disease, Pulmonary Hypertension, and Interventions. I’ve always looked beyond just diagnoses and protocols, because I believe healing happens in the details — through empathy, evidence, and honest engagement.<br></br>

My work spans clinics, classrooms, and conversations, where I strive to simplify the complex, challenge the status quo, and leave every interaction a little lighter and better.<br></br>

Whether it’s teaching, learning, or leading, I show up with curiosity, clarity, and a strong cup of filter coffee.</p>
          </div>
        </div>

        {/* Only Experience & Education retained */}

        {/* Experience (top, two horizontal boxes) */}
        <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} p-6 mb-8 relative overflow-hidden`}>
          {/* Gradient accent at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
          
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl lg:text-3xl font-extrabold`}>
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Experience</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            {experience.slice(0, 2).map((e, i) => {
              const gradients = [
                { from: 'from-blue-500', to: 'to-cyan-500', border: 'border-blue-500/20' },
                { from: 'from-purple-500', to: 'to-pink-500', border: 'border-purple-500/20' }
              ]
              const gradient = gradients[i]
              return (
                <div key={`exp-top-${i}`} className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'} group border-2 ${isDarkMode ? gradient.border : 'border-gray-200'} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient.from} ${gradient.to} rounded-l-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      {/* <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient.from} ${gradient.to} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div> */}
                      <div className="flex-1">
                        <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base lg:text-lg font-bold mb-1.5 group-hover:text-transparent group-hover:bg-gradient-to-r ${gradient.from} ${gradient.to} group-hover:bg-clip-text transition-all duration-300`}>{e.title}</p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium mb-1.5`}>{e.place}</p>
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {e.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education (second) */}
        <div className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white'} rounded-2xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} p-6 relative overflow-hidden`}>
          {/* Gradient accent at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>
          
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl lg:text-3xl font-extrabold`}>
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Education</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {education.map((e, i) => {
              const gradients = [
                { from: 'from-teal-500', to: 'to-cyan-500', border: 'border-teal-500/20' },
                { from: 'from-indigo-500', to: 'to-blue-500', border: 'border-indigo-500/20' },
                { from: 'from-emerald-500', to: 'to-teal-500', border: 'border-emerald-500/20' }
              ]
              const gradient = gradients[i] || gradients[0]
              return (
                <div key={`edu-${i}`} className={`${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'} group border-2 ${isDarkMode ? gradient.border : 'border-gray-200'} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${gradient.from} ${gradient.to} rounded-l-2xl`}></div>
                  
                  {/* Top right corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-5 rounded-bl-full`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon badge */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradient.from} ${gradient.to} flex items-center justify-center mb-4`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M12 14l-9-5M12 14l9-5m-9 5v9m9-5v9" />
                      </svg>
                    </div>
                    
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base lg:text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r ${gradient.from} ${gradient.to} group-hover:bg-clip-text transition-all duration-300 leading-tight`}>
                      {e.title}
                    </p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium mb-3 leading-relaxed`}>
                      {e.place}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${isDarkMode ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {e.period}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    </section>
  )
} 