'use client'

import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-black dark:bg-black dark:text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold  text-black dark:bg-black dark:text-slate-100">404</h1>
                <p className="mt-4 text-xl text-black dark:bg-black dark:text-slate-100">Sorry, the page you are looking for does not exist.</p>
            </div>
            <Link
                href="/"
                className="mt-6 px-5 py-2  text-black dark:bg-white dark:text-black rounded-full shadow-md dark:hover:text-gray-400 hover:bg-slate-300 border-b-black dark:border-b-white"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
