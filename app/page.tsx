"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Therapists from "@/components/Therapists"
import Resources from "@/components/Resources"
import HospitalRecommendations from "@/components/HospitalRecommendations"
import CrisisSupport from "@/components/CrisisSupport"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import AuthModal from "@/components/AuthModal"
import BookingModal from "@/components/BookingModal"

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null)

  const openBooking = (therapistId?: string) => {
    setSelectedTherapist(therapistId || null)
    setIsBookingModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} onBookingClick={() => openBooking()} />
      <Hero onBookingClick={() => openBooking()} />
      <Services />
      <Therapists onBookingClick={openBooking} />
      <Resources />
      <div id="hospitals">
        <HospitalRecommendations />
      </div>
      <CrisisSupport />
      <Testimonials />
      <Footer />

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        therapistId={selectedTherapist}
      />
    </main>
  )
}
