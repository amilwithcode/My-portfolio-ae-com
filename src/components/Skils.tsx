'use client'

import { useState } from "react";
import { FaGitAlt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPython } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useTranslations } from "next-intl";


type Category = "All" | "Languages" | "Frameworks" | "Tools";

export const skills = {
  All: [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Next.js', icon: <RiNextjsFill /> },
    { name: 'Python', icon: <SiPython /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: 'Github', icon: <FaGithub /> },
  ],
  Languages: [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <SiPython /> }
  ],
  Frameworks: [
    { name: "React", icon: <FaReact /> },
    { name: 'Next.js', icon: <RiNextjsFill /> }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: 'Github', icon: <FaGithub /> }
  ],
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const t = useTranslations("HomePage")

  return (
    <div className="w-full dark:bg-black dark:text-white font-permanent">
      <div className="lg:flex space-x-4 justify-between mb-6  md:grid-cols-4 sm:grid sm:grid-cols-2 sm:text-sm sm:m-4">
        {(["All","Languages","Frameworks","Tools"] as Category[]).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded  ${selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 hover:bg-gray-200 border"
              } cursor-pointer text-xl md:text-md sm:text-sm `}
          >
            {t(`skills.${category}`)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-5 p-5">
        {skills[selectedCategory].map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center border text-blue-400 bg-white p-5 rounded shadow-md hover:bg-blue-600 hover:text-white cursor-pointer"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
