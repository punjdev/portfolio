import React from 'react'
import SectionTitle from './SectionTitle'

function AboutMe() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='w-full md:w-6/12 md:gap-20 py-20'>
            <SectionTitle>
              More About Me...
            </SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            My favorite aspect of programming is systems development, primarily scripting in Bash, KornShell, and C within Unix-based environments. 
            I also enjoy hiking; in the photo to your right, I am at the Whistler-Blackcomb Peak-to-Peak Trails. 
            I've also hiked Yosemite, Niagara trails, Rouge Park, and many other trails around the GTA. My goal as a developer is to eventually create my own game.
            Feel free contact me through the email below!
            </p>
            <a 
            href='mailto:dev.punjabi@mail.utoronto.ca'
            className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-sky-600 dark:hover:text-sky-600'
            >
                dev.punjabi@mail.utoronto.ca
            </a>
        </div>
        <img 
        src="https://media.licdn.com/dms/image/D5603AQGcLtp-P7ASTw/profile-displayphoto-shrink_800_800/0/1695277040049?e=1703721600&v=beta&t=mTG5fPedwmExEyucYtHyoUTm7tKLRY-dIVmN8h8ULLQ" 
        alt="" 
        className='w-full md:w-6/12 rounded-lg object-cover'/>


    </div>
  )
}

export default AboutMe