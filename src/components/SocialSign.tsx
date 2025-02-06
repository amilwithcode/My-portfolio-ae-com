'use client'


import { useAuth } from '@/src/context/AuthContext'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

function SocialSign() {

    const { googleSignIn, facebookSignIn } = useAuth();
    // console.log(user)

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
            toast.error('Yenidən daxil olun', {
                position: 'top-center',
            });
        }
    }
    const handleFacebookSignIn = async () => {
        try {
            await facebookSignIn();
        } catch (error) {
            console.log(error);
            toast.error('Yenidən daxil olun', {
                position: 'top-center',
            });
        }
    }


    return (
        <div>

            <div className="flex items-center gap-10 text-md mt-4 w-full">
                <span className="bg-gray-200 w-7/12 h-[2px]"></span>
                <span className="text-gray-600 text-center dark:text-white">VƏYA</span>
                <span className="bg-gray-200 w-7/12 h-[2px]"></span>
            </div>
            <div className="flex justify-between mt-4 ">
                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full flex items-center justify-center text-center gap-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
                >
                    <FaGoogle /> <h1> Google</h1>
                    <ToastContainer />
                </button>
                <button
                    onClick={handleFacebookSignIn}
                    type="button"
                    className="w-full flex items-center justify-center text-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none ml-2"
                >
                    <FaFacebookF />
                    <h1>Facebook</h1>
                    <ToastContainer />
                </button>
            </div>
        </div>
    )
}

export default SocialSign;