"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah M.",
      age: "28",
      condition: "Anxiety & Depression",
      rating: 5,
      text: "Serenity changed my life. The therapists are incredibly compassionate and professional. I finally feel like I have the tools to manage my anxiety.",
      therapist: "Dr. Sarah Johnson",
    },
    {
      name: "Michael R.",
      age: "35",
      condition: "Relationship Issues",
      rating: 5,
      text: "My partner and I were on the verge of separation. The couples therapy here saved our relationship. We're stronger than ever now.",
      therapist: "Dr. Michael Chen",
    },
    {
      name: "Emily K.",
      age: "22",
      condition: "Life Transitions",
      rating: 5,
      text: "Starting college was overwhelming, but my therapist helped me develop coping strategies. I'm now thriving in my studies and social life.",
      therapist: "Dr. Emily Rodriguez",
    },
    {
      name: "David L.",
      age: "42",
      condition: "Addiction Recovery",
      rating: 5,
      text: "18 months sober thanks to the incredible support I received. The mindfulness techniques have been life-changing.",
      therapist: "Dr. David Kim",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who found hope and healing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="h-12 w-12 text-blue-500 opacity-50" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-lg font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                  </p>
                  <p className="text-blue-600 font-medium mt-2">
                    Therapist: {testimonials[currentTestimonial].therapist}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            All testimonials are shared with permission and names have been changed to protect privacy. Individual
            results may vary. These stories represent real experiences but are not guarantees of specific outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
