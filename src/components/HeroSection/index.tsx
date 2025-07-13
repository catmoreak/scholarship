"use client"

import React from 'react'

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Scholarship
        </h1>
        
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Search through 30+ scholarships for Indian students based on your profile
        </p>

        <a 
          href="#search" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Start Search
        </a>
      </div>
    </div>
  )
}

export default HeroSection
