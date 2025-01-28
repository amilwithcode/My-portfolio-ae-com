"use client";

import  { useEffect, useState } from 'react';
// import { useTranslations } from "next-intl";

export const careers = ["Supply Chain Student", "Data Analysis", "Web developer", "Frontend developer"];

function AutoText(){
  const [careerIndex, setCareerIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const updateText = () => {
      setCharIndex((prev) => prev + 1);

      if (charIndex === careers[careerIndex].length) {
        setTimeout(() => {
          setCareerIndex((prev) => (prev + 1) % careers.length);
          setCharIndex(0);
        }, 400);
      }
    };

    const timeout = setTimeout(updateText, 500);
    return () => clearTimeout(timeout);
  }, [charIndex, careerIndex]);

  const currentCareer = careers[careerIndex];
  const isAn = currentCareer.charAt(0).toLowerCase() === 'i';

  return (
    <div className="flex  justify-center items-center  font-permanent text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl ">
        I am {isAn ? 'an' : 'a'} {currentCareer.slice(0, charIndex)}!
      </h1>
    </div>
  );
};

export default AutoText;
