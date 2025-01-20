'use client'

import  { useState, useEffect } from "react";
import Image from "next/image";
import Testimonials from "@/src/lib/data"; 

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically change the testimonial every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run once on mount

  const currentTestimonial = Testimonials[currentIndex];

  return (
    <div className="my-5 flex justify-center items-center w-full">
      <div className="relative border shadow-lg rounded-lg p-10 w-full max-w-full bg-gradient-to-r from-blue-400 via-red-500 to-green-500 text-white ">
        {/* İstifadəçi Məlumatı */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src={currentTestimonial?.avatar}
              alt={currentTestimonial?.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">{currentTestimonial?.name}</h3>
          <p className="text-sm text-gray-200">{currentTestimonial?.role}</p>
        </div>

        {/* Rəy */}
        <p className="text-center text-gray-100 my-6">{currentTestimonial?.feedback}</p>

        {/* Nəzarət düymələri */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <button
            onClick={handlePrev}
            className="text-white hover:text-gray-300 transition"
            aria-label="Geri"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button
            onClick={handleNext}
            className="text-white hover:text-gray-300 transition"
            aria-label="İrəli"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* İndikatorlar */}
        <div className="flex justify-center space-x-2 mt-4">
          {Testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
