import Image from "next/image";
import languageExchange from "@/public/programs/languageExchange.jpeg";
import hikingImg from "@/public/programs/hiking.jpg"

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  hiking: "hiking",
  language: "language",
  picnic: "picnic",
  museum: "museum",
  daytrip: "daytrip",
  beach: "beach",
  culture: "culture",
  
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.hiking,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Hiking",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Hiking",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Join us for scenic hikes around Berlin and beyond, exploring nature and meeting new friends.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Join us for scenic hikes around Berlin",
  },
  
  {
    slug: categorySlugs.language,
    title: "Language Exchange",
    titleShort: "Language Exchange",
    description:
      "Practice and improve your language skills with native speakers in a relaxed and friendly environment.",
    descriptionShort:
      "Improve your language skills with native speakers.",
  },
  {
    slug: categorySlugs.picnic,
    title: "Picnic",
    titleShort: "Picnic",
    description:
      "Enjoy a casual picnic with community members, share food, and relax in Berlin's beautiful parks.",
    descriptionShort:
      "Enjoy a casual picnic with community members.",
  },
  {
    slug: categorySlugs.museum,
    title: "Museum Visit",
    titleShort: "Museum Visit",
    description:
      "Explore Berlin's rich history and art through guided visits to its world-class museums.",
    descriptionShort:
      "Guided visits to its world-class museums.",
  },
  {
    slug: categorySlugs.daytrip,
    title: "Day Trip",
    titleShort: "Day Trip",
    description:
      "Take part in day trips to nearby cities and attractions, discovering new places with fellow community members.",
    descriptionShort:
      "Discover new places with fellow community members.",
  },
  {
    slug: categorySlugs.beach,
    title: "Beach Day",
    titleShort: "Beach Day",
    description:
      "Relax by the water, swim, and soak up the sun at Berlin's lakes and beaches.",
    descriptionShort:
      "Swim, and soak up the sun at Berlin's lakes and beaches.",
  },
  {
    slug: categorySlugs.culture,
    title: "Cultural Event",
    titleShort: "Culture Event",
    description:
      "Celebrate Berlin's diverse cultures with festivals, food, and performances.",
    descriptionShort:
      "Celebrate Berlin's diverse cultures.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  adam: "adam",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.adam,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Adám Mikó",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Maker of ByeDispute",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Marc is a developer and an entrepreneur. He's built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He's currently building ByeDispute, the #1 Stripe Chargebacks Protection tool.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: adamImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/marc_louvion",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/marclouvion/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Marc-Lou-Org/ship-fast",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const programs = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "hiking-2024-09-10",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Hikes",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Best trip near Berlin, with the best people around. Join us for our peak attempt.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.hiking),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.adam),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-10",
    image: {
      // The image to display in <CardArticle /> components.
      src: hikingImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/hiking-2024-09-01/header.jpg",
      alt: "Hiking",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={hikingImg} // replace with a relevant image if available
          alt="hike"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Embark on an unforgettable adventure all around Germany.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>1. Preparing for the Trek</h3>
          <p className={styles.p}>
            Our expedition starts with thorough preparation. Ensure you are physically fit and have the necessary gear for cold weather and rugged terrain. We'll provide a comprehensive guide on what to pack and how to train.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>2. The Journey Begins</h3>
          <p className={styles.p}>
            We kick off our trek from the base camp, following well-trodden trails that offer stunning vistas at every turn. The path is dotted with quaint villages, mesmerizing landscapes, and a glimpse into the life of the Sherpa people.
          </p>
          <pre className={styles.code}>
            <code>
              {`ROUTE:
                - Day 1: Arrival at Base Camp
                - Day 2: Acclimatization and short hikes around the area
                - Day 3: Trek to Gorak Shep
                - Day 4: Hike to Everest Base Camp and return to Gorak Shep
                - Day 5: Climb Kala Patthar for sunrise views
                - Day 6: Return journey to Base Camp`}
            </code>
          </pre>
        </section>
        <section>
          <h3 className={styles.h3}>3. Highlights of the hikes</h3>
          <p className={styles.p}>
                
          </p>
          

          <ul className={styles.ul}>
            <li className={styles.li}>Beautiful places all around Germany.</li>
            <li className={styles.li}>Amazing traditional German towns.</li>
          </ul>
        </section>
        <section>
          <h3 className={styles.h3}>4. Safety and Support</h3>
          <p className={styles.p}>
            Safety is our top priority. Our experienced guides will ensure you are well-acclimatized and prepared for high altitudes. We provide full support, including medical assistance and emergency backup, to make sure your journey is safe and enjoyable.
          </p>
        </section>
      </>
    ),
  },


  
  {
    
    slug: "language-2024-09-15",
    title: "Language Exchange Program",
    description:
      "Practice and improve your language skills with native speakers in a relaxed and friendly environment.",
    
    categories: [
      categories.find((category) => category.slug === categorySlugs.language),
    ],
    
    author: authors.find((author) => author.slug === authorSlugs.adam),
    
    publishedAt: "2024-09-15",
    image: {
      src: languageExchange,
      urlRelative: "/blog/language-2024-09-15/header.jpg",
      alt: "Language Exchange",
    },
    
    content: (
      <>
        <Image
          src={languageExchange}
          alt="hike"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
      <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Join our Language Exchange Program to practice and improve your language skills with native speakers. Whether you're learning a new language or perfecting your fluency, this program offers a relaxed and friendly environment to enhance your abilities.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>1. Getting Started</h3>
          <p className={styles.p}>
            Our program begins with a warm welcome session where participants introduce themselves and share their language goals. This initial meetup helps break the ice and sets the tone for a collaborative and supportive learning experience.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>2. Interactive Sessions</h3>
          <p className={styles.p}>
            We host regular interactive sessions where you can engage in conversations with native speakers. These sessions are designed to be engaging and fun, focusing on real-life conversational skills rather than textbook learning.
          </p>
        </section>
        <section>
          <h3 className={styles.h3}>3. Benefits of Participation</h3>
          <p className={styles.p}>
            By participating in our Language Exchange Program, you'll gain confidence in speaking, improve your pronunciation, and expand your vocabulary. You'll also have the chance to learn about different cultures and make new friends from around the world.
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Practice with native speakers.</li>
            <li className={styles.li}>Improve your conversational skills.</li>
            <li className={styles.li}>Learn about different cultures.</li>
          </ul>
        </section>
        <section>
          <h3 className={styles.h3}>4. How to Join</h3>
          <p className={styles.p}>
            Joining our Language Exchange Program is easy! Simply join our group through Facebook. We look forward to helping you on your language learning journey.
          </p>
        </section>
      </>
    ),
  },
];
