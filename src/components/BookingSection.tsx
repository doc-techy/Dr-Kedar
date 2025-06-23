import Link from 'next/link'

export default function BookingSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Take the first step towards better health. Book your consultation today and 
          experience personalized, compassionate medical care.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-blue-100 text-sm">
                Book online in just a few clicks
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-semibold mb-2">Flexible Hours</h3>
              <p className="text-blue-100 text-sm">
                Morning, afternoon, and evening slots
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-blue-100 text-sm">
                Confirmation within 24 hours
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/book-appointment"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-bold shadow-lg"
          >
            Book Appointment Now
          </Link>
          <div className="text-blue-100">
            <p>Or call us directly: <span className="font-semibold text-white">(555) 123-4567</span></p>
            <p className="text-sm mt-2">Office Hours: Monday-Friday 8AM-6PM, Saturday 9AM-2PM</p>
          </div>
        </div>
      </div>
    </section>
  )
} 