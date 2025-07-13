"use client"

import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Scholarship Matcher
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Empowering Indian students to find and secure educational scholarships
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-purple-100 leading-relaxed">
              We believe that every student deserves access to quality education, regardless of their financial background. 
              Our platform connects Indian students with relevant scholarship opportunities, making the search process 
              simple and efficient. We aim to democratize access to educational funding and help students achieve their dreams.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="space-y-4 text-purple-100">
              <p>Our scholarship matching platform offers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Smart matching algorithm based on your profile and eligibility</li>
                <li>Comprehensive database of Indian scholarships from government and private sources</li>
                <li>Up-to-date information on application deadlines and requirements</li>
                <li>Easy-to-use search and filtering system</li>
                <li>Verified and legitimate scholarship opportunities only</li>
              </ul>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fill Your Profile</h3>
                <p className="text-purple-200 text-sm">
                  Enter your education level, background, and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Get Matches</h3>
                <p className="text-purple-200 text-sm">
                  Our algorithm finds scholarships that match your criteria
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Apply</h3>
                <p className="text-purple-200 text-sm">
                  Follow the provided links and instructions to apply
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-purple-100 mb-6">
              Have questions or suggestions? We&apos;d love to hear from you.
            </p>
            <div className="space-y-3 text-purple-100">
              <p><strong>Email:</strong> support@scholarshipmatcher.in</p>
              <p><strong>Phone:</strong> +91 1234567890</p>
              <p><strong>Address:</strong> New Delhi, India</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/#search"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Start Finding Scholarships
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
