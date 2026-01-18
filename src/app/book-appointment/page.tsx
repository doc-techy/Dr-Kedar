'use client'

import { AppointmentBooking } from '@/components/AppointmentBooking'
import Header from '@/components/Header'
import { useTheme } from '@/contexts/ThemeContext'

export default function BookAppointment() {
  const { isDarkMode } = useTheme()
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'} relative overflow-hidden`}>
      <Header />
      
      <main className={`pt-28 pb-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
        {/* Background decorations */}
        <div className={`absolute top-10 right-10 w-72 h-72 ${isDarkMode ? 'bg-blue-800/20' : 'bg-blue-100'} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-soft`}></div>
        <div className={`absolute bottom-10 left-10 w-72 h-72 ${isDarkMode ? 'bg-teal-800/20' : 'bg-teal-100'} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-soft`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AppointmentBooking />
        </div>
      </main>
    </div>
  )
}
