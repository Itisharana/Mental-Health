"use client"

import type React from "react"

import { useState } from "react"
import { X, Video, MapPin, Phone } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  therapistId?: string | null
}

export default function BookingModal({ isOpen, onClose, therapistId }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    therapistId: therapistId || "",
    sessionType: "video",
    date: "",
    time: "",
    reason: "",
    urgency: "routine",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insurance: "",
    previousTherapy: "",
    concerns: "",
  })

  const therapists = [
    { id: "dr-sarah-johnson", name: "Dr. Sarah Johnson", specialty: "Anxiety & Depression" },
    { id: "dr-michael-chen", name: "Dr. Michael Chen", specialty: "Couples Therapy" },
    { id: "dr-emily-rodriguez", name: "Dr. Emily Rodriguez", specialty: "Adolescent Therapy" },
    { id: "dr-david-kim", name: "Dr. David Kim", specialty: "Addiction Recovery" },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit booking
      console.log("Booking submitted:", bookingData)
      alert("Your appointment has been scheduled! You'll receive a confirmation email shortly.")
      onClose()
      setStep(1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Book Your Session</h2>
              <p className="text-gray-600 mt-1">Step {step} of 3</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Session Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Session Details</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Therapist</label>
                  <select
                    name="therapistId"
                    value={bookingData.therapistId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Choose a therapist</option>
                    {therapists.map((therapist) => (
                      <option key={therapist.id} value={therapist.id}>
                        {therapist.name} - {therapist.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Session Type</label>
                  <div className="grid grid-cols-3 gap-4">
                    <label
                      className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        bookingData.sessionType === "video" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <Video className="h-6 w-6 mb-2 text-blue-600" />
                      <span className="text-sm font-medium">Video Call</span>
                      <input
                        type="radio"
                        name="sessionType"
                        value="video"
                        checked={bookingData.sessionType === "video"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>
                    <label
                      className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        bookingData.sessionType === "phone" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <Phone className="h-6 w-6 mb-2 text-green-600" />
                      <span className="text-sm font-medium">Phone Call</span>
                      <input
                        type="radio"
                        name="sessionType"
                        value="phone"
                        checked={bookingData.sessionType === "phone"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>
                    <label
                      className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        bookingData.sessionType === "inperson" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <MapPin className="h-6 w-6 mb-2 text-purple-600" />
                      <span className="text-sm font-medium">In Person</span>
                      <input
                        type="radio"
                        name="sessionType"
                        value="inperson"
                        checked={bookingData.sessionType === "inperson"}
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={bookingData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={bookingData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="routine">Routine (within 1-2 weeks)</option>
                    <option value="urgent">Urgent (within 2-3 days)</option>
                    <option value="crisis">Crisis (same day)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={bookingData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={bookingData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider (Optional)</label>
                  <input
                    type="text"
                    name="insurance"
                    value={bookingData.insurance}
                    onChange={handleChange}
                    placeholder="e.g., Blue Cross Blue Shield"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Additional Information */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Have you had therapy before?</label>
                  <select
                    name="previousTherapy"
                    value={bookingData.previousTherapy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="no">No, this is my first time</option>
                    <option value="yes-recent">Yes, within the last year</option>
                    <option value="yes-past">Yes, but not recently</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What brings you to therapy today?
                  </label>
                  <textarea
                    name="concerns"
                    value={bookingData.concerns}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please share what you'd like to work on or any specific concerns you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason for this session</label>
                  <input
                    type="text"
                    name="reason"
                    value={bookingData.reason}
                    onChange={handleChange}
                    placeholder="Brief description of what you'd like to discuss"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Privacy & Confidentiality</h4>
                  <p className="text-blue-700 text-sm">
                    All information you provide is strictly confidential and protected under HIPAA. Your therapist will
                    review this information before your session to provide the best possible care.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type="submit"
                className="ml-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300"
              >
                {step === 3 ? "Book Session" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
