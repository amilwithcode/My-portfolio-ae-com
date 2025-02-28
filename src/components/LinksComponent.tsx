'use client'

import React from 'react'
import { Link } from "@/i18n/routing";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export default function LinksComponent() {
    return (
        <div className='lg:grid gap-10 bottom-20 lg:absolute lg:z-50 lg:left-4 justify-center md:relative md:grid items-center flex sm:bottom-10 mb-4'>
            <Link
                href="https://github.com/amilwithcode"
                className='cursor-pointer p-2 m-auto border rounded-lg hover:bg-blue-500 transform-cpu translate-x-3 flex items-center'
            >
                <FaGithub className='w-10 h-10 ' />
            </Link>
            <Link
                href="www.linkedin.com/in/amil-eyvazov-3b78b1275"
                className='cursor-pointer p-2 m-auto border rounded-lg hover:bg-blue-500 transform-cpu translate-x-3  flex items-center'
            >
                <CiLinkedin className='w-10 h-10' />
            </Link>
        </div>
    )
}

