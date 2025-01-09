'use client'


import { useState } from 'react';
import { auth } from '@/src/app/firebase/config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
// import { useRouter } from 'next/navigation'

const Register = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    // const router = useRouter()
    const [useCreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await useCreateUserWithEmailAndPassword(auth, email, password);
            setEmail('')
            setPassword('')
            console.log(res)
            // router.push('/login')
        } catch (error: any) {
            setError(error.message);
        }
    };
    return (
        <>
            {/* // Registration Form */}
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
        </>
    )
}

export default Register