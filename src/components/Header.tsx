'use client'

import AutoText from '@/src/ui/AutoTxt';
import MyImage from '@/src/ui/MyImage';




export const Header = () => {

  return (

    <div className=' flex w-full h-full  lg:flex-row  gap-32 justify-center items-center sm:flex-col '>
      <div className="image   flex w-full grid-cols-6 lg:items-start lg:justify-center    sm:items-center sm:justify-center ">

        <MyImage />
      </div>
      <div className="text  flex flex-col justify-center items-center w-full  h-screen   gap-10 ">
        <h2 className=' flex  justify-center items-center text-black dark:bg-black dark:text-white font-permanent text-2xl '>Hello Welcome my portfolio!</h2>
        <AutoText />
      </div>
    </div>

  )
}


