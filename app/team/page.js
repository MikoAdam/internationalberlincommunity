"use client";

import { boardMembers, teamOrganizers } from "@/components/TeamGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
    />
  </svg>
);

const TeamPage = () => {
  const router = useRouter();

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto py-16">
        <div className="px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
              Our Team
            </h1>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Passionate volunteers dedicated to building bridges across cultures and creating meaningful connections in Berlin
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-3">Leadership</h2>
            <p className="text-base-content/70 mb-10">
              Guiding IBC's strategic direction and sustainable growth
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  onClick={() => router.push(`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="group bg-base-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center gap-5">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover shadow-lg"
                      onError={(e) => {
                        e.target.src = "/assets/adam.jpeg";
                      }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-4">{member.role}</p>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedInIcon />
                          <span className="text-sm">View Profile</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-3">Our Organizers</h2>
            <p className="text-base-content/70 mb-10">
              Dedicated volunteers who make our events possible
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {teamOrganizers.map((organizer) => (
                <div key={organizer.name} className="bg-base-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-base-content/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-lg">
                        {organizer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-base-content mb-1">
                      {organizer.name}
                    </h3>
                    <p className="text-sm text-primary">
                      {organizer.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-base-200 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-base-content mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate volunteers who want to help build bridges across cultures.
            </p>
            <a
              href="mailto:ibcmanagement@outlook.com?subject=Volunteer%20Interest"
              className="btn btn-primary btn-lg"
            >
              Become a Volunteer
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;