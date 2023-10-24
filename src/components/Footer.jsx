import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-sky-950 text-center text-gray-300 rounded-t-lg'>
        <a href='#hero' className='block text-xl md:text-2xl font-semibold'>
            Dev Punjabi
        </a>
        <a href='mailto:dev.punjabi@mail.utoronto.ca ' className=' text-sm md-text-md hover:text-indigo-500'>
            dev.punjabi@mail.utoronto.ca
        </a>
        <p className='text-xs mt-2 text-gray-500'>
            Last Edit: 24-10-23
        </p>
    </div>
  )
}

export default Footer