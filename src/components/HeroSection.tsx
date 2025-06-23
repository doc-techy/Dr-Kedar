import Image from 'next/image'
import Link from 'next/link'
import img from '../../public/images/Dr-Kedar-Hibare-01.jpg'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-80 h-80 mx-auto">
              <Image
                src={img}
                alt="Dr. Kedar Hibare"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Introduction */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dr. Kedar Hibare
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Lead Consultant - Clinical & Interventional Pulmonologist
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DNB (Respiratory Diseases), FCCP | 15+ Years Experience
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Expert in diagnosing and treating complex lung diseases with extensive experience in 
              minimally invasive pulmonary interventions. Internationally trained in Germany, 
              committed to excellence and patient-centered respiratory care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/book-appointment"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Book Consultation
              </Link>
              <a 
                href="#about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 