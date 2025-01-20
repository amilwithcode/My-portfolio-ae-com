'use strict';

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Login from "@/src/components/Login";
import Register from "@/src/components/Register";

const Buttons = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const { locale } = useParams();
    const router = useRouter();
    if (!isLogin) {
        router.push(`/${locale}/register`);
    }
    return (
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? "DAXİL OLUN" : "QOŞULUN"}
            </h2>
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={() => setIsLogin(true)}
                    className={`py-2 px-4 rounded-md ${isLogin ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                        }`}
                >
                    Hesabnıza daxil olun
                </button>
                <button
                    onClick={() => setIsLogin(false)}
                    className={`py-2 px-4 rounded-md ${!isLogin ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                        }`}
                >
                    Qeydiyatdan keçin
                </button>
            </div>
            ({isLogin ? (<Login />) : <Register />})
        </div>
    )
}

export default Buttons