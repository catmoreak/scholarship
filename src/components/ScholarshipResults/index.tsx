"use client"

import React from 'react'
import { Award, ExternalLink, Calendar, DollarSign, GraduationCap, Star, Users, MapPin, Filter } from 'lucide-react'
import { Scholarship } from '@/data/scholarships'

interface ScholarshipResultsProps {
  scholarships: Scholarship[];
  searchPerformed: boolean;
}

const ScholarshipResults: React.FC<ScholarshipResultsProps> = ({ scholarships, searchPerformed }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'merit-based':
        return <Star className="w-5 h-5" />;
      case 'social justice':
        return <Users className="w-5 h-5" />;
      case 'minority':
        return <Users className="w-5 h-5" />;
      case 'science & technology':
        return <GraduationCap className="w-5 h-5" />;
      case 'women empowerment':
        return <Users className="w-5 h-5" />;
      case 'corporate':
        return <Award className="w-5 h-5" />;
      case 'international':
        return <MapPin className="w-5 h-5" />;
      case 'state government':
        return <MapPin className="w-5 h-5" />;
      case 'regional':
        return <MapPin className="w-5 h-5" />;
      case 'disability support':
        return <Users className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'merit-based':
        return 'from-yellow-500 to-orange-500';
      case 'social justice':
        return 'from-green-500 to-emerald-500';
      case 'minority':
        return 'from-blue-500 to-cyan-500';
      case 'science & technology':
        return 'from-purple-500 to-indigo-500';
      case 'women empowerment':
        return 'from-pink-500 to-rose-500';
      case 'corporate':
        return 'from-gray-500 to-slate-500';
      case 'international':
        return 'from-red-500 to-pink-500';
      case 'state government':
        return 'from-teal-500 to-cyan-500';
      case 'regional':
        return 'from-amber-500 to-orange-500';
      case 'disability support':
        return 'from-violet-500 to-purple-500';
      default:
        return 'from-purple-500 to-indigo-500';
    }
  };

  if (!searchPerformed) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Filter className="w-12 h-12 text-purple-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your Scholarships?</h3>
        <p className="text-purple-200 text-lg max-w-md mx-auto">
          Fill out the form above with your details and we'll show you all the scholarships you're eligible for.
        </p>
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Award className="w-12 h-12 text-red-300" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">No Scholarships Found</h3>
        <p className="text-purple-200 text-lg max-w-md mx-auto mb-6">
          We couldn't find any scholarships matching your current criteria. Try adjusting your filters or check back later for new opportunities.
        </p>
        <div className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 max-w-md mx-auto">
          <h4 className="text-white font-semibold mb-3">Tips to find more scholarships:</h4>
          <ul className="text-purple-200 text-sm space-y-2 text-left">
            <li>• Try removing some filters to broaden your search</li>
            <li>• Check if you've selected the correct education level</li>
            <li>• Consider scholarships for different fields of study</li>
            <li>• Look for general merit-based scholarships</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
          🎉 Found {scholarships.length} Scholarship{scholarships.length !== 1 ? 's' : ''} for You!
        </h3>
        <p className="text-purple-200 text-lg">
          Here are all the scholarships you're eligible to apply for
        </p>
      </div>

      {/* Featured Scholarships */}
      {scholarships.filter(s => s.featured).length > 0 && (
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            Featured Opportunities
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scholarships.filter(s => s.featured).map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-yellow-400/40 rounded-3xl p-6 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${getCategoryColor(scholarship.category)} shadow-lg`}>
                      {getCategoryIcon(scholarship.category)}
                      <span className="sr-only">{scholarship.category}</span>
                    </div>
                    <div className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium border border-yellow-400/30">
                      ⭐ Featured
                    </div>
                  </div>
                  
                  <h5 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {scholarship.name}
                  </h5>
                  
                  <p className="text-purple-200 text-sm mb-3 font-medium">
                    {scholarship.provider}
                  </p>
                  
                  <p className="text-purple-100 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {scholarship.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-green-300 text-sm">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center text-blue-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Deadline: {scholarship.applicationDeadline}</span>
                    </div>
                  </div>
                  
                  <a
                    href={scholarship.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Scholarships */}
      <div>
        {scholarships.filter(s => s.featured).length > 0 && (
          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
            <Award className="w-6 h-6 text-purple-400 mr-2" />
            All Matching Scholarships
          </h4>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className={`bg-white/10 backdrop-blur-lg border ${
                scholarship.featured 
                  ? 'border-yellow-400/30 bg-gradient-to-br from-white/15 to-white/5' 
                  : 'border-purple-400/30'
              } rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${getCategoryColor(scholarship.category)} shadow-lg`}>
                    {getCategoryIcon(scholarship.category)}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(scholarship.category)} bg-gradient-to-r ${getCategoryColor(scholarship.category)}/20 text-white border-opacity-30`}>
                    {scholarship.category}
                  </div>
                </div>
                
                <h5 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-100 transition-colors">
                  {scholarship.name}
                </h5>
                
                <p className="text-purple-200 text-sm mb-3 font-medium">
                  {scholarship.provider}
                </p>
                
                <p className="text-purple-100 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {scholarship.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-green-300 text-sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{scholarship.amount}</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Deadline: {scholarship.applicationDeadline}</span>
                  </div>
                </div>
                
                <a
                  href={scholarship.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8">
        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
          <Star className="w-6 h-6 text-yellow-400 mr-2" />
          Application Tips
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h5 className="font-semibold text-purple-200">📋 Prepare Documents</h5>
            <p className="text-purple-300 text-sm">Keep your academic certificates, income certificates, and ID proofs ready.</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold text-purple-200">⏰ Apply Early</h5>
            <p className="text-purple-300 text-sm">Don't wait until the last minute. Early applications often have better chances.</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold text-purple-200">✍️ Personal Statement</h5>
            <p className="text-purple-300 text-sm">Write a compelling personal statement highlighting your achievements and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipResults;
