import { useRouter } from "next/navigation";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";

// This is the program card that appears on the home page, category page, and author's page
const CardProgram = ({
  program,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const router = useRouter();
  const TitleTag = tag;

  return (
    <article className="card bg-base-200 rounded-box overflow-hidden">
      {program.image?.src && (
        <figure 
          onClick={() => router.push(`/programs/${program.slug}`)}
          className="cursor-pointer hover:opacity-90 transition-opacity"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push(`/programs/${program.slug}`);
            }
          }}
        >
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
      )}
      <div className="card-body">
        {/* CATEGORIES */}
        {showCategory && (
          <div className="flex flex-wrap gap-2">
            {program.categories.map((category) => (
              <BadgeCategory category={category} key={category.slug} />
            ))}
          </div>
        )}

        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="mb-1 text-xl md:text-2xl font-bold">
          <button
            onClick={() => router.push(`/programs/${program.slug}`)}
            className="text-left hover:text-primary transition-colors"
            title={program.title}
          >
            {program.title}
          </button>
        </TitleTag>

        <div className="text-base-content/80 space-y-4">
          {/* DESCRIPTION */}
          <p className="">{program.description}</p>

          {/* AUTHOR & DATE */}
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