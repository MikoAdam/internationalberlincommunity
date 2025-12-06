"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdamProfile() {
  return (
    <>
      <Header />

      <main className="bg-base-100 min-h-screen py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Profile Image */}
            <div className="lg:w-1/3">
              <div className="bg-base-200 rounded-2xl p-8 text-center sticky top-24">
                <img
                  src="/assets/adam.jpeg"
                  alt="Adam Miko"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h1 className="text-3xl font-bold text-base-content mb-2">
                  Adam Miko
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Founder / Vice President
                </p>
                <p className="text-base-content/70 mb-6">Berlin, Germany</p>

                <a
                  href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* About */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  About
                </h2>
                <div className="space-y-4 text-base-content/80 leading-relaxed">
                  <p>
I am a systems engineer and community builder based in Berlin. In 2023 January, I founded the International Berlin Community (IBC) e.V., a registered non-profit that has grown into one of Berlin’s most active international communities. I lead a team of 20+ volunteer organizers and oversee partnerships with NGOs and local institutions, connecting over 10,000 members from more than 100 countries through inclusive events, workshops, and language exchanges.                  </p>
                </div>
              </section>

              {/* Experience */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Experience
                </h2>

                <div className="space-y-8">
                  {/* OHB */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          System Engineer
                        </h3>
                        <p className="text-primary font-medium">OHB SE</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2025 - Present
                      </span>
                    </div>
                    <p className="text-base-content/80">
                      Contributing to satellite systems development, digital
                      engineering environments, and improving lifecycle
                      processes for complex aerospace projects.
                    </p>
                  </div>

                  {/* IBC */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          Founder / Vice President
                        </h3>
                        <p className="text-primary font-medium">
                          International Berlin Community e.V.
                        </p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2023 - Present
                      </span>
                    </div>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Built nonprofit with ten thousand members</li>
                      <li>
                        • Managed volunteers, cultural events, and partnerships
                      </li>
                      <li>
                        • Responsible for legal, administrative, and strategic
                        development
                      </li>
                    </ul>
                  </div>

                  {/* GARANTIS */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          Consultant
                        </h3>
                        <p className="text-primary font-medium">
                          GARANTIS IT Solutions
                        </p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2024 - 2025
                      </span>
                    </div>
                    <p className="text-base-content/80">
                      Delivered consulting projects in regulated industries,
                      handling planning, implementation, stakeholder
                      communication, and client training.
                    </p>
                  </div>

                  {/* eRC-System */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          Certification & Development Process
                        </h3>
                        <p className="text-primary font-medium">
                          eRC-System GmbH
                        </p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2023 - 2024
                      </span>
                    </div>
                    <p className="text-base-content/80">
                      Supported certification workflow, safety processes, and
                      software for electric aircraft development.
                    </p>
                  </div>

                  {/* EITCO */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          Junior Software Engineer
                        </h3>
                        <p className="text-primary font-medium">EITCO GmbH</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2022 - 2023
                      </span>
                    </div>
                    <p className="text-base-content/80">
                      Delivered feature improvements and bug fixes for
                      enterprise systems using Java, Kotlin, and Spring Boot.
                    </p>
                  </div>

                  {/* Accenture */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">
                          Analyst
                        </h3>
                        <p className="text-primary font-medium">Accenture</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">
                        2020 - 2022
                      </span>
                    </div>
                    <p className="text-base-content/80">
Worked across several projects in consulting and software development. Contributed to client delivery, supported digital transformation initiatives, and helped improve internal tools and processes while collaborating with international teams.                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Education
                </h2>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-base-content mb-2">
                    Bachelor of Science - Computer Science Engineering
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Budapest University of Technology and Economics
                  </p>
                  <p className="text-base-content/70">2018 - 2021</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
