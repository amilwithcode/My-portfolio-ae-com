'use client'

import React from 'react'
import { useAuth } from '@/src/context/AuthContext'
import { FaFacebookF, FaGoogle } from "react-icons/fa";

function SocialSign(){

    const { googleSignIn, facebookSignIn } = useAuth();
    // console.log(user)

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    const handleFacebookSignIn = async () => {
        try {
            await facebookSignIn();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>

            <div className="flex items-center gap-3 text-sm mt-4">
                <span className="bg-gray-200 w-5/12 h-[2px]"></span>
                <span className="text-gray-600 text-center">VƏYA</span>
                <span className="bg-gray-200 w-5/12 h-[2px]"></span>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full flex items-center gap-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
                >
                    <FaGoogle /> <h1> Google</h1>
                </button>
                <button
                    onClick={handleFacebookSignIn}
                    type="button"
                    className="w-full flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none ml-2"
                >
                    <FaFacebookF />
                    <h1>Facebook</h1>
                </button>
            </div>
        </div>
    )
}

export default SocialSign;