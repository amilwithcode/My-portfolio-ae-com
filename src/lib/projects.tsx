'use client'

import wheatherapp1 from "@/src/assets/images/project-images/app-image.png";
import wheatherapp2 from "@/src/assets/images/project-images/appimage.png";
import wheatherapp3 from "@/src/assets/images/project-images/app-image4.png";
import gpwebsite from "@/src/assets/images/project-images/gpwebsite.png";
import gpwebsite1 from "@/src/assets/images/project-images/gpimage1.png";
import gpwebsite2 from "@/src/assets/images/project-images/gpimage2.png";
import gpwebsite3 from "@/src/assets/images/project-images/gpimage3.png";
import gpwebsite4 from "@/src/assets/images/project-images/gpimage4.png";
import gpwebsite5 from "@/src/assets/images/project-images/gpimage5.png";
import gpwebsite6 from "@/src/assets/images/project-images/gpimage6_.png"
import covidDataAnalisis from "@/src/assets/images/project-images/coviddata-image.png";
import covidDataAnalisis1 from "@/src/assets/images/project-images/covidimage1.png";
import covidDataAnalisis2 from "@/src/assets/images/project-images/covidimage4.png";
import sbDataAnalisis from "@/src/assets/images/project-images/pdimage-1.png";
import sbDataAnalisis1 from "@/src/assets/images/project-images/pdimage-2.png";
import sbDataAnalisis2 from "@/src/assets/images/project-images/pdimage-3.png";
import pipelineAnalisis from "@/src/assets/images/project-images/pipelineimage.png";
import pipelineAnalisis1 from "@/src/assets/images/project-images/pipeline-image1.png";
import pipelineAnalisis2 from "@/src/assets/images/project-images/pipelineimage2.png";
import pipelineAnalisis3 from "@/src/assets/images/project-images/pipeline-image.png";
import pipelineAnalisis4 from "@/src/assets/images/project-images/pipeline-image1.png";
import pipelineAnalisis5 from "@/src/assets/images/project-images/pipeline-imag2.png";
// import pipelineAnalisis6 from "@/src/assets/images/project-images/";
import devImage from "@/src/assets/images/project-images/ae-image.png";
import devImage1 from "@/src/assets/images/project-images/fz-image.png";
import { useTranslations } from "next-intl";

interface Project  {
    title: string,
    shortDescription: string,
    fullDescription: string,
    link: string,
    images: string[],
    developers: {
        name: string;
        image: string;
        github: string;
    }[],
};

const useProjectsData =(): Project[] =>{
    const t = useTranslations("ProjectsPage");


    return [
        {
            title: t("projects.title.project1"),
            shortDescription: t("projects.description.project1"),
            fullDescription:
                `${t("projects.fulldescription.project1")}`,
            link: "https://github.com/amilwithcode/DataAnalysis-COVID-19",
            images: [covidDataAnalisis.src, covidDataAnalisis1.src, covidDataAnalisis2.src],
            developers: [
                {
                    name: "Amil",
                    image: devImage.src,
                    github: "https://github.com/amilwithcode",
                },
            ],
        },
        {
            title: t("projects.title.project2"),
            shortDescription: t("projects.description.project2"),
            fullDescription:
                t("projects.fulldescription.project2"),
            link: "https://github.com/amilwithcode/DataAnalysis-PhoneDataset",
            images: [sbDataAnalisis.src, sbDataAnalisis1.src, sbDataAnalisis2.src],
            developers: [
                {
                    name: "Amil",
                    image: devImage.src,
                    github: "https://github.com/amilwithcode",
                },
            ],
        },
        {
            title: t("projects.title.project3"),
            shortDescription: t("projects.description.project3"),
            fullDescription:
                t("projects.fulldescription.project3"),
            link: "https://github.com/amilwithcode/Pipeline-data-calculation-program",
            images: [pipelineAnalisis.src, pipelineAnalisis1.src, pipelineAnalisis2.src, pipelineAnalisis3.src, pipelineAnalisis4.src, pipelineAnalisis5.src],
            developers: [
                {
                    name: "Amil",
                    image: devImage.src,
                    github: "https://github.com/amilwithcode",
                },
            ],
        },
        {
            title: t("projects.title.project4"),
            shortDescription: t("projects.description.project4"),
            fullDescription:
                t("projects.fulldescription.project4"),
            link: "https://github.com/feridzeyn/hava-app",
            images: [wheatherapp1.src, wheatherapp2.src, wheatherapp3.src],
            developers: [
                {
                    name: "Fərid",
                    image: devImage1.src,
                    github: "https://github.com/feridzeyn",
                },
                {
                    name: "Amil",
                    image: devImage.src,
                    github: "https://github.com/amilwithcode",
                },
            ],
        },
        {
            title: t("projects.title.project5"),
            shortDescription: t("projects.description.project4"),
            fullDescription:
                t("projects.fulldescription.project5"),
            link: "https://github.com/feridzeyn/Design",
            images: [gpwebsite.src, gpwebsite1.src, gpwebsite2.src, gpwebsite3.src, gpwebsite4.src, gpwebsite5.src, gpwebsite6.src],
            developers: [
                {
                    name: "Fərid ",
                    image: devImage1.src,
                    github: "https://github.com/feridzeyn/hava-app",
                },
                {
                    name: "Amil",
                    image: devImage.src,
                    github: "https://github.com/amilwithcode",
                },
            ],
        }
    ];

}
export default useProjectsData;