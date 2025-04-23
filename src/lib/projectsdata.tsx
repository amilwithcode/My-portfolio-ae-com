"use client";

import { JSX } from "react";
import AppImage from "@/assets/images/project-images/app-image.png";
import GraphicImage from "@/assets/images/project-images/gpimage1.png";
import DataImage1 from "@/assets/images/project-images/coviddata-image.png";
import DataImage2 from "@/assets/images/project-images/pdimage-1.png";
import PipelineImage from "@/assets/images/project-images/pipeline-image1.png";
import { FaBorderAll, FaDatabase, FaPython } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  image: string;
  description: string;
}

const ProjectsData = (): { category: string; icon: JSX.Element; projects: Project[] }[] => {
  const t = useTranslations("ProjectsPage");

  return [
    {
      category: t("category.all"),
      icon: <FaBorderAll />,
      projects: [
        {
          title: t("projects.title.project1"),
          image: DataImage1.src,
          description: t("projects.description.project1"),
        },
        {
          title: t("projects.title.project2"),
          image: DataImage2.src,
          description: t("projects.description.project2"),
        },
        {
          title: t("projects.title.project5"),
          image: GraphicImage.src,
          description: t("projects.description.project5"),
        },
        {
          title: t("projects.title.project4"),
          image: AppImage.src,
          description: t("projects.description.project4"),
        },
        {
          title: t("projects.title.project3"),
          image: PipelineImage.src,
          description: t("projects.description.project3"),
        },
      ],
    },
    {
      category: t("category.web"),
      icon: <MdWeb />,
      projects: [
        {
          title: t("projects.title.project3"),
          image: AppImage.src,
          description: t("projects.description.project3"),
        },
        {
          title: t("projects.title.project4"),
          image: GraphicImage.src,
          description: t("projects.description.project4"),
        },
      ],
    },
    {
      category: t("category.data"),
      icon: <FaDatabase />,
      projects: [
        {
          title: t("projects.title.project1"),
          image: DataImage1.src,
          description: t("projects.description.project1"),
        },
        {
          title: t("projects.title.project2"),
          image: DataImage2.src,
          description: t("projects.description.project2"),
        },
      ],
    },
    {
      category: t("category.python"),
      icon: <FaPython />,
      projects: [
        {
          title: t("projects.title.project5"),
          image: PipelineImage.src,
          description: t("projects.description.project5"),
        },
      ],
    },
  ];
}
export default ProjectsData;