
import React ,{JSX} from "react";
import AppImage from "@/src/assets/images/project-images/app-image.png";
import GraphicImage from "@/src/assets/images/project-images/gpimage1.png";
import DataImage1 from "@/src/assets/images/project-images/coviddata-image.png";
import DataImage2 from "@/src/assets/images/project-images/pdimage-1.png";
import PipelineImage from "@/src/assets/images/project-images/pipeline-image1.png"
import {FaBorderAll,FaDatabase,FaPython} from "react-icons/fa";
import { MdWeb } from "react-icons/md";



interface Project {
  title: string;
  image: string;
  description: string;
}

const projectsData: { category: string; icon:JSX.Element; projects: Project[] }[] = [
  {
    category: "All projects",
    icon:<FaBorderAll />,
    projects: [
      {
        title: "COVID-19 Data Analysis",
        image: DataImage1.src,
        description: "Analyzing COVID-19 trends using Python.",
      },
      {
        title: "Smartphone Sales Insights",
        image: DataImage2.src,
        description: "Insights into smartphone sales trends.",
      },
      {
        title: "Weather App",
        image: AppImage.src,
        description:
          "Azerbaijan Weather App is a web application that provides weather information for cities in Azerbaijan.",
      },
      {
        title: "Graphic Design website",
        image: GraphicImage.src,
        description: "A website for a graphic design company.",
      },
      {
        title: "Pipeline data calculation program",
        image: PipelineImage.src,
        description: "Pipeline data calculation program using python and libraries",
      },
    ],
  },
  {
    category: "Web Development",
    icon:<MdWeb />,
    projects: [
      {
        title: "Weather App",
        image: AppImage.src,
        description:
          "Azerbaijan Weather App is a web application that provides weather information for cities in Azerbaijan.",
      },
      {
        title: "Graphic Design website",
        image: GraphicImage.src,
        description: "A website for a graphic design company.",
      },
    ],
  },
  {
    category: "Data Analysis",
    icon:<FaDatabase/>,
    projects: [
      {
        title: "COVID-19 Data Analysis",
        image: DataImage1.src,
        description: "Analyzing COVID-19 trends using Python.",
      },
      {
        title: "Smartphone Sales Insights",
        image: DataImage2.src,
        description: "Insights into smartphone sales trends.",
      },
    ],
  },
  {
    category: "Python programing",
    icon:<FaPython/>,
    projects: [
      {
        title: "Pipeline data calculation program",
        image: PipelineImage.src,
        description: "Pipeline data calculation program using python and libraries",
      },
    ],
  },
];

export default projectsData;
