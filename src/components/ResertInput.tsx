import { toast } from "react-toastify";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useTranslations } from "next-intl";


export function ResertInput() {
    const [email, setEmail] = useState('')
    const auth = getAuth();
    const t = useTranslations("ResertPassworPage")

    const ResetPasswordEmail = async (e) => {
        e.preventDefault()
        try {
            await sendPasswordResetEmail(auth, email)


        } catch (error) {
            console.log(error);
            toast.error('You write to again this email!', {
                position: "top-center"
            })
            console.log(error);
            // ..

        };
    }

    return (
        <div className='flex-col items-center justify-center mx-1  py-36  dark:bg-black  dark:text-white '>
            <h1 className="flex justify-center items-center text-center text-xl font-bold cursor-pointer">{t("title")}</h1>
            <form action="">

                <label
                    htmlFor="email"
                    className='text-sm font-bold cursor-pointer'
                >
                    {t("email")}
                </label>
                <div className="input flex  gap-2">

                    <input
                        id='email'
                        type="email"
                        className="border border-gray-300 rounded-md w-full p-2"
                        placeholder="Email"
                        required
                    />
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-md ml-2" onClick={ResetPasswordEmail}>
                        {t("button")}
                    </button>
                </div>
            </form>
        </div>
    )
}
