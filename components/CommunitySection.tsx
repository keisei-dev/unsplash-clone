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
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-[8px] bg-[#eee]">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-[8px] bg-[#eee] sm:mt-12">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[28px] leading-tight font-bold text-[#111] sm:text-[32px]">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-[1.6] text-[#767676]">
              {description}
            </p>
            <a
              href={ctaHref}
              className="mt-6 inline-flex h-8 items-center gap-2 rounded-[4px] bg-[#111] px-3 text-[14px] text-white transition-opacity hover:opacity-85"
            >
              <Plus size={16} aria-hidden />
              {ctaLabel}
            </a>

            <ul className="mt-10 space-y-4 border-t border-[#eee] pt-8">
              {highlights.map((person) => (
                <li key={person.name}>
                  <a
                    href={person.href}
                    className="group flex items-center gap-3 rounded-[4px] transition-colors hover:bg-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
                  >
                    <span className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-200">
                      <Image
                        src={person.avatar.src}
                        alt={person.avatar.alt}
                        fill
                        unoptimized
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-[14px] font-medium text-[#111]">
                        {person.name}
                      </span>
                      <span className="block text-[13px] text-[#767676]">
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
