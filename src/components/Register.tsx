'use client';

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import SocialSign from "@/src/components/SocialSign";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "@/src/firebase/config";
import ToggleEye from "@/src/ui/toggleEye";
// import { useTranslations } from "next-intl";


export default function Register() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const [isShow, setIsShow] = useState<boolean>(false);
    const { locale } = useParams();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, password);
            router.push(`/${locale}`);
        } catch (error) {
            console.log(error);
            // @ts-expect-error can be message
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto text-black dark:bg-black dark:text-white   rounded-lg">

            {/* <Buttons /> */}
            <form className="space-y-4" onSubmit={handleRegister} >
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        İstifadəçi adı
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder='İstifadəçi adı'
                        required
                    />
                </div>
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
                        placeholder="example@example.com"
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
                    <ToggleEye onClick={() => setIsShow((prev) => !prev)} isShow={isShow} />
                </div>

                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Şifrəni təsdiq edin
                    </label>
                    <input
                        type={isShow ? "text" : "password"}
                        id="confirmPassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Şifrəni təsdiq edin"
                        required
                    />
                    <ToggleEye onClick={() => setIsShow((prev) => !prev)} isShow={isShow} />
                </div>

                <div className="mt-4 text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Qeydiyyatdan Keçin
                    </button>
                </div>
                <SocialSign />
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form >

        </div>
    )
}