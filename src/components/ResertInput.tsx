import React from 'react'
// import { useTranslations } from "next-intl";

export function ResertInput() {
    return (
        <div className='flex items-center justify-center dark:bg-black  dark:text-white mx-4'>
            <h1 className='text-2xl font-bold'>Resert Pasword</h1>
            <input
                type="text"
                className="border border-gray-300 rounded-md w-full p-2"
                placeholder="Email"
            />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md ml-2">
                Reset
            </button>
        </div>
    )
}
