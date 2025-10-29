'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AboutSection() {
  const { isDarkMode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState('2025')
  const [animatingMarker, setAnimatingMarker] = useState(true)
  const [currentMarkerIndex, setCurrentMarkerIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Timeline Data Array
  const timelineData = [
    {
      id: 7,
      role: "Lead Consultant - Clinical & Interventional Pulmonologist",
      hospital: "SPARSH Hospital",
      timePeriod: "Aug 2025 - Present",
      location: "Bangalore",
      color: "blue",
      icon: "🏥",
      order:9,
      year: "2025"
    },
    {
      id: 6,
      title: "International Observership",
      description: "National University Hospital, Singapore & Serdang Hospital, Malaysia",
      location: "Singapore & Malaysia",
      timePeriod: "2016",
      color: "blue",
      icon: "🔬",
      order:5,
      year: "2016"
    },
    {
      id: 5,
      title: "Fellowship in Interventional Pulmonology",
      description: "Ruhrlandklinik West Germany Lung Center",
      location: "Essen, Germany",
      timePeriod: "2016",
      color: "blue",
      icon: "🌍",
      year: "2016"
    },
    {
      id: 4,
      title: "Fellowship in Interventional Pulmonology & Thoracic Oncology",
      description: "Rajiv Gandhi Cancer Institute & Research Center",
      location: "New Delhi",
      timePeriod: "2015",
      color: "blue",
      icon: "🎯",
      year: "2015"
    },
    {
      id: 3,
      role: "Lead Consultant - Clinical & Interventional Pulmonologist",
      hospital: "Narayana Multispeciality Hospital",
      timePeriod: "2012 - 2025",
      location: "Bangalore",
      color: "blue",
      icon: "🏥",
      year: "2012"
    },
    {
      id: 2,
      title: "DNB (Respiratory Diseases)",
      description: "St John's National Academy of Health Sciences",
      location: "Bangalore, Karnataka",
      timePeriod: "2012",
      color: "blue",
      icon: "🏥",
      year: "2012"
    },
    {
      id: 1,
      title: "MBBS",
      description: "Dr B R Ambedkar Medical College & Hospital",
      location: "Bangalore, Karnataka",
      timePeriod: "2006",
      color: "blue",
      icon: "🎓",
      year: "2006"
    }
  ].sort((a, b) => a.id - b.id);

  // Key Statistics
  const stats = [
    { number: '1st', label: 'Pioneer in India', description: 'IAB-recognized Fellowship' },
    { number: '20+', label: 'Publications', description: 'Research Excellence' },
    { number: '15+', label: 'Years Experience', description: 'Clinical Practice' },
    { number: '1000+', label: 'Patients Treated', description: 'Successful Outcomes' }
  ]

  // Get unique years for buttons
  const uniqueYears = [...new Set(timelineData.map(item => item.year))].sort((a, b) => parseInt(a) - parseInt(b))
  
  // Get all entries for the selected year
  const activeYearEntries = timelineData.filter(item => item.year === activeYear)
  const activeData = activeYearEntries[0] || timelineData[0]

  // Visibility effect
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Continuously move marker every second
  useEffect(() => {
    const markerInterval = setInterval(() => {
      setCurrentMarkerIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % uniqueYears.length;
        return nextIndex;
      });
    }, 5000); // Move to next position every 1 second

    return () => clearInterval(markerInterval);
  }, [uniqueYears])

  // Update active year based on marker position (every 5 seconds = 5 moves)
  useEffect(() => {
    // Set active year to the current marker position
    if (currentMarkerIndex < uniqueYears.length) {
      setIsTransitioning(true);
      
      // Fade out
      setTimeout(() => {
      setActiveYear(uniqueYears[currentMarkerIndex]);
      }, 150);
      
      // Fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentMarkerIndex, uniqueYears])

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
          {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span>Medical Excellence & Innovation</span>
          </div> */}
          
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 leading-tight`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Meet Dr. Kedar Hibare
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
          
          <div className="relative max-w-7xl mx-auto">
            {/* Desktop: Horizontal Zigzag Timeline */}
            <div className={`hidden lg:block ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-8 mb-12`}>
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold text-center mb-12`}>
                Professional Journey
              </h3>
              
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
                  
                  {/* Dropping ball animation */}
                  {animatingMarker && (() => {
                    const prevIndex = currentMarkerIndex === 0 ? uniqueYears.length - 1 : currentMarkerIndex - 1;
                    const nextIndex = currentMarkerIndex;
                    
                    // Current and next positions
                    const prevX = (prevIndex / (uniqueYears.length - 1)) * 100;
                    const prevY = prevIndex % 2 === 0 ? 20 : 80;
                    const nextX = (nextIndex / (uniqueYears.length - 1)) * 100;
                    const nextY = nextIndex % 2 === 0 ? 20 : 80;
                    
                    // Calculate arc path with parabolic curve (gravity effect)
                    const midX = (prevX + nextX) / 2;
                    const midY = Math.max(prevY, nextY) + 15; // Apex point below
                    
                    // Quadratic bezier curve for dropping/bouncing effect
                    const pathD = `M ${prevX} ${prevY} Q ${midX} ${midY} ${nextX} ${nextY}`;
                    
                    return (
                      <>
                        {/* Glow and shadow effects */}
                        <defs>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                          
                          <radialGradient id="ballGradient">
                            <stop offset="0%" stopColor={isDarkMode ? '#60a5fa' : '#3b82f6'} />
                            <stop offset="70%" stopColor={isDarkMode ? '#3b82f6' : '#2563eb'} />
                            <stop offset="100%" stopColor={isDarkMode ? '#1e40af' : '#1e3a8a'} />
                          </radialGradient>
                        </defs>
                        
                        {/* Arc path trail */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.3)'}
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        
                        {/* Shadow following the ball */}
                        <ellipse
                          rx="8"
                          ry="3"
                          fill="rgba(0, 0, 0, 0.3)"
                          filter="blur(2px)"
                        >
                          <animateMotion
                            dur="1s"
                            repeatCount="1"
                            fill="freeze"
                            path={`M ${prevX} 85 Q ${midX} 85 ${nextX} 85`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0.3;0.6;0.3"
                            dur="1s"
                            repeatCount="1"
                          />
                        </ellipse>
                        
                        {/* Dropping ball with gradient */}
                        <circle
                          r="12"
                          fill="url(#ballGradient)"
                          filter="url(#glow)"
                        >
                          <animateMotion
                            dur="1s"
                            repeatCount="1"
                            fill="freeze"
                            path={pathD}
                            keyTimes="0; 0.5; 1"
                            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                            calcMode="spline"
                          />
                          {/* Squash and stretch effect */}
                          <animate
                            attributeName="r"
                            values="12;10;12;14;12"
                            dur="1s"
                            repeatCount="1"
                          />
                        </circle>
                        
                        {/* Impact ripple at destination */}
                        <circle
                          cx={`${nextX}%`}
                          cy={`${nextY}%`}
                          r="12"
                          fill="none"
                          stroke={isDarkMode ? '#3b82f6' : '#2563eb'}
                          strokeWidth="2"
                        >
                          <animate
                            attributeName="r"
                            from="12"
                            to="30"
                            dur="0.4s"
                            begin="0.6s"
                            repeatCount="1"
                          />
                          <animate
                            attributeName="opacity"
                            from="0.8"
                            to="0"
                            dur="0.4s"
                            begin="0.6s"
                            repeatCount="1"
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
                        {/* Year Button */}
                        <button
                          onClick={() => {
                            const yearIndex = uniqueYears.indexOf(year);
                            if (yearIndex !== -1) {
                              setIsTransitioning(true);
                              setCurrentMarkerIndex(yearIndex);
                              setTimeout(() => {
                              setActiveYear(year);
                              }, 150);
                              setTimeout(() => {
                                setIsTransitioning(false);
                              }, 300);
                            }
                          }}
                          className="relative group transition-all duration-700 ease-in-out transform hover:scale-110"
                        >
                          {/* Button Circle */}
                          <div className={`w-16 h-16 rounded-full border-3 transition-all duration-700 ease-in-out ${
                            isActive
                              ? `${isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-500 border-blue-400 shadow-xl shadow-blue-500/50 ring-4 ring-blue-500/20 scale-110' : 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500 shadow-xl shadow-blue-600/50 ring-4 ring-blue-600/20 scale-110'}`
                              : `${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 hover:shadow-lg scale-100' : 'bg-gray-50 border-gray-300 hover:bg-gray-100 hover:border-gray-400 hover:shadow-lg scale-100'}`
                          }`}>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <div className={`text-base font-bold transition-all duration-700 ease-in-out ${
                                isActive
                                  ? 'text-white scale-110'
                                  : `${isDarkMode ? 'text-gray-300' : 'text-gray-700'} scale-100`
                              }`}>
                                {year}
                              </div>
                            </div>
                          </div>
                          
                          {/* Active Pulse Animation */}
                          <div className={`absolute -inset-2 rounded-full border-2 transition-all duration-700 ease-in-out ${
                            isActive 
                              ? `${isDarkMode ? 'border-blue-400' : 'border-blue-500'} animate-ping opacity-30` 
                              : 'opacity-0'
                          }`}></div>
                          <div className={`absolute -inset-1 rounded-full border-2 transition-all duration-700 ease-in-out ${
                            isActive 
                              ? `${isDarkMode ? 'border-blue-400' : 'border-blue-500'} animate-pulse` 
                              : 'opacity-0'
                          }`}></div>
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
                            onClick={() => {
                              const yearIndex = uniqueYears.indexOf(year);
                              if (yearIndex !== -1) {
                                setIsTransitioning(true);
                                setCurrentMarkerIndex(yearIndex);
                                setTimeout(() => {
                                  setActiveYear(year);
                                }, 150);
                                setTimeout(() => {
                                  setIsTransitioning(false);
                                }, 300);
                              }
                            }}
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

                {/* Content on Right */}
                <div className="flex-1 overflow-hidden relative">
                  <div 
                    className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-2xl p-5 shadow-lg transition-all duration-500 ease-in-out transform ${
                      isTransitioning 
                        ? 'opacity-0 translate-x-8 scale-95' 
                        : 'opacity-100 translate-x-0 scale-100'
                    }`}
                  >
                    {activeYearEntries.map((entry, entryIndex) => (
                      <div 
                        key={`mobile-${entry.year}-${entryIndex}`} 
                        className={`${entryIndex > 0 ? 'mt-5 pt-5 border-t border-gray-200/20' : ''} transition-all duration-500 ease-out`}
                        style={{
                          transitionDelay: isTransitioning ? '0ms' : `${entryIndex * 100}ms`
                        }}
                      >
                        {/* Icon and Title */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-xl shadow-lg flex-shrink-0`}>
                            {entry.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base font-black mb-1.5 leading-tight`}>
                              {entry.title || entry.role}
                            </h3>
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                              entry.role 
                                ? `${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`
                                : `${isDarkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`
                            }`}>
                              {entry.role ? 'Professional' : 'Educational'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm mb-4 font-medium leading-relaxed`}>
                          {entry.hospital || entry.description}
                        </p>
                        
                        {/* Details Grid */}
                        <div className="grid grid-cols-1 gap-2.5">
                          <div className={`${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-gray-200'} rounded-xl p-3`}>
                            <div className="flex items-center gap-2 mb-1">
                              <svg className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-xs`}>Time Period</h5>
                            </div>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-xs font-medium`}>{entry.timePeriod}</p>
                          </div>
                          <div className={`${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-gray-200'} rounded-xl p-3`}>
                            <div className="flex items-center gap-2 mb-1">
                              <svg className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-xs`}>Location</h5>
                            </div>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-xs font-medium`}>{entry.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
              
            {/* Desktop Content Box */}
            <div 
              className={`hidden lg:block ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-8 transition-all duration-500 ease-in-out transform ${
                isTransitioning 
                  ? 'opacity-0 translate-y-8 scale-98' 
                  : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              {/* Show all entries for the selected year */}
              {activeYearEntries.map((entry, entryIndex) => (
                <div 
                  key={`${entry.year}-${entryIndex}`} 
                  className={`${entryIndex > 0 ? 'mt-8 pt-8 border-t border-gray-200/20' : ''} transition-all duration-500 ease-out`}
                  style={{
                    transitionDelay: isTransitioning ? '0ms' : `${entryIndex * 150}ms`
                  }}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${entry.color} flex items-center justify-center text-4xl shadow-lg`}>
                      {entry.icon}
                </div>
                            <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl font-bold`}>
                          {entry.title || entry.role}
                        </h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          entry.role 
                            ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`
                            : `${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`
                        }`}>
                          {entry.role ? 'Professional' : 'Educational'}
                        </span>
                            </div>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xl font-semibold`}>
                        {entry.hospital || entry.description}
                      </p>
                            </div>
                          </div>
                  
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                    {entry.description || `${entry.title || entry.role} at ${entry.hospital || entry.description} in ${entry.location}`}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold mb-4`}>
                      Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-4`}>
                        <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold mb-2`}>Time Period</h5>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{entry.timePeriod}</p>
                        </div>
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-4`}>
                        <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold mb-2`}>Location</h5>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{entry.location}</p>
                      </div>
                    </div>
                  </div>
              </div>
              ))}
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