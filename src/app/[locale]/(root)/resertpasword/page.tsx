'use client'

import { ResertInput } from "@/src/components/ResertInput"



function ResertInputPage(){
  return (

    <main id='projects' className="flex flex-col text-black dark:bg-black dark:text-white justify-center items-center   sm:px-10 ">

      <div className='max-w-7xl w-full my-5'>
        <ResertInput/>
      </div>
    </main>


  )
}

export default ResertInputPage;