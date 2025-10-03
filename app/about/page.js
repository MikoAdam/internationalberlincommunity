import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="bg-base-100 py-16 sm:py-20">
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-4">
              About Us
            </h1>
            <p className="text-lg leading-8 text-base-content/80">
              Discover our mission, values, and the thriving community we are building together.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl shadow-lg py-12 px-8 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Mission</h2>
            <p className="text-lg leading-relaxed text-base-content/80 mb-8 text-center max-w-4xl mx-auto">
              At International Berlin Community (IBC), we strive to foster international understanding, tolerance, and cultural exchange. Our mission is to connect individuals from diverse backgrounds through social events, empowering immigrants and locals alike to build meaningful relationships and explore Berlin's unique culture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="stat-figure text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-sm text-base-content/80">Social Media Members</p>
              </div>

              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="stat-figure text-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">200+</h3>
                <p className="text-sm text-base-content/80">Events Organized</p>
              </div>

              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="stat-figure text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">20+</h3>
                <p className="text-sm text-base-content/80">Team Members</p>
              </div>

              <div className="bg-base-100 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="stat-figure text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
                <p className="text-sm text-base-content/80">Nationalities</p>
              </div>
            </div>
          </div>

          <div className="bg-base-100 rounded-2xl shadow-lg p-8 md:p-12 mb-12 border border-base-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-base md:text-lg text-base-content/80 leading-relaxed">
                  <p>
                    The International Berlin Community (IBC) began in <strong>2023</strong> by organizing hikes. Hikes were free, accessible to everyone, and the easiest way to bring people together. From the very beginning, inclusivity and international character were central. Already at the first events, people from all over the world joined—students, expats, immigrants, refugees, and even diplomats.
                  </p>
                  <p>
                    The idea quickly grew in popularity, and in <strong>2024</strong> we became a registered non-profit organization. As more volunteers got involved, the range of activities expanded beyond hikes. Today, IBC also organizes language exchanges, cultural celebrations such as Holi and Eid, multi-day trips even to other countries, guided tours, beach days, picnics, and book clubs.
                  </p>
                  <p>
                    What started as a small volunteer initiative has become one of Berlin's most diverse international communities, where people from more than <strong>100 nationalities</strong> meet, connect, and build lasting friendships. We now serve over <strong>10,000 social media members</strong> and have organized <strong>200+ events</strong>, demonstrating that meaningful integration happens through consistent, accessible community programming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">Our Vision</h3>
              <p className="text-base text-base-content/80 leading-relaxed">
                A globally recognized model for inclusive community building that breaks down cultural barriers and celebrates diversity as our greatest strength.
              </p>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">Our Values</h3>
              <p className="text-base text-base-content/80 leading-relaxed">
                Radical inclusivity, cultural celebration, mutual respect, community empowerment, and sustainable social impact through authentic human connections.
              </p>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-3">Our Mission</h3>
              <p className="text-base text-base-content/80 leading-relaxed">
                Creating sustainable pathways for integration and meaningful cross-cultural connections in Berlin's diverse international community.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;