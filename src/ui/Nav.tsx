/* eslint-disable */
"use client";

import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { ButtonsCard } from "@/src/ui/ButtonsCard";
import { useParams } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
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
  const { user, logOut } = useAuth() ?? {};
  const [loading, setLoading] = useState<boolean | any>();
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
    const docRef = doc(db, "users", user?.uid as string);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (!displayName) {
        setDisplayName(docSnap.data().username);
      } else {
        setDisplayName(displayName);
      }
    } else {
      console.log("notfound");
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
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
    <div className="lg:flex  items-center gap-4  justify-center bg-white text-black  dark:bg-black dark:text-white md:flex  sm:grid">
      <ul className="flex items-center gap-8 m-auto  lg:text-md  lg:text-[24px]  tracking-wider  text-black dark:bg-black dark:text-white   flex-col md:flex-row md:font-medium md:text-[14px] md:item-center  sm:text-[10px]  sn:item-center ">
        <li>
          <Link
            href={`/${locale}/`}
            className="block mb-[3px] lg:text-xl  border-b-black dark:border-b-white md:text-[14px] md:hover:border-b-[1px]  sm:text-[10px] "
          >
            {t("nav.home")}
          </Link>
        </li>

        <li>
          <Link
            href={`/${locale}/about`}
            className="block mb-[3px] lg:text-xl  border-b-black dark:border-b-white md:text-[14px] md:hover:border-b-[1px]  sm:text-[10px]  "
          >
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/projects`}
            className="block mb-[3px] lg:text-xl  border-b-black dark:border-b-white md:text-[14px] md:hover:border-b-[1px]  sm:text-[10px]  "
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/contact`}
            className="block mb-[3px] lg:text-xl border-b-black dark:border-b-white md:text-[14px] md:hover:border-b-[1px] ] sm:text-[10px]  "
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
      {loading ? null : !user ? (
        <ButtonsCard className=" p-3 m-auto hover:outline-2 hover:cursor-pointer dark:hover:border-gray-500 border-black dark:border-white rounded-full md:m-0   ">
          <Link
            href={`/${locale}/loginregister`}
            className="block text-center lg:text-xl   hover:border-b-[1px] border-b-black dark:border-b-white uppercase md:text-[14px] md:hover:border-b-[1px]  sm:text-[10px] "
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
              className="p-3 m-auto hover:outline-2 hover:cursor-pointer lg:text-md border-black dark:border-white rounded-full md:m-0 sm:mb-10 md:text-[14px] md:hover:border-b-[1px]] sm:text-[10px] "
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
