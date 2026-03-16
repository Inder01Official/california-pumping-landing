import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()
    
    // Validate required fields
    if (!data.name || !data.phone || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Log the lead (in production, you'd save to database or send to CRM)
    console.log('===== NEW LEAD =====')
    console.log('Name:', data.name)
    console.log('Phone:', data.phone)
    console.log('Email:', data.email || 'Not provided')
    console.log('Service:', data.service)
    console.log('Message:', data.message || 'Not provided')
    console.log('Timestamp:', new Date().toISOString())
    console.log('====================')
    
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (HubSpot, Salesforce, etc.)
    // 4. Send SMS notification to staff
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We will contact you shortly.' 
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
