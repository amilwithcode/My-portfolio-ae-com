'use client'

import Projects from '@/src/components/Projects'

function ProjectsPage()  {
  return (

    <main id='projects' className="flex flex-col text-black dark:bg-black dark:text-white justify-center items-center   sm:px-10 ">

      <div className='max-w-7xl w-full my-5'>
        <Projects />
      </div>
    </main>


  )
};

export default ProjectsPage;