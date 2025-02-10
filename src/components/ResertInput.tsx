'use client'

import {ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useTranslations } from "next-intl";

export function ResetInput() {
    const [email, setEmail] = useState("");
    const auth = getAuth();
    const t = useTranslations("ResertPassworPage");

    const handleResetPasswordEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reset function triggered"); // Debug üçün

        if (!email.trim()) {
            toast.error(t("emptyEmailError"), { position: "top-center" });
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success(t("successMessage"), { position: "top-center" });
            console.log("Email sent successfully!"); // Debug üçün
        } catch (error) {
            console.error("Error:", error);
            toast.error(t("errorMessage"), { position: "top-center" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full border m-5 p-6 md:p-10 dark:bg-black dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center cursor-pointer">
                {t("title")}
            </h1>
            <form onSubmit={handleResetPasswordEmail} className="w-full max-w-lg mt-6 border p-6 rounded-lg shadow-lg dark:border-gray-700">
                <label htmlFor="email" className="text-sm font-semibold cursor-pointer block">
                    {t("email")}
                </label>
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <input
                        id="email"
                        type="email"
                        className="border border-gray-300 dark:border-gray-600 rounded-md w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-3 rounded-md w-full sm:w-auto"
                        onClick={handleResetPasswordEmail}
                    >
                        {t("button")}
                        <ToastContainer/>
                    </button>
                </div>
            </form>
        </div>

    );
}
