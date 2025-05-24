"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Star, Navigation } from "lucide-react"

interface Hospital {
  id: string
  name: string
  address: string
  phone: string
  rating: number
  distance: string
  specialties: string[]
  emergency: boolean
  image: string
}

export default function HospitalRecommendations() {
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [userLocation, setUserLocation] = useState<string>("Punjab, India")
  const [loading, setLoading] = useState(false)

  // Sample hospital data for Punjab/India
  const sampleHospitals: Hospital[] = [
    {
      id: "1",
      name: "PGIMER Chandigarh",
      address: "Sector 12, Chandigarh, Punjab 160012",
      phone: "+91-172-2755555",
      rating: 4.8,
      distance: "15 km",
      specialties: ["Psychiatry", "Psychology", "Emergency Care"],
      emergency: true,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=200&fit=crop",
    },
    {
      id: "2",
      name: "Fortis Hospital Mohali",
      address: "Phase VIII, Industrial Area, Sector 62, Mohali, Punjab 160062",
      phone: "+91-172-4962222",
      rating: 4.6,
      distance: "8 km",
      specialties: ["Mental Health", "Counseling", "Rehabilitation"],
      emergency: true,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=200&fit=crop",
    },
    {
      id: "3",
      name: "Max Super Speciality Hospital",
      address: "Phase VI, Sector 57, Mohali, Punjab 160055",
      phone: "+91-172-5212000",
      rating: 4.5,
      distance: "12 km",
      specialties: ["Psychiatry", "Neurology", "Psychology"],
      emergency: true,
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=200&fit=crop",
    },
    {
      id: "4",
      name: "Apollo Hospital Ludhiana",
      address: "Sherpur Chowk, GT Road, Ludhiana, Punjab 141003",
      phone: "+91-161-5050505",
      rating: 4.4,
      distance: "45 km",
      specialties: ["Mental Health", "Emergency Psychiatry", "Addiction Treatment"],
      emergency: true,
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=200&fit=crop",
    },
    {
      id: "5",
      name: "Christian Medical College Ludhiana",
      address: "Brown Road, Ludhiana, Punjab 141008",
      phone: "+91-161-2302000",
      rating: 4.7,
      distance: "48 km",
      specialties: ["Psychiatry", "Clinical Psychology", "Community Mental Health"],
      emergency: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
    },
    {
      id: "6",
      name: "Government Medical College Amritsar",
      address: "Majitha Road, Amritsar, Punjab 143001",
      phone: "+91-183-2258855",
      rating: 4.2,
      distance: "65 km",
      specialties: ["Psychiatry", "Mental Health Services", "Emergency Care"],
      emergency: true,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    },
  ]

  useEffect(() => {
    fetchNearbyHospitals()
  }, [])

  const fetchNearbyHospitals = async () => {
    setLoading(true)
    try {
      // Simulate API call - in real implementation, you would use:
      // - Google Places API
      // - Healthcare.gov API
      // - Local government health APIs
      // - Hospital directory APIs

      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate loading
      setHospitals(sampleHospitals)
    } catch (error) {
      console.error("Error fetching hospitals:", error)
      setHospitals(sampleHospitals) // Fallback to sample data
    } finally {
      setLoading(false)
    }
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In real implementation, reverse geocode to get city/state
          setUserLocation("Current Location")
          fetchNearbyHospitals()
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  const getDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank")
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nearby Mental Health Hospitals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find trusted hospitals and medical centers with mental health services near you
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Showing results for: {userLocation}</span>
            </div>
            <button
              onClick={getCurrentLocation}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Navigation className="h-4 w-4" />
              <span>Use Current Location</span>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={hospital.image || "/placeholder.svg"}
                    alt={hospital.name}
                    className="w-full h-48 object-cover"
                  />
                  {hospital.emergency && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      24/7 Emergency
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{hospital.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{hospital.name}</h3>

                  <div className="flex items-start space-x-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <p className="text-sm">{hospital.address}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <Phone className="h-4 w-4" />
                    <p className="text-sm">{hospital.phone}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-green-600 mb-4">
                    <Navigation className="h-4 w-4" />
                    <p className="text-sm font-medium">{hospital.distance} away</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => getDirections(hospital.address)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-1"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Directions</span>
                    </button>
                    <a
                      href={`tel:${hospital.phone}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <Phone className="h-4 w-4 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Emergency Notice */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Mental Health Emergency?</h3>
          <p className="text-red-700 mb-6">
            If you or someone you know is in immediate danger, please call emergency services or visit the nearest
            hospital emergency room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:112"
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Call 112 (Emergency)
            </a>
            <a
              href="tel:9152987821"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Mental Health Helpline
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
