"use client";

import React, { useState, useEffect, useRef } from "react";
import config from "@/config";

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

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 py-24">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Impact Section - For Investors */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Our Impact
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6 leading-tight">
            Transforming Lives Through <span className="text-primary">Community Connection</span>
          </h2>
          
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Berlin's premier registered non-profit creating sustainable pathways for integration, 
            fostering meaningful connections between locals, expatriates, refugees, and international students.
          </p>

          {/* Fancy Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            <div className="group bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/10 hover:border-primary/30">
              <div className="relative mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={10000} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Social Media Members</div>
              <div className="text-sm text-base-content/60">6,500+ active community</div>
            </div>

            <div className="group bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-secondary/10 hover:border-secondary/30">
              <div className="relative mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Events Organized</div>
              <div className="text-sm text-base-content/60">30-50 participants each</div>
            </div>

            <div className="group bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-accent/10 hover:border-accent/30">
              <div className="relative mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={20} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Organizers</div>
              <div className="text-sm text-base-content/60">Diverse volunteer team</div>
            </div>

            <div className="group bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary/10 hover:border-primary/30">
              <div className="relative mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Nationalities</div>
              <div className="text-sm text-base-content/60">Truly global community</div>
            </div>
          </div>
        </div>

        {/* Vision, Values, Impact Cards - Below Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-base-200 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-primary/10 hover:border-primary/20">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
            <p className="text-base-content/80 leading-relaxed">
              To create a globally recognized model for inclusive community building that breaks down cultural barriers and celebrates diversity as our greatest strength.
            </p>
          </div>

          <div className="group bg-base-200 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-secondary/10 hover:border-secondary/20">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-secondary transition-colors">Our Values</h3>
            <p className="text-base-content/80 leading-relaxed">
              Radical inclusivity, cultural celebration, mutual respect, community empowerment, and sustainable social impact through authentic human connections.
            </p>
          </div>

          <div className="group bg-base-200 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-accent/10 hover:border-accent/20">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-accent transition-colors">Our Mission</h3>
            <p className="text-base-content/80 leading-relaxed">
              Creating sustainable pathways for integration and meaningful cross-cultural connections in Berlin's diverse international community.
            </p>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4">
              Partner with Berlin's Leading Integration Non-Profit
            </h3>
            <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
              Join us in scaling proven community integration solutions that strengthen Berlin's social fabric while supporting your organization's diversity and inclusion objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest" className="btn btn-primary btn-lg">
                Explore Partnership
              </a>
              <a href="/about" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;