export const teamMembers = [
  {
    name: 'Gia Phan',
    role: 'President',
  },
  {
    name: 'Ádám Mikó',
    role: 'Founder / Vice President',
  },
  {
    name: 'Vinod G.',
    role: 'Event organizer',
  },
  {
    name: 'Masud H.',
    role: 'Language Exchange',
  },
  {
    name: 'Ratnesh P.',
    role: 'Event organizer',
  },
  {
    name: 'Talal D.',
    role: 'Event organizer',
  },
  {
    name: 'Ashish S.',
    role: 'Event organizer',
  },
  {
    name: 'Shriti R.',
    role: 'Event organizer',
  },
  
];

const TeamGridNoImage = () => {
  return (
    <section className="bg-base-200 py-24 sm:py-32"> {/* Changed bg-base-100 to bg-base-200 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">Meet our team</h2>
          <p className="mt-6 text-lg leading-8 text-base-content/80">
            Our dedicated team works tirelessly to create memorable experiences for our community.
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TeamGridNoImage;