'use client'

import AutoText from '@/ui/AutoTxt';
import MyImage from '@/ui/MyImage';
import { useTranslations } from 'next-intl';
import LinksComponent from '@/components/LinksComponent'



export default function Header() {
  const t = useTranslations("HomePage")

  return (
    <section >
      <div className=' max-w-screen w-full  h-full flex flex-col md:flex-row justify-between items-center    p-2  lg:gap-18  md:gap-12 sm:gap-10  '>


        <MyImage />

        <div className="text max-w-screen w-full h-full max-h-screen flex flex-col  justify-center items-center text-center  font-permanent text-black dark:bg-black dark:text-white m-5   gap-14">
          <h2 className=' lg:text-2xl md:text-md sm:text-sm'>{t("header.title")}</h2>
          <AutoText />
        </div>
        <LinksComponent />
      </div>

    </section>
  )
}


