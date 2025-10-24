'use client'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { isDarkMode } = useTheme()
  return (
    <footer className={`${isDarkMode ? 'bg-black/90 backdrop-blur-xl border-t border-white/20 text-white' : 'bg-gray-50 border-t border-gray-200 text-gray-900'} py-12`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Kedar Hibare</h3>
            <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4 font-medium`}>Lead Consultant - Clinical & Interventional Pulmonologist</p>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>🏥 SPARSH Hospital, Hennur Road</p>
              <p>📍 HBR Layout, Hennur Road, Bengaluru - 560043</p>
              <p>📞 080 61 222 000</p>
              <p>🌐 Languages: English, Hindi, Kannada</p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Connect with Dr. Hibare</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/drkedarhibare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                  title="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.facebook.com/kedar.hibare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                  title="Facebook Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.instagram.com/kedarhibare?igsh=MWlwbHFjOGMwODZlcQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                  title="Instagram Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416c0-1.297.49-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.49 2.448-1.297 3.323-.875.875-2.026 1.297-3.323 1.297zm7.83-1.297c-.875.875-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.297-2.026-1.297-3.323 0-1.297.49-2.448 1.297-3.323.875-.875 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.sparshhospital.com/doctors/dr-kedar-hibare/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  title="SPARSH Hospital Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
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