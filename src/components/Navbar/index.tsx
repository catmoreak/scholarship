"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-20 py-2">
          <div className="flex flex-col items-start md:items-center">
            <h1 className="text-2xl font-extrabold text-white tracking-tight drop-shadow">Scholarship Matcher</h1>
            <span className="text-purple-200 text-sm font-medium mt-1 md:mt-0 md:ml-2">Empowering Indian students to find the best scholarships</span>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/" className="text-purple-200 hover:text-white font-semibold transition-colors duration-300">
              Home
            </Link>
            <a href="#search" className="text-purple-200 hover:text-white font-semibold transition-colors duration-300">
              Find Scholarships
            </a>
            <Link href="/auto-fetch-scholarship" className="text-purple-200 hover:text-white font-semibold transition-colors duration-300">
              Auto Fetch
            </Link>
            <Link href="/community" className="text-purple-200 hover:text-white font-semibold transition-colors duration-300">
              Community
            </Link>
            <Link href="/about" className="text-purple-200 hover:text-white font-semibold transition-colors duration-300">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
