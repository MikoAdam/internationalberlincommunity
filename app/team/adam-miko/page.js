import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdamProfile() {
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
                  src="/assets/adam.jpeg"
                  alt="Adam Miko"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-large"
                />
                <h1 className="text-3xl font-bold text-base-content mb-2">
                  Adam Miko
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  Founder / Vice President, International Berlin Community
                </p>
                <p className="text-base-content/70 mb-6">
                  Berlin, Germany
                </p>
                <a
                  href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full"
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
              <section className="bg-base-200 rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  About
                </h2>
                <div className="space-y-4 text-base-content/80 leading-relaxed">
                  <p>
                    I am a Systems Engineer in the space industry with a strong background in software development, 
                    process optimization, and systems design. My work at OHB SE focuses on improving complex engineering 
                    workflows and ensuring efficiency, reliability, and compliance across aerospace projects.
                  </p>
                  <p>
                    Alongside my engineering career, I am the Founder and Vice President of the <strong>International Berlin 
                    Community (IBC) e.V.</strong>, a registered non-profit dedicated to cultural exchange and integration. 
                    Since founding IBC in 2021, I have built it into one of Berlin's most active and diverse international 
                    communities, connecting over <strong>10,000 members from more than 100 countries</strong> through inclusive 
                    events, language exchanges, and strategic partnerships with NGOs, businesses, and local institutions.
                  </p>
                  <p>
                    I speak <strong>English and German fluently</strong> and am a <strong>native Hungarian speaker</strong>. 
                    I thrive in international environments where technology, community building, and social impact intersect 
                    to create meaningful change.
                  </p>
                </div>
              </section>

              {/* Professional Experience */}
              <section className="bg-base-200 rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Professional Experience
                </h2>
                
                <div className="space-y-8">
                  {/* Current Role */}
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">System Engineer</h3>
                        <p className="text-primary font-medium">OHB SE</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">Nov 2025 - Present</span>
                    </div>
                    <p className="text-base-content/70 mb-3">Berlin, Germany · Full-time</p>
                    <p className="text-base-content/80">
                      Contributing to systems development in the space industry with a focus on digital engineering 
                      environments, process optimization, and lifecycle management. Supporting cross-disciplinary 
                      collaboration by ensuring technical consistency, data integrity, and compliance with aerospace 
                      industry standards throughout complex system projects.
                    </p>
                  </div>

                  {/* IBC Leadership */}
                  <div className="border-l-4 border-secondary pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">Vice President | Founder</h3>
                        <p className="text-secondary font-medium">International Berlin Community (IBC) e.V.</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">Jan 2021 - Present</span>
                    </div>
                    <p className="text-base-content/70 mb-3">Berlin, Germany · Part-time</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Founded and scaled Berlin's leading international community non-profit to 10,000+ members from 100+ countries</li>
                      <li>• Achieved official registered non-profit status (e.V.) in 2024, ensuring legal compliance and long-term sustainability</li>
                      <li>• Led team of 20+ volunteer organizers in executing 200+ successful community events</li>
                      <li>• Established strategic partnerships with NGOs, government institutions, and corporate sponsors</li>
                      <li>• Developed sustainable frameworks for cultural exchange, language learning, and refugee integration</li>
                      <li>• Responsible for legal, administrative, stakeholder relations, and organizational governance</li>
                    </ul>
                  </div>

                  {/* Previous Roles */}
                  <div className="border-l-4 border-accent pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">Consultant</h3>
                        <p className="text-accent font-medium">GARANTIS IT Solutions</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">May 2024 - Oct 2025</span>
                    </div>
                    <p className="text-base-content/70 mb-3">Full-time</p>
                    <p className="text-base-content/80">
                      Delivered end-to-end consulting projects for enterprise clients in regulated industries. 
                      Managed full project lifecycle from requirements analysis to delivery, including stakeholder 
                      management, implementation, training, and on-site collaboration in English and German. 
                      Specialized in improving digital workflows and engineering lifecycle tools.
                    </p>
                  </div>

                  <div className="border-l-4 border-base-300 pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">Certification & Development Process</h3>
                        <p className="text-base-content/70 font-medium">eRC-System GmbH</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">Dec 2023 - May 2024</span>
                    </div>
                    <p className="text-base-content/70 mb-3">Part-time</p>
                    <p className="text-base-content/80">
                      Contributed to next-generation electric aircraft systems development, focusing on software 
                      solutions supporting aviation certification, safety compliance, and process optimization.
                    </p>
                  </div>

                  <div className="border-l-4 border-base-300 pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-base-content">Junior Software Engineer</h3>
                        <p className="text-base-content/70 font-medium">European IT Consultancy EITCO GmbH</p>
                      </div>
                      <span className="text-sm text-base-content/60 whitespace-nowrap">Dec 2022 - May 2023</span>
                    </div>
                    <p className="text-base-content/70 mb-3">Berlin, Germany · Full-time</p>
                    <p className="text-base-content/80">
                      Enhanced system functionality using Java, Kotlin, and Spring Boot framework. Successfully 
                      adapted to German-speaking work environment while delivering technical solutions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="bg-base-200 rounded-2xl p-8 shadow-lg mb-8">
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
                  <p className="text-base-content/70 mb-3">2018 - 2021 · Budapest, Hungary</p>
                  <p className="text-base-content/80">
                    Comprehensive computer science education with focus on software engineering, systems design, 
                    algorithms, and project management. Developed strong technical foundation and demonstrated 
                    leadership in student organizations.
                  </p>
                </div>
              </section>

              {/* Skills & Expertise */}
              <section className="bg-base-200 rounded-2xl p-8 shadow-lg mb-8">
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
                      <span className="badge badge-primary">Stakeholder Engagement</span>
                      <span className="badge badge-primary">Community Building</span>
                      <span className="badge badge-primary">Partnership Development</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-secondary">Systems Engineering</span>
                      <span className="badge badge-secondary">Software Development</span>
                      <span className="badge badge-secondary">Process Optimization</span>
                      <span className="badge badge-secondary">Project Management</span>
                      <span className="badge badge-secondary">Digital Workflows</span>
                      <span className="badge badge-secondary">Quality Assurance</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Community & Integration</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-accent">Event Organization</span>
                      <span className="badge badge-accent">Cultural Exchange</span>
                      <span className="badge badge-accent">Volunteer Coordination</span>
                      <span className="badge badge-accent">Integration Programs</span>
                      <span className="badge badge-accent">Cross-cultural Communication</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-info">Hungarian (Native)</span>
                      <span className="badge badge-info">English (Fluent)</span>
                      <span className="badge badge-info">German (Fluent)</span>
                      <span className="badge badge-info">French (Elementary)</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-4 text-center">
              Leadership Philosophy
            </h3>
            <blockquote className="text-lg text-base-content/80 italic leading-relaxed text-center max-w-4xl mx-auto">
              "My vision is to create sustainable pathways for cultural integration that don't just bring people together, 
              but transform how communities think about diversity, inclusion, and belonging. Through IBC, we're proving 
              that grassroots community building can scale to create lasting social impact."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-base-content/60">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <div className="text-sm text-base-content/60">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm text-base-content/60">Nationalities United</div>
              </div>
            </div>
          </div>
          </div>
      </main>

      <Footer />
    </>
  );
}