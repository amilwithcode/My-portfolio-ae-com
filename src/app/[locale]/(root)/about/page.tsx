'use client'

import AboutComponent from '@/components/AboutComponents'




function About() {
  return (
    <main id='about' className="flex flex-col text-black dark:bg-black dark:text-white justify-center items-center   sm:px-10 ">
      <div className='max-w-7xl w-full my-5'>
        <AboutComponent
          name="Amil Eyvazov"
          skills={["TypeScript", "React.js", "Firebase", "Next.js", "Data Analysis"]}
        />
      </div>
    </main>

  )

}

export default About