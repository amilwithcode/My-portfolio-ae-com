"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/src/lib/projects";
import { useTranslations } from "next-intl";

function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useTranslations("ProjectsPage")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleToggleDescription = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" >
      <h2 className="text-3xl font-bold text-center mb-8 font-permanent">
        {t("title")}
      </h2>
      <div className="container mx-auto flex flex-col  gap-8 font-permanent">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-black dark:bg-black dark:text-white p-4 border rounded-lg  flex flex-col "
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-85 object-cover rounded-t-lg"
              width={400}
              height={256}
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.shortDescription}</p>

            {expandedProject === index && (
              <p className="text-gray-800 mt-4">{project.fullDescription}</p>
            )}

            <button
              onClick={() => handleToggleDescription(index)}
              className="mt-4  text-blue-500 hover:underline"
            >
              {expandedProject === index ? "Show Less" : "Show More"}
            </button>

            <Link
              href={project.link}
              className="mt-4 inline-block text-blue-500  dark:bg-black dark:text-white hover:underline"
            >
              {t("button")}
            </Link>

            {/* Developer Section */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Developers:</h4>
              <div className="flex gap-4">
                {project.developers.map((developer, devIndex) => (
                  <div key={devIndex} className="flex items-center gap-2">
                    <Image
                      src={developer.image}
                      alt={developer.name}
                      className="rounded-full w-10 h-10"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-semibold">{developer.name}</p>
                      <Link
                        href={developer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm border-b border-blue-500"
                      >
                        {t("githubButton")}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
