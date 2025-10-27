'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'

interface Appointment {
  id: number
  name: string
  email: string
  phone: string
  date: string
  time: string
  message: string
  status: string
  created_at: string
  updated_at: string
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const { isDarkMode } = useTheme()
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('access_token')
    if (!token) {
      router.push('/admin')
      return
    }

    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('access_token')
      const response = await fetch('http://localhost:8000/api/appointments/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        // The backend returns appointments in a nested 'appointments' field
        setAppointments(data.appointments || [])
      } else {
        setError('Failed to fetch appointments')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    router.push('/admin')
  }

  const handleViewDetails = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowDetails(true)
  }

  const handleStatusChange = async (appointmentId: number, newStatus: string) => {
    try {
      const token = localStorage.getItem('access_token')
      const response = await fetch(`http://localhost:8000/api/appointments/${appointmentId}/${newStatus}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Refresh appointments
        fetchAppointments()
        if (showDetails) setShowDetails(false)
      } else {
        alert('Failed to update appointment status')
      }
    } catch (err) {
      alert('Error updating appointment')
    }
  }

  const closeDetails = () => {
    setShowDetails(false)
    setSelectedAppointment(null)
  }

  const filteredAppointments = filter === 'all' 
    ? appointments 
    : appointments.filter(apt => apt.status === filter)

  const stats = {
    total: appointments.length,
    pending: appointments.filter(apt => apt.status === 'pending').length,
    confirmed: appointments.filter(apt => apt.status === 'confirmed').length,
    cancelled: appointments.filter(apt => apt.status === 'cancelled').length,
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border-b border-white/15' : 'bg-white border-b border-gray-200'} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl p-6 shadow-lg`}>
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.total}</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Appointments</div>
          </div>
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl p-6 shadow-lg`}>
            <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.pending}</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pending</div>
          </div>
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl p-6 shadow-lg`}>
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.confirmed}</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Confirmed</div>
          </div>
          <div className={`${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl p-6 shadow-lg`}>
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.cancelled}</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Cancelled</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6">
          {['all', 'pending', 'confirmed', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                filter === status
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                  : isDarkMode
                    ? 'bg-white/8 border border-white/15 text-gray-300 hover:bg-white/12'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Appointments Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-lg text-gray-600">Loading appointments...</div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : filteredAppointments.length === 0 ? (
          <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No appointments found
          </div>
        ) : (
          <div className={`overflow-x-auto ${isDarkMode ? 'bg-white/8 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-xl shadow-lg`}>
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDarkMode ? 'border-white/15' : 'border-gray-200'}`}>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Name</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Phone</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Date</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Time</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Status</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Created</th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className={`border-b ${isDarkMode ? 'border-white/10' : 'border-gray-100'} hover:bg-white/5 transition-colors`}>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{appointment.name}</td>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{appointment.email}</td>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{appointment.phone}</td>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{appointment.date}</td>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{appointment.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {new Date(appointment.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewDetails(appointment)}
                          className={`px-3 py-1 rounded text-xs font-medium ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                        >
                          View
                        </button>
                        {appointment.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusChange(appointment.id, 'confirm')}
                              className="px-3 py-1 rounded text-xs font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleStatusChange(appointment.id, 'cancel')}
                              className="px-3 py-1 rounded text-xs font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
                            >
                              Decline
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Appointment Details Modal */}
        {showDetails && selectedAppointment && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`w-full max-w-2xl ${isDarkMode ? 'bg-white/10 backdrop-blur-3xl border border-white/15' : 'bg-white border border-gray-200'} rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto`}>
              <div className={`${isDarkMode ? 'border-b border-white/15' : 'border-b border-gray-200'} px-6 py-4 flex justify-between items-center`}>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Appointment Details
                </h2>
                <button
                  onClick={closeDetails}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Name</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.name}</p>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.phone}</p>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.email}</p>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Status</label>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedAppointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      selectedAppointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedAppointment.status}
                    </span>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Date</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.date}</p>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Time</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.time}</p>
                  </div>
                </div>
                
                {selectedAppointment.message && (
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                    <p className={`text-base mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedAppointment.message}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Created</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{new Date(selectedAppointment.created_at).toLocaleString()}</p>
                  </div>
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Updated</label>
                    <p className={`text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{new Date(selectedAppointment.updated_at).toLocaleString()}</p>
                  </div>
                </div>
                
                {selectedAppointment.status === 'pending' && (
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => handleStatusChange(selectedAppointment.id, 'confirm')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Accept Appointment
                    </button>
                    <button
                      onClick={() => handleStatusChange(selectedAppointment.id, 'cancel')}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Decline Appointment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
