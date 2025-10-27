'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, CheckCircle, Navigation, User, Phone, Mail } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface AppointmentBookingProps {
  className?: string
}

export function AppointmentBooking({ className = '' }: AppointmentBookingProps) {
  const { isDarkMode } = useTheme()
  const [showModal, setShowModal] = useState(false)
  const [selectedHospital, setSelectedHospital] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const hospitals = [
    {
      name: 'SPARSH Hospital',
      address: 'HBR Layout, Hennur Road, Bengaluru - 560043',
      availableAt: 'Mon, Wed, Fri: 9:30 AM - 4:00 PM',
      phone: '080 61 222 000',
      website: 'https://www.sparshhospital.com/doctors/dr-kedar-hibare/',
      mapLink: 'https://maps.google.com',
      description: 'Multi-specialty hospital with comprehensive pulmonology care and advanced diagnostic services'
    },
    {
      name: 'SPARSH Hospital',
      address: 'HBR Layout, Hennur Road, Bengaluru - 560043',
      availableAt: 'Mon, Wed, Fri: 9:30 AM - 4:00 PM',
      phone: '080 61 222 000',
      website: 'https://www.sparshhospital.com/doctors/dr-kedar-hibare/',
      mapLink: 'https://maps.google.com',
      description: 'Multi-specialty hospital with comprehensive pulmonology care and advanced diagnostic services'
    }
  ]

  const handleOpenModal = (hospital: any) => {
    setSelectedHospital(hospital)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedHospital(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    })
    setSubmitted(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:8000/api/appointments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          handleCloseModal()
        }, 3000)
      } else {
        const result = await response.json()
        alert(result.error || 'Error submitting appointment. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error connecting to server. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Location Selection */}
        <div className="lg:col-span-2 pt-8">
          <div className={`${isDarkMode ? 'bg-white/10 backdrop-blur-2xl border-white/20' : 'bg-white border-gray-100'} rounded-3xl shadow-2xl border p-8 ${className}`}>
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Choose Your Preferred Location
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Dr. Kedar Hibare is available at premium healthcare facilities in Bangalore
              </p>
            </div>

            {/* Hospital Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {hospitals.map((hospital, index) => (
                <div key={index} className={`group relative ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-blue-400/50' : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-200'} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full`}>
                  {/* Hospital Header */}
                  <div className="text-center mb-4 flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{hospital.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>{hospital.description}</p>
                  </div>

                  {/* Hospital Details */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>Address</h4>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{hospital.address}</p>
                        <a
                          href={hospital.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} text-xs font-medium transition-colors duration-200 mt-1`}
                        >
                          <Navigation className="w-3 h-3 mr-1" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>Available At</h4>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{hospital.availableAt}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>Phone</h4>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{hospital.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Book Appointment Button */}
                  <div className="text-center mt-auto flex-shrink-0">
                    <button
                      onClick={() => handleOpenModal(hospital)}
                      className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 shadow-lg group-hover:shadow-xl text-sm w-full justify-center"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </button>
                  </div>

                  {/* Hover Effect Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className={`mt-12 p-6 ${isDarkMode ? 'bg-blue-900/30 border border-blue-700/50' : 'bg-blue-50'} rounded-2xl`}>
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'} mb-4 text-center`}>Important Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    Please arrive 15 minutes before your scheduled appointment time
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    Bring a valid ID and any relevant medical reports
                  </li>
                </ul>
                <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    Cancellations must be made at least 24 hours in advance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                    Emergency cases will be given priority
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 pt-8">
          {/* Doctor Info */}
          <div className={`${isDarkMode ? 'bg-white/10 backdrop-blur-2xl border-white/20' : 'bg-white border-gray-100'} rounded-2xl p-6 shadow-lg border`}>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Dr. Kedar Hibare
              </h3>
              <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>
                Lead Consultant - Interventional Pulmonologist
              </p>
            </div>
            
            <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-500" />
                <span>080 61 222 000</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-500" />
                <span>info@drkedarhibare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                <span>Hennur Road, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`${isDarkMode ? 'bg-blue-900/20 border-blue-700/50' : 'bg-gradient-to-br from-blue-50 to-teal-50 border-blue-100'} rounded-2xl p-6 border`}>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Need Immediate Help?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className={`w-10 h-10 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-4`}>
                  <Phone className={`w-5 h-5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                </div>
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Emergency Line</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>080 61 222 000</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-100'} rounded-full flex items-center justify-center mr-4`}>
                  <Mail className={`w-5 h-5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                </div>
                <div>
                  <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Support</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>info@drkedarhibare.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className={`${isDarkMode ? 'bg-green-900/20 border-green-700/50' : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100'} rounded-2xl p-6 border`}>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
              What to Expect
            </h3>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Comprehensive consultation
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Detailed medical history review
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Personalized treatment plan
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Follow-up care guidance
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Appointment Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 pt-24">
          <div className={`w-full max-w-2xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}>
            {!submitted ? (
              <>
                {/* Modal Header */}
                <div className={`${isDarkMode ? 'border-b border-gray-700' : 'border-b border-gray-200'} px-6 py-4 flex justify-between items-center sticky top-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Book Appointment
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* Form Fields */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                        placeholder="080 61 222 000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preferred Time *</label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select a time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Additional Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Please provide any additional information about your visit..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </button>
                  

                </form>
              </>
            ) : (
              /* Success Message */
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Appointment Request Sent!</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Thank you for choosing Dr. Kedar Hibare. We'll contact you within 24 hours to confirm your appointment.
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>This window will close automatically...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
