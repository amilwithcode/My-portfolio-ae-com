'use client'

import AutoText from '@/src/ui/AutoTxt';
import MyImage from '@/src/ui/MyImage';




export default function Header() {

  return (

    <div className=' flex max-w-7xl w-full  h-full  p-2  lg:gap-20 justify-center items-center md:gap-5 sm:gap-10  '>


      <MyImage />

      <div className="text flex flex-col  justify-center items-center text-center w-full font-permanent text-black dark:bg-black dark:text-white  h-screen  gap-20 m-5">
        <h2 className=' lg:text-2xl md:text-md sm:text-sm'>Hello Welcome my portfolio!</h2>
        <AutoText />
      </div>
    </div>

  )
}


