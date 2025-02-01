/* eslint-disable */
"use client";

import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { ButtonsCard } from "@/src/ui/ButtonsCard";
import { useParams } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
// import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/firebase/config";
import { useTranslations } from "next-intl";

type NavProps = {
  locale: string;
  user: string | null;
  logOut: () => Promise<void>;
  loading: boolean;
  setLoading: () => void;
};

export default function Nav(): ReactElement<NavProps> {
  const { user, logOut, setUser } = useAuth();
  const { loading, setLoading } = useState(true);
  const [displayName, setDisplayName] = useState("");
  const t = useTranslations("HomePage");

  // const auth = getAuth();
  // const currentuser = auth.currentUser;
  // if (currentuser ) {
  //   const displayName: currentuser.displayName;
  //   const email: currentuser.email;
  //   const uid: currentuser.uid;
  // }

  const getUserData = async () => {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (!user.displayName) {
        setDisplayName(docSnap.data().username);
      } else {
        setDisplayName(user.displayName);
      }
    } else {
      console.log("notfound");
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      //   setLoading(true);
    };
    checkUser();
    getUserData();
  }, [user]);

  const locale = useParams().locale;

  const handleSignOut = () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex  items-center gap-3  justify-center bg-white text-black  dark:bg-black dark:text-white md:flex-row sm:text-[5px] sm:leading-[10px] sm:flex-col ">
      <ul className="flex items-center gap-5 font-jost text-md md:font-medium text-[24px] leading-[25px] md:text-[14px] md:leading-[14px] tracking-wider  text-black dark:bg-black dark:text-white   uppercase   flex-col md:flex-row ">
        <li>
          <Link
            href={`/${locale}/`}
            className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm"
          >
            {t("nav.home")}
          </Link>
        </li>

        <li>
          <Link
            href={`/${locale}/about`}
            className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm "
          >
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/projects`}
            className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm "
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/contact`}
            className="block mb-[3px] md:mb-0 md:mr-[42px] md:hover:border-b-[1px] border-b-black dark:border-b-white sm:text-sm "
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
      {loading ? null : !user ? (
        <ButtonsCard className="flex p-3 m-auto hover:outline-2 hover:cursor-pointer dark:hover:border-gray-500 border-black dark:border-white rounded-full md:m-0 sm:mb-10 ">
          <Link
            href={`/${locale}/loginregister`}
            className="block text-center text-xl   hover:border-b-[1px] border-b-black dark:border-b-white uppercase"
          >
            {t("nav.login")}
          </Link>
        </ButtonsCard>
      ) : (
        <div>
          <div className="user flex flex-col justify-center items-center ">
            <FaRegUserCircle className="w-5 h-5" />
            <p className="text-sm">{displayName}</p>
            <button
              className="p-3 m-auto hover:outline-2 hover:cursor-pointer text-sm border-black dark:border-white rounded-full md:m-0 sm:mb-10"
              onClick={handleSignOut}
            >
              {t("nav.signout")}{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
