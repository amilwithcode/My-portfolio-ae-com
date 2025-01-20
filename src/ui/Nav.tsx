"use client";

import Link from 'next/link'
import { ButtonsCard } from '@/src/ui/ButtonsCard';
import { useParams } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';


export default function Nav() {
    const { user, logOut } = useAuth();
    const locale = useParams().locale;

    const handleSignOut = () => {

        try {
            logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (


        <div className=" flex  items-center gap-5  justify-center bg-white text-black  dark:bg-black dark:text-white md:flex-row sm:flex-col ">

            <ul className="flex items-center gap-10 font-jost md:font-medium text-[24px] leading-[25px] md:text-[14px] md:leading-[14px] tracking-wider md:text-Black-500 text-black dark:bg-black dark:text-white   uppercase   flex-col md:flex-row ">
                <li>
                    <Link href={`/${locale}/`} className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm" >home</Link>
                </li>

                <li>
                    <Link href={`/${locale}/about`} className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm " >about</Link>
                </li>
                <li>
                    <Link href={`/${locale}/projects`} className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm ">projects</Link>
                </li>
                <li>
                    <Link href={`/${locale}/contact`} className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm ">contact</Link>
                </li>

            </ul>
            ({user})?(
            <ButtonsCard className=' p-5 m-auto hover:outline-2 hover:cursor-pointer border-black dark:border-white rounded-full md:m-0 sm:mb-10'>
                <Link href={`/${locale}/login`} className="block   md:mr-3 md:hover:border-b-[1px] border-b-black dark:border-b-white uppercase sm:text-sm">login</Link>
            </ButtonsCard>
            ):(
            <div>
                <p>Welcome client {user.displayName}</p>
                <button className="p-5 m-auto hover:outline-2 hover:cursor-pointer border-black dark:border-white rounded-full md:m-0 sm:mb-10" onClick={handleSignOut}>SignOut </button>
            </div>
            )
        </div>


    )
}
