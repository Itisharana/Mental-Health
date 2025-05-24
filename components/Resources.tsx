"use client"

import { useState } from "react"
import { BookOpen, Video, Headphones, Download, ExternalLink, Search } from "lucide-react"

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "articles", label: "Articles" },
    { id: "videos", label: "Videos" },
    { id: "podcasts", label: "Podcasts" },
    { id: "tools", label: "Self-Help Tools" },
  ]

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      type: "articles",
      icon: BookOpen,
      description: "Learn about anxiety symptoms, causes, and effective coping strategies.",
      duration: "10 min read",
      category: "Anxiety",
      featured: true,
    },
    {
      id: 2,
      title: "Mindfulness Meditation for Beginners",
      type: "videos",
      icon: Video,
      description: "A guided introduction to mindfulness meditation practices.",
      duration: "15 min",
      category: "Mindfulness",
      featured: true,
    },
    {
      id: 3,
      title: "Mental Health Matters Podcast",
      type: "podcasts",
      icon: Headphones,
      description: "Weekly discussions on mental health topics with experts.",
      duration: "30-45 min",
      category: "General",
      featured: false,
    },
    {
      id: 4,
      title: "Daily Mood Tracker",
      type: "tools",
      icon: Download,
      description: "Track your daily mood and identify patterns over time.",
      duration: "Download",
      category: "Self-Care",
      featured: true,
    },
    {
      id: 5,
      title: "Dealing with Depression",
      type: "articles",
      icon: BookOpen,
      description: "Understanding depression and finding hope in recovery.",
      duration: "12 min read",
      category: "Depression",
      featured: false,
    },
    {
      id: 6,
      title: "Breathing Exercises for Stress Relief",
      type: "videos",
      icon: Video,
      description: "Simple breathing techniques to manage stress and anxiety.",
      duration: "8 min",
      category: "Stress",
      featured: false,
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.type === activeCategory
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mental Health Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free resources to support your mental health journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter((resource) => resource.featured)
              .map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/80 text-blue-700 text-sm font-medium rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{resource.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Access</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">All Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <resource.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{resource.title}</h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.duration}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Access Resource</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
