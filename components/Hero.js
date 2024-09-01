"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Button2Section from "@/components/Button2Section";

const imageUrls = [
  "/assets/victoria-prymak-W-6NH6X8S7I-unsplash.jpg",
  "/assets/beachDay.jpg",
  "/assets/culturalEvents.jpg",
  "/assets/dayTrips.jpg",
  "/assets/hiking.jpg",
  "/assets/languageExchange.jpeg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 leading-[1.3] lg:leading-[1.3] ">
          <span className="text-primary">Discover, Connect, Experience.</span> Join the International Berlin Community!
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Meet like-minded people, explore Berlin, and experience the best the city has to offer through our vibrant community events.
        </p>
        <Button2Section />
        <TestimonialsAvatars priority={true} />
      </div>

      <div className="lg:w-full">
        <Link href="/programs">
          <div className="relative w-[500px] h-[500px] overflow-hidden rounded-[10px] cursor-pointer">
            <Image
              src={imageUrls[currentImageIndex]}
              alt="Product Demo"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;