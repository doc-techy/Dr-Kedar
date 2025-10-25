'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'

export default function CoursesPage() {
  const { isDarkMode } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    experience: ''
  })

  const courses = [
    {
      id: 1,
      title: "Interventional Pulmonology",
      duration: "1 year",
      mode: "Online / Offline Contact",
      price: "₹1,00,000",
      description: "Comprehensive training in advanced interventional pulmonology techniques, bronchoscopy procedures, and patient management.",
      features: [
        "Hands-on bronchoscopy training",
        "Case studies and clinical exposure",
        "International certification",
        "Mentorship program"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Bronchoscopy",
      duration: "4 months",
      mode: "Online / Offline Contact",
      price: "₹40,000",
      description: "Specialized training in bronchoscopic procedures, diagnostic techniques, and therapeutic interventions.",
      features: [
        "Rigid & flexible bronchoscopy",
        "EBUS and TBNA procedures",
        "Airway management",
        "Practical workshops"
      ],
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      id: 3,
      title: "AI in Medicine",
      duration: "By Medxchange",
      mode: "Online / Offline Contact",
      price: "Contact for Pricing",
      description: "Cutting-edge AI applications in medical diagnosis, treatment planning, and healthcare innovation.",
      features: [
        "AI in medical imaging",
        "Machine learning in healthcare",
        "Digital health solutions",
        "Industry partnerships"
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    }
  ]

  const handleApply = (courseTitle: string) => {
    setSelectedCourse(courseTitle)
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      qualification: '',
      experience: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const toggleExpanded = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Uniform background for entire webpage */}
      <SectionBackground variant="gradient" />
      
      <Header />
      
      {/* Main content */}
      <main className="pt-20">
        {/* Hero Section - Enhanced Responsive */}
        <section className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 relative overflow-hidden">
          {/* Background floating circles for glassmorphic effect - only in dark mode */}
          {isDarkMode && (
            <>
              <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-tr from-teal-500/40 to-cyan-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/40 to-rose-600/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-br from-indigo-500/40 to-blue-600/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </>
          )}
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Professional Medical Courses</span>
              </h1>
            </div>

            {/* Courses Grid - Enhanced Responsive with Centering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
              {courses.map((course) => (
                <div key={course.id} className={`group relative ${isDarkMode ? 'bg-white/10 backdrop-blur-3xl border border-white/20' : 'bg-white/95 backdrop-blur-sm border border-gray-200'} rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${isDarkMode ? 'hover:bg-white/15 hover:border-white/30' : 'hover:bg-white hover:border-gray-300'} shadow-xl h-full flex flex-col overflow-hidden w-full max-w-sm`}>
                  {/* Enhanced Liquid Glass Effect - Mobile Optimized */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/6 to-white/10 rounded-2xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/4 via-transparent to-white/6 rounded-2xl pointer-events-none"></div>
                  
                  {/* Enhanced Specular Highlights */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-white/15 rounded-full blur-sm"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/12 rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/5 rounded-full blur-md transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Course Header - Responsive */}
                  <div className="text-center mb-3 sm:mb-4 relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 sm:mb-3 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-3xl`}>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white group-hover:text-gray-100' : 'text-gray-900 group-hover:text-gray-800'} mb-1 drop-shadow-lg transition-colors duration-500`}>{course.title}</h3>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-500`}>{course.mode}</p>
                  </div>

                  {/* Course Details - Responsive */}
                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 relative z-10 flex-grow">
                    <div className={`flex justify-between items-center py-1.5 sm:py-2 px-2 sm:px-3 ${isDarkMode ? 'bg-white/8 backdrop-blur-sm border border-white/15 group-hover:bg-white/12' : 'bg-gray-50 border border-gray-200 group-hover:bg-gray-100'} rounded-lg transition-all duration-500`}>
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Duration:</span>
                      <span className={`font-semibold text-xs ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course.duration}</span>
                    </div>
                    <div className={`flex justify-between items-center py-1.5 sm:py-2 px-2 sm:px-3 ${isDarkMode ? 'bg-white/8 backdrop-blur-sm border border-white/15 group-hover:bg-white/12' : 'bg-gray-50 border border-gray-200 group-hover:bg-gray-100'} rounded-lg transition-all duration-500`}>
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Price:</span>
                      <span className="font-bold text-xs sm:text-sm bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{course.price}</span>
                    </div>
                  </div>

                  {/* Description - Compact */}
                  <p className={`text-xs leading-relaxed mb-3 relative z-10 ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'} transition-colors duration-500 line-clamp-2`}>
                    {course.description}
                  </p>

                  {/* Features - Desktop: Always show, Mobile: Show only when expanded */}
                  <div className="space-y-1 mb-4 relative z-10 flex-grow">
                    {/* Desktop: Show all features with more spacing */}
                    <div className="hidden md:block space-y-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className={`flex items-center text-xs py-1.5 px-2 ${isDarkMode ? 'text-gray-200 bg-white/6 backdrop-blur-sm border border-white/8 group-hover:bg-white/8' : 'text-gray-700 bg-gray-50 border border-gray-200 group-hover:bg-gray-100'} rounded-md transition-all duration-500`}>
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${course.gradient} rounded-full mr-2 shadow-sm`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Mobile: Show only when expanded */}
                    <div className="md:hidden">
                      {expandedCourse === course.id && course.features.map((feature, index) => (
                        <div key={index} className={`flex items-center text-xs py-1.5 px-2 ${isDarkMode ? 'text-gray-200 bg-white/6 backdrop-blur-sm border border-white/8 group-hover:bg-white/8' : 'text-gray-700 bg-gray-50 border border-gray-200 group-hover:bg-gray-100'} rounded-md transition-all duration-500`}>
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${course.gradient} rounded-full mr-2 shadow-sm`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View More Button - Mobile Only */}
                  {course.features.length > 0 && (
                    <div className="md:hidden">
                      <button
                        onClick={() => toggleExpanded(course.id)}
                        className={`w-full mb-2 sm:mb-3 py-1.5 sm:py-2 px-3 sm:px-4 ${isDarkMode ? 'bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12' : 'bg-gray-100 border border-gray-200 hover:bg-gray-200'} rounded-lg font-medium text-xs transition-all duration-300 relative z-10`}
                      >
                        {expandedCourse === course.id ? 'View Less' : 'View More'}
                      </button>
                    </div>
                  )}

                  {/* Apply Button - Responsive */}
                  <button
                    onClick={() => handleApply(course.title)}
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-2xl text-white px-3 sm:px-4 py-2 sm:py-3 font-semibold text-xs uppercase tracking-wider transition-all duration-500 hover:-translate-y-1 rounded-xl relative z-10 shadow-xl mt-auto backdrop-blur-sm border border-white/20 hover:border-white/30`}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Application Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-sm flex items-center justify-center z-50 p-4`}>
          <div className={`${isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-300'} rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Apply for {selectedCourse}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Medical Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`flex-1 px-4 py-2 border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
