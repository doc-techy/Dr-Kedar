'use client'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function VideoPublicationsSection() {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState<'videos' | 'publications'>('videos')
  const [videosToShow, setVideosToShow] = useState(6) // 2 rows * 3 columns
  const [publicationsToShow, setPublicationsToShow] = useState(6) // 2 rows * 3 columns
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0)

  const scrollVideosLeft = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  const scrollVideosRight = () => {
    if (currentVideoIndex < Math.ceil(videos.length / 2) - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const scrollPublicationsLeft = () => {
    if (currentPublicationIndex > 0) {
      setCurrentPublicationIndex(currentPublicationIndex - 1)
    }
  }

  const scrollPublicationsRight = () => {
    if (currentPublicationIndex < Math.ceil(publications.length / 2) - 1) {
      setCurrentPublicationIndex(currentPublicationIndex + 1)
    }
  }

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

  const publications = [
    {
      id: 1,
      title: "Case series of Y shaped self-expanding metallic stents (Y-SEMS) for central airway obstruction - Experience of deployment with 'Single Guide Wire' technique",
      journal: "ResearchGate Publication",
      year: "2025",
      authors: "Kedar Hibare, Rajiv Goyal, Manish Kumar Aggarwal, Chetan Nemani, Avinash Murugan",
      description: "Case series exploring the deployment of Y-shaped self-expanding metallic stents for central airway obstruction using a novel 'Single Guide Wire' technique.",
      impact: "High Impact",
      citations: "Recent",
      category: "Case Series",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      link: "https://www.researchgate.net/publication/393452605_Case_series_of_Y_shaped_self-expanding_metallic_stents_Y-SEMS_for_central_airway_obstruction_-_Experience_of_deployment_with_Single_Guide_Wire_technique"
    },
    {
      id: 2,
      title: "Effect on the Prevalence of Various Diffuse Parenchymal Lung Diseases due to Paradigm Change in the Guidelines",
      journal: "ResearchGate Publication",
      year: "2023",
      authors: "Kedar Hibare, H Kumar, PH Manjunath, C Sagar, BJ Khan",
      description: "Analysis of how paradigm changes in clinical guidelines affect the prevalence and diagnosis of various diffuse parenchymal lung diseases.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 3,
      title: "Rapid Prototyping Techniques for Manufacturing Fully Customized Airway Stents",
      journal: "ResearchGate Publication",
      year: "2022",
      authors: "Kedar Hibare, Lutz Freitag, Manuel Gerold, Kaid Darwiche, Paul Zarogoulidis",
      description: "Pioneering research on rapid prototyping techniques for manufacturing fully customized airway stents using advanced 3D printing technology.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 4,
      title: "Scientific Predictors of Disease Outcomes: No Crystal Balls or Parrots Picking Cards",
      journal: "ResearchGate Publication",
      year: "2022",
      authors: "Kedar Hibare, Murali Mohan",
      description: "Critical analysis of scientific predictors in disease outcomes, addressing limitations and reliability of prognostic factors in clinical practice.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Review Article",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 5,
      title: "Role of medical thoracoscopy in the treatment of complicated parapneumonic effusions",
      journal: "ResearchGate Publication",
      year: "2021",
      authors: "Kedar Hibare, Ramanjaneya Ranganatha, Syed Tousheed, Bangalore Venkatraman Murali Mohan, Vellaichamy Muthupandi Annapandian",
      description: "Comprehensive study on the role and efficacy of medical thoracoscopy in treating complicated parapneumonic effusions with clinical outcomes.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 6,
      title: "Tracheobronchial stent sizing and deployment practices airway stenting practices around the world: a survey study",
      journal: "ResearchGate Publication",
      year: "2020",
      authors: "Kedar Hibare, Roshen Mathew, Levent Dalar, Winnie Elma Roy",
      description: "Global survey study examining tracheobronchial stent sizing and deployment practices in airway stenting across different international centers.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Survey Study",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 7,
      title: "Yield of pleural biopsy in different types of tubercular effusion",
      journal: "ResearchGate Publication",
      year: "2020",
      authors: "Kedar Hibare, Syed Tousheed, Ramanjenaya Ranganatha",
      description: "Clinical investigation evaluating the diagnostic yield of pleural biopsy in various types of tubercular effusions.",
      impact: "Medium Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 8,
      title: "Advanced Bronchoscopic Techniques in Respiratory Medicine",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Research on advanced bronchoscopic techniques and their clinical applications in respiratory medicine.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-cyan-500 to-cyan-600",
      bgGradient: "from-cyan-50 to-cyan-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 9,
      title: "EBUS-TBNA Techniques in Lung Cancer Diagnosis",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Studies on endobronchial ultrasound-guided transbronchial needle aspiration techniques for lung cancer diagnosis.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 10,
      title: "Management of Central Airway Obstruction",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Research on management strategies and treatment approaches for central airway obstruction.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50 to-violet-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 11,
      title: "Interventional Pulmonology in India",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Publications on the practice and development of interventional pulmonology in Indian healthcare settings.",
      impact: "Medium Impact",
      citations: "Multiple",
      category: "Review Article",
      gradient: "from-amber-500 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 12,
      title: "Pleural Disease Management and Therapeutic Approaches",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Research on pleural disease management, diagnostic techniques, and therapeutic interventions.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-rose-500 to-rose-600",
      bgGradient: "from-rose-50 to-rose-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 13,
      title: "Airway Stenting: Techniques and Outcomes",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Comprehensive research on airway stenting techniques, patient outcomes, and clinical applications.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-sky-500 to-sky-600",
      bgGradient: "from-sky-50 to-sky-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 14,
      title: "Diagnostic Approaches in Respiratory Medicine",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Studies on advanced diagnostic approaches and techniques in respiratory medicine.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-lime-500 to-lime-600",
      bgGradient: "from-lime-50 to-lime-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 15,
      title: "Thoracic Oncology and Interventional Procedures",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Research on thoracic oncology and interventional procedures for lung cancer and related conditions.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Original Research",
      gradient: "from-fuchsia-500 to-fuchsia-600",
      bgGradient: "from-fuchsia-50 to-fuchsia-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 16,
      title: "Respiratory Medicine: Clinical Practice and Research",
      journal: "ResearchGate Publication",
      year: "Multiple",
      authors: "Kedar Hibare et al.",
      description: "Ongoing research and clinical practice insights in respiratory medicine and pulmonology.",
      impact: "High Impact",
      citations: "Multiple",
      category: "Clinical Study",
      gradient: "from-stone-500 to-stone-600",
      bgGradient: "from-stone-50 to-stone-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
    },
    {
      id: 17,
      title: "Interventional Pulmonology: Advanced Techniques and Clinical Applications",
      journal: "ResearchGate Publication",
      year: "Multiple Years",
      authors: "Kedar Hibare et al.",
      description: "Collection of research works in interventional pulmonology covering advanced techniques, airway stenting, and clinical applications.",
      impact: "High Impact",
      citations: "102+",
      category: "Research Collection",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      link: "https://www.researchgate.net/profile/Kedar-Hibare-2/publications"
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
    <section id="video-publications" className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Knowledge Sharing
          </div> */}
          <h2 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Educational Videos & Publications</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Educational content and research publications showcasing expertise in interventional pulmonology and respiratory medicine.
          </p> */}
        </div>

        {/* Responsive Toggle Buttons */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-lg sm:rounded-xl p-1 shadow-lg relative w-fit mx-auto`}>
            {/* Animated background slider */}
            <div 
              className={`absolute top-1 bottom-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-md sm:rounded-lg transition-all duration-500 ease-in-out ${
                activeTab === 'videos' 
                  ? 'left-1 w-[calc(50%-0.25rem)]' 
                  : 'left-[calc(50%-0.25rem)] w-[calc(50%-0.25rem)]'
              }`}
            ></div>
            
            <div className="flex relative z-10">
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-500 flex items-center gap-1 sm:gap-2 cursor-pointer ${
                  activeTab === 'videos'
                    ? 'text-white shadow-md'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
                }`}
              >
                <span className="text-sm sm:text-lg">🎥</span>
                <span className="hidden sm:inline">Educational Videos</span>
                <span className="sm:hidden">Videos</span>
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all duration-500 flex items-center gap-1 sm:gap-2 cursor-pointer ${
                  activeTab === 'publications'
                    ? 'text-white shadow-md'
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`
                }`}
              >
                <span className="text-sm sm:text-lg">📚</span>
                <span className="hidden sm:inline">Research Publications</span>
                <span className="sm:hidden">Publications</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'videos' ? (
          <div>
            {/* Responsive Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {displayedVideos.map((video) => (
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

            {/* Load More/Less Buttons - Responsive */}
            {videos.length > 6 && (
              <div className="flex justify-center mt-6 sm:mt-8">
                {videosToShow < videos.length ? (
                  <button
                    onClick={handleLoadMore}
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
        ) : (
          <div>
            {/* ResearchGate Stats */}
            <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-2xl p-6 mb-8`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-2`}>
                    ResearchGate Profile
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    Total: <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>17 publications</span> • 
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold ml-1`}>3,282+ reads</span> • 
                    <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold ml-1`}>102+ citations</span>
                  </p>
                </div>
                <a 
                  href="https://www.researchgate.net/profile/Kedar-Hibare-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2`}
                >
                  View on ResearchGate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Responsive Publications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {displayedPublications.map((publication) => (
                <a
                  key={publication.id}
                  href={publication.link || "https://www.researchgate.net/profile/Kedar-Hibare-2"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden cursor-pointer`}
                  aria-label={`Read publication: ${publication.title} on ResearchGate`}
                >
                  {/* External link indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <svg className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  {/* Specular highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Title Section */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-2`}>
                      {publication.title}
                    </h4>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2 sm:mb-3`}>
                      {publication.authors}
                    </p>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                      {publication.description || "Research publication in the field of interventional pulmonology and respiratory medicine."}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className={`border-t ${isDarkMode ? 'border-white/20' : 'border-gray-200'} mb-3 sm:mb-4`}></div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    {/* Publication Details */}
                    <div className="space-y-1 sm:space-y-2">
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {publication.journal}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {publication.year}
                        </p>
                        {publication.citations && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                            {publication.citations} citations
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Read Paper Button - Visual indicator only since entire card is clickable */}
                    <div 
                      className={`${isDarkMode ? 'text-red-400' : 'text-red-500'} flex items-center gap-1 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all duration-300 relative z-10`}
                    >
                      <span>Read Paper</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Load More/Less Buttons - Responsive */}
            {publications.length > 6 && (
              <div className="flex justify-center mt-6 sm:mt-8">
                {publicationsToShow < publications.length ? (
                  <button
                    onClick={handleLoadMore}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Load More Publications ({publications.length - publicationsToShow} remaining)
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
