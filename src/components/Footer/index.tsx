"use client"

import React from 'react'
import { 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  ExternalLink,
  GraduationCap,
  Users,
  BookOpen,
  Shield
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Premium background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-indigo-700/30"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center group cursor-pointer">
                
                <h3 className="text-xl font-bold transition-all duration-300 group-hover:text-purple-200 drop-shadow-lg">
                  Scholarship Matcher
                </h3>
              </div>
              <p className="text-purple-200 leading-relaxed">
                Connecting students with their dream scholarships. We help you find, apply, and succeed in securing educational funding.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm border border-transparent hover:border-purple-400/30"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm border border-transparent hover:border-purple-400/30"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm border border-transparent hover:border-purple-400/30"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-purple-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm border border-transparent hover:border-purple-400/30"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-purple-300" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Browse Scholarships
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Application Tips
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Success Stories
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-purple-300" />
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Essay Writing Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Interview Preparation
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Financial Planning
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-300" />
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-purple-200 group hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4 mr-3 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span>Email here</span>
                </div>
                <div className="flex items-center text-purple-200 group hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4 mr-3 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span>Phone number</span>
                </div>
                <div className="flex items-start text-purple-200 group hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4 mr-3 mt-0.5 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span>Address</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-400/20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-purple-200">
                <span>© 2025 Scholarship Matcher. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:underline"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-purple-200 hover:text-white transition-all duration-300 hover:underline flex items-center"
                >
                 
                  Security
                </a>
              </div>
              <div className="flex items-center text-purple-200">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />
                <span>for students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
