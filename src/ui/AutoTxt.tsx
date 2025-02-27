"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";

export const careers = ["Supply Chain Student", "Data Analysis", "Web developer", "Frontend developer"];

function AutoText() {
  const [careerIndex, setCareerIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const t = useTranslations("HomePage")

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

    <h1 className="lg:text-4xl md:text-md sm:text-sm ">
      {t("autotxt")} {isAn ? 'an' : 'a'} {currentCareer.slice(0, charIndex)}!
    </h1>

  );
};

export default AutoText;
