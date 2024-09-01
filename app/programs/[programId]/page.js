import Link from "next/link";
import Script from "next/script";
import { programs } from "@/app/programs/_assets/content";
import BadgeCategory from "@/app/programs/_assets/components/BadgeCategory";
import Avatar from "@/app/programs/_assets/components/Avatar";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const program = programs.find((program) => program.slug === params.programId);

  return getSEOTags({
    title: program.title,
    description: program.description,
    canonicalUrlRelative: `/programs/${program.slug}`,
    extraTags: {
      openGraph: {
        title: program.title,
        description: program.description,
        url: `/programs/${program.slug}`,
        images: [
          {
            url: program.image.urlRelative,
            width: 1200,
            height: 660,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    },
  });
}

export default async function Program({ params }) {
  const program = programs.find((program) => program.slug === params.programId);
  const relatedPrograms = programs
    .filter(
      (p) =>
        p.slug !== params.programId &&
        p.categories.some((c) =>
          program.categories.map((c) => c.slug).includes(c.slug)
        )
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <Script
        type="application/ld+json"
        id={`json-ld-program-${program.slug}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://${config.domainName}/programs/${program.slug}`,
            },
            name: program.title,
            headline: program.title,
            description: program.description,
            image: `https://${config.domainName}${program.image.urlRelative}`,
            datePublished: program.publishedAt,
            dateModified: program.publishedAt,
            author: {
              "@type": "Person",
              name: program.author.name,
            },
          }),
        }}
      />

      {/* GO BACK LINK */}
      <div>
        <Link
          href="/programs"
          className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
          title="Back to Programs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Programs
        </Link>
      </div>

      <article>
        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
        <section className="my-12 md:my-20 max-w-[800px]">
          <div className="flex items-center gap-4 mb-6">
            {program.categories.map((category) => (
              <BadgeCategory
                category={category}
                key={category.slug}
                extraStyle="!badge-lg"
              />
            ))}
            <span className="text-base-content/80" itemProp="datePublished">
              {new Date(program.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
            {program.title}
          </h1>

          <p className="text-base-content/80 md:text-lg max-w-[700px]">
            {program.description}
          </p>
        </section>

        <div className="flex flex-col md:flex-row">
          {/* SIDEBAR WITH AUTHORS AND 3 RELATED PROGRAMS */}
          <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0 border-base-content/10">
            <p className="text-base-content/80 text-sm mb-2 md:mb-3">
              Posted by
            </p>
            <Avatar article={program} />

            {relatedPrograms.length > 0 && (
              <div className="hidden md:block mt-12">
                <p className="text-base-content/80 text-sm  mb-2 md:mb-3">
                  Related reading
                </p>
                <div className="space-y-2 md:space-y-5">
                  {relatedPrograms.map((program) => (
                    <div className="" key={program.slug}>
                      <p className="mb-0.5">
                        <Link
                          href={`/programs/${program.slug}`}
                          className="link link-hover hover:link-primary font-medium"
                          title={program.title}
                          rel="bookmark"
                        >
                          {program.title}
                        </Link>
                      </p>
                      <p className="text-base-content/80 max-w-full text-sm">
                        {program.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* PROGRAM CONTENT */}
          <section className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20">
            {program.content}
          </section>
        </div>
      </article>
    </>
  );
}