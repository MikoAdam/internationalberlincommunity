import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TeamGrid from "@/components/TeamGrid";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import LatestPrograms from "@/components/LatestPrograms";
import Testimonial1Small from "@/components/Testimonial1Small";
import Testimonial2Small from "@/components/Testimonial2Small";
import AboutUs from "@/components/AboutUs";


export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <LatestPrograms />
        {/* <Testimonial1Small /> */}
        <FeaturesAccordion />
        <LatestBlogPosts />
        {/* <Testimonial2Small /> */}
        <AboutUs />
        <TeamGrid />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}