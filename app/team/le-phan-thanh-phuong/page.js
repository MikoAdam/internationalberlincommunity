"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeProfile() {
  return (
    <>
      <Header />

      <main className="bg-base-100 min-h-screen py-16 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Profile Image */}
            <div className="lg:w-1/3">
              <div className="bg-base-200 rounded-2xl p-8 text-center sticky top-24">
                <img
                  src="/assets/Gia.jpeg"
                  alt="Gia Phan"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-large"
                  onError={(e) => { e.target.src = "/assets/adam.jpeg"; }}
                />
                <h1 className="text-3xl font-bold text-base-content mb-2">
                  Gia Phan
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Researcher
                </p>
                <p className="text-base-content/70 mb-6">
                  Berlin, Germany
                </p>
                <a
                  href="https://www.linkedin.com/in/thanh-phuong-le-phan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm inline-flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 space-y-8">

              {/* About Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  About
                </h2>
                <p className="text-base-content/80 leading-relaxed mb-4">
                  Sound Designer turned Psychology student and soon Auditory Neuroscientist. Leading IBC's mission to build bridges across cultures in Berlin's vibrant international community.
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  As President of the International Berlin Community (IBC) e.V., I'm passionate about fostering inclusivity, cultural exchange, and community building. Our registered non-profit has grown to become one of Berlin's leading organizations for international community integration, serving over 10.000 members from 100+ nationalities.
                </p>
              </section>

              {/* Experience Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Experience
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Student Research Assistant
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Université de Montréal · Internship
                    </p>
                    <p className="text-base-content/70 mb-2">Jun 2023 – Present · Montreal, Canada · Hybrid</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Project collaboration with Ariel University, University of Potsdam and University of Montreal</li>
                      <li>• Assist Dr. Daniel Chebat on multi-sensory integration research</li>
                      <li>• Techniques: fMRI, Tongue stimulation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Student Research Assistant
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      University of Pécs Medical School (POTE formerly) · Internship
                    </p>
                    <p className="text-base-content/70 mb-2">Nov 2019 – Jun 2020 · Pécs, Hungary</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Worked with animal models and maze experiments</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Sound Designer
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      Freelance · Mar 2019 – Jul 2019
                    </p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Background music for mobile games</li>
                      <li>• Foley sound and background noise in short films and advertisements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Education
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Master of Science - MS, Cognitive Science
                    </h3>
                    <p className="text-primary font-medium mb-2">University of Potsdam · Oct 2022 – Present</p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Bachelor of Arts - BA, Psychology
                    </h3>
                    <p className="text-secondary font-medium mb-2">University of Pécs · Sep 2019 – May 2022</p>
                    <p className="text-base-content/80">
                      Graduated magna cum laude. Specialized in Medical Psychology, Neuropsychology, and Cognitive Psychology. Notable research on infrasound, spatial sound perception, reaction time, and deep learning in cognition.
                    </p>
                  </div>
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
