import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";

const CardProgram = ({
  program,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const TitleTag = tag;

  return (
    <article className="card bg-base-200 rounded-box overflow-hidden">
      {program.image?.src && (
        <Link href={`/programs/${program.slug}`}>
          <figure className="cursor-pointer hover:opacity-90 transition-opacity">
            <Image
              src={program.image.src}
              alt={program.image.alt}
              width={600}
              height={338}
              priority={isImagePriority}
              placeholder="blur"
              className="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
            />
          </figure>
        </Link>
      )}
      <div className="card-body">
        {showCategory && (
          <div className="flex flex-wrap gap-2">
            {program.categories.map((category) => (
              <BadgeCategory category={category} key={category.slug} />
            ))}
          </div>
        )}

        <TitleTag className="mb-1 text-xl md:text-2xl font-bold">
          <Link
            href={`/programs/${program.slug}`}
            className="hover:text-primary transition-colors"
            title={program.title}
          >
            {program.title}
          </Link>
        </TitleTag>

        <div className="text-base-content/80 space-y-4">
          <p className="">{program.description}</p>

          <div className="flex items-center gap-4 text-sm">
            <Avatar article={program} />
            <span itemProp="datePublished">
              {new Date(program.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProgram;