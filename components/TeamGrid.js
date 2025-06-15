import Link from "next/link";

export const teamMembers = [
  {
    name: "Le Phan Thanh Phuong",
    role: "President", 
    bio: "Experienced community leader and event organizer with a passion for bringing people together across cultural boundaries.",
    experience: ["President of International Berlin Community", "Community organizing and leadership"],
    education: [],
    skills: ["Leadership", "Event Management", "Community Building"],
    profileImage: "/assets/profile_pic_placeholder.png",
    linkedinUrl: "",
    isLeadership: true
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
    profileImage: "/assets/adam.jpeg",
    linkedinUrl: "https://linkedin.com/in/adammiko",
    isLeadership: true
  },
  {
    name: "Masud H.", 
    role: "Language Exchange Coordinator",
    bio: "Passionate about language learning and cultural exchange.",
    experience: ["Language Exchange Coordinator at IBC"],
    education: [],
    skills: ["Language Teaching", "Cultural Exchange"],
    linkedinUrl: "",
    isLeadership: false
  },
  {
    name: "Ratnesh P.",
    role: "Event Organizer",
    bio: "Enthusiastic volunteer helping connect the international community.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: ["Event Coordination", "Community Outreach"],
    linkedinUrl: "",
    isLeadership: false
  },
  {
    name: "Talal D.",
    role: "Event Organizer", 
    bio: "Community volunteer focused on creating inclusive events.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: ["Event Management", "Cross-cultural Communication"],
    linkedinUrl: "",
    isLeadership: false
  },
  {
    name: "Ashish S.",
    role: "Event Organizer",
    bio: "Dedicated team member supporting community initiatives.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: ["Event Planning", "Team Collaboration"],
    linkedinUrl: "",
    isLeadership: false
  },
  {
    name: "Shristi R.",
    role: "Event Organizer",
    bio: "Passionate organizer committed to fostering community connections.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: ["Event Coordination", "Community Engagement"],
    linkedinUrl: "",
    isLeadership: false
  },
];

const TeamGrid = () => {
  const leadership = teamMembers.filter(member => member.isLeadership);
  const organizers = teamMembers.filter(member => !member.isLeadership);

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

        {/* Leadership Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-base-content mb-8">Leadership Team</h3>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:col-span-2">
            {leadership.map((member) => (
              <li key={member.name}>
                <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span className="flex flex-col items-center gap-y-4 cursor-pointer hover:text-primary transition-colors">
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

        {/* Organizers Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-base-content mb-8">Our Amazing Organizers</h3>
          <div className="text-center">
            <p className="text-base-content/70 mb-6">
              We have an amazing team of volunteer organizers who make our events possible.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-2xl mx-auto">
              {/* Only show organizers who have actual pages/content */}
              {organizers.filter(member => member.linkedinUrl || member.name === "Masud H." || member.name === "Ratnesh P.").map((member) => (
                <div key={member.name} className="p-4 bg-base-content/5 rounded-lg border border-base-content/10 hover:border-primary/30 transition-all duration-300 hover:bg-base-content/10">
                  <h4 className="text-lg font-semibold text-base-content mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary">
                    {member.role}
                  </p>
                </div>
              ))}
              <div className="p-4 bg-base-content/5 rounded-lg border border-base-content/10 text-center">
                <p className="text-sm text-base-content/70">
                  + Many more volunteers
                </p>
              </div>
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