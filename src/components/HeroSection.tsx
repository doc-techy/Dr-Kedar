import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/images/Dr-Kedar-Hibare-01.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Doctor Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-10 animate-pulse-soft"></div>
                <Image
                  src={img}
                  alt="Dr. Kedar Hibare - Lead Consultant Interventional Pulmonologist"
                  fill
                  className="object-cover shadow-2xl border-4 border-white hover-lift"
                  priority
                />
              </div>
              
              {/* Floating badges */}
              {/* <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                15+ Years
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{animationDelay: '2s'}}>
                First in India
              </div> */}
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-in-right">
            
            <h1 className="hero-title text-5xl lg:text-7xl font-extrabold text-black-900 mb-6 leading-tight">
              Dr. <span className="text-gradient">Kedar Hibare</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-black-700 mb-4 font-medium">
              Lead Consultant - Clinical & 
              <span className="block text-black-600 font-semibold">Interventional Pulmonologist</span>
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-white/80 backdrop-blur-sm border border-blue-200 text-black-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                DNB (Respiratory Diseases)
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-blue-200 text-black-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                FCCP
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                Germany Trained
              </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Expert in diagnosing and treating complex lung diseases with extensive experience in 
              <span className="font-semibold text-blue-600"> minimally invasive pulmonary interventions</span>. 
              Internationally trained in Germany, committed to excellence and patient-centered respiratory care.
            </p>
            
            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100 hover-lift">
                <div className="text-2xl mb-2">🥇</div>
                <div className="font-semibold text-gray-900">First in India</div>
                <div className="text-sm text-gray-600">IAB Fellowship</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100 hover-lift">
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-semibold text-gray-900">International</div>
                <div className="text-sm text-gray-600">German Training</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100 hover-lift">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold text-gray-900">20+ Publications</div>
                <div className="text-sm text-gray-600">Research Expert</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/book-appointment"
                className="btn-primary text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a 
                href="#about"
                className="btn-secondary text-lg group"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center animate-fade-in">
          <p className="text-gray-600 mb-6 font-medium">Trusted by leading medical organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-gray-700">WABIP</div>
            <div className="text-lg font-semibold text-gray-700">ERS</div>
            <div className="text-lg font-semibold text-gray-700">ACCP</div>
            <div className="text-lg font-semibold text-gray-700">Indian Chest Society</div>
            <div className="text-lg font-semibold text-gray-700">SPARSH Hospital</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 