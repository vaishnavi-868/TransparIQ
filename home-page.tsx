"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Scan,
  LinkIcon,
  BarChart3,
  MapPin,
  Leaf,
  Coins,
  User,
  ChevronLeft,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Star,
  Zap,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: "Retailer Dashboard",
      description: "Comprehensive analytics and inventory management with real-time insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      size: "large",
    },
    {
      title: "Product Journey",
      description: "Track products from origin to destination",
      icon: <ArrowRight className="w-6 h-6" />,
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      size: "small",
    },
    {
      title: "Explorer",
      description: "Explore blockchain network",
      icon: <LinkIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      size: "small",
    },
    {
      title: "Delivery Map",
      description: "Real-time delivery tracking and logistics optimization",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      size: "large",
    },
    {
      title: "Sustainability",
      description: "Environmental impact tracking",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      size: "small",
    },
    {
      title: "Token Rewards",
      description: "Earn rewards for sustainable practices and verified transactions",
      icon: <Coins className="w-8 h-8" />,
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
      size: "large",
    },
  ]

  const steps = [
    {
      title: "Scan",
      description: "Scan QR codes to track products instantly",
      icon: <Scan className="w-16 h-16" />,
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Blockchain",
      description: "Data is securely stored on blockchain",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="2" y="14" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M10 6h4" stroke="currentColor" strokeWidth="2" />
          <path d="M10 18h4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 10v4" stroke="currentColor" strokeWidth="2" />
          <path d="M18 10v4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      color: "from-pink-400 to-rose-600",
    },
    {
      title: "Insights",
      description: "Get actionable insights and analytics",
      icon: <BarChart3 className="w-16 h-16" />,
      color: "from-purple-400 to-indigo-600",
    },
  ]

  const userRoles = [
    {
      title: "Retailer",
      icon: "👨‍💼",
      description: "Manage inventory and track supply chain operations with advanced analytics",
      stats: "500+ Companies",
    },
    {
      title: "Consumer",
      icon: "👤",
      description: "Verify product authenticity and origin with a simple scan",
      stats: "1M+ Users",
    },
    {
      title: "Delivery Partner",
      icon: "🚚",
      description: "Update delivery status and location in real-time",
      stats: "10K+ Partners",
    },
  ]

  const screenshots = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const handleSignIn = () => {
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
  }

  const handleDemoClick = () => {
    alert("Demo functionality coming soon!")
  }

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                  ChainTrack
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-green-600 font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Track
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Explorer
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  About
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <Button variant="outline" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  className="bg-gradient-to-r from-green-600 to-pink-600 hover:from-green-700 hover:to-pink-700"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t">
              <a href="#" className="block px-3 py-2 text-green-600 font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-600">
                Track
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Dashboard
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-pink-600">
                Explorer
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                About
              </a>
              <div className="px-3 py-2">
                {isSignedIn ? (
                  <Button variant="outline" onClick={handleSignOut} className="w-full">
                    Sign Out
                  </Button>
                ) : (
                  <Button className="w-full bg-gradient-to-r from-green-600 to-pink-600" onClick={handleSignIn}>
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-pink-500 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-green-100">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">Trusted by 500+ companies worldwide</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Revolutionizing
                  <span className="block text-pink-200">Supply Chains</span>
                  <span className="block text-green-200">with Blockchain</span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 max-w-2xl leading-relaxed">
                  Track, verify, and optimize your supply chain with transparent blockchain technology. From origin to
                  destination, every step is recorded and verified.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={handleDemoClick}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300"
                  onClick={handleLearnMore}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1M+</div>
                  <div className="text-green-100 text-sm">Products Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-green-100 text-sm">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-green-100 text-sm">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                    <Shield className="w-6 h-6 text-white/70" />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Scan className="w-8 h-8 text-green-200" />
                        <div>
                          <div className="text-white font-medium">Product Scanned</div>
                          <div className="text-green-200 text-sm">Origin: Farm #A1234</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-8 h-8 text-pink-200" />
                        <div>
                          <div className="text-white font-medium">In Transit</div>
                          <div className="text-pink-200 text-sm">ETA: 2 hours</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-8 h-8 text-yellow-200" />
                        <div>
                          <div className="text-white font-medium">Blockchain Verified</div>
                          <div className="text-yellow-200 text-sm">100% Authentic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetrical Grid */}
      <section id="features" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Powerful Features for
                <span className="block bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                  Modern Supply Chains
                </span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to track, manage, and optimize your supply chain operations with cutting-edge
                technology.
              </p>
            </div>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden group ${
                  feature.size === "large" ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <CardHeader
                  className={`${feature.color} text-white relative overflow-hidden ${
                    feature.size === "large" ? "p-8" : "p-6"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div
                    className={`${feature.size === "large" ? "w-16 h-16" : "w-12 h-12"} bg-white/20 rounded-xl flex items-center justify-center mb-4 relative z-10`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className={`${feature.size === "large" ? "text-2xl" : "text-xl"} relative z-10`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className={feature.size === "large" ? "p-8" : "p-6"}>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Diagonal Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-pink-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to revolutionize your supply chain with blockchain technology
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-pink-200 to-purple-200 transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-3`}
                  >
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section - Staggered Cards */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Built for{" "}
              <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                Everyone
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored experiences for every stakeholder in the supply chain ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userRoles.map((role, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 overflow-hidden group ${
                  index === 1 ? "lg:mt-12" : index === 2 ? "lg:mt-24" : ""
                }`}
              >
                <CardHeader className="bg-gradient-to-br from-white to-gray-50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="text-6xl mb-6 relative z-10">{role.icon}</div>
                  <CardTitle className="text-2xl mb-2 relative z-10">{role.title}</CardTitle>
                  <div className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block relative z-10">
                    {role.stats}
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {role.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Carousel - Floating Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 via-transparent to-pink-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              See It In{" "}
              <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our intuitive interface and powerful features through interactive demos
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-green-100 to-pink-100 transform hover:scale-105 transition-all duration-500">
              <div className="aspect-video flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Demo</h3>
                  <p className="text-gray-600 text-lg">
                    Screenshot {currentSlide + 1} of {screenshots.length}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:bg-green-50 border-2 w-12 h-12 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl hover:bg-pink-50 border-2 w-12 h-12 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="flex justify-center mt-8 space-x-3">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-green-600 to-pink-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the latest updates on blockchain supply chain technology and industry insights delivered to your inbox
          </p>
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/90 focus:bg-white focus:ring-2 focus:ring-white focus:outline-none text-gray-800 placeholder-gray-500"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent">
                ChainTrack
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Revolutionizing supply chains with blockchain technology for a transparent and sustainable future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-green-400">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6 text-pink-400">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ChainTrack. All rights reserved. Built with ❤️ for a sustainable future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
