"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useTestimonials from "@/src/lib/data";

function Testimonial() {
  const testimonials = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center text-gray-500">Heç bir rəy tapılmadı.</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedTestimonial = testimonials[currentIndex];

  return (
    <div className="my-5 flex justify-center items-center w-full p-1">
      <div className="relative border shadow-lg rounded-lg p-20 gap-10 w-full max-w-full bg-gradient-to-r from-blue-400 via-red-500 to-green-500 text-white">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src={selectedTestimonial?.avatar || "/default-avatar.png"}
              alt={selectedTestimonial?.name || "User"}
              className="w-56 h-56 rounded-full object-contain"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-lg font-semibold">{selectedTestimonial?.name || "Anonim İstifadəçi"}</h3>
          <p className="text-sm text-gray-200">{selectedTestimonial?.role || "Rolu mövcud deyil"}</p>
        </div>

        <p className="text-center text-gray-100 m-6">
          {selectedTestimonial?.feedback || "Rəy yoxdur."}
        </p>

        <div className="absolute bottom-1/2 -translate-y-1/2 left-4">
          <button
            onClick={handlePrev}
            className="text-white hover:text-gray-300 transition"
            aria-label="Geri"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button
            onClick={handleNext}
            className="text-white hover:text-gray-300 transition"
            aria-label="İrəli"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-4 items-end bottom-0">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;