'use client'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function VideoPublicationsSection() {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState<'videos' | 'publications'>('videos')
  const [videosToShow, setVideosToShow] = useState(6) // 2 rows * 3 columns
  const [publicationsToShow, setPublicationsToShow] = useState(6) // 2 rows * 3 columns
  const videos = [
    {
      id: 1,
      title: "Advanced Bronchoscopy Techniques",
      description: "Comprehensive guide to interventional pulmonology procedures and modern diagnostic techniques.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      duration: "15:30",
      views: "2.3K",
      category: "Medical Education",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Lung Cancer Diagnosis & Treatment",
      description: "Latest advances in thoracic oncology and personalized treatment approaches.",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
      duration: "22:15",
      views: "1.8K",
      category: "Oncology",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      id: 3,
      title: "3D Printing in Airway Disorders",
      description: "Pioneering research on 3D printing applications in respiratory medicine.",
      thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
      duration: "18:45",
      views: "3.1K",
      category: "Research",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "Endobronchial Ultrasound (EBUS)",
      description: "Advanced diagnostic techniques using EBUS for lung cancer staging and diagnosis.",
      thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center",
      duration: "12:20",
      views: "1.5K",
      category: "Diagnostics",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 5,
      title: "Airway Stenting Procedures",
      description: "Comprehensive overview of airway stenting techniques and patient management.",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba0ef54?w=400&h=300&fit=crop&crop=center",
      duration: "20:10",
      views: "2.1K",
      category: "Intervention",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      id: 6,
      title: "Pleural Disease Management",
      description: "Diagnosis and treatment of pleural effusions and pneumothorax management.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
      duration: "16:35",
      views: "1.9K",
      category: "Pleural Medicine",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      id: 7,
      title: "Interstitial Lung Disease",
      description: "Understanding ILD diagnosis, classification, and treatment strategies.",
      thumbnail: "https://images.unsplash.com/photo-1582719506-5e0d2b0b5b5b?w=400&h=300&fit=crop&crop=center",
      duration: "19:25",
      views: "2.7K",
      category: "ILD",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100"
    },
    {
      id: 8,
      title: "Thoracoscopy Techniques",
      description: "Minimally invasive procedures for pleural and lung disease diagnosis.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
      duration: "14:50",
      views: "1.6K",
      category: "Surgery",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    },
    {
      id: 9,
      title: "Respiratory Function Testing",
      description: "Comprehensive guide to pulmonary function tests and interpretation.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
      duration: "17:40",
      views: "2.4K",
      category: "Testing",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100"
    }
  ]

  const publications = [
    {
      id: 1,
      title: "Interventional Pulmonology: A Comprehensive Review",
      journal: "Journal of Respiratory Medicine",
      year: "2024",
      authors: "Dr. Kedar Hibare et al.",
      description: "Comprehensive analysis of modern interventional pulmonology techniques and their clinical applications in respiratory medicine.",
      impact: "High Impact",
      citations: "45",
      category: "Review Article",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 2,
      title: "3D Printing Applications in Airway Reconstruction",
      journal: "Thoracic Surgery International",
      year: "2023",
      authors: "Dr. Kedar Hibare et al.",
      description: "Pioneering research on 3D printing technology for customized airway stents and personalized airway reconstruction procedures.",
      impact: "High Impact",
      citations: "32",
      category: "Original Research",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      id: 3,
      title: "Minimally Invasive Approaches to Lung Cancer",
      journal: "European Respiratory Journal",
      year: "2023",
      authors: "Dr. Kedar Hibare et al.",
      description: "Advanced diagnostic and therapeutic techniques for early-stage lung cancer using minimally invasive bronchoscopic procedures.",
      impact: "High Impact",
      citations: "28",
      category: "Clinical Study",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      id: 4,
      title: "Advanced Bronchoscopic Techniques in India",
      journal: "Indian Journal of Chest Diseases",
      year: "2022",
      authors: "Dr. Kedar Hibare et al.",
      description: "Implementation and outcomes of advanced bronchoscopic procedures in Indian healthcare settings with case studies.",
      impact: "Medium Impact",
      citations: "19",
      category: "Case Study",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100"
    },
    {
      id: 5,
      title: "EBUS-TBNA in Lung Cancer Staging",
      journal: "Chest Journal",
      year: "2023",
      authors: "Dr. Kedar Hibare et al.",
      description: "Endobronchial ultrasound-guided transbronchial needle aspiration for accurate lung cancer staging and diagnosis.",
      impact: "High Impact",
      citations: "37",
      category: "Original Research",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      id: 6,
      title: "Pleural Disease Management Strategies",
      journal: "Respirology",
      year: "2022",
      authors: "Dr. Kedar Hibare et al.",
      description: "Comprehensive approach to pleural effusion management and therapeutic thoracoscopy techniques for better patient outcomes.",
      impact: "Medium Impact",
      citations: "24",
      category: "Clinical Study",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      id: 7,
      title: "Interstitial Lung Disease Classification",
      journal: "American Journal of Respiratory Medicine",
      year: "2023",
      authors: "Dr. Kedar Hibare et al.",
      description: "Updated classification system for interstitial lung diseases based on latest diagnostic criteria and treatment protocols.",
      impact: "High Impact",
      citations: "41",
      category: "Review Article",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 8,
      title: "Thoracoscopy in Modern Medicine",
      journal: "European Journal of Thoracic Surgery",
      year: "2022",
      authors: "Dr. Kedar Hibare et al.",
      description: "Modern applications of medical thoracoscopy in pleural disease diagnosis and treatment with clinical outcomes.",
      impact: "Medium Impact",
      citations: "16",
      category: "Case Study",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    }
  ]

  const handleLoadMore = () => {
    if (activeTab === 'videos') {
      setVideosToShow(prev => Math.min(prev + 3, videos.length))
    } else {
      setPublicationsToShow(prev => Math.min(prev + 3, publications.length))
    }
  }

  const handleLoadLess = () => {
    if (activeTab === 'videos') {
      setVideosToShow(6)
    } else {
      setPublicationsToShow(6)
    }
  }

  const displayedVideos = videos.slice(0, videosToShow)
  const displayedPublications = publications.slice(0, publicationsToShow)

  return (
    <section id="video-publications" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Knowledge Sharing
          </div> */}
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Educational Videos & Publications</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Educational content and research publications showcasing expertise in interventional pulmonology and respiratory medicine.
          </p> */}
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-2xl p-2 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500`}>
            {/* Specular highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'videos'
                    ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-lg'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                }`}
              >
                <span className="text-lg">🎥</span>
                Videos ({videos.length})
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'publications'
                    ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-lg'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
                }`}
              >
                <span className="text-lg">📚</span>
                Publications ({publications.length})
              </button>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'videos' ? (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedVideos.map((video) => (
                <div key={video.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  {/* Video Thumbnail - 70% height */}
                  <div className="relative h-48 overflow-hidden">
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
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold bg-gradient-to-r ${video.gradient} text-white px-2 py-1 rounded-full`}>
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Content - 30% height */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{video.views} views</span>
                    </div>
                    
                    <h4 className={`text-sm font-bold ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors duration-300 leading-tight line-clamp-2`}>
                      {video.title}
                    </h4>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xs leading-relaxed line-clamp-2`}>
                      {video.description}
                    </p>
                    
                    <div className={`h-1 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More/Less Buttons for Videos */}
            {videos.length > 6 && (
              <div className="flex justify-center">
                {videosToShow < videos.length ? (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Videos ({videos.length - videosToShow} remaining)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedPublications.map((publication) => (
                <div key={publication.id} className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-2xl p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Title Section */}
                  <div className="mb-4">
                    <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-2`}>
                      {publication.title}
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                      {publication.authors}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
                      {publication.description || "Research publication in the field of interventional pulmonology and respiratory medicine."}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-gray-200'} mb-4`}></div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Publication Details */}
                    <div className="space-y-2">
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {publication.journal}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {publication.year}
                      </p>
                    </div>

                    {/* Read Paper Button */}
                    <button className="text-red-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                      <span>Read Paper</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More/Less Buttons for Publications */}
            {publications.length > 6 && (
              <div className="flex justify-center">
                {publicationsToShow < publications.length ? (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Publications ({publications.length - publicationsToShow} remaining)
                  </button>
                ) : (
                  <button
                    onClick={handleLoadLess}
                    className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Read More Button */}
        {/* <div className="flex justify-end mt-12">
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <span>Read More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  )
}
