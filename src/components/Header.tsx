import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-600">
                Dr. Kedar Hibare
              </h1>
              <p className="text-sm text-gray-600">Interventional Pulmonologist</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors">
              Achievements
            </a>
          
            
            <Link 
              href="/book-appointment" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Consultation
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Social Icons */}
            <div className="flex space-x-2">
              <a 
                href="https://www.linkedin.com/in/drkedarhibare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600"
                title="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/kedarhibare?igsh=MWlwbHFjOGMwODZlcQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416c0-1.297.49-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.49 2.448-1.297 3.323-.875.875-2.026 1.297-3.323 1.297zm7.83-1.297c-.875.875-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.297-2.026-1.297-3.323 0-1.297.49-2.448 1.297-3.323.875-.875 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
            </div>
            <Link 
              href="/book-appointment" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 