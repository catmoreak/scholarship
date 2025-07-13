"use client"

import React from 'react'
import { GraduationCap, Award, Users, TrendingUp, Star, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent block">
              Scholarship Match
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Connect with 30+ scholarships tailored for Indian students. Our AI-powered matching system finds opportunities based on your class, background, and academic achievements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#search" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 text-lg min-w-[200px]"
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Start Matching
            </a>
            <a 
              href="#featured" 
              className="bg-white/10 backdrop-blur-lg border border-purple-400/30 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg min-w-[200px]"
            >
              <Award className="w-5 h-5 inline mr-2" />
              Browse All
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl rotate-12 opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-xl rotate-45 opacity-60 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/3 right-5 w-10 h-10 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-lg rotate-12 opacity-60 animate-pulse"></div>
    </div>
  )
}

export default HeroSection
