export const formerTeamMembers = [
  {
    name: 'Tom Q..',
    role: '',
  },
  {
    name: 'Khan S.',
    role: '',
  },
  {
    name: 'Nicola R.',
    role: '',
  },
  {
    name: 'Alex M.',
    role: '',
  },
  {
    name: 'Constance J.',
    role: '',
  },


  // More team members... 
];

const TeamGridNoImage = () => {
  return (
    <section className="bg-base-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">Former team members</h2>

        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 mt-12 xl:col-span-2">
          {formerTeamMembers.map((member) => (
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