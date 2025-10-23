import Link from 'next/link'

export default function BookingSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-12 lg:p-16">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">
                    Book Consultation
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Schedule Your Expert Consultation
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Get specialized respiratory care from India's leading interventional pulmonologist. 
                  Expert diagnosis and treatment for complex lung conditions.
                </p>
                
                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call Direct</div>
                      <div className="text-blue-600 font-medium">080 61 222 000</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">SPARSH Hospital</div>
                      <div className="text-gray-600">Hennur Road, Bangalore</div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-appointment"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Online
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                  <a 
                    href="tel:08061222000"
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 font-semibold transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Content - Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-12 lg:p-16 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Appointment</h3>
                <p className="text-gray-600 mb-6">Expert respiratory care with personalized treatment plans</p>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900 mb-2">Languages Spoken:</p>
                    <p className="mb-4">English, Hindi, Kannada</p>
                    <p className="text-xs">Appointments confirmed within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 