import Link from "next/link";

export const teamMembers = [
  {
    name: "Le Phan Thanh Phuong",
    role: "President",
    bio: "Experienced event organizer.",
    experience: ["President of International Berlin Community"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Adam Miko",
    role: "Founder / Vice President",
    bio: `Adam Miko is the founder and Vice President of the International Berlin Community (IBC) e.V., 
    a leading non-profit in Berlin dedicated to fostering cultural exchange, inclusivity, and community building. 
    With a strong background in software engineering and consulting, Adam combines technical expertise 
    with community leadership to create lasting impact.`,
    experience: [
      "Founder and Vice President of International Berlin Community (IBC) e.V., one of Berlin’s leading non-profits of its kind",
      "Consultant and Software Developer in healthcare, aerospace, and transportation industries",
      "Led a team of 15+ volunteers and organized over 100 diverse events, including cultural celebrations, guided tours, and interfaith gatherings",
      "Delivered innovative technical solutions and led healthcare data migrations at Accenture",
      "5+ years of experience in consulting and technical project delivery for clients in English and German environments",
    ],
    education: [
      "Bachelor’s Degree in Computer Science, Budapest University of Technology and Economics",
    ],
    skills: [
      "Leadership and Team Management",
      "Community Building",
      "Event Organization",
      "Software Development",
      "Stakeholder Engagement",
    ],
    profileImage: "/assets/adam.jpeg", // Placeholder image
  },
  {
    name: "Vinod G.",
    role: "Event Organizer",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Masud H.",
    role: "Language Exchange",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Ratnesh P.",
    role: "Event Organizer",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Talal D.",
    role: "Event Organizer",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Ashish S.",
    role: "Event Organizer",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
  {
    name: "Shristi R.",
    role: "Event Organizer",
    bio: "Experienced event organizer.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: [],
    profileImage: "/assets/profile_pic_placeholder.png", // Placeholder image
  },
];

// Component to display the team grid
const TeamGridNoImage = () => {
  return (
    <section className="bg-base-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our dedicated team works tirelessly to create memorable experiences and foster inclusivity for our community.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-12 gap-y-16 sm:grid-cols-2 md:grid-cols-3 mt-16 xl:col-span-2"
        >
          {teamMembers.map((member) => (
            <li key={member.name}>
              <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex flex-col items-center gap-y-4 cursor-pointer hover:text-primary transition-colors">
                  <img
                    src={member.profileImage} // Placeholder image for all members
                    alt={member.name}
                    className="rounded-full shadow-md w-40 h-40 object-cover"
                  />
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-100">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary">
                    {member.role}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamGridNoImage;
