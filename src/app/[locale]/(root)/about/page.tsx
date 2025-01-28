'use client'

import AboutComponent from '@/src/components/AboutComponents'
import MyImage from '@/src/assets/images/myİmage.png'


function About() {
  return <main id='about' className="flex flex-col text-black dark:bg-black dark:text-white justify-center items-center   sm:px-10 ">
    <div className='max-w-7xl w-full my-5'>
      <AboutComponent
        name="Amil Eyvazov"
        description="Hello! I am studying Supply Chain Management and have a strong interest in technology and data analysis. I have worked on analyzing data related to COVID-19 and smartphone brands, utilizing Python and its libraries. These experiences have helped me develop a deeper understanding of data and apply it to practical solutions.
In the field of technology, I am enhancing my skills by building web applications using React.js, Next.js, and TypeScript. I am currently learning Firebase to create more dynamic projects. Additionally, I am working on robotics projects using C++ and expanding my knowledge in cybersecurity.

My goal is to leverage my skills in data analysis and technology to develop more efficient solutions in the field of Supply Chain Management. I am always eager to learn, share, and collaborate on new opportunities.
"
        imageUrl={MyImage}// Şəkilin URL-i
        skills={["TypeScript", "React.js", "Firebase", "Next.js", "Data Analysis"]}
      />
    </div>
  </main>



}

export default About