import { Suspense } from "react";
import { teamMembers } from "@/components/TeamGrid";
import { formerTeamMembers } from "@/components/FormerTeam";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-primary hover:text-primary-focus transition-colors duration-200 ease-in-out"
  >
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
    />
  </svg>
);

const TeamPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="bg-base-100 py-16 sm:py-24 text-center dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Title */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 mb-8 dark:text-gray-200">
              Meet Our Team
            </h1>
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-300">
              Behind our success is a group of passionate individuals who bring
              diverse skills and backgrounds to the table.
            </p>
          </div>

          {/* Current Team Members */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-16 mb-20 p-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-left border-b border-gray-200 dark:border-gray-700 pb-4">
              Current Team Members
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member) => (
                <Link
                  key={member.name}
                  href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors duration-200 ease-in-out">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary">{member.role}</p>
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn profile"
                        className="text-primary group-hover:text-primary-focus transition-colors duration-200 ease-in-out"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                  {/* Hover effect for Open CV */}
                  <div className="absolute inset-0 bg-gray-200 bg-opacity-0 group-hover:bg-opacity-75 dark:bg-gray-600 dark:bg-opacity-0 dark:group-hover:bg-opacity-75 flex justify-center items-center transition-opacity duration-200 ease-in-out">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100">
                      Open CV
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Former Team Members */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-16 mb-32 p-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-left border-b border-gray-200 dark:border-gray-700 pb-4">
              Former Team Members
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {formerTeamMembers.map((member) => (
                <Link
                  key={member.name}
                  href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 group-hover:text-primary transition-colors duration-200 ease-in-out">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-lg text-primary">{member.role}</p>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn profile"
                        className="text-primary group-hover:text-primary-focus transition-colors duration-200 ease-in-out"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                  {/* Hover effect for Open CV */}
                  <div className="absolute inset-0 bg-gray-200 bg-opacity-0 group-hover:bg-opacity-75 dark:bg-gray-600 dark:bg-opacity-0 dark:group-hover:bg-opacity-75 flex justify-center items-center transition-opacity duration-200 ease-in-out">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100">
                      Open CV
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;
