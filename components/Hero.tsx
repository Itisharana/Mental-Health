"use client"

import { Calendar, Shield, Clock, Users } from "lucide-react"

interface HeroProps {
  onBookingClick: () => void
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Your Mental Health
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Matters
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional, compassionate mental health support in a safe, confidential environment. Take the first step
            towards better mental wellness today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onBookingClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm">
              <Shield className="h-8 w-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">100% Private</h3>
              <p className="text-sm text-gray-600 text-center">HIPAA compliant & secure</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm">
              <Users className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Licensed</h3>
              <p className="text-sm text-gray-600 text-center">Certified therapists</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm">
              <Clock className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 text-center">Crisis help available</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm">
              <Calendar className="h-8 w-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">Flexible</h3>
              <p className="text-sm text-gray-600 text-center">Online & in-person</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
