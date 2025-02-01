"use client";

import React from "react";
import Header from "@/src/components/Header";
import Skils from "@/src/components/Skils";
import Projects from "@/src/components/ProjectComponent";
import Testimional from "@/src/components/Testemional";
import ComentsLikes from "@/src/components/ComentsLikes";

export default function Home() {
  return (
    <main
      id="home"
      className="flex flex-col  justify-center items-center   sm:px-10  bg-white text-black dark:bg-black dark:text-white"
    >
      <section id="header" >
        <Header />
      </section>
      <section id="skils">
        <h2 className="flex justify-center items-center my-2  text-black dark:bg-black dark:text-white font-permanent text-2xl ">
          Skills
        </h2>
      </section>
      <Skils />

      <section id="project">
        <h2 className="text-2xl my-10  text-center mb-4 text-black dark:bg-black dark:text-white font-permanent">
          Projects
        </h2>
      </section>
      <Projects />

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
  );
}
