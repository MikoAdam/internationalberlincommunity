import React from "react";
import config from "@/config";

const AboutUs = () => {
  return (
    <section className="bg-base-200 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            About Us
          </h2>
          <p className="font-light text-base-content/80 sm:text-lg">
            Welcome to {config.appName}, a legally registered association (Verein) in Germany. We are committed to fostering international understanding, tolerance, and cultural exchange through various social and community activities. Our organization connects like-minded individuals, encouraging both locals and immigrants to explore Berlin and build lasting relationships.
          </p>
        </div>

        <div className="stats shadow grid grid-flow-row md:grid-flow-col gap-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Members</div>
            <div className="stat-value text-primary">6000+</div>
            <div className="stat-desc">Over 2,000 active participants</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Events Organized</div>
            <div className="stat-value text-primary">100+</div>
            <div className="stat-desc">With 20-40 participants per event</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V9a4 4 0 10-8 0v2a4 4 0 00-4 4v3a2 2 0 002 2h12a2 2 0 002-2v-3a4 4 0 00-4-4z"></path>
              </svg>
            </div>
            <div className="stat-title">Organizers and Team Members</div>
            <div className="stat-value text-primary">15+</div>
            <div className="stat-desc">Growing team, new organizers welcome</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
