export const teamMembers = [
  {
    name: 'Anna P.',
    role: 'President',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Ádám Mikó',
    role: 'Founder / Vice President',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Gia Phan',
    role: 'Co-Founder',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Vinod G.',
    role: 'Hikes',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Masud H.',
    role: 'Language Exchange',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Ratnesh P.',
    role: 'Day Trips',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Talal D.',
    role: 'Food Events',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Ashish S.',
    role: 'Hikes',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  {
    name: 'Shriti R.',
    role: 'Day Trips',
    linkedinUrl: 'https://www.linkedin.com/in/%C3%A1d%C3%A1m-mik%C3%B3/',
  },
  
  
  // More team members...
];

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-primary hover:text-primary-focus">
    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
  </svg>
);

const TeamGridNoImage = () => {
  return (
    <section className="bg-base-200 py-24 sm:py-32"> {/* Changed bg-base-100 to bg-base-200 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-base-content/80">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 mt-12 xl:col-span-2">
          {teamMembers.map((member) => (
            <li key={member.name}>
              <div className="flex flex-col items-center gap-y-2">
                <h3 className="text-base font-semibold leading-7 tracking-tight text-base-content">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-primary">
                  {member.role}
                </p>
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn profile">
                  <LinkedInIcon />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TeamGridNoImage;