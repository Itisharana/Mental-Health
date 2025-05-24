"use client"

import Image from "next/image"
import { Star, Calendar, MessageCircle } from "lucide-react"

interface TherapistsProps {
  onBookingClick: (therapistId: string) => void
}

export default function Therapists({ onBookingClick }: TherapistsProps) {
  const therapists = [
    {
      id: "dr-sarah-johnson",
      name: "Dr. Sarah Johnson",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety", "Depression", "Trauma", "PTSD"],
      experience: "12 years",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Specializing in cognitive-behavioral therapy and trauma-informed care.",
      availability: "Mon-Fri, 9AM-6PM",
    },
    {
      id: "dr-michael-chen",
      name: "Dr. Rajesh Sharma",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Couples Therapy", "Family Counseling", "Communication"],
      experience: "8 years",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      bio: "Helping couples and families build stronger, healthier relationships.",
      availability: "Tue-Sat, 10AM-7PM",
    },
    {
      id: "dr-emily-rodriguez",
      name: "Dr. Priya Patel",
      title: "Licensed Clinical Social Worker",
      specialties: ["Adolescent Therapy", "Life Transitions", "Self-Esteem"],
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1594824388853-d0c2d5e5b6b8?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about helping teens and young adults navigate life's challenges.",
      availability: "Mon-Thu, 11AM-8PM",
    },
    {
      id: "dr-david-kim",
      name: "Dr. Arjun Singh",
      title: "Licensed Professional Counselor",
      specialties: ["Addiction Recovery", "Mindfulness", "Stress Management"],
      experience: "15 years",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      bio: "Integrating mindfulness-based approaches with evidence-based treatments.",
      availability: "Wed-Sun, 8AM-5PM",
    },
  ]

  return (
    <section id="therapists" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Therapists</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Licensed, experienced professionals dedicated to your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={therapist.image || "/placeholder.svg"}
                  alt={therapist.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                  unoptimized
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{therapist.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{therapist.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{therapist.title}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{therapist.bio}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {therapist.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{therapist.experience} experience</span>
                  <span>{therapist.reviews} reviews</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => onBookingClick(therapist.id)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book</span>
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
