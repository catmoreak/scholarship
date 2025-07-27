import React from 'react'


import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/10 backdrop-blur border-b border-purple-400/30 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <span className="text-xl font-bold text-white tracking-tight">Scholarship Matcher</span>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="text-purple-200 hover:text-white font-medium transition text-lg">Home</Link>
          <Link href="/community" className="text-purple-200 hover:text-white font-medium transition text-lg">Community</Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <span className="text-white text-2xl font-semibold">This is here</span>
      </div>
    </div>
  );
}

export default page
