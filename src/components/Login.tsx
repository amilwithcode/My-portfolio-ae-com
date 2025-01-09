'use client';

import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/app/firebase/config';
// import { useRouter } from 'next/navigation'

const Login = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    // const router = useRouter()
    const [useSignInUserWithEmailAndPassword] = useSignInUserWithEmailAndPassword(auth);
    const [useCreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await useSignInUserWithEmailAndPassword(auth, email, password);
            email('')
            password('')
            console.log(res)
            // router.push('/')
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await useCreateUserWithEmailAndPassword(auth, email, password);
            router.push('/login')
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto text-black dark:bg-black dark:text-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{isLogin ? 'DAXİL OLUN' : 'QOŞULUN'}</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`py-2 px-4 rounded-md ${isLogin ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Hesabnıza daxil olun
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`py-2 px-4 rounded-md ${!isLogin ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Qeydiyatdan keçin
                    </button>
                </div>
            </div>

            {isLogin ? (
                // Login Form
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail ünvanı</label>
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifrə</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Şifrə"
                            required
                        />
                    </div>

                    <div className="text-sm text-blue-600 text-right">
                        <a href="#">Şifrənizi unutmusanız?</a>
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

                    <div className="flex items-center gap-3 text-sm mt-4">
                        <span className="bg-gray-200 w-5/12 h-[2px]"></span>
                        <span className="text-gray-600 text-center">VƏYA</span>
                        <span className="bg-gray-200 w-5/12 h-[2px]"></span>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            className="w-full flex items-center gap-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            <FaGoogle /> <h1> Google</h1>
                        </button>
                        <button
                            type="button"
                            className="w-full flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none ml-2"
                        >
                            <FaFacebookF /><h1>Facebook</h1>
                        </button>
                    </div>
                </form>
            ) : (
                // Registration Form
                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail ünvanı</label>
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifrə</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Şifrə"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Şifrəni təsdiq edin</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Şifrəni təsdiq edin"
                            required
                        />
                    </div>

                    <div className="mt-4 text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Qeydiyyatdan Keçin
                        </button>
                    </div>

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </form>
            )}
        </div>
    );
};

export default Login;
