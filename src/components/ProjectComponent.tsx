'use client'

import  { useState } from "react";
import Image from "next/image";
import { BiBox } from "react-icons/bi";
import PortfolioImage from '@/src/assets/images/myİmage.png';
import EcomerceImage from '@/src/assets/images/myİmage.png';
import DataImage1 from '@/src/assets/images/myİmage.png';
import DataImage2 from '@/src/assets/images/myİmage.png';
import Link from "next/link";
import { useParams } from "next/navigation";

interface Project {
  title: string;
  image: string;
  description: string;
}

const projectsData: { category: string; projects: Project[] }[] = [
  {
    category: "Web Development",
    projects: [
      {
        title: "Portfolio Website",
        image: PortfolioImage,
        description: "A personal portfolio website with React and Tailwind CSS.",
      },
      {
        title: "E-commerce Platform",
        image: EcomerceImage,
        description: "A fully functional e-commerce site.",
      },
    ],
  },
  {
    category: "Data Analysis",
    projects: [
      {
        title: "COVID-19 Data Analysis",
        image: DataImage1,
        description: "Analyzing COVID-19 trends using Python.",
      },
      {
        title: "Smartphone Sales Insights",
        image: DataImage2,
        description: "Insights into smartphone sales trends.",
      },
    ],
  }

];

const ProjectComponent = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const locale = useParams().locale;

  return (

    <div className="flex space-x-6 p-6 ">

      {/* Sidebar */}
      <div className="w-1/4 border  shadow-md rounded-lg font-permanent ">
        <ul className="space-y-4 p-4">
          {projectsData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-2 cursor-pointer rounded-lg ${activeCategory === index
                ? " font-bold text-blue-600"
                : "hover: text-black dark:bg-black dark:text-white"
                }`}
              onClick={() => setActiveCategory(index)}
            >
              <BiBox />
              {item.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div className="w-3/4">
        {projectsData[activeCategory].projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-permanent" >
            {projectsData[activeCategory].projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-md  text-white hover:shadow-lg transition"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={`${locale}/projects`} className="flex justify-center items-center w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
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
};

export default ProjectComponent;
