'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Phone, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Wrench, 
  Droplets, 
  Zap,
  ChevronRight,
  Star,
  Truck,
  ThumbsUp,
  Menu,
  X,
  ArrowRight,
  Mail,
  MessageSquare,
  Loader2,
  AlertCircle
} from "lucide-react"

// Original site images
const IMAGES = {
  logo: "https://californiapumping.com/wp-content/uploads/2026/01/LogoGADS.png",
  licensed: "https://californiapumping.com/wp-content/uploads/2026/01/Licensed-Bonded-and-Insured.png",
  hero1: "https://californiapumping.com/wp-content/uploads/2024/03/iStock-1332256600-scaled.jpg",
  hero2: "https://californiapumping.com/wp-content/uploads/2024/03/iStock-1351297657-scaled.jpg",
  hero3: "https://californiapumping.com/wp-content/uploads/2024/03/iStock-1390493191-scaled.jpg",
  hero4: "https://californiapumping.com/wp-content/uploads/2024/03/iStock-1497774742-scaled.jpg",
  residential: "https://californiapumping.com/wp-content/uploads/2023/02/street-and-houses-in-one-of-the-residential-areas-2021-08-30-08-08-46-utc-1024x683.jpg",
  kitchen: "https://californiapumping.com/wp-content/uploads/2023/02/kitchen-appliances-in-professional-kitchen-in-a-re-2021-09-03-17-38-26-utc-1024x683.jpg",
  industrial: "https://californiapumping.com/wp-content/uploads/2023/02/heavy-industrial-chemical-factory-at-night-2022-02-01-23-43-50-utc-1024x683.jpg",
  team: "https://californiapumping.com/wp-content/uploads/2026/01/8F101213_1A6E_4185_B8BA_4C6840011A82_90d2c715-c70b-43c0-9b9d-d43e115edb2a-768x1024.jpg",
  google: "https://californiapumping.com/wp-content/uploads/2026/01/colourful-google-logo-on-white-background-free-vector.jpg",
  alee: "/images/alee.png",
  gabby: "/images/gabby.png"
}

export default function Home() {
  const phoneNumber = "(855) 684-2125"
  const phoneLink = "tel:+18556842125"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Testimonials carousel auto-rotate
  const testimonials = [
    { name: "Maria S.", location: "Los Angeles", text: "California Pumping saved us during a holiday emergency! Alee was so helpful and they arrived within 2 hours.", rating: 5 },
    { name: "John D.", location: "San Diego", text: "Best septic service I've ever used. Professional, clean, and affordable. Gabby walked me through everything.", rating: 5 },
    { name: "Restaurant Owner", location: "Anaheim", text: "They handle all our grease trap cleaning. Always on time, always professional. Highly recommend!", rating: 5 },
    { name: "Sarah M.", location: "Riverside", text: "35 years of experience really shows. They knew exactly what was wrong and fixed it quickly.", rating: 5 }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Emergency Header - Sticky */}
      <header className="bg-[#1e40af] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-3 gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <span className="font-semibold text-xs sm:text-sm md:text-base">24/7 Emergency Service</span>
            </div>
            <a 
              href={phoneLink}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-2 px-4 sm:py-2.5 sm:px-6 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
              <span className="hidden sm:inline">Septic Emergency?</span>
              <span className="sm:hidden">Emergency?</span>
              <span>We&apos;re On The Way!</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-[44px] sm:top-[52px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src={IMAGES.logo} 
                alt="California Pumping & Sanitation" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="#services" className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors text-sm xl:text-base">Services</a>
              <a href="#process" className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors text-sm xl:text-base">How It Works</a>
              <a href="#testimonials" className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors text-sm xl:text-base">Reviews</a>
              <a href="#areas" className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors text-sm xl:text-base">Service Areas</a>
              <a href="#contact-form" className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors text-sm xl:text-base">Contact</a>
            </div>
            
            {/* Phone & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a 
                href={phoneLink}
                className="hidden sm:flex items-center gap-2 text-[#1e40af] font-bold text-sm md:text-base hover:text-[#1e3a8a] transition-colors"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                <span>{phoneNumber}</span>
              </a>
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-3 animate-in slide-in-from-top duration-200">
              <a href="#services" className="block py-2 text-[#334155] hover:text-[#1e40af] font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="block py-2 text-[#334155] hover:text-[#1e40af] font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#testimonials" className="block py-2 text-[#334155] hover:text-[#1e40af] font-medium" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#areas" className="block py-2 text-[#334155] hover:text-[#1e40af] font-medium" onClick={() => setMobileMenuOpen(false)}>Service Areas</a>
              <a href="#contact-form" className="block py-2 text-[#334155] hover:text-[#1e40af] font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href={phoneLink} className="flex items-center gap-2 py-2 text-[#1e40af] font-bold">
                <Phone className="h-5 w-5" />
                {phoneNumber}
              </a>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section - Dynamic Background */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={IMAGES.residential}
              alt="California Neighborhood"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/95 via-[#1e3a8a]/90 to-[#1e40af]/80"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-medium">35+ Years of Trusted Service</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Southern California&apos;s{" "}
                  <span className="text-yellow-400 block sm:inline">Septic Experts</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  Licensed, bonded, and insured professionals delivering fast, reliable septic pumping, 
                  grease trap cleaning, and hydro-jetting services across 6 counties.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                  <a 
                    href={phoneLink}
                    className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 shadow-xl text-base sm:text-lg"
                  >
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    Call Now: {phoneNumber}
                  </a>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg hidden sm:flex"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Free Quote
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    <span className="text-xs sm:text-sm">Licensed #948947</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                    <span className="text-xs sm:text-sm">Bonded & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs sm:text-sm">5-Star Rated</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Quick Contact Form */}
              <div className="hidden lg:block">
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-6 xl:p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl xl:text-2xl font-bold text-[#1e293b] mb-2">Get Your Free Quote</h3>
                      <p className="text-[#64748b] text-sm">We&apos;ll call you back within 30 minutes</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="hero-name" className="text-[#334155] text-sm font-medium">Full Name *</Label>
                        <Input
                          id="hero-name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Smith"
                          required
                          className="mt-1 border-[#e2e8f0] focus:border-[#1e40af] focus:ring-[#1e40af]"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="hero-phone" className="text-[#334155] text-sm font-medium">Phone *</Label>
                          <Input
                            id="hero-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="(555) 555-5555"
                            required
                            className="mt-1 border-[#e2e8f0] focus:border-[#1e40af] focus:ring-[#1e40af]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="hero-email" className="text-[#334155] text-sm font-medium">Email</Label>
                          <Input
                            id="hero-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="john@email.com"
                            className="mt-1 border-[#e2e8f0] focus:border-[#1e40af] focus:ring-[#1e40af]"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="hero-service" className="text-[#334155] text-sm font-medium">Service Needed *</Label>
                        <select
                          id="hero-service"
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          required
                          className="mt-1 w-full h-10 px-3 border border-[#e2e8f0] rounded-md focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] text-sm"
                        >
                          <option value="">Select a service...</option>
                          <option value="residential">Residential Septic Pumping</option>
                          <option value="commercial">Commercial Septic Service</option>
                          <option value="grease">Grease Trap Cleaning</option>
                          <option value="hydro">Hydro-Jetting</option>
                          <option value="inspection">Septic Inspection</option>
                          <option value="emergency">Emergency Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="h-5 w-5 mr-2 animate-spin" /> Sending...</>
                        ) : (
                          <><Phone className="h-5 w-5 mr-2" /> Request Callback</>
                        )}
                      </Button>
                      
                      {submitStatus === 'success' && (
                        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                          <CheckCircle2 className="h-5 w-5" />
                          <span>Thank you! We&apos;ll call you back shortly.</span>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                          <AlertCircle className="h-5 w-5" />
                          <span>Something went wrong. Please call us directly.</span>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Spotlight Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#1e40af]/10 text-[#1e40af] mb-3 sm:mb-4 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4">
                  Meet Your Team
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-3 sm:mb-4">
                  Talk to <span className="text-[#1e40af]">Alee &amp; Gabby</span>
                </h2>
                <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto px-4">
                  Our friendly office team is here to help you 7 days a week. When you call, 
                  you&apos;ll speak with real people who know septic services inside and out.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {/* Alee Card */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-[#1e40af] to-[#3b82f6] p-6 sm:p-8 text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        <img 
                          src={IMAGES.alee} 
                          alt="Alee - Office Manager" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Alee</h3>
                      <p className="text-blue-100 text-sm sm:text-base">Office Manager</p>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-[#64748b] text-sm sm:text-base mb-3 sm:mb-4 text-center">
                        &quot;Alee was so helpful and patient with all my questions. She made scheduling 
                        my septic pumping so easy!&quot;
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#334155]">
                        <Clock className="h-4 w-4 text-[#1e40af]" />
                        <span>Available Mon-Sat, 7AM-6PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gabby Card */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-[#334155] to-[#475569] p-6 sm:p-8 text-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        <img 
                          src={IMAGES.gabby} 
                          alt="Gabby - Customer Service Lead" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Gabby</h3>
                      <p className="text-slate-300 text-sm sm:text-base">Customer Service Lead</p>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-[#64748b] text-sm sm:text-base mb-3 sm:mb-4 text-center">
                        &quot;Gabby went above and beyond to help with our emergency. She even followed 
                        up after the service to make sure everything was perfect!&quot;
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#334155]">
                        <Clock className="h-4 w-4 text-[#1e40af]" />
                        <span>Available 7 Days, 7AM-7PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8 sm:mt-10">
                <a 
                  href={phoneLink}
                  className="inline-flex items-center gap-2 text-[#1e40af] font-bold text-base sm:text-lg hover:text-[#1e3a8a] transition-colors"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now to Speak With Our Team: {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Pumping Checklist */}
        <section id="process" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#1e40af]/10 text-[#1e40af] mb-3 sm:mb-4 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4">
                  Simple Process
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-3 sm:mb-4">
                  The Pre-Pumping Checklist
                </h2>
                <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto px-4">
                  Here&apos;s what to expect before we arrive. Following these steps ensures a fast, 
                  efficient service every time.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Step 1 */}
                <div className="relative group">
                  <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e40af]" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-[#1e293b] mb-1 sm:mb-2">Locate Tank</h3>
                    <p className="text-[#64748b] text-xs sm:text-sm">
                      Know where your septic tank is located. We can help locate it.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-[#1e40af]" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative group">
                  <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e40af]" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-[#1e293b] mb-1 sm:mb-2">Expose Lid</h3>
                    <p className="text-[#64748b] text-xs sm:text-sm">
                      Dig out the septic tank lid before our arrival.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-[#1e40af]" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative group">
                  <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1e40af]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e40af]" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-[#1e293b] mb-1 sm:mb-2">100ft Hose</h3>
                    <p className="text-[#64748b] text-xs sm:text-sm">
                      Ensure our truck can park within 100 feet.
                    </p>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-[#1e40af]" />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="group">
                  <div className="bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl font-bold text-[#1e40af]">4</span>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Professional Pump</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">
                      Our certified technicians handle everything professionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#1e40af]/10 text-[#1e40af] mb-3 sm:mb-4 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4">
                  Our Services
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-3 sm:mb-4">
                  Professional Septic Solutions
                </h2>
                <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto px-4">
                  From routine maintenance to emergency repairs, we&apos;ve got you covered with 
                  comprehensive septic services.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Residential Septic */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="h-40 sm:h-48 overflow-hidden relative">
                      <img 
                        src={IMAGES.residential}
                        alt="Residential Septic"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Droplets className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-2 sm:mb-3">Residential Septic</h3>
                      <p className="text-[#64748b] text-sm sm:text-base mb-3 sm:mb-4">
                        Complete septic tank pumping, inspection, and maintenance for homes.
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Full tank pumping &amp; cleaning
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Tank inspection &amp; certification
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Baffle &amp; filter maintenance
                        </li>
                      </ul>
                      <a 
                        href={phoneLink}
                        className="inline-flex items-center gap-1 text-[#1e40af] font-bold text-sm sm:text-base hover:text-[#1e3a8a] transition-colors"
                      >
                        Schedule Service <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Grease Trap Cleaning */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="h-40 sm:h-48 overflow-hidden relative">
                      <img 
                        src={IMAGES.kitchen}
                        alt="Grease Trap Cleaning"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#059669]/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="relative">
                          <Droplets className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                          <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-[8px] sm:text-xs font-bold text-yellow-900">FOG</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-2 sm:mb-3">Grease Trap Cleaning</h3>
                      <p className="text-[#64748b] text-sm sm:text-base mb-3 sm:mb-4">
                        Commercial grease trap maintenance for restaurants and food service.
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Complete grease removal
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Compliance documentation
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Scheduled maintenance plans
                        </li>
                      </ul>
                      <a 
                        href={phoneLink}
                        className="inline-flex items-center gap-1 text-[#059669] font-bold text-sm sm:text-base hover:text-[#047857] transition-colors"
                      >
                        Get Quote <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Hydro-jetting */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-0">
                    <div className="h-40 sm:h-48 overflow-hidden relative">
                      <img 
                        src={IMAGES.industrial}
                        alt="Hydro-Jetting"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7c3aed]/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-2 sm:mb-3">Hydro-Jetting</h3>
                      <p className="text-[#64748b] text-sm sm:text-base mb-3 sm:mb-4">
                        High-pressure water jetting to clear stubborn blockages and clean pipes.
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          4000+ PSI cleaning power
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Root &amp; debris removal
                        </li>
                        <li className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          Pipe descaling service
                        </li>
                      </ul>
                      <a 
                        href={phoneLink}
                        className="inline-flex items-center gap-1 text-[#7c3aed] font-bold text-sm sm:text-base hover:text-[#6d28d9] transition-colors"
                      >
                        Learn More <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#1e40af]/10 text-[#1e40af] mb-3 sm:mb-4 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4">
                  Customer Reviews
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-3 sm:mb-4">
                  What Our Customers Say
                </h2>
              </div>

              {/* Testimonial Carousel */}
              <div className="relative">
                <Card className="border-2 border-[#e2e8f0] shadow-xl">
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-[#334155] text-center mb-4 sm:mb-6 italic">
                      &quot;{testimonials[activeTestimonial].text}&quot;
                    </p>
                    <div className="text-center">
                      <p className="font-bold text-[#1e293b]">{testimonials[activeTestimonial].name}</p>
                      <p className="text-[#64748b] text-sm">{testimonials[activeTestimonial].location}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === activeTestimonial ? 'bg-[#1e40af] w-6 sm:w-8' : 'bg-[#e2e8f0]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Google Reviews Badge */}
              <div className="flex justify-center mt-8 sm:mt-10">
                <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 sm:px-6 py-3">
                  <img src={IMAGES.google} alt="Google" className="h-8 w-8 sm:h-10 sm:w-10" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-[#1e293b]">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#64748b] text-xs sm:text-sm">Based on 150+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar - Service Areas */}
        <section id="areas" className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="bg-[#1e40af]/10 text-[#1e40af] mb-3 sm:mb-4 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4">
                  Service Areas
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e293b] mb-3 sm:mb-4">
                  Proudly Serving Southern California
                </h2>
                <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto px-4">
                  With 6 counties and dozens of cities, we&apos;re your local septic experts.
                </p>
              </div>

              {/* County Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {[
                  { name: "Los Angeles", cities: 4 },
                  { name: "Orange", cities: 4 },
                  { name: "San Bernardino", cities: 3 },
                  { name: "Riverside", cities: 4 },
                  { name: "San Diego", cities: 4 },
                  { name: "Ventura", cities: 4 },
                ].map((county) => (
                  <div 
                    key={county.name}
                    className="bg-white border border-[#e2e8f0] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:border-[#1e40af] hover:shadow-lg transition-all duration-300"
                  >
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#1e40af] mx-auto mb-1 sm:mb-2" />
                    <h3 className="font-bold text-[#1e293b] text-xs sm:text-sm md:text-base">{county.name}</h3>
                    <p className="text-[10px] sm:text-xs text-[#64748b]">{county.cities}+ Cities</p>
                  </div>
                ))}
              </div>

              {/* City Badges */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#e2e8f0]">
                <p className="text-center text-xs sm:text-sm font-medium text-[#64748b] mb-4 sm:mb-6">Major Cities We Serve</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {[
                    "Los Angeles", "San Diego", "Anaheim", "Long Beach", "Santa Ana",
                    "Riverside", "San Bernardino", "Glendale", "Irvine", "Pasadena",
                    "Oxnard", "Ontario", "Corona", "Thousand Oaks", "Palm Springs",
                    "Ventura", "Escondido", "Huntington Beach", "Moreno Valley", "Simi Valley"
                  ].map((city) => (
                    <span 
                      key={city}
                      className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#334155] hover:border-[#1e40af] hover:text-[#1e40af] transition-colors cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#1e293b] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    Ready to Schedule Your Service?
                  </h2>
                  <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
                    Whether it&apos;s routine maintenance or an emergency, our team is standing by 
                    to help. Fill out the form or call us directly.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <a 
                      href={phoneLink}
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                    >
                      <div className="bg-[#dc2626] rounded-lg p-3">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-blue-200">Call Now - 24/7</p>
                        <p className="text-lg sm:text-xl font-bold">{phoneNumber}</p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="bg-[#1e40af] rounded-lg p-3">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-blue-200">Email Us</p>
                        <p className="text-base sm:text-lg font-medium">info@californiapumping.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="bg-[#059669] rounded-lg p-3">
                        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-blue-200">Response Time</p>
                        <p className="text-base sm:text-lg font-medium">Under 30 Minutes</p>
                      </div>
                    </div>
                  </div>
                  
                  <img 
                    src={IMAGES.licensed} 
                    alt="Licensed, Bonded & Insured" 
                    className="mt-6 sm:mt-8 mx-auto lg:mx-0 h-12 sm:h-16 w-auto brightness-0 invert opacity-80"
                  />
                </div>
                
                {/* Right - Contact Form */}
                <div>
                  <Card className="bg-white text-[#1e293b] shadow-2xl border-0 overflow-hidden">
                    <CardContent className="p-5 sm:p-6 lg:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Get Your Free Quote</h3>
                      
                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                          <div>
                            <Label htmlFor="name" className="text-[#334155] text-xs sm:text-sm font-medium">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="John Smith"
                              required
                              className="mt-1 text-sm sm:text-base"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-[#334155] text-xs sm:text-sm font-medium">Phone *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="(555) 555-5555"
                              required
                              className="mt-1 text-sm sm:text-base"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-[#334155] text-xs sm:text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="john@email.com"
                            className="mt-1 text-sm sm:text-base"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="service" className="text-[#334155] text-xs sm:text-sm font-medium">Service Needed *</Label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            required
                            className="mt-1 w-full h-10 px-3 border border-[#e2e8f0] rounded-md text-xs sm:text-sm focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af]"
                          >
                            <option value="">Select a service...</option>
                            <option value="residential">Residential Septic Pumping</option>
                            <option value="commercial">Commercial Septic Service</option>
                            <option value="grease">Grease Trap Cleaning</option>
                            <option value="hydro">Hydro-Jetting</option>
                            <option value="inspection">Septic Inspection</option>
                            <option value="emergency">Emergency Service</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="message" className="text-[#334155] text-xs sm:text-sm font-medium">Message</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Tell us about your septic needs..."
                            rows={3}
                            className="mt-1 text-sm sm:text-base resize-none"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3 text-sm sm:text-base font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <><Loader2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-spin" /> Sending...</>
                          ) : (
                            <><Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" /> Request Callback</>
                          )}
                        </Button>
                        
                        {submitStatus === 'success' && (
                          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg text-xs sm:text-sm">
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>Thank you! We&apos;ll call you back shortly.</span>
                          </div>
                        )}
                        {submitStatus === 'error' && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-xs sm:text-sm">
                            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span>Something went wrong. Please call us directly.</span>
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1e293b] text-white py-8 sm:py-10 lg:py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <img 
                src={IMAGES.logo} 
                alt="California Pumping & Sanitation" 
                className="h-10 sm:h-12 mx-auto sm:mx-0 mb-3 sm:mb-4 brightness-0 invert"
              />
              <p className="text-slate-300 mb-3 sm:mb-4 max-w-md text-xs sm:text-sm mx-auto sm:mx-0">
                Southern California&apos;s trusted septic service provider for over 35 years. 
                Licensed, bonded, and insured for your peace of mind.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-xs sm:text-sm">Licensed #948947</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-xs sm:text-sm">Bonded & Insured</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Residential Septic Pumping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Grease Trap Cleaning</li>
                <li className="hover:text-white transition-colors cursor-pointer">Hydro-Jetting</li>
                <li className="hover:text-white transition-colors cursor-pointer">Septic Inspections</li>
                <li className="hover:text-white transition-colors cursor-pointer">Camera Inspections</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <a href={phoneLink} className="flex items-center justify-center sm:justify-start gap-2 text-slate-300 hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                    {phoneNumber}
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                  <Clock className="h-4 w-4" />
                  24/7 Emergency Service
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 text-slate-300">
                  <MapPin className="h-4 w-4" />
                  6 Southern CA Counties
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-slate-400 text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} California Pumping &amp; Sanitation. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-yellow-400" />
                <span className="text-xs sm:text-sm text-slate-300">5-Star Rated on Google</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
