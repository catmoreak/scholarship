"use client"

import React from 'react'
import { Home, GraduationCap, User, Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 backdrop-blur-sm border-b border-purple-400/20 relative overflow-hidden">
      {/* Premium background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-indigo-600/20"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            
            <h1 className="text-xl font-bold text-white transition-all duration-300 group-hover:text-purple-100 group-hover:scale-105 drop-shadow-lg">
              Scholarship Matcher
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <Home className="h-4 w-4 transition-transform duration-300 group-hover:bounce drop-shadow-sm" />
              <span className="relative font-medium">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90 drop-shadow-sm" />
              <span className="relative font-medium">
                Find Scholarships
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <GraduationCap className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 drop-shadow-sm" />
              <span className="relative font-medium">
                My Applications
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
              <span className="relative font-medium">
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-purple-100 hover:text-white focus:outline-none focus:text-white transition-all duration-300 transform hover:scale-110 p-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm border border-transparent hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`h-6 w-6 absolute transition-all duration-300 drop-shadow-sm ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  className={`h-6 w-6 absolute transition-all duration-300 drop-shadow-sm ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-sm ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-2 bg-gradient-to-b from-purple-800/20 to-indigo-800/20 rounded-xl mx-2 p-2 border border-purple-400/20">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <Home className="h-4 w-4 transition-transform duration-300 group-hover:bounce drop-shadow-sm" />
              <span className="font-medium">Home</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90 drop-shadow-sm" />
              <span className="font-medium">Find Scholarships</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <GraduationCap className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 drop-shadow-sm" />
              <span className="font-medium">My Applications</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-purple-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:shadow-lg hover:shadow-purple-500/20 px-3 py-2 rounded-xl backdrop-blur-sm border border-transparent hover:border-purple-400/30 group"
            >
              <User className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
              <span className="font-medium">Profile</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
