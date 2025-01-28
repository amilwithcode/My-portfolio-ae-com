'use client'

import React from 'react'
// import { useTranslations } from "next-intl";

function FooterSec (){

    const year = new Date().getFullYear();
    return (
        <footer className=" text-white py-8  w-full ">
            

            {/* Bottom Section */}
            <div className="border-t  mt-8 pt-4 text-center bottom-0 ">
                <p className="text-sm text-black dark:text-white">&copy;My website {year}  </p>
            </div>
        </footer>
    );
}

export default FooterSec