export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Kedar Hibare</h3>
            <p className="text-blue-400 mb-4 font-medium">Lead Consultant - Clinical & Interventional Pulmonologist</p>
            <div className="space-y-2 text-gray-300">
              <p>🏥 SPARSH Hospital, Hennur Road</p>
              <p>📍 HBR Layout, Hennur Road, Bengaluru - 560043</p>
              <p>📞 080 61 222 000</p>
              <p>🌐 Languages: English, Hindi, Kannada</p>
            </div>
          </div>
          
          {/* Specialities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Specialities</h3>
            <div className="space-y-2 text-gray-300">
              <p>• Advanced Bronchoscopy</p>
              <p>• Endobronchial Ultrasound (EBUS)</p>
              <p>• Interventional Pulmonology</p>
              <p>• Thoracic Oncology</p>
              <p>• Interstitial Lung Diseases</p>
              <p className="text-blue-400 mt-3">First in India - IAB Fellowship</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Dr. Kedar Hibare
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Pulmonology Services
              </a>
              <a href="#achievements" className="block text-gray-300 hover:text-white transition-colors">
                Achievements & Research
              </a>
              <a href="/book-appointment" className="block text-blue-400 hover:text-blue-300 transition-colors">
                Book Consultation
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">Professional Memberships:</p>
              <p className="text-xs text-gray-500 mt-1">WABIP • ERS • ACCP • Indian Chest Society</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Kedar Hibare - Interventional Pulmonologist. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Advanced respiratory care with cutting-edge interventional pulmonology expertise.
          </p>
        </div>
      </div>
    </footer>
  )
} 