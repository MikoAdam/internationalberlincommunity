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
                  alt="Lê Phan Thanh Phương"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-large"
                  onError={(e) => {
                    e.target.src = "/assets/adam.jpeg"; // Fallback to Adam's photo if Gia's not available
                  }}
                />
                <h1 className="text-3xl font-bold text-base-content mb-2">
                  Lê Phan Thanh Phương
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  President, International Berlin Community
                </p>
                <p className="text-base-content/70 mb-6">
                  Berlin, Germany
                </p>
                <a
                  href="https://www.linkedin.com/in/thanh-phuong-le-phan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* About Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  About
                </h2>
                <p className="text-base-content/80 leading-relaxed mb-4">
                  Sound Designer turned Psychology student and soon Auditory Neuroscientist. Leading IBC's mission to build bridges across cultures in Berlin's vibrant international community.
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  As President of the International Berlin Community (IBC) e.V., I'm passionate about fostering inclusivity, cultural exchange, and community building. Our registered non-profit has grown to become one of Berlin's leading organizations for international community integration, serving over 6,500 members from 50+ nationalities.
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
                      President
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      International Berlin Community (IBC) e.V. • Present
                    </p>
                    <p className="text-base-content/70 mb-3">Berlin, Germany</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Leading a registered non-profit serving 6,500+ international community members</li>
                      <li>• Overseeing 100+ diverse cultural events, fostering integration and cross-cultural understanding</li>
                      <li>• Managing a team of 15+ volunteer organizers from various cultural backgrounds</li>
                      <li>• Developing strategic partnerships with local institutions and businesses</li>
                      <li>• Ensuring inclusive programming that celebrates diversity while building community cohesion</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Student Research Assistant
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      Université de Montréal
                    </p>
                    <p className="text-base-content/70 mb-3">Montreal, Canada</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Conducting research in cognitive science and auditory neuroscience</li>
                      <li>• Contributing to studies on perception, cognition, and neural processing</li>
                      <li>• Developing analytical and research methodologies</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Researcher
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      University of Potsdam
                    </p>
                    <p className="text-base-content/70 mb-3">Potsdam, Germany</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Research focus on cognitive science and psychology</li>
                      <li>• Cross-cultural psychology research with international perspectives</li>
                      <li>• Academic contribution to understanding human behavior and cognition</li>
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
                    <p className="text-primary font-medium mb-2">
                      University of Potsdam
                    </p>
                    <p className="text-base-content/70 mb-3">Potsdam, Germany</p>
                    <p className="text-base-content/80">
                      Advanced studies in cognitive science, focusing on auditory neuroscience and human perception. Research emphasis on cross-cultural cognitive processes and community psychology.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Bachelor of Arts - BA, Psychology
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      University of Pécs
                    </p>
                    <p className="text-base-content/70 mb-3">Pécs, Hungary</p>
                    <p className="text-base-content/80">
                      Comprehensive foundation in psychology with emphasis on social psychology, cultural studies, and community engagement. Developed strong analytical and interpersonal skills.
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills & Expertise Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Skills & Expertise
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Leadership & Management</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary">Non-profit Leadership</span>
                      <span className="badge badge-primary">Team Management</span>
                      <span className="badge badge-primary">Strategic Planning</span>
                      <span className="badge badge-primary">Volunteer Coordination</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Community & Culture</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-secondary">Community Building</span>
                      <span className="badge badge-secondary">Cultural Exchange</span>
                      <span className="badge badge-secondary">Event Organization</span>
                      <span className="badge badge-secondary">Cross-cultural Communication</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Research & Academic</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-accent">Psychology Research</span>
                      <span className="badge badge-accent">Cognitive Science</span>
                      <span className="badge badge-accent">Data Analysis</span>
                      <span className="badge badge-accent">Academic Writing</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-info">Vietnamese (Native)</span>
                      <span className="badge badge-info">English (Fluent)</span>
                      <span className="badge badge-info">German (Conversational)</span>
                    </div>
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