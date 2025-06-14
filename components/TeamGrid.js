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
    name: "Vinod G.",
    role: "Event Organizer",
    bio: "Dedicated volunteer organizer helping create memorable community experiences.",
    experience: ["Event Organizer at IBC"],
    education: [],
    skills: ["Event Planning", "Community Engagement"],
    profileImage: "/assets/profile_pic_placeholder.png",
    linkedinUrl: "",
    isLeadership: false
  },
  {
    name: "Masud H.", 
    role: "Language Exchange Coordinator",
    bio: "Passionate about language learning and cultural exchange.",
    experience: ["Language Exchange Coordinator at IBC"],
    education: [],
    skills: ["Language Teaching", "Cultural Exchange"],
    profileImage: "/assets/profile_pic_placeholder.png",
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
    profileImage: "/assets/profile_pic_placeholder.png",
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
    profileImage: "/assets/profile_pic_placeholder.png",
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
    profileImage: "/assets/profile_pic_placeholder.png", 
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
    profileImage: "/assets/profile_pic_placeholder.png",
    linkedinUrl: "",
    isLeadership: false
  },
];

const TeamGrid = () => {
  const leadership = teamMembers.filter(member => member.isLeadership);
  const organizers = teamMembers.filter(member => !member.isLeadership);

  return (
    <section className="bg-gradient-to-br from-base-200 to-base-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
              <path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2M9 2C7.89 2 7 2.89 7 4s.89 2 2 2s2-.89 2-2s-.89-2-2-2m7 3c-1.1 0-2 .9-2 2v7.5c0 .83-.67 1.5-1.5 1.5S11 15.33 11 14.5V10c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V9c0-1.1-.9-2-2-2s-2 .9-2 2v9.5C3 19.43 3.57 20 4.5 20s1.5-.57 1.5-1.5V15c0-.55.45-1 1-1s1 .45 1 1v3.5c0 .93.57 1.5 1.5 1.5s1.5-.57 1.5-1.5V14c0-.55.45-1 1-1s1 .45 1 1v4.5c0 .93.57 1.5 1.5 1.5s1.5-.57 1.5-1.5V7c0-1.1-.9-2-2-2"/>
            </svg>
            <span className="text-primary font-medium">Our Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-6 leading-tight">
            Meet the People Behind the <span className="text-primary">Magic</span>
          </h2>
          
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of volunteers works tirelessly to create memorable experiences and foster 
            inclusivity for our diverse community across Berlin.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">Leadership Team</h3>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Our dedicated leaders who guide the vision and strategy of IBC.
            </p>
          </div>
          
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto">
            {leadership.map((member) => (
              <Link 
                key={member.name} 
                href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-large hover:shadow-glow transition-all duration-300 border border-primary/10 hover:border-primary/30 max-w-sm w-full">
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <img
                        src={member.profileImage}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover shadow-medium group-hover:scale-105 transition-transform duration-300 ring-4 ring-primary/10 group-hover:ring-primary/30"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 text-white">
                          <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14L2 9.27l6.91-1.01z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Member Info */}
                    <h4 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-base-content/70 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* LinkedIn if available */}
                    {member.linkedinUrl && (
                      <div className="mt-4">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-focus transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                          </svg>
                          LinkedIn
                        </a>
                      </div>
                    )}

                    {/* Click to view CV indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm text-primary font-medium">Click to view full profile →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Organizers Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">Our Amazing Organizers</h3>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              The wonderful volunteers who make our events possible and our community thrive.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {organizers.map((member) => (
              <Link 
                key={member.name} 
                href={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-base-300 hover:border-primary/20">
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 group-hover:scale-105 transition-transform duration-300 ring-2 ring-base-300 group-hover:ring-primary/30"
                    />

                    {/* Member Info */}
                    <h4 className="text-lg font-semibold text-base-content mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-base-content/60 line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Click indicator */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-primary">View profile →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-base-content/70 mb-6">
              We're always looking for passionate volunteers who want to help build bridges across cultures 
              and create meaningful experiences for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ibcmanagement@outlook.com?subject=Volunteer%20Interest" 
                className="btn btn-primary btn-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                  <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>
                </svg>
                Become a Volunteer
              </a>
              <a 
                href="/team" 
                className="btn btn-outline btn-lg"
              >
                View All Team Members
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;