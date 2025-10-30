'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'
import { useTheme } from '@/contexts/ThemeContext'

export default function CoursesPage() {
  const { isDarkMode } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentStep, setCurrentStep] = useState(1)
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    message: ''
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const courses = [
    {
      id: 1,
      title: "Interventional Pulmonology",
      subtitle: "Advanced Training Program",
      duration: "1 year",
      mode: "Online / Offline",
      price: "₹1,00,000",
      originalPrice: null,
      description: "Comprehensive fellowship program covering advanced interventional pulmonology techniques, bronchoscopy procedures, and cutting-edge respiratory medicine practices.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
      features: [
        "Hands-on bronchoscopy training with live cases",
        "Advanced EBUS and TBNA procedures",
        "International certification upon completion",
        "One-on-one mentorship with Dr. Kedar Hibare",
        "Research opportunities and publications",
        "Placement assistance in top hospitals"
      ],
      curriculum: [
        "Module 1: Fundamentals of Pulmonology",
        "Module 2: Advanced Bronchoscopy Techniques",
        "Module 3: Interventional Procedures",
        "Module 4: Thoracic Oncology",
        "Module 5: Research Methodology"
      ],
      icon: "🏥",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      category: "Fellowship",
      level: "Advanced",
      seats: 15,
      enrolled: 8,
      rating: 4.9,
      reviews: 24
    },
    {
      id: 2,
      title: "Bronchoscopy",
      subtitle: "Intensive Training Program",
      duration: "4 months",
      mode: "Online / Offline",
      price: "₹40,000",
      originalPrice: null,
      description: "Specialized intensive training in bronchoscopic procedures, diagnostic techniques, and therapeutic interventions for respiratory conditions.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
      features: [
        "Rigid & flexible bronchoscopy training",
        "EBUS and TBNA procedures",
        "Airway management techniques",
        "Practical workshops with simulation",
        "Case-based learning approach",
        "Certificate of completion"
      ],
      curriculum: [
        "Module 1: Bronchoscopy Basics",
        "Module 2: Diagnostic Procedures",
        "Module 3: Therapeutic Interventions",
        "Module 4: Advanced Techniques"
      ],
      icon: "🔬",
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      category: "Workshop",
      level: "Intermediate",
      seats: 20,
      enrolled: 12,
      rating: 4.8,
      reviews: 18
    },
    {
      id: 3,
      title: "AI in Medicine - by MedXchange",
      subtitle: "Future of Healthcare",
      duration: "6 months",
      mode: "Online Learning",
      price: "Contact for Pricing",
      originalPrice: null,
      description: "Cutting-edge course on AI applications in respiratory medicine, medical imaging, and healthcare innovation for modern medical practice.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      features: [
        "AI in medical imaging interpretation",
        "Machine learning in healthcare",
        "Digital health solutions",
        "Industry partnerships and projects",
        "Future technology trends",
        "Innovation in medicine"
      ],
      curriculum: [
        "Module 1: AI Fundamentals",
        "Module 2: Medical Imaging AI",
        "Module 3: Healthcare Analytics",
        "Module 4: Future Technologies"
      ],
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      category: "Specialization",
      level: "Advanced",
      seats: 25,
      enrolled: 15,
      rating: 4.7,
      reviews: 12,
      externalLink: "https://medxchange.in/"
    }
  ]

  const handleApply = (course: any) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
    setCurrentStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log('Form submitted:', formData)
      alert('Application submitted successfully! We will contact you soon.')
      setIsModalOpen(false)
      setCurrentStep(1)
      setFormData({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        message: ''
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const filters = ['All', 'Fellowship', 'Workshop', 'Specialization']

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <SectionBackground variant="gradient" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-200 to-purple-300'
        } blur-[100px] animate-pulse`}></div>
        <div className={`absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-teal-500 to-cyan-600' : 'bg-gradient-to-r from-teal-200 to-cyan-300'
        } blur-[100px] animate-pulse`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-5 ${
          isDarkMode ? 'bg-gradient-to-r from-pink-500 to-orange-500' : 'bg-gradient-to-r from-pink-200 to-orange-200'
        } blur-[80px] animate-pulse`} style={{animationDelay: '4s'}}></div>
      </div>
      
      <Header />
      
      <main className="pt-20 relative">


        {/* Filter Tabs & Courses Section */}
        <section id="courses-section" className="py-8 lg:py-12 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Programs</span>
              </h2>
            </div>

            
            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className={`relative h-full ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Course Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black/60 to-transparent' : 'from-black/40 to-transparent'}`}></div>
                    
                    {/* Category Badge on Image */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                        course.category === 'Fellowship' 
                          ? `bg-blue-500/80 text-white`
                          : course.category === 'Workshop'
                          ? `bg-green-500/80 text-white`
                          : `bg-purple-500/80 text-white`
                      }`}>
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Title and Subtitle */}
                    <div className="mb-3">
                      <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-black mb-1 group-hover:text-blue-600 transition-colors line-clamp-2`}>
                        {course.title}
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-semibold text-xs`}>
                        {course.subtitle}
                      </p>
                    </div>

                    {/* Duration and Mode */}
                    <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-medium">{course.duration}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs font-medium">{course.mode}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 leading-relaxed text-xs line-clamp-3`}>
                      {course.description}
                    </p>

                    {/* Key Features Preview */}
                    <div className="mb-3">
                      {/* Mobile: fully hidden by default, show on View more; Desktop: small preview */}
                      <div className={`space-y-1.5 overflow-hidden transition-all duration-300 ${expandedCourse === course.id ? 'max-h-96 sm:max-h-96' : 'max-h-0 sm:max-h-20'}`}>
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`mt-1 w-1 h-1 rounded-full bg-gradient-to-r ${course.gradient} flex-shrink-0`}></div>
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs leading-tight`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {course.features.length > 0 && (
                        <>
                          {/* Mobile toggle */}
                          <button
                            onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                            className={`sm:hidden text-xs ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-semibold transition-colors mt-1.5 inline-flex items-center gap-1`}
                          >
                            {expandedCourse === course.id ? (
                              <>
                                Show less
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </>
                            ) : (
                              <>
                                View more
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </>
                            )}
                          </button>

                          {/* Desktop toggle retains preview semantics */}
                          {course.features.length > 2 && (
                            <button
                              onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                              className={`hidden sm:inline-flex text-xs ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-semibold transition-colors mt-1.5 items-center gap-1`}
                            >
                              {expandedCourse === course.id ? (
                                <>
                                  Show less
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  +{course.features.length - 2} more features
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </>
                              )}
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    {/* Pricing & CTA */}
                    <div className={`${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'} pt-3 mt-auto`}>
                      {/* Price Section */}
                      <div className="mb-3">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-black`}>
                            {course.price}
                          </div>
                          {course.originalPrice && (
                            <>
                              <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm line-through`}>
                                {course.originalPrice}
                              </div>
                              <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                -{Math.round((1 - parseInt(String(course.price).replace(/[^0-9]/g, '')) / parseInt(String(course.originalPrice).replace(/[^0-9]/g, ''))) * 100)}%
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      { (course as any).externalLink ? (
                        <a
                          href={(course as any).externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-lg text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 group/btn flex items-center justify-center gap-2`}
                        >
                          Book Now
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      ) : (
                        <button
                          onClick={() => handleApply(course)}
                          className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-lg text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-1 group/btn flex items-center justify-center gap-2`}
                        >
                          Apply Now
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Enhanced Multi-Step Application Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div 
            className={`${isDarkMode ? 'bg-gray-900 border border-white/20' : 'bg-white border border-gray-200'} rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`${isDarkMode ? 'bg-white/5 border-b border-white/10' : 'bg-gray-50 border-b border-gray-200'} p-6`}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedCourse.gradient} flex items-center justify-center text-2xl`}>
                      {selectedCourse.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Apply for Course
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        {selectedCourse.title}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsModalOpen(false)
                    setCurrentStep(1)
                  }}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'} transition-all p-2 rounded-xl`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center justify-between">
                {[1, 2].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className={`flex items-center gap-3 ${step === 1 ? '' : 'flex-1'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white scale-110'
                          : isDarkMode
                            ? 'bg-white/10 text-gray-500'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        {currentStep > step ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          step
                        )}
                      </div>
                      <span className={`font-semibold text-sm ${currentStep >= step ? (isDarkMode ? 'text-white' : 'text-gray-900') : (isDarkMode ? 'text-gray-500' : 'text-gray-400')}`}>
                        {step === 1 ? 'Personal Info' : 'Professional Details'}
                      </span>
                    </div>
                    {step < 2 && (
                      <div className={`h-0.5 flex-1 mx-4 transition-all duration-300 ${
                        currentStep > step
                          ? 'bg-gradient-to-r from-blue-600 to-teal-600'
                          : isDarkMode
                            ? 'bg-white/10'
                            : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold mb-6`}>
                    Personal Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="Dr. John Doe"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="john.doe@email.com"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Medical Qualification *
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder="MBBS, MD, DNB, etc."
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold mb-6`}>
                    Professional Details
                  </h4>
                  
                  <div>
                    <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Why are you interested in this course?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3.5 ${isDarkMode ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                      placeholder="Tell us about your goals, expectations, and why you want to join this program..."
                    />
                  </div>

                  {/* Course Summary */}
                  <div className={`${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'} rounded-xl p-6`}>
                    <h5 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>Course Summary</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Course</span>
                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>{selectedCourse.title}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</span>
                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>{selectedCourse.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mode</span>
                        <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>{selectedCourse.mode}</span>
                      </div>
                      <div className={`${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'} pt-3 mt-3`}>
                        <div className="flex justify-between items-center">
                          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-bold`}>Fee</span>
                          <div className="text-right">
                            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-black`}>{selectedCourse.price}</div>
                            {selectedCourse.originalPrice && (
                              <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm line-through`}>{selectedCourse.originalPrice}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className={`flex gap-4 mt-8 pt-6 ${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className={`flex-1 px-6 py-3.5 ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white' : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900'} rounded-xl transition-all duration-300 font-bold flex items-center justify-center gap-2`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`${currentStep === 1 ? 'w-full' : 'flex-1'} px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5`}
                >
                  {currentStep === 1 ? (
                    <>
                      Continue
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
