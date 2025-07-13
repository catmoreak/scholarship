"use client"

import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-800 to-indigo-900 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Scholarship Matcher</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Empowering the next generation of Indian students through accessible scholarship opportunities
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">30+</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Scholarships</h3>
            <p className="text-purple-200">Verified opportunities from trusted sources</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">100%</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Verified</h3>
            <p className="text-purple-200">All scholarships are from legitimate sources</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">Free</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Platform</h3>
            <p className="text-purple-200">No charges for using our matching service</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Our Vision */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-purple-100 leading-relaxed mb-4">
              We envision an India where every talented student, regardless of their economic background, 
              has access to quality education through scholarships and financial aid.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Our platform bridges the gap between deserving students and available opportunities, 
              making the scholarship discovery process transparent, efficient, and accessible.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-purple-100 leading-relaxed mb-4">
              To democratize access to educational funding by providing a comprehensive, 
              user-friendly platform that connects students with relevant scholarship opportunities.
            </p>
            <p className="text-purple-100 leading-relaxed">
              We are committed to supporting India&apos;s educational ecosystem by ensuring that 
              financial constraints never become a barrier to academic excellence.
            </p>
          </div>
        </div>

        {/* How It Works - Enhanced */}
        <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Scholarship Matcher Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Create Profile</h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                Enter your academic details, background, and preferences to build your personalized profile
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Matching</h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                Our AI algorithm analyzes your profile and matches you with relevant scholarship opportunities
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
              <h3 className="text-xl font-semibold text-white mb-3">Review Results</h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                Browse through personalized scholarship recommendations with detailed eligibility and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Apply & Succeed</h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                Follow direct links and guidance to submit applications and track your progress
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Matching</h3>
              <p className="text-purple-200 text-sm">Advanced algorithms ensure you only see scholarships you&apos;re eligible for</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Verified Sources</h3>
              <p className="text-purple-200 text-sm">All scholarships are verified from legitimate government and private institutions</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Friendly</h3>
              <p className="text-purple-200 text-sm">Access your scholarship opportunities anywhere, anytime on any device</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Regular Updates</h3>
              <p className="text-purple-200 text-sm">Our database is continuously updated with new opportunities and deadlines</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
              <p className="text-purple-200 text-sm">Your personal information is protected with enterprise-grade security</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
              <p className="text-purple-200 text-sm">Get tips and guidance from education experts and successful scholarship recipients</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-12 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">How We Help Students</h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Our scholarship matching platform simplifies the process of finding educational funding opportunities. 
              We connect students with scholarships that match their academic background, financial needs, and career goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Smart Filtering</h3>
                <p className="text-purple-200">
                  Our system automatically filters scholarships based on your eligibility criteria, 
                  saving you time and showing only relevant opportunities.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Updated Database</h3>
                <p className="text-purple-200">
                  We maintain current information about scholarship deadlines, requirements, 
                  and application processes from government and private institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Scholarship?</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already discovered their path to educational success through our platform.
            </p>
            <Link
              href="/#search"
              className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Scholarship Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
