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

  const getProgressPercentage = (enrolled: number, seats: number) => {
    return (enrolled / seats) * 100
  }

  const filters = ['All', 'Fellowship', 'Workshop', 'Specialization']

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Fellowship Graduate",
      image: "👩‍⚕️",
      rating: 5,
      text: "The fellowship program exceeded my expectations. Dr. Kedar's hands-on approach and expertise transformed my understanding of interventional pulmonology."
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      role: "Workshop Participant",
      image: "👨‍⚕️",
      rating: 5,
      text: "Outstanding training experience! The practical workshops and real case studies gave me confidence to perform advanced procedures independently."
    },
    {
      id: 3,
      name: "Dr. Anita Desai",
      role: "AI Course Student",
      image: "👩‍⚕️",
      rating: 5,
      text: "The AI in Respiratory Medicine course opened new horizons. Perfect blend of technology and medical practice for the future of healthcare."
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "What are the prerequisites for the fellowship program?",
      answer: "Candidates should have completed their MD/DNB in Pulmonary Medicine or equivalent qualification. Clinical experience in respiratory medicine is preferred."
    },
    {
      id: 2,
      question: "Are the courses recognized internationally?",
      answer: "Yes, all our programs are internationally recognized. Fellowship graduates receive certification that is acknowledged globally."
    },
    {
      id: 3,
      question: "What is the class size for each program?",
      answer: "We maintain small batch sizes to ensure personalized attention. Fellowship has 15 seats, workshops have 20 seats, and online courses have 25 seats."
    },
    {
      id: 4,
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer comprehensive placement assistance with our network of partner hospitals and healthcare institutions across India and abroad."
    }
  ]

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
        {/* Enhanced Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                <span>Professional Medical Education</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Main Heading with Gradient Animation */}
              <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}>
                <span className="inline-block">Transform Your</span><br/>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                  Medical Career
                </span>
              </h1>
              
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10`}>
                Join world-class training programs led by Dr. Kedar Hibare and international experts. 
                Master interventional pulmonology and advanced respiratory medicine.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button 
                  onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <span className="flex items-center gap-2">
                    Explore Courses
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className={`px-8 py-4 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-gray-100 hover:bg-gray-200 border-gray-300'} border-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1`}>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Enhanced Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { number: "3", label: "Courses", subtext: "Available Programs", icon: "📚" },
                { number: "35+", label: "Students", subtext: "Successfully Trained", icon: "👨‍⚕️" },
                { number: "4.8", label: "Rating", subtext: "Average Rating", icon: "⭐" },
                { number: "100%", label: "Success", subtext: "Placement Rate", icon: "🎯" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10' : 'bg-white border border-gray-200 hover:shadow-xl'} rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 group cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-base mb-1`}>{stat.label}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Tabs & Courses Section */}
        <section id="courses-section" className="py-16 lg:py-24 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Programs</span>
              </h2>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
                Choose from our carefully crafted programs designed for medical professionals
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg scale-105'
                      : isDarkMode 
                        ? 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {filter}
                  {filter !== 'All' && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeFilter === filter ? 'bg-white/20' : isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}>
                      {courses.filter(c => c.category === filter).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className={`relative ${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Popular Badge */}
                  {course.enrolled / course.seats > 0.5 && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Course Header with Gradient Background */}
                  <div className={`relative p-6 bg-gradient-to-br ${course.bgGradient} overflow-hidden`}>
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${course.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {course.icon}
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                          course.category === 'Fellowship' 
                            ? `bg-blue-500/30 text-blue-700 border border-blue-400/50`
                            : course.category === 'Workshop'
                            ? `bg-green-500/30 text-green-700 border border-green-400/50`
                            : `bg-purple-500/30 text-purple-700 border border-purple-400/50`
                        } backdrop-blur-sm`}>
                          {course.category}
                        </span>
                      </div>
                      
                      <h3 className={`${isDarkMode ? 'text-gray-900' : 'text-gray-900'} text-xl font-black mb-1.5 group-hover:text-gray-800 transition-colors`}>
                        {course.title}
                      </h3>
                      <p className={`text-gray-700 font-semibold text-sm mb-4`}>
                        {course.subtitle}
                      </p>
                      
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-medium">{course.duration}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs font-medium">{course.mode}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-5 leading-relaxed text-sm`}>
                      {course.description}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-3 text-center group-hover:scale-105 transition-transform`}>
                        <div className="flex items-center justify-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-sm`}>{course.rating}</div>
                        <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-xs`}>Rating</div>
                      </div>
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-3 text-center group-hover:scale-105 transition-transform`}>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>{course.reviews}</div>
                        <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-xs`}>Reviews</div>
                      </div>
                      <div className={`${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-xl p-3 text-center group-hover:scale-105 transition-transform`}>
                        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-1`}>{course.enrolled}</div>
                        <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-xs`}>Students</div>
                      </div>
                    </div>

                    {/* Enrollment Progress */}
                    <div className="mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs font-medium`}>
                          {course.seats - course.enrolled} seats left
                        </span>
                        <span className={`text-xs font-bold ${
                          course.seats - course.enrolled <= 5 ? 'text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {course.enrolled}/{course.seats}
                        </span>
                      </div>
                      <div className={`w-full h-2.5 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} overflow-hidden`}>
                        <div 
                          className={`h-full bg-gradient-to-r ${course.gradient} transition-all duration-1000 ease-out`}
                          style={{width: `${getProgressPercentage(course.enrolled, course.seats)}%`}}
                        ></div>
                      </div>
                    </div>

                    {/* Expandable Features */}
                    <div className="mb-5">
                      <button
                        onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                        className={`w-full flex items-center justify-between ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-semibold text-sm mb-3 transition-colors`}
                      >
                        <span>Key Features</span>
                        <svg className={`w-5 h-5 transition-transform ${expandedCourse === course.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div className={`space-y-2 overflow-hidden transition-all duration-300 ${expandedCourse === course.id ? 'max-h-96' : 'max-h-24'}`}>
                        {course.features.map((feature, idx) => (
                          <div key={idx} className={`flex items-start gap-2.5 ${idx >= 3 && expandedCourse !== course.id ? 'opacity-50' : ''}`}>
                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.gradient} flex-shrink-0`}></div>
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs leading-relaxed`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className={`${isDarkMode ? 'border-t border-white/10' : 'border-t border-gray-200'} pt-5`}>
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-3xl font-black`}>
                            {course.price}
                          </div>
                          {course.originalPrice && (
                            <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} text-sm line-through`}>
                              {course.originalPrice}
                            </div>
                          )}
                        </div>
                        {course.originalPrice && (
                          <div className="flex flex-col items-end">
                            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                              SAVE {Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleApply(course)}
                        className={`w-full bg-gradient-to-r ${course.gradient} hover:shadow-xl text-white px-5 py-3.5 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 group/btn flex items-center justify-center gap-2`}
                      >
                        Apply Now
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl sm:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                What Our <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Students Say</span>
              </h2>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
                Hear from medical professionals who have transformed their careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-3xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg`}>
                        {testimonial.name}
                      </h4>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed italic`}>
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl sm:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Frequently Asked <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
                Everything you need to know about our programs
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const [isOpen, setIsOpen] = useState(false)
                return (
                  <div
                    key={faq.id}
                    className={`${isDarkMode ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-white border border-gray-200'} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg pr-4`}>
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${isDarkMode ? 'bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-xl border border-white/10' : 'bg-gradient-to-r from-blue-50 to-teal-50 border border-gray-200'} rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden`}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                  Ready to Transform Your Career?
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg lg:text-xl max-w-2xl mx-auto mb-8`}>
                  Join hundreds of medical professionals who have advanced their careers through our world-class programs
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                  >
                    <span className="flex items-center gap-2">
                      Browse All Courses
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <a
                    href="/book-appointment"
                    className={`px-8 py-4 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20' : 'bg-white hover:bg-gray-50 border-gray-300'} border-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
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
