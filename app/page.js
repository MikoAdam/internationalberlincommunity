import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import AboutUs from "@/components/AboutUs";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";

// Testing with TeamGrid added back
export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <FeaturesAccordion />
        <AboutUs />
        <TeamGrid />
        {/* If this breaks, the error is in TeamGrid */}
      </main>
      <Footer />
    </>
  );
}