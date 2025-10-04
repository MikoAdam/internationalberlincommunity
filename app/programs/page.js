"use client";

import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/translations";

const ProgramCard = ({ icon, title, description, features, color }) => (
  <div className="bg-base-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-3xl mb-4`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-base-content mb-3">
      {title}
    </h3>
    <p className="text-base-content/70 mb-6 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-base-content/80">
          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function ProgramsPage() {
  const { language } = useLanguage();

  const programs = [
    {
      icon: "🥾",
      title: t('outdoorAdventures', language),
      description: t('outdoorDesc', language),
      features: [t('outdoorFeature1', language), t('outdoorFeature2', language)],
      color: "bg-primary"
    },
    {
      icon: "🏛️",
      title: t('museumVisits', language),
      description: t('museumDesc', language),
      features: [t('museumFeature1', language), t('museumFeature2', language)],
      color: "bg-secondary"
    },
    {
      icon: "💬",
      title: t('languageExchange', language),
      description: t('languageDesc', language),
      features: [t('languageFeature1', language), t('languageFeature2', language)],
      color: "bg-accent"
    },
    {
      icon: "🧺",
      title: t('socialGatherings', language),
      description: t('socialDesc', language),
      features: [t('socialFeature1', language), t('socialFeature2', language)],
      color: "bg-primary"
    },
    {
      icon: "🎉",
      title: t('culturalCelebrations', language),
      description: t('culturalCelebrationsDesc', language),
      features: [t('culturalFeature1', language), t('culturalFeature2', language)],
      color: "bg-secondary"
    },
    {
      icon: "💭",
      title: t('debateClub', language),
      description: t('debateClubDesc', language),
      features: [t('debateFeature1', language), t('debateFeature2', language)],
      color: "bg-accent"
    },
    {
      icon: "🚌",
      title: t('multiDayTrips', language),
      description: t('multiDayTripsDesc', language),
      features: [t('multiDayTripsFeature1', language), t('multiDayTripsFeature2', language)],
      color: "bg-primary"
    },
    {
      icon: "🏖️",
      title: t('beachDays', language),
      description: t('beachDaysDesc', language),
      features: [t('beachDaysFeature1', language), t('beachDaysFeature2', language)],
      color: "bg-secondary"
    },
    {
      icon: "🛠️",
      title: t('communityWorkshops', language),
      description: t('communityWorkshopsDesc', language),
      features: [t('communityWorkshopsFeature1', language), t('communityWorkshopsFeature2', language)],
      color: "bg-accent"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6">
          {t('somethingForEveryone', language)}
        </h1>
        <p className="text-xl text-base-content/80 max-w-3xl mx-auto mb-8">
          {t('programsSubtitle', language)}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">200+</div>
            <div className="text-sm text-base-content/60">{t('eventsOrganized', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-sm text-base-content/60">{t('socialMediaMembers', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100+</div>
            <div className="text-sm text-base-content/60">{t('nationalities', language)}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-base-content/60">{t('freeEvents', language)}</div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>

      <div className="bg-primary/10 rounded-xl p-8 text-center border border-primary/20">
        <h2 className="text-2xl font-bold text-base-content mb-4">
          {t('joinOurCommunity', language)}
        </h2>
        <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
          {t('joinCommunityText', language)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.facebook.com/groups/internationalberlinhiking" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t('joinFacebookGroup', language)}
          </a>
          <a href="mailto:ibcmanagement@outlook.com" className="btn btn-outline">
            {t('contactUs', language)}
          </a>
        </div>
      </div>
    </main>
  );
}