'use client';

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Toggle from "@/src/ui/toggleEye";
import SocialSign from "@/src/components/SocialSign";
import {
    getAuth,
    signInWithEmailAndPassword,

} from "firebase/auth";
import { app } from "@/src/firebase/config";
// import { useTranslations } from "next-intl";

function LoginComponent(){
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isShow, setIsShow] = useState<boolean>(false)
    const router = useRouter();
    const { locale } = useParams();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const auth = getAuth(app);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            setEmail("");
            setPassword("");
            if (userCredential.user) router.push(`/${locale}`);
        } catch (error) {
            // @ts-expect-error can be message
            setError(error.message);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleLogin}>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    E-mail ünvanı
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E-mail"
                    required
                />

            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Şifrə
                </label>
                <input
                    type={isShow ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Şifrə"
                    required

                />
                <Toggle onClick={() => setIsShow((prev) =>!prev)} isShow={isShow} />
            </div>

            <div className="text-sm text-blue-600 text-right cursor-pointer">
                <Link href={`/${locale}/resertpasword`} onClick={() => setIsLogin(false)}>Şifrənizi unutmusanız?</Link>
            </div>

            <div className="mt-4 text-center">
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    DAXİL OLUN
                </button>
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}




            <SocialSign />

        </form>
    )
}

export default LoginComponent;