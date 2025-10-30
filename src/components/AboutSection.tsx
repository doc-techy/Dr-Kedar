'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  // New concise data
  const highlights = [
    { title: 'Interventional Pulmonologist', desc: 'Advanced airway & pleural procedures' },
    { title: 'International Training', desc: 'Germany, Singapore, Malaysia' },
    { title: 'Research & Teaching', desc: 'Publications, talks, and workshops' },
  ]
  const experience = [
    { title: 'Lead Consultant - Interventional Pulmonology', place: 'SPARSH Hospital, Bengaluru', period: '2025 – Present' },
    { title: 'Lead Consultant - Clinical & Interventional Pulmonology', place: 'Narayana Multispeciality Hospital, Bengaluru', period: '2012 – 2025' },
  ]
  const education = [
    { title: 'Fellowship – Interventional Pulmonology & Thoracic Oncology', place: 'Rajiv Gandhi Cancer Institute, New Delhi', period: '2015' },
    { title: 'Fellowship – Interventional Pulmonology', place: 'Ruhrlandklinik, West German Lung Center', period: '2016' },
    { title: 'DNB (Respiratory Diseases)', place: "St John's National Academy of Health Sciences", period: '2012' },
    { title: 'MBBS', place: 'Dr B R Ambedkar Medical College & Hospital', period: '2006' },
  ]

  // Key Statistics
  const stats = [
    { number: '1st', label: 'Pioneer in India', description: 'IAB-recognized Fellowship' },
    { number: '20+', label: 'Publications', description: 'Research Excellence' },
    { number: '15+', label: 'Years Experience', description: 'Clinical Practice' },
    { number: '1000+', label: 'Patients Treated', description: 'Successful Outcomes' }
  ]

  // legacy timeline removed; placeholders to avoid runtime/lint errors while UI no longer uses timeline
  const uniqueYears: string[] = []
  const currentMarkerIndex = 0
  const activeYear = ''
  const isTransitioning = false
  const activeYearEntries: any[] = []

  // Visibility effect
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // timeline animation removed

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] ${
          isDarkMode ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500' : 'bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'
        } blur-[120px] animate-pulse`} style={{animationDuration: '8s'}}></div>
        <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] ${
          isDarkMode ? 'bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-500' : 'bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300'
        } blur-[120px] animate-pulse`} style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className={`absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-[0.08] -translate-x-1/2 -translate-y-1/2 ${
          isDarkMode ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500' : 'bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200'
        } blur-[100px] animate-pulse`} style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <div className={`text-center mb-24 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-xl border ${isDarkMode ? 'border-white/20' : 'border-gray-200'} px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold`}>Medical Excellence & Innovation</span>
          </div>
          
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight tracking-tight`}>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
              Meet Dr. Kedar Hibare
            </span>
          </h1>
          
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium`}>
            Pioneering interventional pulmonologist with international expertise, bringing cutting-edge respiratory care to India
          </p>
        </div>
        
        {/* Enhanced Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-sm border border-gray-200/80'} rounded-3xl p-6 lg:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent mb-3 transition-transform duration-500 group-hover:scale-110`}>
                  {stat.number}
                </div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-base lg:text-lg mb-2`}>
                  {stat.label}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs lg:text-sm`}>
                  {stat.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Interactive Timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timeline
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
              A distinguished career spanning decades of excellence and innovation
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Enhanced Desktop: Horizontal Zigzag Timeline */}
            <div className={`hidden lg:block ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-sm border border-gray-200/80'} rounded-3xl p-10 mb-12 shadow-xl hover:shadow-2xl transition-all duration-500`}>
              
              {/* Zigzag Timeline */}
              <div className="relative h-40 py-4">
                {/* SVG for Zigzag Lines - Individual lines connecting neighbors */}
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  style={{ zIndex: 0 }}
                >
                  {/* Path for animation */}
                  <path
                    id="timeline-path"
                    d={uniqueYears.map((year, index) => {
                      const x = (index / (uniqueYears.length - 1)) * 100;
                      const y = index % 2 === 0 ? 20 : 80;
                      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="none"
                  />
                  
                  {/* Static lines */}
                  {uniqueYears.map((year, index) => {
                    if (index === uniqueYears.length - 1) return null;
                    
                    const currentX = (index / (uniqueYears.length - 1)) * 100;
                    const nextX = ((index + 1) / (uniqueYears.length - 1)) * 100;
                    const currentY = index % 2 === 0 ? 20 : 80;
                    const nextY = (index + 1) % 2 === 0 ? 20 : 80;
                    
                    return (
                      <line
                        key={`line-${index}`}
                        x1={`${currentX}%`}
                        y1={`${currentY}%`}
                        x2={`${nextX}%`}
                        y2={`${nextY}%`}
                        stroke={isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(107, 114, 128, 0.4)'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                    );
                  })}
                  
                  {/* Smooth moving marker - similar to mobile */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    <radialGradient id="ballGradient">
                      <stop offset="0%" stopColor={isDarkMode ? '#60a5fa' : '#3b82f6'} />
                      <stop offset="50%" stopColor={isDarkMode ? '#3b82f6' : '#2563eb'} />
                      <stop offset="100%" stopColor={isDarkMode ? '#1e40af' : '#1e3a8a'} />
                    </radialGradient>
                  </defs>
                  
                  {/* Animated marker ball */}
                  {(() => {
                    const markerX = (currentMarkerIndex / (uniqueYears.length - 1)) * 100;
                    const markerY = currentMarkerIndex % 2 === 0 ? 20 : 80;
                    
                    return (
                      <>
                        {/* Main marker ball */}
                        <circle
                          cx={`${markerX}%`}
                          cy={`${markerY}%`}
                          r="14"
                          fill="url(#ballGradient)"
                          filter="url(#glow)"
                          className="transition-all duration-1000 ease-in-out"
                        />
                        
                        {/* Outer glow ring 1 */}
                        <circle
                          cx={`${markerX}%`}
                          cy={`${markerY}%`}
                          r="20"
                          fill="none"
                          stroke={isDarkMode ? '#60a5fa' : '#3b82f6'}
                          strokeWidth="2"
                          opacity="0.4"
                          className="transition-all duration-1000 ease-in-out"
                        >
                          <animate
                            attributeName="r"
                            values="14;24;14"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.6;0;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Outer glow ring 2 */}
                        <circle
                          cx={`${markerX}%`}
                          cy={`${markerY}%`}
                          r="18"
                          fill="none"
                          stroke={isDarkMode ? '#3b82f6' : '#2563eb'}
                          strokeWidth="3"
                          opacity="0.6"
                          className="transition-all duration-1000 ease-in-out"
                        >
                          <animate
                            attributeName="r"
                            values="14;20;14"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.8;0.2;0.8"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </>
                    );
                  })()}
                </svg>
                
                {/* Timeline Nodes */}
                <div className="absolute inset-0 flex justify-between items-start" style={{ paddingTop: '0' }}>
                  {uniqueYears.map((year, index) => {
                    const isUp = index % 2 === 0;
                    const isActive = activeYear === year;
                    
                    return (
                      <div 
                        key={`${year}-${index}`} 
                        className="relative flex flex-col items-center transition-all duration-300"
                        style={{ 
                          position: 'absolute',
                          left: `${(index / (uniqueYears.length - 1)) * 100}%`,
                          top: isUp ? '20%' : '80%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {/* Enhanced Year Button */}
                        <button
                          onClick={() => {}}
                          className="relative group transition-all duration-500 ease-in-out transform hover:scale-125 active:scale-110"
                        >
                          {/* Button Circle with enhanced styling */}
                          <div className={`relative w-20 h-20 rounded-full border-3 transition-all duration-500 ease-in-out ${
                            isActive
                              ? `${isDarkMode ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 border-blue-400 shadow-2xl shadow-blue-500/60 ring-4 ring-blue-500/30 scale-125' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 border-blue-500 shadow-2xl shadow-blue-600/60 ring-4 ring-blue-600/30 scale-125'}`
                              : `${isDarkMode ? 'bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-xl scale-100' : 'bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-white hover:border-blue-400 hover:shadow-xl scale-100'}`
                          }`}>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <div className={`text-base font-black transition-all duration-500 ease-in-out ${
                                isActive
                                  ? 'text-white scale-110'
                                  : `${isDarkMode ? 'text-gray-300' : 'text-gray-700'} scale-100`
                              }`}>
                                {year}
                              </div>
                            </div>
                            
                            {/* Inner glow effect for active */}
                            {isActive && (
                              <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-white/20 to-transparent' : 'bg-gradient-to-br from-white/30 to-transparent'}`}></div>
                            )}
                          </div>
                          
                          {/* Enhanced Active Pulse Animation */}
                          {isActive && (
                            <>
                              <div className={`absolute -inset-3 rounded-full border-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-500'} animate-ping opacity-40`} style={{animationDuration: '2s'}}></div>
                              <div className={`absolute -inset-2 rounded-full border-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-500'} animate-pulse opacity-60`} style={{animationDuration: '1.5s'}}></div>
                            </>
                          )}
                          
                          {/* Hover glow effect */}
                          <div className={`absolute -inset-1 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20' : 'bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/30 group-hover:to-purple-400/30'} transition-all duration-500 blur-md`}></div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
              
            {/* Mobile: Vertical Timeline */}
            <div className="lg:hidden">
              <div className="flex gap-4">
                {/* Vertical Timeline on Left */}
                <div className="relative w-20 flex-shrink-0" style={{ minHeight: '600px' }}>
                  {/* Vertical Line - Behind everything */}
                  <div className={`absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 rounded-full z-0 ${isDarkMode ? 'bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-teal-500/30' : 'bg-gradient-to-b from-blue-400/40 via-purple-400/40 to-teal-400/40'}`}></div>
                  
                  {/* Animated Marker Moving Vertically */}
                  <div 
                    className={`absolute left-1/2 w-4 h-4 rounded-full -translate-x-1/2 transition-all duration-1000 ease-in-out z-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-500/50' : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-600/50'}`}
                    style={{ 
                      top: `${8 + (currentMarkerIndex / (uniqueYears.length - 1)) * (100 - 16)}%`
                    }}
                  >
                    <div className={`absolute -inset-1 rounded-full border-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-500'} animate-pulse`}></div>
                  </div>
                  
                  {/* Year Nodes */}
                  <div className="relative h-full pt-8 pb-8 z-10">
                    {uniqueYears.map((year, index) => {
                      const isActive = activeYear === year;
                      const position = (index / (uniqueYears.length - 1)) * 100;
                      
                      return (
                        <div
                          key={`mobile-${year}-${index}`}
                          className="absolute left-1/2 -translate-x-1/2 z-30"
                          style={{ 
                            top: `${position}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <button
                            onClick={() => {}}
                            className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-30 ${
                              isActive
                                ? `${isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-500 border-3 border-blue-400 shadow-xl shadow-blue-500/50 scale-110' : 'bg-gradient-to-br from-blue-600 to-purple-600 border-3 border-blue-500 shadow-xl shadow-blue-600/50 scale-110'}`
                                : `${isDarkMode ? 'bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:scale-105' : 'bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 hover:scale-105'}`
                            }`}
                          >
                            <span className={`text-sm font-bold transition-all duration-500 ${
                              isActive
                                ? 'text-white'
                                : `${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`
                            }`}>
                              {year}
                            </span>
                            
                            {/* Active Glow */}
                            {isActive && (
                              <div className={`absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md`}></div>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Content on Right */}
                <div className="flex-1 overflow-hidden relative">
                  <div 
                    className={`relative ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-sm border border-gray-200/80'} rounded-3xl p-6 shadow-xl transition-all duration-700 ease-in-out transform overflow-hidden ${
                      isTransitioning 
                        ? 'opacity-0 translate-x-8 scale-95' 
                        : 'opacity-100 translate-x-0 scale-100'
                    }`}
                  >
                    {/* Subtle background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-500/5 via-transparent to-teal-500/5' : 'from-blue-50/50 via-transparent to-teal-50/50'} pointer-events-none`}></div>
                    
                    <div className="relative z-10">
                      {activeYearEntries.map((entry, entryIndex) => (
                        <div 
                          key={`mobile-${entry.year}-${entryIndex}`} 
                          className={`${entryIndex > 0 ? 'mt-6 pt-6 border-t ' + (isDarkMode ? 'border-white/10' : 'border-gray-200/50') : ''} transition-all duration-700 ease-out`}
                          style={{
                            transitionDelay: isTransitioning ? '0ms' : `${entryIndex * 100}ms`
                          }}
                        >
                          {/* Enhanced Icon and Title */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 flex items-center justify-center text-2xl shadow-xl flex-shrink-0`}>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                              <span className="relative z-10">{entry.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-black mb-2 leading-tight`}>
                                {entry.title || entry.role}
                              </h3>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                entry.role 
                                  ? `${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`
                                  : `${isDarkMode ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-200'}`
                              }`}>
                                {entry.role ? 'Professional' : 'Educational'}
                              </span>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm mb-5 font-medium leading-relaxed`}>
                            {'hospital' in entry ? entry.hospital : ('description' in entry ? entry.description : '')}
                          </p>
                          
                          {/* Enhanced Details Grid */}
                          <div className="grid grid-cols-1 gap-3">
                            <div className={`group ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-200/50'} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500'} flex items-center justify-center flex-shrink-0`}>
                                  <svg className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-xs`}>Time Period</h5>
                              </div>
                              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-semibold ml-11`}>{entry.timePeriod}</p>
                            </div>
                            <div className={`group ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-purple-50/80 to-pink-100/50 border border-purple-200/50'} rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500'} flex items-center justify-center flex-shrink-0`}>
                                  <svg className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                                <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-xs`}>Location</h5>
                              </div>
                              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-semibold ml-11`}>{entry.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Enhanced Desktop Content Box */}
            <div 
              className={`hidden lg:block relative ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white/80 backdrop-blur-sm border border-gray-200/80'} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform overflow-hidden ${
                isTransitioning 
                  ? 'opacity-0 translate-y-8 scale-[0.98]' 
                  : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              {/* Subtle background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-500/5 via-transparent to-teal-500/5' : 'from-blue-50/50 via-transparent to-teal-50/50'} pointer-events-none`}></div>
              
              {/* Show all entries for the selected year */}
              <div className="relative z-10">
                {activeYearEntries.map((entry, entryIndex) => (
                  <div 
                    key={`${entry.year}-${entryIndex}`} 
                    className={`${entryIndex > 0 ? 'mt-10 pt-10 border-t ' + (isDarkMode ? 'border-white/10' : 'border-gray-200/50') : ''} transition-all duration-700 ease-out`}
                    style={{
                      transitionDelay: isTransitioning ? '0ms' : `${entryIndex * 150}ms`
                    }}
                  >
                    {/* Icon and Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <span className="relative z-10">{entry.icon}</span>
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/50 to-teal-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-3 mb-4">
                          <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-black leading-tight`}>
                            {entry.title || entry.role}
                          </h3>
                          <span className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${
                            entry.role 
                              ? `${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`
                              : `${isDarkMode ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-200'}`
                          }`}>
                            {entry.role ? 'Professional' : 'Educational'}
                          </span>
                        </div>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xl font-semibold`}>
                          {'hospital' in entry ? entry.hospital : ('description' in entry ? entry.description : '')}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    {('description' in entry && entry.description && entry.role) && (
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-lg leading-relaxed mb-8 pl-2 ${isDarkMode ? 'border-l-2 border-blue-500/30' : 'border-l-2 border-blue-300'}`}>
                        {(entry as any).description}
                      </p>
                    )}
                    
                    {/* Enhanced Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className={`group relative ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-blue-50/80 to-blue-100/50 border border-blue-200/50'} rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500'} flex items-center justify-center`}>
                            <svg className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-base`}>Time Period</h5>
                        </div>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-semibold`}>{entry.timePeriod}</p>
                      </div>
                      <div className={`group relative ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-purple-50/80 to-pink-100/50 border border-purple-200/50'} rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500'} flex items-center justify-center`}>
                            <svg className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-base`}>Location</h5>
                        </div>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-semibold`}>{entry.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="text-center relative">
          <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-xl border border-white/20' : 'bg-gradient-to-r from-blue-50/90 via-purple-50/90 to-teal-50/90 backdrop-blur-sm border border-gray-200/80'} rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500`}>
            {/* Decorative gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-600/10 via-purple-600/10 to-teal-600/10' : 'from-blue-100/30 via-purple-100/30 to-teal-100/30'} pointer-events-none`}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></div>
                <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Get Started</span>
              </div>
              
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-black mb-4`}>
                Experience World-Class Pulmonology Care
              </h3>
              
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed`}>
                Book a consultation with Dr. Kedar Hibare and benefit from international expertise combined with personalized care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/book-appointment"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Book Consultation</span>
                  <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/#video-publications"
                  className={`group inline-flex items-center justify-center gap-3 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-blue-400'} px-8 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                >
                  <span>View Research</span>
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${isDarkMode ? 'from-blue-500/20 to-transparent' : 'from-blue-200/30 to-transparent'} rounded-bl-full`}></div>
            <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${isDarkMode ? 'from-teal-500/20 to-transparent' : 'from-teal-200/30 to-transparent'} rounded-tr-full`}></div>
          </div>
        </div>
      </div>
    </section>
  )
} 