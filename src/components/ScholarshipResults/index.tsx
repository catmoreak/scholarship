"use client"

import React from 'react'
import { Scholarship } from '@/data/scholarships'

interface ScholarshipResultsProps {
  scholarships: Scholarship[];
  searchPerformed: boolean;
}

const ScholarshipResults: React.FC<ScholarshipResultsProps> = ({ scholarships, searchPerformed }) => {
  if (!searchPerformed) {
    return (
      <div className="text-center py-12">
        <p className="text-purple-200 text-lg">
          Fill out the form above to find scholarships you&apos;re eligible for.
        </p>
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-white mb-4">No Scholarships Found</h3>
        <p className="text-purple-200">
          Try adjusting your search criteria to find more scholarships.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white text-center">
        {scholarships.length} Scholarship{scholarships.length !== 1 ? &apos;s&apos; : &apos;&apos;} Found
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-lg p-6 hover:bg-white/15 transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-white mb-2">{scholarship.name}</h4>
            <p className="text-purple-200 mb-3">{scholarship.provider}</p>
            <p className="text-green-300 font-semibold mb-4">{scholarship.amount}</p>
            
            <div className="space-y-3 text-sm mb-6">
              <div>
                <strong className="text-purple-200">Deadline:</strong>
                <p className="text-purple-100">{scholarship.applicationDeadline}</p>
              </div>
              
              <div>
                <strong className="text-purple-200">Description:</strong>
                <p className="text-purple-100">{scholarship.description}</p>
              </div>
            </div>
            
            <a
              href={scholarship.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipResults;
