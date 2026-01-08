'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface VideoData {
  id: number
  title: string
  thumbnail: string
  duration: string
  views: string
  date: string
  category: string
  gradient: string
  bgGradient: string
  youtubeUrl: string
  videoId: string
}

export default function VideoPublicationsSection() {
  const { isDarkMode } = useTheme()
  const [videosToShow, setVideosToShow] = useState(6) // 3 rows * 2 columns on mobile, 2 rows * 3 columns on desktop
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [videos, setVideos] = useState<VideoData[]>([])
  const [loading, setLoading] = useState(true)

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    if (!url) return null
    
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
    ]
    
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1] || match[0]
    }
    
    return null
  }

  // Helper function to get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  }

  // Helper function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null)
      }
    }

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent body scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo])

  const handleVideoClick = (youtubeUrl: string) => {
    const videoId = getYouTubeVideoId(youtubeUrl)
    if (videoId) {
      setSelectedVideo(videoId)
    }
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  // Fetch YouTube video metadata
  useEffect(() => {
    const fetchVideoMetadata = async () => {
      const videoUrls = [
        "https://www.youtube.com/watch?v=_I8BYRVbd2M",
        "https://www.youtube.com/watch?v=o_-wy9z6W3s",
        "https://www.youtube.com/watch?v=EwsbTSBWi6o",
        "https://www.youtube.com/watch?v=T8Yt9q1b_jU",
        "https://www.youtube.com/watch?v=oKg1vxKaMLY",
        "https://www.youtube.com/watch?v=tvwhWADAeTk"
      ]

      const categories = [
        "Medical Education",
        "Oncology",
        "Diagnostics",
        "Intervention",
        "Pleural Medicine",
        "ILD"
      ]

      const gradients = [
        "from-blue-500 to-blue-600",
        "from-teal-500 to-teal-600",
        "from-purple-500 to-purple-600",
        "from-green-500 to-green-600",
        "from-orange-500 to-orange-600",
        "from-red-500 to-red-600"
      ]

      const bgGradients = [
        "from-blue-50 to-blue-100",
        "from-teal-50 to-teal-100",
        "from-purple-50 to-purple-100",
        "from-green-50 to-green-100",
        "from-orange-50 to-orange-100",
        "from-red-50 to-red-100"
      ]

      try {
        const videoPromises = videoUrls.map(async (url, index) => {
          const videoId = getYouTubeVideoId(url)
          if (!videoId) return null

          try {
            // Fetch from our API route
            const response = await fetch(`/api/youtube-video?videoId=${videoId}`)
            if (response.ok) {
              const data = await response.json()
              return {
                id: index + 1,
                title: data.title || `Video ${index + 1}`,
                thumbnail: data.thumbnail || getYouTubeThumbnail(videoId),
                duration: (data.duration && data.duration !== 'N/A' && data.duration !== '') ? data.duration : "N/A",
                views: (data.views && data.views !== 'N/A' && data.views !== '') ? data.views : "N/A",
                date: (data.date && data.date !== 'N/A' && data.date !== '') ? data.date : "N/A",
                category: categories[index] || "Medical Education",
                gradient: gradients[index] || "from-blue-500 to-blue-600",
                bgGradient: bgGradients[index] || "from-blue-50 to-blue-100",
                youtubeUrl: url,
                videoId: videoId
              }
            }
          } catch (error) {
            console.error(`Error fetching metadata for video ${index + 1}:`, error)
          }

          // Fallback if API fails
          return {
            id: index + 1,
            title: `Educational Video ${index + 1}`,
            thumbnail: getYouTubeThumbnail(videoId),
            duration: "N/A",
            views: "N/A",
            date: "N/A",
            category: categories[index] || "Medical Education",
            gradient: gradients[index] || "from-blue-500 to-blue-600",
            bgGradient: bgGradients[index] || "from-blue-50 to-blue-100",
            youtubeUrl: url,
            videoId: videoId
          }
        })

        const fetchedVideos = await Promise.all(videoPromises)
        setVideos(fetchedVideos.filter((v): v is VideoData => v !== null))
      } catch (error) {
        console.error('Error fetching videos:', error)
        // Set fallback videos
        const fallbackVideos = videoUrls.map((url, index) => {
          const videoId = getYouTubeVideoId(url)
          return {
            id: index + 1,
            title: `Educational Video ${index + 1}`,
            thumbnail: videoId ? getYouTubeThumbnail(videoId) : "",
            duration: "N/A",
            views: "N/A",
            date: "N/A",
            category: categories[index] || "Medical Education",
            gradient: gradients[index] || "from-blue-500 to-blue-600",
            bgGradient: bgGradients[index] || "from-blue-50 to-blue-100",
            youtubeUrl: url,
            videoId: videoId || ""
          }
        })
        setVideos(fallbackVideos)
      } finally {
        setLoading(false)
      }
    }

    fetchVideoMetadata()
  }, [])

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

  if (loading) {
    return (
      <section id="video-publications" className="relative overflow-hidden pt-28 sm:pt-24 lg:pt-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading videos...</p>
          </div>
        </div>
      </section>
    )
  }

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
                <div 
                  key={video.id} 
                  onClick={() => video.youtubeUrl && handleVideoClick(video.youtubeUrl)}
                  className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative cursor-pointer ${video.youtubeUrl ? '' : 'cursor-default'}`}
                >
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
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault fails
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('maxresdefault')) {
                          const videoId = video.youtubeUrl.match(/[?&]v=([^&]+)/)?.[1] || video.youtubeUrl.split('/').pop()
                          if (videoId) {
                            target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                          }
                        }
                      }}
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
                    
                    <div className={`h-0.5 bg-gradient-to-r ${video.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Videos Grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:pt-6 sm:pb-12">
              {(displayedVideos.length > 0 ? displayedVideos : videos).map((video) => (
                <div 
                  key={video.id} 
                  onClick={() => video.youtubeUrl && handleVideoClick(video.youtubeUrl)}
                  className={`group ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 relative cursor-pointer ${video.youtubeUrl ? '' : 'cursor-default'}`}
                >
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
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault fails
                        const target = e.target as HTMLImageElement
                        if (target.src.includes('maxresdefault')) {
                          const videoId = video.youtubeUrl.match(/[?&]v=([^&]+)/)?.[1] || video.youtubeUrl.split('/').pop()
                          if (videoId) {
                            target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                          }
                        }
                      }}
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

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getYouTubeEmbedUrl(selectedVideo)}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
