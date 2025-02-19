"use client";

import Image from "next/image";
import MyImage from '@/assets/images/myImage.png'
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


interface AboutProps {
  name: string;
  skills: string[];
}

function AboutComponent({ name, skills }: AboutProps) {
  const t = useTranslations('AboutPage')

  return (
    <section className="border py-10 px-3">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex justify-start max-w-screen h-screen overflow-hidden rounded-full shadow-md">
          <Image
            src={MyImage}
            alt={`${name} profile`}
            className="w-full h-full object-cover bg-white"
          />
        </div>
        <div className="flex-1 w-full ">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4  font-permanent">
            🌟{t("title")}
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4  ">
            {name}
          </h1>
          <p className="text-gray-600 text-base md:text-xs mb-6 dark:text-white ">
            {t("description")}
          </p>
          <div className="font-permanent">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 dark:text-white">
              Skills:
            </h2>
            <ul className="flex  gap-5 items-center list-disc list-inside space-y-1 text-gray-600 dark:text-white">
              {skills.map((skill, index) => (
                <li className="text-xs list-none" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end text-black dark:bg-black dark:text-white my-5 ">
            <Link
              className="border rounded-lg py-3 px-5 cursor-pointer hover:outline text-xs shadow-md dark:hover:shadow-white transition "
              href="/contact"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
