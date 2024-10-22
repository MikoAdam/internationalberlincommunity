import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const AboutPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="bg-base-100 py-16 sm:py-20">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
              About Us
            </h1>
            <p className="text-lg leading-8 text-base-content/80">
              Discover our mission, values, and the thriving community we are building together.
            </p>
          </div>

          <div className="bg-base-200 rounded-lg shadow-md py-12 px-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Mission</h2>
            <p className="text-lg leading-relaxed text-base-content/80 mb-8">
              At International Berlin Community (IBC), we strive to foster international understanding, tolerance, and cultural exchange. Our mission is to connect individuals from diverse backgrounds through social events, empowering immigrants and locals alike to build meaningful relationships and explore Berlin’s unique culture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
                <div className="stat-figure text-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">6,000+ Members</h3>
                <p className="text-base text-base-content/80">Join our vibrant community with over 2,000 active participants in regular events.</p>
              </div>

              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
                <div className="stat-figure text-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">100+ Events Organized</h3>
                <p className="text-base text-base-content/80">From hikes to cultural exchanges, our events bring 20-40 people together every time.</p>
              </div>

              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center">
                <div className="stat-figure text-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V9a4 4 0 10-8 0v2a4 4 0 00-4 4v3a2 2 0 002 2h12a2 2 0 002-2v-3a4 4 0 00-4-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">15+ Team Members</h3>
                <p className="text-base text-base-content/80">Our dedicated organizers ensure a welcoming and inclusive environment. New organizers are always welcome!</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
