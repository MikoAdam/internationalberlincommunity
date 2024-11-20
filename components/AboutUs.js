import React from "react";
import config from "@/config";

const AboutUs = () => {
  return (
    <section className="bg-base-100 py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        {/* Title and Intro */}
        <div className="mx-auto max-w-screen-md text-center mb-16">
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
            About Us
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to <span className="text-primary">{config.appName}</span>, 
            a leading non-profit organization in Berlin dedicated to fostering inclusivity, cultural exchange, 
            and community building. Together, we bridge cultural divides and create spaces where everyone feels welcome.
          </p>
        </div>

        {/* Vision, Values, and Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To build a sustainable, inclusive community that inspires understanding and cultural exchange across the globe.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
            <p className="text-gray-300">
              Inclusivity, mutual respect, cultural celebration, community empowerment, and sustainability.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-primary mb-4">Our Impact</h3>
            <p className="text-gray-300">
              Over 6,500 members and 100+ events connecting people across cultures, identities, and perspectives.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-semibold text-gray-300">Total Members</h4>
            <p className="text-primary text-3xl font-bold">6,500+</p>
            <p className="text-gray-400">Over 2,000 active participants</p>
          </div>

          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-semibold text-gray-300">Events Organized</h4>
            <p className="text-primary text-3xl font-bold">100+</p>
            <p className="text-gray-400">20-40 participants per event</p>
          </div>

          <div className="bg-base-200 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-lg font-semibold text-gray-300">Organizers</h4>
            <p className="text-primary text-3xl font-bold">15+</p>
            <p className="text-gray-400">Diverse team welcoming new members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
