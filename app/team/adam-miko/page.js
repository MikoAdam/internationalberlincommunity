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
                  href="https://linkedin.com/in/adammiko"
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
                  Adam Miko is the founder and Vice President of the International Berlin Community (IBC) e.V., 
                  a leading non-profit in Berlin dedicated to fostering cultural exchange, inclusivity, and community building. 
                  With a strong background in software engineering and consulting, Adam combines technical expertise 
                  with community leadership to create lasting impact.
                </p>
                <p className="text-base-content/80 leading-relaxed">
                  Through IBC, Adam has successfully built one of Berlin's most vibrant international communities, 
                  serving over 6,500 members from 50+ nationalities. His vision of building bridges across cultures 
                  has resulted in hundreds of successful events that have transformed countless lives and created 
                  meaningful connections across Berlin's diverse population.
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
                      Founder and Vice President
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      International Berlin Community (IBC) e.V. • 2021 - Present
                    </p>
                    <p className="text-base-content/70 mb-3">Berlin, Germany</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Founded and developed one of Berlin's leading non-profits for international community integration</li>
                      <li>• Scaled organization to 6,500+ members representing 50+ nationalities</li>
                      <li>• Led a diverse team of 15+ volunteers in organizing 100+ successful community events</li>
                      <li>• Established strategic partnerships with local institutions, businesses, and government entities</li>
                      <li>• Created sustainable frameworks for cultural exchange, language learning, and social integration</li>
                      <li>• Achieved registered non-profit status (e.V.) ensuring legal compliance and long-term sustainability</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Consultant and Software Developer
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      Accenture & Various Clients • 2018 - Present
                    </p>
                    <p className="text-base-content/70 mb-3">Berlin, Germany</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Delivered innovative technical solutions across healthcare, aerospace, and transportation industries</li>
                      <li>• Led complex healthcare data migrations and system integrations at Accenture</li>
                      <li>• Managed cross-functional teams in both English and German-speaking environments</li>
                      <li>• Specialized in full-stack development, system architecture, and project management</li>
                      <li>• 5+ years of consulting experience with enterprise-level clients</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-semibold text-base-content mb-2">
                      Technical Project Lead
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      Healthcare & Aerospace Projects
                    </p>
                    <p className="text-base-content/70 mb-3">Various Locations</p>
                    <ul className="text-base-content/80 space-y-2">
                      <li>• Led end-to-end technical project delivery for mission-critical systems</li>
                      <li>• Coordinated international teams across multiple time zones and cultures</li>
                      <li>• Implemented agile methodologies and DevOps practices</li>
                      <li>• Maintained 98%+ project success rate with on-time, on-budget delivery</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Education
                </h2>
                
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-base-content mb-2">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Budapest University of Technology and Economics
                  </p>
                  <p className="text-base-content/70 mb-3">Budapest, Hungary</p>
                  <p className="text-base-content/80">
                    Comprehensive computer science education with focus on software engineering, algorithms, 
                    and system design. Strong foundation in mathematics, programming, and project management. 
                    Graduated with honors and demonstrated leadership in student organizations.
                  </p>
                </div>
              </section>

              {/* Skills & Expertise Section */}
              <section className="bg-base-100 rounded-2xl p-8 shadow-soft mb-8">
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
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-secondary">Software Development</span>
                      <span className="badge badge-secondary">System Architecture</span>
                      <span className="badge badge-secondary">Project Management</span>
                      <span className="badge badge-secondary">DevOps</span>
                      <span className="badge badge-secondary">Data Migration</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Event & Community</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-accent">Event Organization</span>
                      <span className="badge badge-accent">Cultural Exchange</span>
                      <span className="badge badge-accent">Volunteer Coordination</span>
                      <span className="badge badge-accent">Partnership Development</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-base-content mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-info">Hungarian (Native)</span>
                      <span className="badge badge-info">English (Fluent)</span>
                      <span className="badge badge-info">German (Professional)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vision & Impact Section */}
              <section className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-base-content mb-6 border-b border-base-300 pb-3">
                  Vision & Impact
                </h2>
                <blockquote className="text-lg text-base-content/80 italic leading-relaxed mb-4">
                  "My vision is to create sustainable pathways for cultural integration that don't just bring people together, 
                  but transform how communities think about diversity, inclusion, and belonging."
                </blockquote>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6,500+</div>
                    <div className="text-sm text-base-content/60">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                    <div className="text-sm text-base-content/60">Events Organized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-base-content/60">Nationalities United</div>
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