import React from 'react'
// import { useTranslations } from "next-intl";

export function ResertInput() {
    return (
        <div className=' mx-1  py-36  dark:bg-black  dark:text-white '>
            <label
                htmlFor="email"
                className='text-sm font-bold cursor-pointer'>Resert pasword
            </label>
            <div className="input flex  gap-2">

                <input
                    id='email'
                    type="email"
                    className="border border-gray-300 rounded-md w-full p-2"
                    placeholder="Email"
                    required
                />
                <button className="bg-blue-500 text-white px-3 py-2 rounded-md ml-2">
                    Reset
                </button>
            </div>
        </div>
    )
}
