"use client";

import { useState } from 'react';
import Logo from '@/src/ui/Logo';
import Hamburger from 'hamburger-react';
import Nav from '@/src/ui/Nav';
// import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (

    <nav className="flex justify-between items-center  font-permanent   mx-10 bg-none border-gray-200  lg:pt-[34px] md:pt-[60px]  md:justify-between ">
      <div className=' flex justify-start   w-10 h-10 rounded-lg'>
        <Logo />
      </div>

      <div className="flex justify-center">
        <div className="hidden w-full md:block md:w-auto ">
          <Nav />

        </div>

        <div className="bg-white text-black  dark:bg-black dark:text-white md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
          {isOpen && (
            <div>
              <div className="absolute left-0 w-full bg-white text-black  dark:bg-black dark:text-white flex flex-col px-[24px]  z-50 h-[295px] overflow-hidden sm:flex-col">
                <Nav />
              </div>
              <div
                className="absolute top-[300px] left-0 w-full h-screen z-40 bg-gradient-to-b from-black to-transparent pointer-events-none"
                onClick={() => setOpen(false)}
              ></div>
            </div>
          )}
        </div>
      </div>
    </nav>


  );
}


