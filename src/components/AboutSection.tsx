export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            About the Expert
          </div>
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet <span className="text-gradient">Dr. Kedar Hibare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lead Consultant at SPARSH Hospital with expertise in cutting-edge diagnostic and 
            therapeutic solutions for respiratory conditions. Committed to excellence and 
            patient-centered care in interventional pulmonology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Background */}
          <div className="animate-slide-in-left">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Background</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Qualification</p>
                      <p className="text-gray-700">DNB (Respiratory Diseases), FCCP</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Postgraduate Training</p>
                      <p className="text-gray-700">St. John's National Academy of Health Sciences, Bengaluru</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-teal-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">International Fellowship</p>
                      <p className="text-gray-700">Ruhrlandklinik – West German Lung Center, Essen, Germany</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advanced Training</p>
                      <p className="text-gray-700">Interventional Pulmonology & Thoracic Oncology, Rajiv Gandhi Cancer Institute, New Delhi</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Experience</p>
                      <p className="text-gray-700">15+ years in respiratory medicine and interventional procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Expertise & Specializations */}
          <div className="animate-slide-in-right">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Expertise & Specializations</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🫁</span>
                    <h4 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors">Advanced Bronchoscopy</h4>
                  </div>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Rigid & Flexible bronchoscopy procedures for lung diagnosis
                  </p>
                </div>
                
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🔬</span>
                    <h4 className="font-bold text-teal-900 group-hover:text-teal-600 transition-colors">EBUS & Lung Biopsy</h4>
                  </div>
                  <p className="text-teal-700 text-sm leading-relaxed">
                    Endobronchial ultrasound and transbronchial cryobiopsy
                  </p>
                </div>
                
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">⚕️</span>
                    <h4 className="font-bold text-purple-900 group-hover:text-purple-600 transition-colors">Airway Interventions</h4>
                  </div>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    Cryotherapy, laser therapy, balloon dilation & stenting
                  </p>
                </div>
                
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🎯</span>
                    <h4 className="font-bold text-red-900 group-hover:text-red-600 transition-colors">Thoracic Oncology</h4>
                  </div>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Specialized lung cancer diagnosis and treatment
                  </p>
                </div>
                
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📊</span>
                    <h4 className="font-bold text-green-900 group-hover:text-green-600 transition-colors">Interstitial Lung Disease</h4>
                  </div>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Complex lung disease diagnosis and management
                  </p>
                </div>
                
                <div className="group card-gradient p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🔧</span>
                    <h4 className="font-bold text-orange-900 group-hover:text-orange-600 transition-colors">3D Printing Innovation</h4>
                  </div>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Cutting-edge airway prostheses for complex disorders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement highlights */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose Dr. Kedar Hibare?</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🥇</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Pioneer in India</h4>
                <p className="text-blue-100">First in India to complete IAB-recognized Interventional Pulmonology Fellowship</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h4 className="text-xl font-bold mb-2">International Training</h4>
                <p className="text-blue-100">Advanced training at West German Lung Center, bringing global expertise to India</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔬</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Research Excellence</h4>
                <p className="text-blue-100">20+ publications and pioneer in 3D printing technology for airway disorders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 