"use client";

import React, { useState } from "react";
import RegisterForm from "@/src/components/Register";
import LoginForm from "@/src/components/LoginComponent";
import { useTranslations } from "next-intl";

function Login() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const t = useTranslations("RegisterPage");

    return (
        <div className="max-w-7xl mx-auto text-black dark:bg-black dark:text-white border p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    {isLogin ? `${t("header.login")}` : `${t("header.register")}`}
                </h2>
                <div className="flex justify-center  mt-4">
                    <div className="border m-2 text-lg  rounded">

                        <button
                            onClick={() => setIsLogin(true)}
                            className={`py-2 px-5 rounded ${isLogin ? "bg-blue-800 text-white" : " text-black dark:text-white"} transition-opacity`}
                        >
                            {t("title.login")}
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`py-2 px-5 rounded ${!isLogin ? "bg-blue-800 text-white" : " text-black dark:text-white"} transition-opacity`}
                        >
                            {t("title.register")}
                        </button>
                    </div>
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