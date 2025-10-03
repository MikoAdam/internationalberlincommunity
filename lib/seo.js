import config from "@/config";

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    title: title || `${config.appName} - Berlin's Leading Integration Non-Profit`,
    description: description || "Join Berlin's largest international community with 10,000+ members from 100+ countries. Free cultural events, hiking, language exchange & integration programs.",
    keywords: keywords || [
      "Berlin integration",
      "international community Berlin", 
      "cultural exchange Berlin",
      "nonprofit Berlin",
      "diversity inclusion",
      "immigrant support",
      "language exchange",
      "hiking Berlin",
      "expat community",
      "refugee integration"
    ],
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || `${config.appName} - Building Bridges Across Cultures`,
      description: openGraph?.description || "Berlin's premier registered non-profit creating sustainable pathways for integration. 10,000+ members, 200+ events, 100+ nationalities.",
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: config.appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/og-image.jpg", // You'll need to create this
          width: 1200,
          height: 630,
          alt: "International Berlin Community - Diverse group of people at cultural event"
        }
      ]
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      site: "@IBCBerlin", // If you create a Twitter account
      creator: "@IBCBerlin",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

// Enhanced Schema markup for nonprofit organization
export const renderOrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "International Berlin Community (IBC) e.V.",
          "alternateName": "IBC",
          "description": "A registered non-profit fostering cross-cultural integration through evidence-based community programs and strategic partnerships in Berlin.",
          "url": `https://${config.domainName}`,
          "logo": `https://${config.domainName}/icon.png`,
          "image": `https://${config.domainName}/assets/og-image.jpg`,
          "email": "ibcmanagement@outlook.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Berlin",
            "addressCountry": "DE"
          },
          "areaServed": {
            "@type": "City",
            "name": "Berlin"
          },
          "foundingDate": "2021",
          "nonprofitStatus": "501c3Equivalent", // German e.V. equivalent
          "mission": "Creating sustainable pathways for integration and meaningful cross-cultural connections in Berlin's diverse international community.",
          "sameAs": [
            "https://www.facebook.com/groups/internationalberlinhiking",
            "https://www.instagram.com/internationalberlincommunity/",
            "https://linktr.ee/InternationalBerlinCommunity"
          ],
          "founder": {
            "@type": "Person",
            "name": "Adam Miko"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Le Phan Thanh Phuong",
              "jobTitle": "President"
            },
            {
              "@type": "Person", 
              "name": "Adam Miko",
              "jobTitle": "Founder / Vice President"
            }
          ],
          "memberOf": {
            "@type": "Organization",
            "name": "Berlin Non-Profit Network"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5"
          }
        }),
      }}
    />
  );
};

// Event schema for programs page
export const renderEventSchema = (events = []) => {
  const eventSchemas = events.map(event => ({
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "location": {
      "@type": "Place",
      "name": "Berlin",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Berlin",
        "addressCountry": "DE"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "International Berlin Community (IBC) e.V.",
      "url": `https://${config.domainName}`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventSeries",
          "name": "IBC Community Events",
          "description": "Regular cultural, hiking, and integration events in Berlin",
          "organizer": {
            "@type": "Organization",
            "name": "International Berlin Community (IBC) e.V."
          },
          "subEvent": eventSchemas
        }),
      }}
    />
  );
};

// Local business schema for Berlin presence
export const renderLocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CommunityCenter",
          "name": "International Berlin Community (IBC) e.V.",
          "description": "Berlin's largest international community organization",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Berlin",
            "addressRegion": "Berlin",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.5200",
            "longitude": "13.4050"
          },
          "url": `https://${config.domainName}`,
          "telephone": "+49-XXX-XXXXXXX", // Add when available
          "email": "ibcmanagement@outlook.com",
          "openingHours": "Mo-Su 00:00-23:59", // Online community always open
          "priceRange": "Free",
          "paymentAccepted": "Cash, Online",
          "currenciesAccepted": "EUR",
          "hasMap": "https://maps.google.com/?q=Berlin,Germany"
        }),
      }}
    />
  );
};