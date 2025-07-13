"use client"

import React, { useState } from 'react'

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
    <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Find Scholarships
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class/Education Level */}
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              Education Level *
            </label>
            <select
              value={criteria.class}
              onChange={(e) => handleInputChange('class', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-lg py-2 px-3"
              required
            >
              <option value="" className="bg-purple-900 text-white">Select level</option>
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
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              Gender *
            </label>
            <select
              value={criteria.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-lg py-2 px-3"
              required
            >
              <option value="" className="bg-purple-900 text-white">Select gender</option>
              <option value="Male" className="bg-purple-900 text-white">Male</option>
              <option value="Female" className="bg-purple-900 text-white">Female</option>
              <option value="Other" className="bg-purple-900 text-white">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* State */}
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              State
            </label>
            <select
              value={criteria.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-lg py-2 px-3"
            >
              <option value="" className="bg-purple-900 text-white">Select state (optional)</option>
              {indianStates.map(state => (
                <option key={state} value={state} className="bg-purple-900 text-white">{state}</option>
              ))}
            </select>
          </div>

          {/* Family Income */}
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              Family Income
            </label>
            <select
              value={criteria.familyIncome}
              onChange={(e) => handleInputChange('familyIncome', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-lg py-2 px-3"
            >
              <option value="" className="bg-purple-900 text-white">Select income (optional)</option>
              <option value="Below ₹1 lakh" className="bg-purple-900 text-white">Below ₹1 lakh</option>
              <option value="Below ₹2.5 lakh" className="bg-purple-900 text-white">Below ₹2.5 lakh</option>
              <option value="Below ₹3 lakh" className="bg-purple-900 text-white">Below ₹3 lakh</option>
              <option value="Below ₹5 lakh" className="bg-purple-900 text-white">Below ₹5 lakh</option>
              <option value="Below ₹8 lakh" className="bg-purple-900 text-white">Below ₹8 lakh</option>
              <option value="Below ₹10 lakh" className="bg-purple-900 text-white">Below ₹10 lakh</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Caste Category */}
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              Category
            </label>
            <select
              value={criteria.caste}
              onChange={(e) => handleInputChange('caste', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white rounded-lg py-2 px-3"
            >
              <option value="" className="bg-purple-900 text-white">Select category (optional)</option>
              <option value="General" className="bg-purple-900 text-white">General</option>
              <option value="Other Backward Classes" className="bg-purple-900 text-white">OBC</option>
              <option value="Scheduled Caste" className="bg-purple-900 text-white">SC</option>
              <option value="Scheduled Tribe" className="bg-purple-900 text-white">ST</option>
            </select>
          </div>

          {/* Academic Percentage */}
          <div>
            <label className="block text-purple-200 font-medium mb-2">
              Percentage
            </label>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="Enter percentage"
              value={criteria.academicPercentage}
              onChange={(e) => handleInputChange('academicPercentage', e.target.value)}
              className="w-full bg-white/15 border border-purple-300/40 text-white placeholder-purple-200 rounded-lg py-2 px-3"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Search Scholarships
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScholarshipSearchForm;
