"use client"

import { Heart, Phone, Mail, MapPin, Shield, Clock } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Serenity</h3>
                <p className="text-sm text-gray-300">Mental Health Support</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Professional, compassionate mental health support in a safe, confidential environment. Your mental health
              matters, and we're here to help you on your journey to wellness.
            </p>
            <div className="flex items-center space-x-2 text-green-400 mb-4">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">HIPAA Compliant & 100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">24/7 Crisis Support Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("therapists")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meet Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Crisis Support
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Insurance & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">8091355163</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 8AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-white">ranaitisha6736@gmail.com</p>
                  <p className="text-gray-400 text-sm">24-48 hour response</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-white">Chandigarh Group of Colleges </p>
                  <p className="text-gray-400 text-sm">Landran, Moahli, Punjab</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-600 rounded-lg">
              <h5 className="font-semibold mb-2">Crisis Support</h5>
              <p className="text-sm mb-2">If you're in crisis, call:</p>
              <p className="text-xl font-bold">988</p>
              <p className="text-xs opacity-90">Suicide & Crisis Lifeline</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 Serenity Mental Health. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
