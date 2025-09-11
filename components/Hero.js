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
  "/assets/zakopone.jpg",
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
    <section className="bg-base-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Registered Non-Profit Organization
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-base-content leading-tight">
                Building Bridges Across Cultures in Berlin
              </h1>
              
              <p className="text-xl text-base-content/80 leading-relaxed max-w-2xl">
                International Berlin Community (IBC) e.V. is a registered non-profit dedicated to fostering inclusivity, cultural exchange, and community building through evidence-based programs and strategic partnerships.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-6 border-y border-base-content/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-base-content/70">Total Reach</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-base-content/70">Events Organized</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-base-content/70">Nationalities United</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Inquiry%20-%20Strategic%20Collaboration" 
                className="btn btn-primary btn-lg"
              >
                Partner with Us
              </Link>
              <Link 
                href="/programs" 
                className="btn btn-outline btn-lg"
              >
                View Our Programs
              </Link>
              <Link 
                href="https://linktr.ee/InternationalBerlinCommunity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost btn-lg"
              >
                Join Community
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm text-base-content/60 mb-3">Legal Status & Compliance</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20">
                  Registered e.V.
                </span>
                <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20">
                  Tax Deductible
                </span>
                <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20">
                  EU Compliant
                </span>
                <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full border border-success/20">
                  Transparent Governance
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={imageUrls[currentImageIndex]}
                alt="IBC Community Activities"
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
            
            {/* Image Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary' 
                      : 'bg-primary/30 hover:bg-primary/60'
                  }`}
                  aria-label={`View image ${index + 1}`}
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