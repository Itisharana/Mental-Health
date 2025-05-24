"use client"

import { useState } from "react"
import { Heart, Menu, X, Shield, Phone } from "lucide-react"

interface HeaderProps {
  onAuthClick: () => void
  onBookingClick: () => void
}

export default function Header({ onAuthClick, onBookingClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Crisis Banner */}
      <div className="bg-red-500 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Phone className="h-4 w-4" />
          <span>Crisis Support: 988 (Suicide & Crisis Lifeline) • Available 24/7</span>
        </div>
      </div>

      <header className="w-full bg-white shadow-lg relative z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Serenity</h1>
                <p className="text-xs text-gray-600">Mental Health Support</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("therapists")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Therapists
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("hospitals")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Hospitals
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Support
              </button>
              <div className="flex items-center space-x-1 text-green-600">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onAuthClick}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={onBookingClick}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("therapists")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Therapists
                </button>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Resources
                </button>
                <button
                  onClick={() => scrollToSection("hospitals")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Hospitals
                </button>
                <button
                  onClick={() => scrollToSection("support")}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  Support
                </button>
                <div className="flex items-center space-x-1 text-green-600 py-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">100% Confidential</span>
                </div>
                <div className="flex flex-col space-y-2 pt-4">
                  <button
                    onClick={onAuthClick}
                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={onBookingClick}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-medium"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
