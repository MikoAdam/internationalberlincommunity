import Link from 'next/link';

export const teamMembers = [
  {
    name: 'Le Phan Thanh Phuong',
    role: 'President',
    bio: 'Experienced event organizer.',
    experience: ['President of International Berlin Community'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Adam Miko',
    role: 'Founder / Vice President',
    bio: `Adam Miko is the founder and Vice President of the International Berlin Community (IBC). 
    He has been actively engaged in building community spaces in Berlin, particularly for immigrants and expats. 
    Adam's expertise lies in community leadership, organizing diverse events, and connecting people from all backgrounds 
    to foster cultural exchange and understanding.`,
    experience: [
      'Founder and Vice President of International Berlin Community (IBC)',
      'Polarion Consultant at Garantis IT Solutions',
      'Part-time work in certification and development processes at eRC-System',
      'Junior Software Engineer at European IT Consultancy EITCO GmbH',
      'Digital Tech Developer Analyst at Accenture',
      'Actively involved in community building activities, organizing various events such as hikes, language exchanges, picnics, and cultural activities',
      'Over 4 years of experience writing macros, plugins, and consulting on Polarion with clients in both English and German',
    ],
    education: [
      "Bachelor’s Degree in Computer Science, Budapest University of Technology and Economics",
    ],
    skills: [
      'Application Lifecycle Management (ALM)',
      'Community Leadership',
      'Event Planning and Management',
      'Polarion Customization',
      'Software Engineering',
    ],
    profileImage: '/assets/adam.jpeg', // Placeholder image
  },
  {
    name: 'Vinod G.',
    role: 'Event Organizer',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Masud H.',
    role: 'Language Exchange',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Ratnesh P.',
    role: 'Event Organizer',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Talal D.',
    role: 'Event Organizer',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Ashish S.',
    role: 'Event Organizer',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
  {
    name: 'Shristi R.',
    role: 'Event Organizer',
    bio: 'Experienced event organizer.',
    experience: ['Event Organizer at IBC'],
    education: [],
    skills: [],
    profileImage: '/assets/profile_pic_placeholder.png', // Placeholder image
  },
];

// Component to display the team grid
const TeamGridNoImage = () => {
  return (
    <section className="bg-base-200 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-base-content/80">
            Our dedicated team works tirelessly to create memorable experiences for our community.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 mt-12 xl:col-span-2"
        >
          {teamMembers.map((member) => (
            <li key={member.name}>
              <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex flex-col items-center gap-y-2 cursor-pointer hover:text-primary transition-colors">
                  <img
                    src={member.profileImage} // Placeholder image for all members
                    alt={member.name}
                    className="rounded-full shadow-lg w-56 h-56 object-cover"
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-base-content">
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
