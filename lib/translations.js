export const translations = {
  en: {
    // Navigation
    aboutUs: "About Us",
    programs: "Programs", 
    team: "Team",
    communityRules: "Community Rules",
    legalInfo: "Legal Info",
    contactUs: "Contact Us",
    partnerWithUs: "Partner with Us",
    
    // Hero
    registeredNonProfit: "Registered Non-Profit Organization",
    internationalBerlinCommunity: "International Berlin Community",
    heroDescription: "Building bridges across cultures through community programs and events. Fostering integration and meaningful connections in Berlin.",
    socialMedia: "Social Media",
    events: "Events", 
    countries: "Countries",
    viewPrograms: "View Programs",
    
    // Impact Section
    ourImpact: "Our Impact",
    transformingLives: "Transforming Lives Through",
    communityConnection: "Community Connection",
    impactDescription: "Berlin's premier registered non-profit creating sustainable pathways for integration, fostering meaningful connections between locals, expatriates, refugees, and international students.",
    socialMediaMembers: "Social Media Members",
    activeContent: "6,500+ active community",
    eventsOrganized: "Events Organized",
    participantsEach: "30-50 participants each",
    organizers: "Organizers",
    diverseTeam: "Diverse volunteer team",
    nationalities: "Nationalities",
    globalCommunity: "Truly global community",
    
    // Vision/Values/Mission
    ourVision: "Our Vision",
    visionText: "To create a globally recognized model for inclusive community building that breaks down cultural barriers and celebrates diversity as our greatest strength.",
    ourValues: "Our Values",
    valuesText: "Radical inclusivity, cultural celebration, mutual respect, community empowerment, and sustainable social impact through authentic human connections.",
    ourMission: "Our Mission",
    missionText: "Creating sustainable pathways for integration and meaningful cross-cultural connections in Berlin's diverse international community.",
    
    // Partnership
    partnershipTitle: "Partner with Berlin's Leading Integration Non-Profit",
    partnershipDescription: "Join us in scaling proven community integration solutions that strengthen Berlin's social fabric while supporting your organization's diversity and inclusion objectives.",
    explorePartnership: "Explore Partnership",
    learnMore: "Learn More",
    
    // Programs
    somethingForEveryone: "Something for Everyone",
    programsSubtitle: "Discover diverse activities designed to bring people together, celebrate cultures, and create lasting friendships across Berlin's international community.",
    
    // Team
    meetOurTeam: "Meet Our Team",
    teamDescription: "Passionate volunteers dedicated to building bridges across cultures and creating meaningful connections in Berlin.",
    
    // FAQ
    frequentlyAsked: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about joining our community and participating in our events.",
    
    // Footer
    allRightsReserved: "All rights reserved",
    links: "LINKS",
    community: "COMMUNITY",
    support: "SUPPORT"
  },
  
  de: {
    // Navigation
    aboutUs: "Über uns",
    programs: "Programme",
    team: "Team",
    communityRules: "Community-Regeln",
    legalInfo: "Rechtliches",
    contactUs: "Kontakt",
    partnerWithUs: "Partner werden",
    
    // Hero
    registeredNonProfit: "Eingetragener gemeinnütziger Verein",
    internationalBerlinCommunity: "International Berlin Community",
    heroDescription: "Brücken zwischen Kulturen bauen durch Gemeinschaftsprogramme und Veranstaltungen. Förderung von Integration und bedeutungsvollen Verbindungen in Berlin.",
    socialMedia: "Social Media",
    events: "Veranstaltungen",
    countries: "Länder",
    viewPrograms: "Programme ansehen",
    
    // Impact Section
    ourImpact: "Unsere Wirkung",
    transformingLives: "Leben verändern durch",
    communityConnection: "Gemeinschaftsverbindungen",
    impactDescription: "Berlins führender eingetragener Verein, der nachhaltige Wege zur Integration schafft und bedeutungsvolle Verbindungen zwischen Einheimischen, Expats, Flüchtlingen und internationalen Studenten fördert.",
    socialMediaMembers: "Social Media Mitglieder",
    activeContent: "6.500+ aktive Community",
    eventsOrganized: "Veranstaltungen organisiert",
    participantsEach: "30-50 Teilnehmer pro Event",
    organizers: "Organisatoren",
    diverseTeam: "Vielfältiges Freiwilligenteam",
    nationalities: "Nationalitäten",
    globalCommunity: "Wahrhaft globale Gemeinschaft",
    
    // Vision/Values/Mission
    ourVision: "Unsere Vision",
    visionText: "Ein weltweit anerkanntes Modell für inklusiven Gemeinschaftsaufbau zu schaffen, das kulturelle Barrieren abbaut und Vielfalt als unsere größte Stärke feiert.",
    ourValues: "Unsere Werte",
    valuesText: "Radikale Inklusivität, kulturelle Feier, gegenseitiger Respekt, Community-Empowerment und nachhaltiger sozialer Einfluss durch authentische menschliche Verbindungen.",
    ourMission: "Unsere Mission",
    missionText: "Nachhaltige Wege zur Integration und bedeutungsvolle interkulturelle Verbindungen in Berlins vielfältiger internationaler Gemeinschaft schaffen.",
    
    // Partnership
    partnershipTitle: "Partner von Berlins führendem Integrations-Verein werden",
    partnershipDescription: "Schließen Sie sich uns an, um bewährte Community-Integrationslösungen zu skalieren, die Berlins soziales Gefüge stärken und gleichzeitig die Diversity- und Inklusionsziele Ihrer Organisation unterstützen.",
    explorePartnership: "Partnerschaft erkunden",
    learnMore: "Mehr erfahren",
    
    // Programs
    somethingForEveryone: "Für jeden etwas dabei",
    programsSubtitle: "Entdecken Sie vielfältige Aktivitäten, die Menschen zusammenbringen, Kulturen feiern und dauerhafte Freundschaften in Berlins internationaler Gemeinschaft schaffen.",
    
    // Team
    meetOurTeam: "Lernen Sie unser Team kennen",
    teamDescription: "Leidenschaftliche Freiwillige, die sich dem Brückenbau zwischen Kulturen und der Schaffung bedeutungsvoller Verbindungen in Berlin widmen.",
    
    // FAQ
    frequentlyAsked: "Häufig gestellte Fragen",
    faqSubtitle: "Alles, was Sie über den Beitritt zu unserer Gemeinschaft und die Teilnahme an unseren Veranstaltungen wissen müssen.",
    
    // Footer
    allRightsReserved: "Alle Rechte vorbehalten",
    links: "LINKS",
    community: "COMMUNITY",
    support: "SUPPORT"
  }
};

export const t = (key, language = 'en') => {
  return translations[language]?.[key] || translations.en?.[key] || key;
};