import React from 'react'
import SectionTitle from './SectionTitle'
import experience from '../data/experience'
import ExperienceSection from './ExperienceSection'

function Experience() {
  return (
    <div className='py-12'>
        <SectionTitle>Exerience</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {experience.map(experience => (
                // <h1>
                //     {experience.title}
                // </h1>
                <ExperienceSection 
                key={experience.title}
                title={experience.title}
                icon={experience.icon}
                description={experience.description}
                ></ExperienceSection>
            ))}
        </div>
    </div>
    
  )
}

export default Experience