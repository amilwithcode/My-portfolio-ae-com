"use client";

import React, { useState } from "react";
import RegisterForm from "@/src/components/Register";
import LoginForm from "@/src/components/LoginComponent";
// import { useTranslations } from "next-intl";

function Login(){
   const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <div className="max-w-7xl mx-auto text-black dark:bg-black dark:text-white border p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    {isLogin ? "DAXİL OLUN" : "QOŞULUN"}
                </h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`py-2 px-4 rounded-md ${isLogin ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800" }`}
                    >
                        Hesabnıza daxil olun
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`py-2 px-4 rounded-md ${!isLogin ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
                    >
                        Qeydiyatdan keçin
                    </button>
                </div>
            </div>

            {isLogin ? (
                // Login Form
                <LoginForm />
            ) : (
                // Registration Form
                <RegisterForm />
            )}
        </div>
    );
};

export default Login;