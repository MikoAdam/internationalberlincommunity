import Link from 'next/link';

export const formerTeamMembers = [
  {
    name: 'Tom Q.',
    role: 'Former Event Organizer',
  },
  {
    name: 'Khan S.',
    role: 'Former Event Organizer',
  },
  {
    name: 'Nicola R.',
    role: 'Former Event Organizer',
  },
  {
    name: 'Alex M.',
    role: 'Former Event Organizer',
  },
  {
    name: 'Constance J.',
    role: 'Former Event Organizer',
  },
];

const FormerTeamGrid = () => {
  return (
    <section className="bg-base-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            Former Team Members
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 mt-12 xl:col-span-2"
        >
          {formerTeamMembers.map((member) => (
            <li key={member.name}>
              <Link href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex flex-col items-center gap-y-2 cursor-pointer hover:text-primary transition-colors">
                  <img
                    src="/assets/profile_pic_placeholder.png" // Use placeholder for all members
                    alt={member.name}
                    className="rounded-full shadow-lg w-56 h-56 object-cover"
                  />
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-base-content">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary">
                    {member.role || 'Former Event Organizer'}
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

export default FormerTeamGrid;
