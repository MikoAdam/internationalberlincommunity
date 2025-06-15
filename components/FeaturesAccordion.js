"use client";

import { useState, useRef } from "react";

const features = [
  {
    title: "Outdoor Adventures",
    description:
      "Explore Berlin's natural beauty with our hiking trips and beach days. Perfect for those who love the great outdoors.",
    type: "icon",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="currentColor" fillRule="evenodd" d="M46.43 7.5c4.055 0 7.337 3.379 7.337 7.434s-3.282 7.433-7.337 7.433s-7.434-3.379-7.434-7.433S42.376 7.5 46.43 7.5m.483 15.543c2.79-.087 4.947 1.649 6.082 3.476l7.723 12.84l13.516 5.696c3.861 1.64 2.027 6.757-2.317 5.599a5 5 0 0 0-.483-.29l-9.075 20.08s2.896 6.662 6.565 14.193c3.572 7.626-5.117 10.909-8.303 3.861l-3.185-7.144l-4.634 10.137l-1.931-.869l5.406-11.778l-9.075-19.79c-.386.096-.772 0-1.255 0c0 0-10.523 23.941-13.42 30.217c-2.799 6.275-11.101 2.51-8.302-3.67c2.8-6.178 16.123-36.202 16.123-36.202l-9.903.162c-1.5.013-1.859-.226-1.954-1.35c-.153-2.97-.415-9.958.272-13.197c.886-4.175 1.415-8.77 4.344-10.137s8.013 2.414 8.013 2.414c.772-2.51 3.186-4.248 5.793-4.248m5.985 15.06V49.69l8.303 18.15l8.302-18.247l-12.067-5.02c-.58-.29-1.062-.676-1.449-1.255z" color="currentColor"/></svg>
    ),
  },
  {
    title: "Cultural Experiences",
    description:
      "Discover Berlin's rich cultural scene with museum visits, art exhibitions, and historical tours.",
    type: "icon",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 0L1 3.5V4h13v-.5zM2 5v5l-1 1.6V13h13v-1.4L13 10V5zm2 1h1v5.5H4zm3 0h1v5.5H7zm3 0h1v5.5h-1z"/></svg>
    ),
  },
  {
    title: "Language Exchanges",
    description:
      "Practice your language skills in a friendly environment. Whether you're learning German or perfecting your English, our events are the place to be.",
    type: "icon",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.056 12h-2a1 1 0 0 0 0 2v2H17.87a3 3 0 0 0 .185-1a3 3 0 0 0-5.598-1.5a1 1 0 1 0 1.732 1a1 1 0 0 1 .866-.5a1 1 0 0 1 0 2a1 1 0 0 0 0 2a1 1 0 1 1 0 2a1 1 0 0 1-.866-.5a1 1 0 1 0-1.732 1a3 3 0 0 0 5.598-1.5a3 3 0 0 0-.185-1h1.185v3a1 1 0 0 0 2 0v-7a1 1 0 1 0 0-2m-11.97-.757a1 1 0 1 0 1.94-.486l-1.757-7.03a2.28 2.28 0 0 0-4.425 0l-1.758 7.03a1 1 0 1 0 1.94.486L5.585 9h2.94ZM6.086 7l.697-2.787a.292.292 0 0 1 .546 0L8.026 7Zm7.97 0h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2"/></svg>
    ),
  },
  {
    title: "Social Gatherings",
    description:
      "Join our picnics, barbecues, and casual meet-ups to connect with fellow community members and make new friends.",
    type: "icon",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/></svg>
    ),
  },
  {
    title: "Day Trips",
    description:
      "Take a break from the city with our day trips to nearby attractions. Perfect for a quick getaway.",
    type: "icon",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/><path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43a.5.5 0 1 1-.99.14a3 3 0 0 0-5.94 0a.5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/></g></svg>
    ),
  },
];

const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

const Media = ({ feature }) => {
  const { svg } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center";

  return (
    <div className={style}>
      <div className="text-primary text-8xl">
        {svg}
      </div>
    </div>
  );
};

const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <section
      className="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-16">
          Something for Everyone: Explore Our Programs
        </h2>
        <h3 className="font-regular text-xl lg:text-xl tracking-tight mb-8 md:mb-8">
          We offer a variety of events to cater to different interests and passions, ensuring there's always something exciting happening.
        </h3>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <ul className="w-full">
              {features.map((feature, i) => (
                <Item
                  key={feature.title}
                  index={i}
                  feature={feature}
                  isOpen={featureSelected === i}
                  setFeatureSelected={() => setFeatureSelected(i)}
                />
              ))}
            </ul>

            <Media feature={features[featureSelected]} key={featureSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
