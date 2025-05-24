import { Brain, Heart, Users, Zap, Moon, Smile } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific needs and goals",
      features: ["Anxiety & Depression", "Trauma Recovery", "Life Transitions", "Personal Growth"],
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen relationships and improve communication with your partner",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Pre-marital Counseling"],
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive environment",
      features: ["Support Groups", "Skill Building", "Peer Connection", "Shared Experiences"],
    },
    {
      icon: Zap,
      title: "Crisis Intervention",
      description: "Immediate support during mental health emergencies",
      features: ["24/7 Availability", "Emergency Sessions", "Safety Planning", "Rapid Response"],
    },
    {
      icon: Moon,
      title: "Mindfulness & Meditation",
      description: "Learn techniques to manage stress and improve mental clarity",
      features: ["Guided Meditation", "Breathing Exercises", "Stress Reduction", "Present Moment Awareness"],
    },
    {
      icon: Smile,
      title: "Wellness Coaching",
      description: "Holistic approach to mental health and life satisfaction",
      features: ["Goal Setting", "Habit Formation", "Work-Life Balance", "Self-Care Strategies"],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support designed to meet you where you are in your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
