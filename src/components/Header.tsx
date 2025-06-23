import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
             Dr. Kedar Hibare
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
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
              Book Appointment
            </Link>
          </nav>
          <div className="md:hidden">
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