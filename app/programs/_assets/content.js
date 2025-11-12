import Image from "next/image";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

const categorySlugs = {
  hiking: "hiking",
  language: "language",
  picnic: "picnic",
  museum: "museum",
  daytrip: "daytrip",
  beach: "beach",
  culture: "culture",
};

export const categories = [
  {
    slug: categorySlugs.hiking,
    title: "Hiking",
    titleShort: "Hiking",
    description: "Join us for scenic hikes around Berlin and beyond, exploring nature and meeting new friends.",
    descriptionShort: "Join us for scenic hikes around Berlin",
  },
  {
    slug: categorySlugs.language,
    title: "Language Exchange",
    titleShort: "Language Exchange",
    description: "Practice and improve your language skills with native speakers in a relaxed and friendly environment.",
    descriptionShort: "Improve your language skills with native speakers.",
  },
  {
    slug: categorySlugs.picnic,
    title: "Picnic",
    titleShort: "Picnic",
    description: "Enjoy a casual picnic with community members, share food, and relax in Berlin's beautiful parks.",
    descriptionShort: "Enjoy a casual picnic with community members.",
  },
  {
    slug: categorySlugs.museum,
    title: "Museum Visit",
    titleShort: "Museum Visit",
    description: "Explore Berlin's rich history and art through guided visits to its world-class museums.",
    descriptionShort: "Guided visits to its world-class museums.",
  },
  {
    slug: categorySlugs.daytrip,
    title: "Day Trip",
    titleShort: "Day Trip",
    description: "Take part in day trips to nearby cities and attractions, discovering new places with fellow community members.",
    descriptionShort: "Discover new places with fellow community members.",
  },
  {
    slug: categorySlugs.beach,
    title: "Beach Day",
    titleShort: "Beach Day",
    description: "Relax by the water, swim, and soak up the sun at Berlin's lakes and beaches.",
    descriptionShort: "Swim, and soak up the sun at Berlin's lakes and beaches.",
  },
  {
    slug: categorySlugs.culture,
    title: "Cultural Event",
    titleShort: "Culture Event",
    description: "Celebrate Berlin's diverse cultures with festivals, food, and performances.",
    descriptionShort: "Celebrate Berlin's diverse cultures.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg version="1.1" id="svg5" x="0px" y="0px" viewBox="0 0 1668.56 1221.19" className="w-9 h-9">
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

const authorSlugs = {
  adam: "adam",
};

export const authors = [
  {
    slug: authorSlugs.adam,
    name: "Adám Mikó",
    job: "Founder / Vice President, IBC",
    description: "Leading IBC's strategic direction and community growth, building bridges across cultures in Berlin.",
    avatar: "/assets/adam.jpeg",
    socials: [
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://linkedin.com/in/adammiko",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline: "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

export const programs = [
  {
    slug: "hiking-adventures",
    title: "Hiking Adventures",
    description: "Explore nature with our organized hiking trips around Berlin and beyond, connecting with fellow outdoor enthusiasts.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.hiking),
    ],
    author: authors.find((author) => author.slug === authorSlugs.adam),
    publishedAt: "2024-09-10",
    image: {
      src: "/assets/hiking.jpg",
      urlRelative: "/assets/hiking.jpg",
      alt: "Group hiking in nature",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Join Our Hiking Adventures</h2>
          <p className={styles.p}>
            Discover the natural beauty surrounding Berlin through our organized hiking trips. Whether you're an experienced hiker or just starting out, our community welcomes all levels.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>What to Expect</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Beautiful trails around Berlin and Brandenburg</li>
            <li className={styles.li}>All difficulty levels welcome</li>
            <li className={styles.li}>Meet people from diverse backgrounds</li>
            <li className={styles.li}>Free to join - just bring water and comfortable shoes</li>
          </ul>
        </section>
      </>
    ),
  },
  {
    slug: "language-exchange",
    title: "Language Exchange",
    description: "Practice German and other languages in a relaxed, supportive environment with native speakers and language learners.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.language),
    ],
    author: authors.find((author) => author.slug === authorSlugs.adam),
    publishedAt: "2024-09-15",
    image: {
      src: "/assets/culturalEvents.jpg",
      urlRelative: "/assets/culturalEvents.jpg",
      alt: "People practicing languages together",
    },
    content: (
      <>
        <section>
          <h2 className={styles.h2}>Language Exchange Program</h2>
          <p className={styles.p}>
            Improve your language skills through conversation with native speakers and fellow learners in our welcoming community environment.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>Program Highlights</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>Weekly language exchange meetups</li>
            <li className={styles.li}>Practice German, English, and other languages</li>
            <li className={styles.li}>Supportive, judgement-free environment</li>
            <li className={styles.li}>Make friends while learning</li>
          </ul>
        </section>
      </>
    ),
  },
];