"use client";

import { Header } from "@/src/components/Header";
import Skils from "@/src/components/Skils";
import Projects from "@/src/components/ProjectComponent";
import Testimional from "@/src/components/Testemional";
import ComentsLikes from "@/src/components/ComentsLikes";
import { useTranslations } from "next-intl";



export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <>
      <main
        id="home"
        className="flex flex-col  justify-center items-center  mx-auto sm:px-10 px-5 bg-white text-black dark:bg-black dark:text-white"
      >
        <section id="header" className="my-10 " title={t("title")}>

          <Header />
        </section>
        <section id="skils">

          <h2 className="flex justify-center items-center my-10  text-black dark:bg-black dark:text-white font-permanent text-2xl ">
            Skills
          </h2>

        </section>
        <Skils />

        <section id="project">

          <h2 className="text-2xl my-10  text-center mb-4 text-black dark:bg-black dark:text-white font-permanent">
            Projects
          </h2>
          <Projects />

        </section>

        <section id="testimional">

          <h2 className="text-2xl my-10   text-center font-permanent text-black dark:bg-black dark:text-white mb-8 uppercase">
            opinions
          </h2>

        </section>
        <Testimional />

        <section id="coment-likes">

          <h2 className="text-2xl my-10 text-center font-permanent text-black dark:bg-black dark:text-white mb-8 uppercase">
            Comments
          </h2>

        </section>
        <ComentsLikes />
      </main>

    </>
  );
}
