"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialSign from "@/components/SocialSign";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "@/firebase/config";
import ToggleEye from "@/ui/toggleEye";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslations } from "next-intl";


export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [users, setUserData] = useState({
    userName: "",
    email: "",
    password: 0,
  });
  const t = useTranslations('RegisterPage')
  console.log(users)

  const handleRegister = async (e: React.ChangeEvent<EventTarget>) => {

    e.preventDefault();
    try {
      const { name, value } = e.target as HTMLInputElement;
      const auth = getAuth(app);
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await addUserToFirestore(user.user.uid);
      setUserData((prev) => ({ ...prev, [name]: value }));
      router.push(`/`);


      toast.success('Register Success!', {
        position: 'top-center',
      });

    } catch (error) {

      toast.error('You register to again!', {
        position: 'top-center',
      });
      console.log(error)
    }
  };

  const addUserToFirestore = async (uid: string) => {

    try {
      await setDoc(doc(db, "users", uid), {
        username: username,
        email: email,
        password: parseInt(password, 10),
      });
    } catch (error) {
      console.error("Sənəd əlavə edilərkən xəta baş verdi:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto text-black dark:bg-black dark:text-white   rounded-lg">
      {/* <Buttons /> */}
      <form className="space-y-4" onSubmit={handleRegister}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 lowercase"
          >
            {t("name")}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="İstifadəçi adı"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 lowercase"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="example@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 lowercase"
          >
            {t("password")}
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
          <ToggleEye
            onClick={() => setIsShow((prev) => !prev)}
            isShow={isShow}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 lowercase"
          >
            {t("resertpassword")}
          </label>
          <input
            type={isShow ? "text" : "password"}
            id="confirmPassword"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Şifrəni təsdiq edin"
            required
          />
          <ToggleEye
            onClick={() => setIsShow((prev) => !prev)}
            isShow={isShow}
          />
        </div>

        <div className="mt-4 text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleRegister}
          >

            {t('button')}

            <ToastContainer />

          </button>
        </div>
        <SocialSign />
      </form>
    </div>
  );
}
