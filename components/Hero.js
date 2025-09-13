"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

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
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-base-100 flex items-center py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-base-200 rounded-full px-3 py-2 text-xs md:text-sm font-medium text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {t('registeredNonProfit', language)}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base-content">
              {t('internationalBerlinCommunity', language).split(' ').slice(0, 2).join(' ')}<br/>
              <span className="text-primary">{t('internationalBerlinCommunity', language).split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('heroDescription', language)}
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 py-6 md:py-8 border-y border-base-content/10">
              <div className="text-center lg:text-left group">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={10000} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-base-content/60">{t('socialMedia', language)}</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-base-content/60">{t('events', language)}</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="text-xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-base-content/60">{t('countries', language)}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Link href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Inquiry" 
                    className="btn btn-primary px-6 py-3 text-sm md:text-base">
                {t('partnerWithUs', language)}
              </Link>
              <Link href="/programs" 
                    className="btn btn-outline px-6 py-3 text-sm md:text-base">
                {t('viewPrograms', language)}
              </Link>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg bg-base-200">
              <Image
                src={imageUrls[currentImageIndex]}
                alt="IBC Community"
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {imageUrls.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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