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
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div>
        <div className="mb-6 max-w-2xl">
          <h2 className="text-[28px] leading-tight font-bold text-[#111]">
            {title}
          </h2>
          <p className="mt-2 text-[15px] leading-[1.6] text-[#767676]">
            {description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <a
              key={topic.name}
              href={topic.href}
              className="group relative block aspect-4/3 overflow-hidden rounded-[8px] bg-[#eee]"
            >
              <Image
                key={topic.image.src}
                src={topic.image.src}
                alt={topic.image.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <h3 className="text-[18px] font-bold text-white">{topic.name}</h3>
                <p className="mt-0.5 text-[13px] text-white/80">{topic.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
