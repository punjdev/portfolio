import React from 'react'

function HeroSection() {
    return (
        <div id='hero'
        className='flex items-center justify-center
        flex-col py-20'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold dark:text-sky-400'>
                    Hi, Welcome To My Portfolio! 
                </h1>
                <p className='text-md md:text-xl max-w-lg mb-3 text-gray-600 dark:text-gray-300'> 
                I'm Dev, a 3rd-year Computer Science student at the University of Toronto Mississauga enrolled in the PEY program. I'm actively seeking a 12-16 month internship starting in summer 2024.
                </p>
                <a href="#projects" className='inline-block px-8 py-3 border border-transparent text-base font-medium text-gray-100 bg-sky-600 hover:bg-sky-700 md:text-md'> 
                See My Projects
                </a>           
            </div>
        </div>
    )
}

export default HeroSection