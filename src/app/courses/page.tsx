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
      title: "Interventional Pulmonology Fellowship",
      subtitle: "Advanced Training Program",
      duration: "12 months",
      mode: "Hybrid Learning",
      price: "₹1,00,000",
      originalPrice: "₹1,20,000",
      description: "Comprehensive fellowship program covering advanced interventional pulmonology techniques, bronchoscopy procedures, and cutting-edge respiratory medicine practices.",
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
      title: "Bronchoscopy Masterclass",
      subtitle: "Intensive Training Program",
      duration: "4 months",
      mode: "Hands-on Workshop",
      price: "₹40,000",
      originalPrice: "₹50,000",
      description: "Specialized intensive training in bronchoscopic procedures, diagnostic techniques, and therapeutic interventions for respiratory conditions.",
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
      title: "AI in Respiratory Medicine",
      subtitle: "Future of Healthcare",
      duration: "6 months",
      mode: "Online Learning",
      price: "Contact for Pricing",
      originalPrice: null,
      description: "Cutting-edge course on AI applications in respiratory medicine, medical imaging, and healthcare innovation for modern medical practice.",
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
      reviews: 12
    }
  ]

  const handleApply = (course: any) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      qualification: '',
      experience: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getProgressPercentage = (enrolled: number, seats: number) => {
    return (enrolled / seats) * 100
  }

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <SectionBackground variant="gradient" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gradient-to-r from-blue-200 to-purple-300'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-gradient-to-r from-teal-400 to-cyan-600' : 'bg-gradient-to-r from-teal-200 to-cyan-300'
        } blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
      </div>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span>Professional Medical Education</span>
              </div>
              
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 leading-tight`}>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Medical Courses
                </span>
              </h1>
              
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-medium`}>
                Advance your medical career with world-class training programs led by Dr. Kedar Hibare and international experts
              </p>
            </div>

            {/* Course Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">3</div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>Courses</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Available Programs</p>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">35+</div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>Students</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Successfully Trained</p>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">4.8</div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>Rating</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Average Rating</p>
              </div>
              <div className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">100%</div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>Success</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Placement Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-16`}>
              Available Courses
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={course.id} 
                  className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Course Header */}
                  <div className={`relative p-8 bg-gradient-to-br ${course.bgGradient}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {course.icon}
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          course.category === 'Fellowship' 
                            ? `${isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`
                            : course.category === 'Workshop'
                            ? `${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`
                            : `${isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`
                        }`}>
                          {course.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold mb-2`}>
                      {course.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-semibold mb-4`}>
                      {course.subtitle}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{course.mode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-8">
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {course.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold mb-3`}>Key Features</h4>
                      <div className="space-y-2">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.gradient}`}></div>
                            <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{feature}</span>
                          </div>
                        ))}
                        {course.features.length > 3 && (
                          <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm italic`}>
                            +{course.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-3 text-center`}>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>{course.rating}</div>
                        <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>Rating</div>
                      </div>
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-3 text-center`}>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>{course.reviews}</div>
                        <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>Reviews</div>
                      </div>
                    </div>

                    {/* Enrollment Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Enrollment Progress</span>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{course.enrolled}/{course.seats}</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${course.gradient} transition-all duration-1000`}
                          style={{width: `${getProgressPercentage(course.enrolled, course.seats)}%`}}
                        ></div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>
                          {course.price}
                        </div>
                        {course.originalPrice && (
                          <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm line-through`}>
                            {course.originalPrice}
                          </div>
                        )}
                      </div>
                      {course.originalPrice && (
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                          Limited Offer
                        </div>
                      )}
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => handleApply(course)}
                      className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-2xl text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1`}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Application Modal */}
      {isModalOpen && selectedCourse && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm flex items-center justify-center z-50 p-4`}>
          <div className={`${isDarkMode ? 'bg-gray-900 border border-white/20' : 'bg-white border border-gray-200'} rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Apply for {selectedCourse.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Fill out the form below to start your application
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors p-2 rounded-lg hover:bg-white/10`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Medical Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="e.g., MBBS, MD, etc."
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  placeholder="Enter your years of experience"
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                  placeholder="Tell us about your goals and expectations..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`flex-1 px-6 py-4 border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-xl transition-all duration-300 font-semibold`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
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
