"use client";

import React from "react";
import Header from "@/components/Header";
import Skils from "@/components/Skils";
import Projects from "@/components/ProjectComponent";
// import Testimional from "@/components/Testemional";
import ComentsLikes from "@/components/ComentsLikes";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("ProjectsPage")
  const c = useTranslations("HomePage")
  return (
    <main
      id="home"
      className="flex flex-col  justify-center items-center   sm:px-10  bg-white text-black dark:bg-black dark:text-white"
    >
      <section id="header" className="my-5 mx-2 max-w-screen  w-full dark:bg-black dark:text-white font-permanent ">
        <Header />
      </section>
      <section id="skils" className="my-5 max-w-screen  w-full dark:bg-black dark:text-white font-permanent ">
        <h2 className="flex justify-center items-center my-2  text-black dark:bg-black dark:text-white font-permanent text-2xl ">
          {c("skills.title")}
        </h2>
        <Skils />
      </section>

      <section id="project" className="my-5 max-w-screen  w-full dark:bg-black dark:text-white font-permanent">
        <h2 className="text-2xl my-10  text-center mb-4 text-black dark:bg-black dark:text-white font-permanent">
          {t("title")}
        </h2>
        <Projects />
      </section>

      {/* <section id="testimional">
        <h2 className="text-2xl my-10   text-center font-permanent text-black dark:bg-black dark:text-white mb-8 uppercase">
          {c("testimonials.header")}
        </h2>
      </section>
      <Testimional /> */}

      <section id="coment-likes" className="my-5 max-w-screen  w-full dark:bg-black dark:text-white font-permanent">
        <h2 className="text-2xl my-10 text-center font-permanent text-black dark:bg-black dark:text-white mb-8 uppercase">
          {c("coments.title")}
        </h2>
        <ComentsLikes />
      </section>
    </main>
  );
}
