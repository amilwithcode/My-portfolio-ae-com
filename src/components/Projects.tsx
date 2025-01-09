"use client";

import  { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import testimage from "@/src/assets/images/myİmage.png";
import testimage2 from "@/src/assets/images/myİmage.png";
import testimage3 from "@/src/assets/images/myİmage.png";

type Project = {
    title: string;
    shortDescription: string;
    fullDescription: string;
    link: string;
    images: string[];
};

const projects: Project[] = [
    {
        title: "Project One",
        shortDescription: "A brief description of Project One.",
        fullDescription:
            "Detailed description of Project One. This section contains more information about the project, such as technologies used, the development process, and challenges faced.",
        link: "#",
        images: [testimage, testimage2, testimage3],
    },
    {
        title: "Project Two",
        shortDescription: "A brief description of Project Two.",
        fullDescription:
            "Detailed description of Project Two. This section contains more information about the project, such as technologies used, the development process, and challenges faced.",
        link: "#",
        images: [testimage3, testimage2, testimage],
    },
];

const Projects: React.FC = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 3 images
        }, 5000); // Change every 5 seconds

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
        <section id="projects" className="py-16 ">
            <h2 className="text-3xl font-bold text-center mb-8 font-permanent">Projects</h2>
            <div className="container mx-auto flex flex-col  gap-8 font-permanent">
                {projects.map((project, index) => (
                    <div key={index} className="text-black dark:bg-black dark:text-white p-6 rounded-lg shadow-lg flex flex-col ">
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover rounded-t-lg"
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

                        <Link href={project.link} className="mt-4 inline-block text-blue-500  dark:bg-black dark:text-white hover:underline">
                            Learn more
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
