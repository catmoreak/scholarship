"use client"

import React, { useState } from 'react'
import { Search, Filter, User, GraduationCap, MapPin, DollarSign, Calendar, Users } from 'lucide-react'

interface SearchCriteria {
  class: string;
  gender: string;
  religion: string;
  caste: string;
  state: string;
  familyIncome: string;
  academicPercentage: string;
  subjects: string;
}

interface ScholarshipSearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const ScholarshipSearchForm: React.FC<ScholarshipSearchFormProps> = ({ onSearch }) => {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    class: '',
    gender: '',
    religion: '',
    caste: '',
    state: '',
    familyIncome: '',
    academicPercentage: '',
    subjects: ''
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };

  const handleInputChange = (field: keyof SearchCriteria, value: string) => {
    setCriteria(prev => ({ ...prev, [field]: value }));
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh", "Chandigarh", 
    "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Puducherry"
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Search className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Find Your Perfect Scholarship
        </h2>
        <p className="text-purple-200 text-lg">
          Tell us about yourself and we'll match you with relevant scholarships
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Class/Education Level */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-purple-200 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Current Class/Education Level *</span>
            </label>
            <select
              value={criteria.class}
              onChange={(e) => handleInputChange('class', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
              required
            >
              <option value="" className="bg-purple-900 text-white">Select your current level</option>
              <option value="4th" className="bg-purple-900 text-white">Class 4</option>
              <option value="5th" className="bg-purple-900 text-white">Class 5</option>
              <option value="6th" className="bg-purple-900 text-white">Class 6</option>
              <option value="7th" className="bg-purple-900 text-white">Class 7</option>
              <option value="8th" className="bg-purple-900 text-white">Class 8</option>
              <option value="9th" className="bg-purple-900 text-white">Class 9</option>
              <option value="10th" className="bg-purple-900 text-white">Class 10</option>
              <option value="11th" className="bg-purple-900 text-white">Class 11</option>
              <option value="12th" className="bg-purple-900 text-white">Class 12</option>
              <option value="Undergraduate" className="bg-purple-900 text-white">Undergraduate</option>
              <option value="Postgraduate" className="bg-purple-900 text-white">Postgraduate</option>
              <option value="Doctoral" className="bg-purple-900 text-white">Doctoral/Ph.D</option>
            </select>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-purple-200 font-semibold">
              <User className="w-4 h-4" />
              <span>Gender *</span>
            </label>
            <select
              value={criteria.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
              required
            >
              <option value="" className="bg-purple-900 text-white">Select gender</option>
              <option value="Male" className="bg-purple-900 text-white">Male</option>
              <option value="Female" className="bg-purple-900 text-white">Female</option>
              <option value="Other" className="bg-purple-900 text-white">Other</option>
            </select>
          </div>
        </div>

        {/* State */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-purple-200 font-semibold">
            <MapPin className="w-4 h-4" />
            <span>State/Union Territory</span>
          </label>
          <select
            value={criteria.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
          >
            <option value="" className="bg-purple-900 text-white">Select your state (optional)</option>
            {indianStates.map(state => (
              <option key={state} value={state} className="bg-purple-900 text-white">{state}</option>
            ))}
          </select>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 font-medium"
          >
            <Filter className="w-4 h-4" />
            <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Filters</span>
          </button>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="space-y-6 p-6 bg-white/5 rounded-2xl border border-purple-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Religion */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-purple-200 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Religion</span>
                </label>
                <select
                  value={criteria.religion}
                  onChange={(e) => handleInputChange('religion', e.target.value)}
                  className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
                >
                  <option value="" className="bg-purple-900 text-white">Select religion (optional)</option>
                  <option value="Hindu" className="bg-purple-900 text-white">Hindu</option>
                  <option value="Muslim" className="bg-purple-900 text-white">Muslim</option>
                  <option value="Christian" className="bg-purple-900 text-white">Christian</option>
                  <option value="Sikh" className="bg-purple-900 text-white">Sikh</option>
                  <option value="Buddhist" className="bg-purple-900 text-white">Buddhist</option>
                  <option value="Jain" className="bg-purple-900 text-white">Jain</option>
                  <option value="Zoroastrian" className="bg-purple-900 text-white">Zoroastrian</option>
                  <option value="Other" className="bg-purple-900 text-white">Other</option>
                </select>
              </div>

              {/* Caste Category */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-purple-200 font-semibold">
                  <Users className="w-4 h-4" />
                  <span>Caste Category</span>
                </label>
                <select
                  value={criteria.caste}
                  onChange={(e) => handleInputChange('caste', e.target.value)}
                  className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
                >
                  <option value="" className="bg-purple-900 text-white">Select category (optional)</option>
                  <option value="General" className="bg-purple-900 text-white">General</option>
                  <option value="Other Backward Classes" className="bg-purple-900 text-white">OBC (Other Backward Classes)</option>
                  <option value="Scheduled Caste" className="bg-purple-900 text-white">SC (Scheduled Caste)</option>
                  <option value="Scheduled Tribe" className="bg-purple-900 text-white">ST (Scheduled Tribe)</option>
                  <option value="Economically Weaker Section" className="bg-purple-900 text-white">EWS (Economically Weaker Section)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Family Income */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-purple-200 font-semibold">
                  <DollarSign className="w-4 h-4" />
                  <span>Annual Family Income</span>
                </label>
                <select
                  value={criteria.familyIncome}
                  onChange={(e) => handleInputChange('familyIncome', e.target.value)}
                  className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
                >
                  <option value="" className="bg-purple-900 text-white">Select income range (optional)</option>
                  <option value="Below ₹1 lakh" className="bg-purple-900 text-white">Below ₹1 lakh</option>
                  <option value="Below ₹2.5 lakh" className="bg-purple-900 text-white">Below ₹2.5 lakh</option>
                  <option value="Below ₹3 lakh" className="bg-purple-900 text-white">Below ₹3 lakh</option>
                  <option value="Below ₹3.5 lakh" className="bg-purple-900 text-white">Below ₹3.5 lakh</option>
                  <option value="Below ₹5 lakh" className="bg-purple-900 text-white">Below ₹5 lakh</option>
                  <option value="Below ₹6 lakh" className="bg-purple-900 text-white">Below ₹6 lakh</option>
                  <option value="Below ₹8 lakh" className="bg-purple-900 text-white">Below ₹8 lakh</option>
                  <option value="Below ₹10 lakh" className="bg-purple-900 text-white">Below ₹10 lakh</option>
                  <option value="Above ₹10 lakh" className="bg-purple-900 text-white">Above ₹10 lakh</option>
                </select>
              </div>

              {/* Academic Percentage */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-purple-200 font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>Academic Percentage</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter your percentage"
                  value={criteria.academicPercentage}
                  onChange={(e) => handleInputChange('academicPercentage', e.target.value)}
                  className="w-full bg-white/15 border border-purple-300/40 text-white placeholder-purple-200 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Subjects */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-purple-200 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Field of Study</span>
              </label>
              <select
                value={criteria.subjects}
                onChange={(e) => handleInputChange('subjects', e.target.value)}
                className="w-full bg-white/15 border border-purple-300/40 text-white rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 py-3 px-4 font-medium backdrop-blur-sm"
              >
                <option value="" className="bg-purple-900 text-white">Select field of study (optional)</option>
                <option value="Science" className="bg-purple-900 text-white">Science</option>
                <option value="Mathematics" className="bg-purple-900 text-white">Mathematics</option>
                <option value="Physics" className="bg-purple-900 text-white">Physics</option>
                <option value="Chemistry" className="bg-purple-900 text-white">Chemistry</option>
                <option value="Biology" className="bg-purple-900 text-white">Biology</option>
                <option value="Engineering" className="bg-purple-900 text-white">Engineering</option>
                <option value="Technology" className="bg-purple-900 text-white">Technology</option>
                <option value="Management" className="bg-purple-900 text-white">Management</option>
                <option value="Computer Science" className="bg-purple-900 text-white">Computer Science</option>
                <option value="Arts" className="bg-purple-900 text-white">Arts</option>
                <option value="Commerce" className="bg-purple-900 text-white">Commerce</option>
                <option value="Medical" className="bg-purple-900 text-white">Medical</option>
                <option value="Law" className="bg-purple-900 text-white">Law</option>
                <option value="Other" className="bg-purple-900 text-white">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 min-w-[200px] text-lg"
          >
            <Search className="w-5 h-5 inline mr-2" />
            Find Scholarships
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScholarshipSearchForm;
