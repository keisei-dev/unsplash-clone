import Image from "next/image";
import { Plus } from "lucide-react";

export interface CommunityHighlight {
  name: string;
  role: string;
  href: string;
  avatar: {
    src: string;
    alt: string;
  };
}

export interface CommunitySectionProps {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  leftImage: {
    src: string;
    alt: string;
  };
  rightImage: {
    src: string;
    alt: string;
  };
  highlights: CommunityHighlight[];
}

export default function CommunitySection({
  id,
  title,
  description,
  ctaLabel,
  ctaHref,
  leftImage,
  rightImage,
  highlights,
}: CommunitySectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-black/6 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-neutral-200 sm:mt-12">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
              {description}
            </p>
            <a
              href={ctaHref}
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <Plus size={16} aria-hidden />
              {ctaLabel}
            </a>

            <ul className="mt-10 space-y-4 border-t border-black/8 pt-8">
              {highlights.map((person) => (
                <li key={person.name}>
                  <a
                    href={person.href}
                    className="group flex items-center gap-3 rounded-md transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-200">
                      <Image
                        src={person.avatar.src}
                        alt={person.avatar.alt}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700">
                        {person.name}
                      </span>
                      <span className="block text-sm text-neutral-500">
                        {person.role}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
