import Image from "next/image";

export interface TopicItem {
  name: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface TopicsSectionProps {
  id: string;
  title: string;
  description: string;
  topics: TopicItem[];
}

export default function TopicsSection({
  id,
  title,
  description,
  topics,
}: TopicsSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-black/6 bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <a
              key={topic.name}
              href={topic.href}
              className="group relative block aspect-[4/3] overflow-hidden bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <Image
                src={topic.image.src}
                alt={topic.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-white">{topic.name}</h3>
                <p className="mt-1 text-sm text-white/80">{topic.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
