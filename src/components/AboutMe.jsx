import React from 'react'
import SectionTitle from './SectionTitle'

function AboutMe() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='w-full md:w-6/12 md:gap-20 py-20'>
            <SectionTitle>
                About Me
            </SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a 
            href='mailto:dev.punjabi@mail.utoronto.ca'
            className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
            >
                dev.punjabi@mail.utoronto.ca
            </a>
        </div>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7bbEZ_bFQpIjwvbeME34CMdaB5eG-8esqx6l_LuVE&s" 
        alt="" 
        className='w-full md:w-6/12 rounded-lg object-cover'/>


    </div>
  )
}

export default AboutMe