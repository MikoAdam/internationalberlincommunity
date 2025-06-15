"use client";

import React from "react";
import config from "@/config";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-base-100 to-base-200 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title and Intro */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 1.5l2.939 5.108l5.561.81l-4.021 3.921l.949 5.527L12 17.75l-4.428 2.116l.949-5.527l-4.021-3.92l5.561-.811z"/>
            </svg>
            <span className="text-primary font-medium">Our Impact</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6 leading-tight">
            Transforming Lives Through <span className="text-primary">Community Connection</span>
          </h2>
          
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-primary">{config.appName}</span> is Berlin's premier registered non-profit 
            (e.V.) dedicated to building bridges across cultures. We create sustainable pathways for integration, 
            fostering meaningful connections between locals, expatriates, refugees, and international students.
          </p>
        </div>

        {/* Vision, Values, and Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white dark:bg-base-300 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-primary/10 hover:border-primary/20">
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

          <div className="group bg-white dark:bg-base-300 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-secondary/10 hover:border-secondary/20">
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

          <div className="group bg-white dark:bg-base-300 rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-accent/10 hover:border-accent/20">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-4 group-hover:text-accent transition-colors">Our Impact</h3>
            <p className="text-base-content/80 leading-relaxed">
              6,500+ active members, 100+ transformative events, and countless success stories of integration, friendship, and personal growth across Berlin.
            </p>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">
              Measurable Social Impact
            </h3>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Our evidence-based approach delivers tangible results for community integration and social cohesion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  6,500+
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-bounce-soft"></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Total Members</div>
              <div className="text-sm text-base-content/60">2,000+ actively participating</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full animate-bounce-soft" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Events Organized</div>
              <div className="text-sm text-base-content/60">30-50 participants per event</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full animate-bounce-soft" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Team Members</div>
              <div className="text-sm text-base-content/60">Diverse volunteer organizers</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-success mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success/20 rounded-full animate-bounce-soft" style={{animationDelay: '1.5s'}}></div>
              </div>
              <div className="font-semibold text-base-content mb-1">Nationalities</div>
              <div className="text-sm text-base-content/60">Truly global community</div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-base-300 rounded-2xl p-8 shadow-large max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Partner with Berlin's Leading Integration Non-Profit
            </h3>
            <p className="text-base-content/70 mb-6">
              Join us in scaling proven community integration solutions that strengthen Berlin's social fabric while supporting your organization's diversity and inclusion objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest" 
                className="btn btn-primary btn-lg shadow-glow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>
                </svg>
                Explore Partnership
              </a>
              <a 
                href="/about" 
                className="btn btn-outline btn-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                </svg>
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