import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
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
        {/* Hero Section */}
        <Hero />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Team Section */}
        <TeamGrid />
        
        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
