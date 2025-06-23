import Link from 'next/link'

export default function BookingSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Pulmonology Consultation?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Get expert respiratory care from India's first IAB-recognized Interventional Pulmonologist. 
          Book your consultation today for advanced lung disease diagnosis and treatment.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold mb-2">SPARSH Hospital</h3>
              <p className="text-blue-100 text-sm">
                Hennur Road, Bangalore - State-of-the-art facility
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="font-semibold mb-2">Advanced Procedures</h3>
              <p className="text-blue-100 text-sm">
                EBUS, Bronchoscopy, Airway interventions
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="font-semibold mb-2">International Training</h3>
              <p className="text-blue-100 text-sm">
                German-trained expertise in interventional pulmonology
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/book-appointment"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-bold shadow-lg"
          >
            Book Consultation Now
          </Link>
          <div className="text-blue-100">
            <p>For appointments call: <span className="font-semibold text-white">080 61 222 000</span></p>
            <p className="text-sm mt-2">
              <strong>SPARSH Hospital, Hennur Road</strong><br/>
              Languages: English, Hindi, Kannada
            </p>
            <p className="text-sm mt-2">We'll confirm your appointment within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
} 