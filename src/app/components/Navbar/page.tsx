import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 min-h-screen flex items-center justify-center px-4 py-10'>
        <div className='max-w-2xl mx-auto bg-purple-950/80'>
          <h1 className='text-4xl font-bold text-white text-center mb-4'>Welcome to Scholarship Matcher</h1>
          <p className='text-purple-200 text-lg text-center'>
            Find and apply for scholarships that match your profile.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
