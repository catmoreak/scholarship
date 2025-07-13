"use client"

import React, { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import ScholarshipSearchForm from '@/components/ScholarshipSearchForm'
import ScholarshipResults from '@/components/ScholarshipResults'
import { matchScholarships, Scholarship } from '@/data/scholarships'

export default function Home() {
  const [matchedScholarships, setMatchedScholarships] = useState<Scholarship[]>([])
  const [searchPerformed, setSearchPerformed] = useState(false)

  const handleSearch = (criteria: any) => {
    const matches = matchScholarships({
      class: criteria.class,
      gender: criteria.gender,
      religion: criteria.religion,
      caste: criteria.caste,
      state: criteria.state,
      familyIncome: criteria.familyIncome,
      academicPercentage: criteria.academicPercentage ? parseInt(criteria.academicPercentage) : undefined,
      subjects: criteria.subjects
    })
    
    setMatchedScholarships(matches)
    setSearchPerformed(true)
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Search Section */}
      <section id="search" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScholarshipSearchForm onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScholarshipResults 
            scholarships={matchedScholarships} 
            searchPerformed={searchPerformed}
          />
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
          <p className="text-purple-200 text-xl mb-12 max-w-3xl mx-auto">
            We've helped thousands of Indian students find and secure scholarships worth crores of rupees
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Matching</h3>
              <p className="text-purple-200 leading-relaxed">
                Our AI algorithm matches you with scholarships based on your exact profile, maximizing your chances of success.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Verified Opportunities</h3>
              <p className="text-purple-200 leading-relaxed">
                All scholarships are verified and updated regularly. We only show legitimate opportunities from trusted sources.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Application Support</h3>
              <p className="text-purple-200 leading-relaxed">
                Get expert guidance on application processes, documentation, and tips to increase your success rate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
