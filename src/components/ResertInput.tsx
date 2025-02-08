'use client'

import { toast } from "react-toastify";
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
        <div className="grid items-center justify-center w-full  border m-5   gap-10  p-10  dark:bg-black dark:text-white">
            <h1 className="text-4xl font-bold text-center cursor-pointer">
                {t("title")}
            </h1>
            <form onSubmit={handleResetPasswordEmail} className="max-w-screen border max-h-screen max-w-5xl p-10">
                <label htmlFor="email" className="text-sm font-bold cursor-pointer">
                    {t("email")}
                </label>
                <div className="flex gap-2 mt-2 w-full max-w-5xl">
                    <input
                        id="email"
                        type="email"
                        className="border border-gray-300 rounded-md w-full p-2"
                        placeholder={'example@gmail.com'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-3 py-2 rounded-md"
                    >
                        {t("button")}
                    </button>
                </div>
            </form>
        </div>
    );
}
