'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDarkMode
            ? isScrolled
              ? 'bg-black/80 backdrop-blur-md shadow-xl border-b-2 border-blue-400/50'
              : 'bg-black/90 shadow-lg border-b-4 border-blue-400'
            : isScrolled
              ? 'bg-white/80 backdrop-blur-md shadow-xl border-b-2 border-blue-600/50'
              : 'bg-white shadow-lg border-b-4 border-blue-600'
        }`}>
      {/* Top accent bar */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 h-1"></div>
      
      <div className="max-w-7xl 4xl:max-w-8xl 5xl:max-w-9xl 6xl:max-w-10xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 4xl:px-12 5xl:px-16">
        <div className="flex justify-between items-center py-6 sm:py-5 md:py-6">
          {/* Logo/Brand Section - Responsive */}
          <div className="flex items-center">
                <div className={`border-l-2 sm:border-l-4 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'} pl-2 sm:pl-3 md:pl-4`}>
                  <h1 className={`text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                    Dr. Kedar Hibare
                  </h1>
                </div>
          </div>

          {/* Desktop Navigation - Enhanced Responsive */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10 ml-32 xl:ml-48 2xl:ml-64">
            <Link href="/#about" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium text-xs uppercase tracking-wider relative group py-2`}>
              About
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link href="/#services" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium text-xs uppercase tracking-wider relative group py-2`}>
              Services
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link href="/#achievements" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium text-xs uppercase tracking-wider relative group py-2`}>
              Achievements
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link href="/courses" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium text-xs uppercase tracking-wider relative group py-2`}>
              Courses
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>

            <Link 
              href="/book-appointment" 
              className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-8 py-3 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
                 
          </nav>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

             {/* Mobile Menu Button - Enhanced Responsive */}
             <div className="lg:hidden flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Mobile Dark Mode Toggle - Responsive */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 sm:p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button - Responsive */}
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 flex items-center justify-center text-white transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              aria-label="Toggle menu"
            >
              <svg className={`w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className={`lg:hidden border-t py-6 transition-all duration-300 ${
                isDarkMode
                  ? isScrolled
                    ? 'border-gray-600/50 bg-black/60 backdrop-blur-md'
                    : 'border-gray-600 bg-gray-900/50'
                  : isScrolled
                    ? 'border-gray-300/50 bg-white/60 backdrop-blur-md'
                    : 'border-gray-300 bg-gray-50'
              }`}>
            <div className="flex flex-col space-y-6">
              <Link href="/#about" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'} transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4`} onClick={toggleMenu}>
                About Dr. Hibare
              </Link>
              <Link href="/#services" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'} transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4`} onClick={toggleMenu}>
                Pulmonology Services
              </Link>
              <Link href="/#achievements" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'} transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4`} onClick={toggleMenu}>
                Achievements & Research
              </Link>
              <Link href="/courses" className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'} transition-colors font-medium text-sm uppercase tracking-wider py-2 px-4`} onClick={toggleMenu}>
                Courses
              </Link>
              
              <div className={`border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} pt-4 px-4`}>
                <Link 
                  href="/book-appointment" 
                  className="block bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wider text-center transition-all duration-300"
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