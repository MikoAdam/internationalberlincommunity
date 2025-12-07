"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

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
  const { language } = useLanguage();

  return (
    <section className="bg-base-100 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            {t('ourImpact', language)}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-content mb-6 leading-tight">
            {t('transformingLivesThrough', language)} <span className="text-primary">{t('communityConnection', language)}</span>
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed">
            {t('premierNonProfit', language)}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/30">
            <div className="relative mb-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={10000} suffix="+" />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
            <div className="font-semibold text-base-content mb-1 text-sm md:text-base">{t('socialMediaMembers', language)}</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('socialMediaDesc', language)}</div>
          </div>

          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-secondary/30">
            <div className="relative mb-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={200} suffix="+" />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <div className="font-semibold text-base-content mb-1 text-sm md:text-base">{t('eventsOrganized', language)}</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('eventsOrganizedDesc', language)}</div>
          </div>

          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-accent/30">
            <div className="relative mb-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={20} suffix="+" />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="font-semibold text-base-content mb-1 text-sm md:text-base">{t('organizers', language)}</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('organizersDesc', language)}</div>
          </div>

          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-primary/30">
            <div className="relative mb-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={100} suffix="+" />
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            <div className="font-semibold text-base-content mb-1 text-sm md:text-base">{t('nationalities', language)}</div>
            <div className="text-xs md:text-sm text-base-content/60">{t('nationalitiesDesc', language)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">{t('ourVision', language)}</h3>
            <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
              {t('visionDescription', language)}
            </p>
          </div>

          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary/10 hover:border-secondary/30">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 group-hover:text-secondary transition-colors">{t('ourValues', language)}</h3>
            <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
              {t('valuesDescription', language)}
            </p>
          </div>

          <div className="group bg-base-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/10 hover:border-accent/30">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-base-content mb-3 group-hover:text-accent transition-colors">{t('ourMission', language)}</h3>
            <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
              {t('missionDescription', language)}
            </p>
          </div>
        </div>

        <div className="bg-base-200 rounded-3xl p-8 md:p-12 shadow-xl mb-20 border border-base-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4">{t('ourStory', language)}</h3>
              <div className="space-y-4 text-sm md:text-base text-base-content/80 leading-relaxed">
                <p>{t('storyPara1', language)}</p>
                <p>{t('storyPara2', language)}</p>
                <p>{t('storyPara3', language)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4">
              {t('getInTouch', language)}
            </h3>
            <p className="text-base md:text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
              {t('partnershipInterest', language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Inquiry" 
                    className="btn btn-primary px-6 md:px-8">
                {t('explorePartnership', language)}
              </a>
              <a href="/about" 
                    className="btn btn-outline px-6 md:px-8">
                {t('learnMore', language)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;