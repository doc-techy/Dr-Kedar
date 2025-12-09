'use client'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function VideoPublicationsSection() {
  const { isDarkMode } = useTheme()
  const [videosToShow, setVideosToShow] = useState(6) // 3 rows * 2 columns on mobile, 2 rows * 3 columns on desktop

  const videos = [
    {
      id: 1,
      title: "Advanced Bronchoscopy Techniques",
      description: "Comprehensive guide to interventional pulmonology procedures and modern diagnostic techniques.",
      thumbnail: "/thumbnail/image1.png",
      duration: "15:30",
      views: "2.3K",
      date: "Dec 2024",
      category: "Medical Education",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Lung Cancer Diagnosis & Treatment",
      description: "Latest advances in thoracic oncology and personalized treatment approaches.",
      thumbnail: "/thumbnail/image2.png",
      duration: "22:15",
      views: "1.8K",
      date: "Nov 2024",
      category: "Oncology",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      id: 3,
      title: "3D Printing in Airway Disorders",
      description: "Pioneering research on 3D printing applications in respiratory medicine.",
      thumbnail: "/thumbnail/image3.png",
      duration: "18:45",
      views: "3.1K",
      date: "Oct 2024",
      category: "Research",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "Endobronchial Ultrasound (EBUS)",
      description: "Advanced diagnostic techniques using EBUS for lung cancer staging and diagnosis.",
      thumbnail: "/thumbnail/image4.png",
      duration: "12:20",
      views: "1.5K",
      date: "Sep 2024",
      category: "Diagnostics",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 5,
      title: "Airway Stenting Procedures",
      description: "Comprehensive overview of airway stenting techniques and patient management.",
      thumbnail: "/thumbnail/image5.png",
      duration: "20:10",
      views: "2.1K",
      date: "Aug 2024",
      category: "Intervention",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      id: 6,
      title: "Pleural Disease Management",
      description: "Diagnosis and treatment of pleural effusions and pneumothorax management.",
      thumbnail: "/thumbnail/image6.png",
      duration: "16:35",
      views: "1.9K",
      date: "Jul 2024",
      category: "Pleural Medicine",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      id: 7,
      title: "Interstitial Lung Disease",
      description: "Understanding ILD diagnosis, classification, and treatment strategies.",
      thumbnail: "/thumbnail/image1.png",
      duration: "19:25",
      views: "2.7K",
      date: "Jun 2024",
      category: "ILD",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100"
    },
    {
      id: 8,
      title: "Thoracoscopy Techniques",
      description: "Minimally invasive procedures for pleural and lung disease diagnosis.",
      thumbnail: "/thumbnail/image2.png",
      duration: "14:50",
      views: "1.6K",
      date: "May 2024",
      category: "Surgery",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    },
    {
      id: 9,
      title: "Respiratory Function Testing",
      description: "Comprehensive guide to pulmonary function tests and interpretation.",
      thumbnail: "/thumbnail/image3.png",
      duration: "17:40",
      views: "2.4K",
      date: "Apr 2024",
      category: "Testing",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100"
    }
  ]

  const handleLoadMore = (isMobile: boolean = false) => {
    if (isMobile) {
      setVideosToShow(prev => Math.min(prev + 4, videos.length))
    } else {
      setVideosToShow(prev => Math.min(prev + 3, videos.length))
    }
  }

  const handleLoadLess = () => {
    setVideosToShow(6)
  }

  const displayedVideos = videos.slice(0, videosToShow)

  return (
    <section id="video-publications" className="relative overflow-hidden pt-28 sm:pt-24 lg:pt-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Knowledge Sharing
          </div> */}
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Educational Videos</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed mt-4`}>
            Educational content showcasing expertise in interventional pulmonology and respiratory medicine.
          </p>
        </div>

        {/* Videos Content */}
        <div>
            {/* Mobile Videos Grid - 2 columns, 6 items by default */}
            <div className="sm:hidden grid grid-cols-2 gap-3 pt-4 pb-8">
              {displayedVideos.map((video) => (
                <div key={video.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  {/* Video Thumbnail */}
                  <div className="relative h-32 overflow-hidden">
                    {/* Thumbnail Image */}
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2.5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.views}</span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.date}</span>
                    </div>
                    
                    <h4 className={`text-xs font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300 leading-tight line-clamp-2`}>
                      {video.title}
                    </h4>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs leading-relaxed line-clamp-2`}>
                      {video.description}
                    </p>
                    
                    <div className={`h-0.5 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Videos Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:pt-6 sm:pb-12">
              {(displayedVideos.length > 0 ? displayedVideos : videos).map((video) => (
                <div key={video.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  {/* Video Thumbnail */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    {/* Thumbnail Image */}
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/80 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                    
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.views} views</span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.date}</span>
                    </div>
                    
                    <h4 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300 leading-tight line-clamp-2`}>
                      {video.title}
                    </h4>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs sm:text-sm leading-relaxed line-clamp-2`}>
                      {video.description}
                    </p>
                    
                    <div className={`h-1 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More/Less Buttons - Mobile */}
            {videos.length > 6 && (
              <div className="sm:hidden flex justify-center mt-4 mb-6 px-4">
                {videosToShow < videos.length ? (
                  <button
                    onClick={() => handleLoadMore(true)}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-5 py-2.5 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full"
                  >
                    Load More ({videos.length - videosToShow} left)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-5 py-2.5 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}

            {/* Load More/Less Buttons - Desktop */}
            {videos.length > 6 && (
              <div className="hidden sm:flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-12">
                {videosToShow < videos.length ? (
                  <button
                    onClick={() => handleLoadMore(false)}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Videos ({videos.length - videosToShow} remaining)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
      </div>
    </section>
  )
}
