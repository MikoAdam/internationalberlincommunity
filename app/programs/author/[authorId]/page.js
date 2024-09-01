import Image from "next/image";
import { authors, programs } from "@/app/programs/_assets/content";
import CardProgram from "@/app/programs/_assets/components/CardProgram";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const author = authors.find((author) => author.slug === params.authorId);

  return getSEOTags({
    title: `${author.name}, Author at ${config.appName}`,
    description: `${author.name}, Author at ${config.appName}`,
    canonicalUrlRelative: `/programs/author/${author.slug}`,
  });
}

export default async function Author({ params }) {
  const author = authors.find((author) => author.slug === params.authorId);
  const programsByAuthor = programs
    .filter((program) => program.author.slug === author.slug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <>
      <section className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-24 md:mb-32">
        <div>
          <p className="text-xs uppercase tracking-wide text-base-content/80 mb-2">
            Authors
          </p>
          <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-2">
            {author.name}
          </h1>
          <p className="md:text-lg mb-6 md:mb-10 font-medium">{author.job}</p>
          <p className="md:text-lg text-base-content/80">
            {author.description}
          </p>
        </div>

        <div className="max-md:order-first flex md:flex-col gap-4 shrink-0">
          <Image
            src={author.avatar.src} // Updated to match the avatar structure
            width={256}
            height={256}
            alt={author.name}
            priority={true}
            className="rounded-box w-[12rem] md:w-[16rem] "
          />

          {author.socials?.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4">
              {author.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="btn btn-square"
                  // Using a dark theme? -> className="btn btn-square btn-neutral"
                  title={`Go to ${author.name} profile on ${social.name}`}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Most recent programs by {author.name}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {programsByAuthor.map((program) => (
            <CardProgram key={program.slug} program={program} />
          ))}
        </div>
      </section>
    </>
  );
}