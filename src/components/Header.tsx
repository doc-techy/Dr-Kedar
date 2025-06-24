'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-600 relative z-50">
      {/* Top accent bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 h-1"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Brand Section */}
          <div className="flex items-center">
            <div className="border-l-4 border-blue-600 pl-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Dr. Kedar Hibare
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider relative group py-2">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider relative group py-2">
              Achievements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <Link 
              href="/book-appointment" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Contact */}
            <div className="text-right">
              <p className="text-xs text-blue-600 font-semibold">080 61 222 000</p>
            </div>

            {/* Hamburger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-gray-50">
            <div className="flex flex-col space-y-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4 hover:bg-white" onClick={toggleMenu}>
                About Dr. Hibare
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4 hover:bg-white" onClick={toggleMenu}>
                Pulmonology Services
              </a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4 hover:bg-white" onClick={toggleMenu}>
                Achievements & Research
              </a>
              
              <div className="border-t border-gray-300 pt-4 px-4">
                <p className="text-xs text-gray-500 font-medium mb-1">Emergency Contact</p>
                <p className="text-lg font-bold text-blue-600 mb-4">080 61 222 000</p>
                
                <Link 
                  href="/book-appointment" 
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wider text-center transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 