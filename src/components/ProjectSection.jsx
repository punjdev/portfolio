import React from 'react'

function ProjectSection({imgUrl, title, tech, projectUrl}) {
  return (
    <a href={projectUrl} target="_blank" rel="noreferrer"
    className='bg-slate-200 hover:bg-slate-300 dark:bg-sky-900 rounded-lg overflow-hidden 
    dark:hover:bg-sky-950 hover:-translate-y-2 transform transition'>
        <img src={imgUrl} alt={title} className=' w-full h-36 md:h-48 object-cover'/>
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
            {title}
            </h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {tech.map(item => (
                    <span key={item} className='inline-block px-2 py-1 bg-slate-400 dark:bg-slate-900 rounded-md'>
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </a>
  )
}

export default ProjectSection