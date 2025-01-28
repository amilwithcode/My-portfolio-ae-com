import PortfolioImage from '@/src/assets/images/myImage.png';
import EcomerceImage from '@/src/assets/images/myImage.png';
import DataImage1 from '@/src/assets/images/myImage.png';
import DataImage2 from '@/src/assets/images/myImage.png';

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
        image: PortfolioImage.src,
        description: "A personal portfolio website with React and Tailwind CSS.",
      },
      {
        title: "E-commerce Platform",
        image: EcomerceImage.src,
        description: "A fully functional e-commerce site.",
      },
    ],
  },
  {
    category: "Data Analysis",
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
  }

];

export default projectsData;