import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectSection from './ProjectSection'
import projects from '../data/projects'

function Projects() {
  return (
    <div className='py-12'>
        <SectionTitle id='projects'> 
        Projects
        </SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {projects.map (project => (
                <ProjectSection 
                key={project.title}
                imgUrl={project.imgUrl}
                title={project.title}
                tech={project.tech}
                projectUrl={project.projectUrl}
                ></ProjectSection> 
            ))}
        </div>
    </div>
  )
}

export default Projects