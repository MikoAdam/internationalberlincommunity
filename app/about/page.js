"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
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

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-base-content mb-6">
                {t('aboutTitle', language)}
              </h1>
              <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                {t('aboutSubtitle', language)}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={10000} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">{t('aboutStat1', language)}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">{t('aboutStat2', language)}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">{t('aboutStat3', language)}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <CountUp end={20} suffix="+" />
                </div>
                <div className="text-sm text-base-content/60">{t('aboutStat4', language)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-base-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-base-content mb-8 text-center">
              {t('ourMissionTitle', language)}
            </h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              {t('ourMissionText', language)}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-base-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-base-100 p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  {t('visionTitle', language)}
                </h3>
                <p className="text-base-content/70">
                  {t('visionText', language)}
                </p>
              </div>

              <div className="bg-base-100 p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  {t('valuesTitle', language)}
                </h3>
                <p className="text-base-content/70">
                  {t('valuesText', language)}
                </p>
              </div>

              <div className="bg-base-100 p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  {t('missionTitle', language)}
                </h3>
                <p className="text-base-content/70">
                  {t('missionText', language)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-base-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-base-content mb-8 text-center">
              {t('leadershipTitle', language)}
            </h2>
            <p className="text-lg text-base-content/80 mb-12 text-center">
              {t('leadershipIntro', language)}
            </p>

            <div className="space-y-8">
              <div className="bg-base-200 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {t('presidentName', language)}
                </h3>
                <p className="text-base-content/70 mb-4">{t('president', language)}</p>
                <p className="text-base-content/80">
                  {t('presidentBio', language)}
                </p>
              </div>

              <div className="bg-base-200 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {t('vicePresidentName', language)}
                </h3>
                <p className="text-base-content/70 mb-4">{t('founderVicePresident', language)}</p>
                <p className="text-base-content/80">
                  {t('vicePresidentBio', language)}
                </p>
              </div>

              <div className="bg-base-200 p-8 rounded-xl">
                <p className="text-base-content/80">
                  {t('teamSupport', language)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-base-content mb-6">
              {t('getInTouchTitle', language)}
            </h2>
            <p className="text-lg text-base-content/80 mb-8">
              {t('getInTouchDescription', language)}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ibcmanagement@outlook.com"
                className="btn btn-primary btn-lg"
              >
                {t('emailLabel', language)}
              </a>
              <a
                href="https://www.instagram.com/ibc.berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                {t('socialMediaLabel', language)}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;