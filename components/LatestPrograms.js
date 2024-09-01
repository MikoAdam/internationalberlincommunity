import { programs } from "@/app/programs/_assets/content";
import Link from "next/link";
import Image from "next/image";
import Button2Section from "@/components/Button2Section"; // Import Button2Section

const LatestPrograms = () => {
  // Sort programs to get the latest two
  const latestPrograms = programs
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 2);

  return (
    <section className="bg-base-200 py-24"> {/* Changed bg-base-100 to bg-base-200 */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">
            Exciting Events Just Around the Corner!
          </h2>
          <p className="font-light text-base-content/80 sm:text-xl">
            Don’t miss out on our upcoming events, tailored to bring people together and create unforgettable experiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {latestPrograms.map((program) => (
            <article key={program.slug} className="p-6 bg-base-100 rounded-lg border border-base-200 shadow-md">
              <div className="mb-5">
                <Link href={`/programs/${program.slug}`} className="link link-hover hover:link-primary" title={program.title} rel="bookmark">
                  <figure>
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      width={600}
                      height={338}
                      className="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out rounded-lg"
                    />
                  </figure>
                </Link>
              </div>
              <div className="flex justify-between items-center mb-5 text-base-content-secondary">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                  {program.categories[0].title}
                </span>
                <span className="text-sm">{new Date(program.publishedAt).toLocaleDateString()}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-base-content">
                <Link href={`/programs/${program.slug}`} className="link link-hover hover:link-primary" title={program.title} rel="bookmark">
                  {program.title}
                </Link>
              </h2>
              <p className="mb-5 font-light text-base-content-secondary">{program.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image className="w-7 h-7 rounded-full" src={program.author.avatar.src} alt={`${program.author.name} avatar`} width={28} height={28} />
                  <span className="font-medium text-base-content">
                    {program.author.name}
                  </span>
                </div>
                <Link href={`/programs/${program.slug}`} className="inline-flex items-center font-medium text-primary hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {/* Add Button2Section at the end */}
        <div className="flex justify-center mt-12">
          <div className="max-w-xs">
            <Button2Section />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPrograms;