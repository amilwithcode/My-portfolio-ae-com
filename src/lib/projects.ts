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


type Project = {
    title: string;
    shortDescription: string;
    fullDescription: string;
    link: string;
    images: string[];
    developers: {
        name: string;
        image: string;
        github: string;
    }[];
};


const projects: Project[] = [
    
    {
        title: "COVID-19 Data Analysis",
        shortDescription: "COVID-19 cases data analysis with python and libraries",
        fullDescription:
            "This project is a data analysis of COVID-19 cases. It analyzes the number of cases, deaths, and recoveries in different countries. The data is visualized using charts and graphs. The project is open source and available on GitHub.",
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
        title: "Smartphone Brands Data Analysis",
        shortDescription: "Data analysis of smartphone brands using python and libraries",
        fullDescription:
            "This project is a data analysis of smartphone brands. It analyzes the popularity of different smartphone brands based on sales and market share. The data is visualized using charts and graphs. The project is open source and available on GitHub.",
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
        title: "Pipeline data calculation program",
        shortDescription: "Pipeline data calculation program using python and libraries",
        fullDescription:
            "This project is a pipeline data calculation program. It calculates the flow rate, pressure, and other parameters of a pipeline. The project is open source and available on GitHub.",
        link: "https://github.com/amilwithcode/Pipeline-data-calculation-program",
        images: [pipelineAnalisis.src, pipelineAnalisis1.src, pipelineAnalisis2.src,pipelineAnalisis3.src,pipelineAnalisis4.src,pipelineAnalisis5.src],
        developers: [
            {
                name: "Amil",
                image: devImage.src,
                github: "https://github.com/amilwithcode",
            },
        ],
    },
    {
        title: "Weather Forecast Website",
        shortDescription: "Azerbaijan cities weather forecast website",
        fullDescription:
            "This project is a weather forecast website for Azerbaijan cities. It shows the current weather and the forecast for the next 5 days. The website is built using React and Tailwind CSS. The weather data is fetched from the OpenWeatherMap API. The website is responsive and works on all devices. The project is open source and available on GitHub.",
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
        title: "Graphic real website",
        shortDescription: "Graphic design website with React+Vite and Javascript",
        fullDescription:
            "This project is a graphic design website. It showcases the work of a graphic designer. The website is built using React+Vite and Javascript. The website is responsive and works on all devices. The project is open source and available on GitHub.",
        link: "https://github.com/feridzeyn/Design",
        images: [gpwebsite.src,gpwebsite1.src, gpwebsite2.src, gpwebsite3.src,gpwebsite4.src,gpwebsite5.src,gpwebsite6.src],
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

export default projects;