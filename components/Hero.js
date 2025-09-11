"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const imageUrls = [
  "/assets/culturalEvents.jpg",
  "/assets/dayTrip.jpg", 
  "/assets/dayTrip1.jpg",
  "/assets/hiking.jpg",
  "/assets/picnic.jpg",
  "/assets/sachsenTrip.jpg",
  "/assets/zakopone.jpg",
];

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-base-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-base-200 rounded-full px-4 py-2 text-sm font-medium text-primary transform hover:scale-105 transition-transform">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Registered Non-Profit Organization
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-base-content">
              International<br/>
              <span className="text-primary">Berlin Community</span>
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed">
              Building bridges across cultures through community programs and events. 
              Fostering integration and meaningful connections in Berlin.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-base-content/10">
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={10000} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">Social Media Members</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">Events Organized</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">Nationalities</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Inquiry" 
                    className="btn btn-primary transform hover:scale-105 hover:shadow-lg transition-all">
                Partner with Us
              </Link>
              <Link href="/programs" 
                    className="btn btn-outline transform hover:scale-105 transition-all">
                View Programs
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 overflow-hidden rounded-lg bg-base-200 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={imageUrls[currentImageIndex]}
                alt="IBC Community"
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {imageUrls.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-primary scale-125' : 'bg-base-content/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;