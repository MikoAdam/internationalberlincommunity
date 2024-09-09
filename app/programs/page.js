import { Suspense } from 'react';
import { categories, programs } from "@/app/programs/_assets/content";
import CardProgram from "@/app/programs/_assets/components/CardProgram";
import CardCategory from "@/app/programs/_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import dynamic from 'next/dynamic';

export const metadata = getSEOTags({
  title: `${config.appName} Programs`,
  description:
    "Discover and participate in our latest programs to enhance your skills and knowledge.",
  canonicalUrlRelative: "/programs",
});

// Dynamically import SearchForm to ensure it loads as a client component
const SearchForm = dynamic(() => import('@/components/SearchForm'), { ssr: false });

export default async function Programs() {
  const programsToDisplay = programs
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);

  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-12">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchForm data={programs} dataType="programs" />
        </Suspense>
      </section>
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          {config.appName} Programs
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Explore our latest programs designed to help you grow and succeed. Stay updated with the newest opportunities and offerings.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {programsToDisplay.map((program, i) => (
          <CardProgram
            program={program}
            key={program.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Browse programs by category
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>
    </>
  );
}