"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

export const boardMembers = [
  {
    name: "Le Phan Thanh Phuong",
    role: "president",
    profileImage: "/assets/Gia.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/thanh-phuong-le-phan/",
    isLeadership: true,
    hasPage: true
  },
  {
    name: "Adam Miko",
    role: "founderVicePresident",
    profileImage: "/assets/adam.jpeg",
    linkedinUrl: "https://linkedin.com/in/ádám-mikó",
    isLeadership: true,
    hasPage: true
  }
];

export const teamOrganizers = [
  { name: "Masud H.", role: "languageCoordinator" },
  { name: "Ratnesh P.", role: "eventOrganizer" },
  { name: "Talal D.", role: "eventOrganizer" },
  { name: "Ashish S.", role: "eventOrganizer" },
  { name: "Shristi R.", role: "eventOrganizer" }
];

const TeamGrid = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const leadership = boardMembers;

  return (
    <section className="bg-base-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            {t('meetOurTeam', language)}
          </h2>
          <p className="mt-4 text-lg text-base-content/80">
            {t('teamDescription', language)}
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-base-content mb-8">{t('leadershipTitle', language)}</h3>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:col-span-2">
            {leadership.map((member) => (
              <li key={member.name}>
                <div
                  onClick={() => router.push(`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="flex flex-col items-center gap-y-4 cursor-pointer hover:text-primary transition-colors bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl"
                >
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="rounded-full shadow-lg w-32 h-32 object-cover"
                    onError={(e) => {
                      e.target.src = "/assets/adam.jpeg";
                    }}
                  />
                  <h4 className="text-xl font-semibold leading-7 tracking-tight text-base-content">
                    {member.name}
                  </h4>
                  <p className="text-lg font-semibold leading-6 text-primary">
                    {t(member.role, language)}
                  </p>
                  <span className="text-primary text-sm font-medium">{t('openCV', language)}</span>
                  {member.linkedinUrl && (
                    <span className="text-base-content/60 text-sm">{t('linkedinProfile', language)}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-base-content mb-8">{t('organizersTitle', language)}</h3>
          <div className="text-center">
            <p className="text-base-content/70 mb-6">
              {t('organizersDescription', language)}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-4xl mx-auto">
              {teamOrganizers.map((organizer) => (
                <div key={organizer.name} className="p-4 bg-base-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-base-content/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-primary text-white dark:bg-primary-dark dark:text-white border-2 border-base-content/20 dark:border-base-content/70 shadow-sm">
                      <span className="font-bold text-lg">
                        {organizer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-base-content mb-1">
                      {organizer.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {t(organizer.role, language)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-base-content mb-4">
            {t('joinTeamTitle', language)}
          </h3>
          <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
            {t('joinTeamDescription', language)}
          </p>
          <a
            href="mailto:ibcmanagement@outlook.com?subject=Volunteer%20Interest"
            className="btn btn-primary btn-lg"
          >
            {t('becomeVolunteer', language)}
          </a>
        </div>
      </div>
    </section>
  );
};

export const teamMembers = boardMembers;
export const organizers = teamOrganizers;

export default TeamGrid;