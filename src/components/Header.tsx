'use client'

import AutoText from '@/src/ui/AutoTxt';
import MyImage from '@/src/ui/MyImage';
import { useTranslations } from 'next-intl';




export default function Header() {
  const t = useTranslations("HomePage")

  return (

    <div className=' max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center w-full  h-full  p-2  lg:gap-18  md:gap-12 sm:gap-10  '>


      <MyImage />

      <div className="text flex flex-col  justify-center items-center text-center w-full font-permanent text-black dark:bg-black dark:text-white  h-screen  gap-20 m-5">
        <h2 className=' lg:text-2xl md:text-md sm:text-sm'>{t("header.title")}</h2>
        <AutoText />
      </div>
    </div>

  )
}


