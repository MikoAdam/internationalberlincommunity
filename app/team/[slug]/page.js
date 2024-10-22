"use client"; // Client-side rendering

import { useParams } from 'next/navigation';
import { notFound, useRouter } from 'next/navigation';
import { teamMembers } from '@/components/TeamGrid'; // Import current team members
import { formerTeamMembers } from '@/components/FormerTeam'; // Import former team members

const TeamMemberPage = () => {
  const { slug } = useParams(); // Get the dynamic slug from the URL
  const router = useRouter(); // For back button functionality

  // Combine current and former members into one array
  const allMembers = [...teamMembers, ...formerTeamMembers];

  // Find the member based on the slug
  const member = allMembers.find((member) =>
    member.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!member) {
    return notFound(); // If member is not found, return a 404 page
  }

  return (
    <main className="bg-base-200 dark:bg-base-100 min-h-screen py-16 px-6 lg:px-16 flex justify-center items-start">
      <div className="max-w-5xl w-full bg-base-100 dark:bg-base-200 shadow-lg rounded-lg overflow-hidden flex-grow">
        {/* Back Button */}
        <div className="p-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </div>

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row p-6">
          {/* Profile Image */}
          <div className="md:w-1/3 bg-base-200 dark:bg-base-300 flex items-center justify-center p-8">
            <img
              src={member.profileImage || '/assets/profile_pic_placeholder.png'} // Use the placeholder image for all members
              alt={member.name}
              className="rounded-full shadow-lg w-56 h-56 object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold text-base-content dark:text-base-content">
              {member.name}
            </h1>
            <h2 className="text-xl text-primary dark:text-primary-light mt-2">
              {member.role}
            </h2>
            <p className="mt-4 text-lg text-base-content/80 dark:text-base-content/80">
              {member.bio}
            </p>

            {/* Experience */}
            {member.experience && member.experience.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-base-content dark:text-base-content mb-4">
                  Experience
                </h3>
                <ul className="list-disc list-inside text-lg text-base-content/80 dark:text-base-content/80">
                  {member.experience.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {member.education && member.education.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-base-content dark:text-base-content mb-4">
                  Education
                </h3>
                <ul className="list-disc list-inside text-lg text-base-content/80 dark:text-base-content/80">
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {member.skills && member.skills.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-base-content dark:text-base-content mb-4">
                  Skills
                </h3>
                <p className="text-lg text-base-content/80 dark:text-base-content/80">
                  {member.skills.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamMemberPage;
