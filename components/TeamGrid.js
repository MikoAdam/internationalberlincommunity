"use client";

import Link from "next/link";

// Board/Leadership members
export const boardMembers = [
  {
    name: "Le Phan Thanh Phuong",
    role: "President", 
    profileImage: "/assets/Gia.jpeg", // You need to add this photo
    linkedinUrl: "https://www.linkedin.com/in/thanh-phuong-le-phan/",
    isLeadership: true,
    hasPage: true
  },
  {
    name: "Adam Miko",
    role: "Founder / Vice President",
    profileImage: "/assets/adam.jpeg",
    linkedinUrl: "https://linkedin.com/in/adammiko",
    isLeadership: true,
    hasPage: true
  }
];

// Organizers - no photos, no pages, just simple cards
export const teamOrganizers = [
  { name: "Masud H.", role: "Language Exchange Coordinator" },
  { name: "Ratnesh P.", role: "Event Organizer" },
  { name: "Talal D.", role: "Event Organizer" },
  { name: "Ashish S.", role: "Event Organizer" },
  { name: "Shristi R.", role: "Event Organizer" }
];

const TeamGrid = () => {
  const leadership = boardMembers;

  return (
    <section className="bg-base-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-base-content/80">
            Our passionate team of volunteers works tirelessly to create memorable experiences.
          </p>
        </div>

        {/* Board/Leadership Section - Only Adam and Gia with photos and pages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-base-content mb-8">Board of Directors</h3>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:col-span-2">
            {leadership.map((member) => (
              <li key={member.name}>
                <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="flex flex-col items-center gap-y-4 cursor-pointer hover:text-primary transition-colors bg-white dark:bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="rounded-full shadow-lg w-32 h-32 object-cover"
                      onError={(e) => {
                        e.target.src = "/assets/adam.jpeg"; // Fallback to Adam's photo
                      }}
                    />
                    <h4 className="text-xl font-semibold leading-7 tracking-tight text-base-content">
                      {member.name}
                    </h4>
                    <p className="text-lg font-semibold leading-6 text-primary">
                      {member.role}
                    </p>
                    <span className="text-primary text-sm font-medium">Open CV</span>
                    {member.linkedinUrl && (
                      <span className="text-base-content/60 text-sm">LinkedIn Profile</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Organizers Section - Simple cards, no photos, no links, no "Open CV" */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-base-content mb-8">Our Organizers</h3>
          <div className="text-center">
            <p className="text-base-content/70 mb-6">
              We have an amazing team of volunteer organizers who make our events possible.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-4xl mx-auto">
              {teamOrganizers.map((organizer) => (
                <div key={organizer.name} className="p-4 bg-white dark:bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-base-content/10">
                  <div className="flex flex-col items-center text-center">
                    {/* Initials instead of photos */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-lg">
                        {organizer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-base-content mb-1">
                      {organizer.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {organizer.role}
                    </p>
                    {/* NO "Open CV" text, NO links for organizers */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-base-content mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate volunteers who want to help build bridges across cultures.
          </p>
          <a 
            href="mailto:ibcmanagement@outlook.com?subject=Volunteer%20Interest" 
            className="btn btn-primary btn-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
};

// Also export with old names for compatibility  
export const teamMembers = boardMembers;
export const organizers = teamOrganizers;

export default TeamGrid;