import Link from "next/link";

export const teamMembers = [
  {
    name: "Le Phan Thanh Phuong",
    role: "President", 
    bio: "Sound Designer turned Psychology student and soon Auditory Neuroscientist. Leading IBC's mission to build bridges across cultures.",
    experience: ["President of International Berlin Community", "Student Research Assistant at Université de Montréal", "Researcher at University of Potsdam"],
    education: ["Master of Science - MS, Cognitive Science at University of Potsdam", "Bachelor of Arts - BA, Psychology at University of Pécs"],
    skills: ["Leadership", "Research", "Community Building", "Cross-cultural Communication", "Psychology"],
    profileImage: "/assets/Gia.jpeg", // Gia gets a photo
    linkedinUrl: "https://www.linkedin.com/in/thanh-phuong-le-phan/",
    isLeadership: true,
    hasPage: true // Gia gets a page
  },
  {
    name: "Adam Miko",
    role: "Founder / Vice President",
    bio: `Adam Miko is the founder and Vice President of the International Berlin Community (IBC) e.V., 
    a leading non-profit in Berlin dedicated to fostering cultural exchange, inclusivity, and community building. 
    With a strong background in software engineering and consulting, Adam combines technical expertise 
    with community leadership to create lasting impact.`,
    experience: [
      "Founder and Vice President of International Berlin Community (IBC) e.V., one of Berlin's leading non-profits of its kind",
      "Consultant and Software Developer in healthcare, aerospace, and transportation industries",
      "Led a team of 15+ volunteers and organized over 100 diverse events, including cultural celebrations, guided tours, and interfaith gatherings",
      "Delivered innovative technical solutions and led healthcare data migrations at Accenture",
      "5+ years of experience in consulting and technical project delivery for clients in English and German environments",
    ],
    education: [
      "Bachelor's Degree in Computer Science, Budapest University of Technology and Economics",
    ],
    skills: [
      "Leadership and Team Management",
      "Community Building", 
      "Event Organization",
      "Software Development",
      "Stakeholder Engagement",
    ],
    profileImage: "/assets/adam.jpeg", // Adam gets a photo
    linkedinUrl: "https://linkedin.com/in/adammiko",
    isLeadership: true,
    hasPage: true // Adam gets a page
  }
];

// Organizers - no photos, no pages, just simple cards - EXACTLY the list you provided
export const organizers = [
  { name: "Masud H.", role: "Language Exchange Coordinator" },
  { name: "Ratnesh P.", role: "Event Organizer" },
  { name: "Talal D.", role: "Event Organizer" },
  { name: "Ashish S.", role: "Event Organizer" },
  { name: "Shristi R.", role: "Event Organizer" }
];

const TeamGrid = () => {
  const leadership = teamMembers;

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

        {/* Leadership Section - Only Adam and Gia with photos and pages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-base-content mb-8">Leadership Team</h3>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:col-span-2">
            {leadership.map((member) => (
              <li key={member.name}>
                <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="flex flex-col items-center gap-y-4 cursor-pointer hover:text-primary transition-colors bg-white dark:bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl">
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="rounded-full shadow-lg w-32 h-32 object-cover"
                    />
                    <h4 className="text-xl font-semibold leading-7 tracking-tight text-base-content">
                      {member.name}
                    </h4>
                    <p className="text-lg font-semibold leading-6 text-primary">
                      {member.role}
                    </p>
                    <p className="text-sm text-base-content/70 text-center max-w-xs">
                      {member.bio.substring(0, 120)}...
                    </p>
                    {member.linkedinUrl && (
                      <span className="text-primary text-sm">LinkedIn Profile</span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Organizers Section - Simple cards, no photos, no links, no "Open CV" */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-base-content mb-8">Our Amazing Organizers</h3>
          <div className="text-center">
            <p className="text-base-content/70 mb-6">
              We have an amazing team of volunteer organizers who make our events possible.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-4xl mx-auto">
              {organizers.map((organizer) => (
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
              {/* REMOVED the stupid "Many more volunteers" card */}
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

export default TeamGrid;