export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Smith Medical Center</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Medical Plaza, Suite 456</p>
              <p>City, State 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@drsmithmedical.com</p>
            </div>
          </div>
          
          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-blue-400 mt-3">Emergency: 24/7 On-Call</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Dr. Smith
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Medical Services
              </a>
              <a href="#achievements" className="block text-gray-300 hover:text-white transition-colors">
                Achievements
              </a>
              <a href="/book-appointment" className="block text-blue-400 hover:text-blue-300 transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Smith Medical Center. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Providing quality healthcare with compassion and excellence.
          </p>
        </div>
      </div>
    </footer>
  )
} 