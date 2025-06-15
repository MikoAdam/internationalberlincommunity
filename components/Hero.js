"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const imageUrls = [
  "/assets/culturalEvents.jpg",
  "/assets/dayTrip.jpg",
  "/assets/dayTrip1.jpg",
  "/assets/hiking.jpg",
  "/assets/picnic.jpg",
  "/assets/sachsenTrip.jpg",
  "/assets/zakona.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      {/* Text Content */}
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight leading-[1.3] lg:leading-[1.3]">
          <span className="text-primary">Building Bridges Across Cultures</span>
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          The International Berlin Community (IBC) e.V. is a thriving registered non-profit dedicated to fostering inclusivity, cultural exchange, and community building. Join our vibrant events and become part of a network that values diversity, connection, and collaboration.
        </p>
        <p className="text-lg opacity-80 leading-relaxed">
          Whether you're a local, expat, visitor, student, immigrant, or refugee, you are welcome in our community. We embrace diversity and inclusivity, ensuring a safe and respectful space for everyone, regardless of their background, ethnicity, religion, gender identity, or sexual orientation.        
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="mailto:ibcmanagement@outlook.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-lg">
            Partner with Us
          </Link>
          <Link href="/programs" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded shadow-lg">
            Explore Events
          </Link>
          <Link href="https://linktr.ee/InternationalBerlinCommunity" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded shadow-lg">
            All Links
          </Link>
        </div>
      </div>

      {/* Rotating Images */}
      <div className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
        <div className="relative w-full pb-[100%] md:pb-[100%] lg:pb-[100%] xl:pb-[100%] overflow-hidden rounded-[10px]">
          <Image
            src={imageUrls[currentImageIndex]}
            alt="IBC Community Highlight"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        
        {/* Image Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;