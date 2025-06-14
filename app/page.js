import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import AboutUs from "@/components/AboutUs";
import TeamGrid from "@/components/TeamGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Back to full original structure - TeamGrid is now fixed
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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}