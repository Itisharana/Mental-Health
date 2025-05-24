import { Phone, MessageCircle, Clock, Shield } from "lucide-react"

export default function CrisisSupport() {
  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support for people in distress",
      available: "24/7",
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 support via text message",
      available: "24/7",
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      available: "24/7",
    },
    {
      name: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "Confidential support for domestic violence survivors",
      available: "24/7",
    },
  ]

  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Crisis Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you're in crisis or having thoughts of self-harm, help is available immediately
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-500 text-white rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">If this is a medical emergency, call 911 immediately</h3>
          <p className="text-lg opacity-90">
            For immediate mental health crisis support, call or text 988 for the Suicide & Crisis Lifeline
          </p>
        </div>

        {/* Crisis Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {crisisResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-3">{resource.number}</p>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">Available {resource.available}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support Options */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Additional Support Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Online Chat</h4>
              <p className="text-gray-600 mb-4">Connect with a crisis counselor via secure online chat</p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Safety Planning</h4>
              <p className="text-gray-600 mb-4">Create a personalized safety plan for crisis situations</p>
              <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                Create Plan
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Emergency Session</h4>
              <p className="text-gray-600 mb-4">Book an immediate session with our crisis team</p>
              <button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
