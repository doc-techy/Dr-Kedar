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

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Uniform background for entire webpage */}
      <SectionBackground variant="gradient" />
      
      <Header />
      
      {/* Main content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
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
            <div className="text-center mb-16">
              <h1 className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Professional Medical Courses</span>
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                Advance your medical career with our specialized courses in interventional pulmonology, bronchoscopy, and AI in medicine.
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="group relative bg-white/8 backdrop-blur-3xl border border-white/15 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:bg-white/12 hover:border-white/25 shadow-xl h-full flex flex-col overflow-hidden">
                  {/* Liquid Glass Effect - Multiple Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-white/2 to-transparent rounded-3xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/4 to-white/8 rounded-3xl pointer-events-none"></div>
                  
                  {/* Specular Highlights - Liquid Glass characteristic */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl"></div>
                  <div className="absolute top-2 left-2 w-8 h-8 bg-white/10 rounded-full blur-sm"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/8 rounded-full blur-sm"></div>
                  
                  {/* Course Header */}
                  <div className="text-center mb-6 relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-3xl`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-gray-100 transition-colors duration-500">{course.title}</h3>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors duration-500">{course.mode}</p>
                  </div>

                  {/* Course Details - Liquid Glass Style */}
                  <div className="space-y-3 mb-6 relative z-10 flex-grow">
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:bg-white/8 transition-all duration-500">
                      <span className="text-sm text-gray-300 font-medium">Duration:</span>
                      <span className="font-semibold text-white text-sm">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:bg-white/8 transition-all duration-500">
                      <span className="text-sm text-gray-300 font-medium">Price:</span>
                      <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{course.price}</span>
                    </div>
                  </div>

                  {/* Description - Enhanced with Liquid Glass */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10 group-hover:text-gray-200 transition-colors duration-500">
                    {course.description}
                  </p>

                  {/* Features - Liquid Glass Style */}
                  <div className="space-y-2 mb-6 relative z-10 flex-grow">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-200 py-2 px-3 bg-white/3 backdrop-blur-sm rounded-lg border border-white/5 group-hover:bg-white/6 transition-all duration-500">
                        <div className={`w-2 h-2 bg-gradient-to-r ${course.gradient} rounded-full mr-3 shadow-sm`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Apply Button - Liquid Glass Enhanced */}
                  <button
                    onClick={() => handleApply(course.title)}
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-2xl text-white px-6 py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:-translate-y-2 rounded-2xl relative z-10 shadow-xl mt-auto backdrop-blur-sm border border-white/20 hover:border-white/30`}
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
                <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Medical Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
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
