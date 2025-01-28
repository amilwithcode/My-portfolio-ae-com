'use client';
import React from 'react';

export default function GlobalError() {
    return (

        <div className="flex center text-black dark:bg-black dark:text-white">
            <div id="message" className='flex flex-col justify-center items-center text-red-600'>
                <h2>404</h2>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found.</p>
            </div>
        </div>

    );
}
