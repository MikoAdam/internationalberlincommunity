import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import TeamGrid from "@/components/TeamGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <AboutUs />
        <FeaturesAccordion />
        <TeamGrid />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}