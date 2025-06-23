import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo (replace with a database in production)
let appointments: any[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'date', 'time']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({
          error: `${field} is required`
        }, { status: 400 })
      }
    }
    
    // Validate date format
    const appointmentDate = new Date(data.date)
    if (isNaN(appointmentDate.getTime())) {
      return NextResponse.json({
        error: 'Invalid date format'
      }, { status: 400 })
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({
        error: 'Invalid email format'
      }, { status: 400 })
    }
    
    // Create appointment object
    const appointment = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      message: data.message || '',
      status: 'pending',
      created_at: new Date().toISOString()
    }
    
    // Store appointment (in production, save to database)
    appointments.push(appointment)
    
    // In a real application, you might want to:
    // 1. Send confirmation email to patient
    // 2. Send notification to doctor/clinic
    // 3. Add to calendar system
    
    return NextResponse.json({
      success: true,
      message: 'Appointment created successfully',
      appointment_id: appointment.id,
      data: appointment
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json({
      error: 'Server error occurred'
    }, { status: 500 })
  }
}

export async function GET() {
  // Return all appointments (for admin use)
  return NextResponse.json({
    success: true,
    appointments: appointments
  })
} 