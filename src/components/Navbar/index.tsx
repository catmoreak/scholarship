"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-purple-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">
              Scholarship Matcher
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-purple-200 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <a href="#search" className="text-purple-200 hover:text-white transition-colors duration-300">
              Find Scholarships
            </a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
