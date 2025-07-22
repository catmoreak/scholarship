"use client";
import React from "react";
import ScholarshipAutoFetchForm from "@/components/ScholarshipAutoFetchForm";

export default function AutoFetchScholarshipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-xl mx-auto">
        <div className="rounded-2xl shadow-2xl bg-purple-950/80 backdrop-blur-lg border border-purple-400/30 p-0 overflow-hidden transition-all duration-300">
          <div className="flex flex-col items-center py-10 px-6 sm:px-10">
            <div className="mb-8 w-full text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">Scholarship Info Finder</span>
              <p className="mt-2 text-purple-200 text-base sm:text-lg font-medium">Instantly discover scholarship details for Indian students</p>
            </div>
            <div className="w-full">
              <ScholarshipAutoFetchForm />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes border-glow {
          0% { box-shadow: 0 0 0 0 rgba(168,85,247,0.3); }
          50% { box-shadow: 0 0 40px 10px rgba(168,85,247,0.5); }
          100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.3); }
        }
        .animate-border-glow {
          animation: border-glow 2s infinite;
        }
      `}</style>
    </main>
  );
}
