"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/src/lib/projectsdata";
// import { useTranslations } from "next-intl";

function ProjectComponent() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const locale = useParams().locale;
  const data = projectsData();
  return (
    <div className="flex w-full space-x-6 p-2 ">
      {/* Sidebar */}
      <div className="w-1/4 border  shadow-md rounded-lg font-permanent ">
        <ul className="space-y-4 p-4">
          {data.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-2 cursor-pointer rounded-lg  md:text-md sm:text-sm ${activeCategory === index
                ? " font-bold text-blue-600"
                : "hover: text-black dark:bg-black dark:text-white"
                }`}
              onClick={() => setActiveCategory(index)}
            >
              {item.icon}
              {item.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="w-3/4">
        {data[activeCategory].projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-permanent">
            {data[activeCategory].projects.map((project, index) => (
              <div
                key={index}
                className="grid gap-4 cursor-pointer border rounded-lg p-3 shadow-md  text-white hover:shadow-lg transition   "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-fill  rounded-md"
                  width={300}
                  height={200}
                />
                <h2 className="text-xl font-semibold text-gray-800  md:text-md sm:text-sm">
                  {project.title}
                </h2>
                <p className="text-gray-600 md:text-md sm:text-sm">{project.description}</p>
                <Link
                  href={`${locale}/projects`}
                  className="flex justify-center items-center w-full p-2 bg-blue-500 text-white  rounded-lg hover:bg-blue-700 transition md:text-md sm:text-sm"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Bu kateqoriyada layihələr yoxdur.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectComponent;
