import { categories, programs } from "@/app/programs/_assets/content";
import CardProgram from "@/app/programs/_assets/components/CardProgram";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );

  return getSEOTags({
    title: `${category.title} | Programs by ${config.appName}`,
    description: category.description,
    canonicalUrlRelative: `/programs/category/${category.slug}`,
  });
}

export default async function Category({ params }) {
  const category = categories.find(
    (category) => category.slug === params.categoryId
  );
  const programsInCategory = programs
    .filter((program) =>
      program.categories.map((c) => c.slug).includes(category.slug)
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <section className="mt-12 mb-24 md:mb-32 max-w-3xl mx-auto text-center">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 md:mb-12">
          {category.title}
        </h1>
        <p className="md:text-lg opacity-80 max-w-xl mx-auto">
          {category.description}
        </p>
      </section>

      <section className="mb-24">
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Most recent programs in {category.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {programsInCategory.map((program) => (
            <CardProgram
              key={program.slug}
              program={program}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Other categories you might like
        </h2>
      </section>
    </>
  );
}