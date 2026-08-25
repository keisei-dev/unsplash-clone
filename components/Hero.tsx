"use client";

import { ScanSearch, Search } from "lucide-react";
import Image from "next/image";

export interface HeroPromoImage {
  src: string;
  alt: string;
  className: string;
}

export interface HeroProps {
  id: string;
  brand: string;
  headline: string;
  headlineLine2: string;
  searchPlaceholder: string;
  promoTitle: string;
  promoSubtitle: string;
  promoCta: string;
  promoHref: string;
  promoImages: HeroPromoImage[];
}

export default function Hero({
  id,
  brand,
  headline,
  headlineLine2,
  searchPlaceholder,
  promoTitle,
  promoSubtitle,
  promoCta,
  promoHref,
  promoImages,
}: HeroProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 pt-16 pb-16 lg:px-8 lg:pt-20">
      <div className="flex flex-col items-stretch gap-10 lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col lg:h-73">
          <h1 className="text-[40px] leading-none font-bold tracking-[-0.03em] text-black">
            {brand}
          </h1>
          <p className="mt-3 text-lg leading-normal text-black">
            {headline}
            <br />
            {headlineLine2}
          </p>

          <form
            className="relative mt-8 lg:mt-auto"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <Search
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#767676]"
              aria-hidden
            />
            <label htmlFor="hero-search" className="sr-only">
              {searchPlaceholder}
            </label>
            <input
              id="hero-search"
              type="search"
              placeholder={searchPlaceholder}
              className="h-13.5 w-full rounded-full bg-[#eee] px-12 text-[15px] text-[#111] outline-none placeholder:text-[#767676] hover:bg-[#e1e1e1] focus:bg-white focus:ring-1 focus:ring-[#d1d1d1]"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[#767676]">
              <ScanSearch size={18} aria-hidden />
            </span>
          </form>
        </div>

        <a
          href={promoHref}
          className="group relative grid h-73 w-full shrink-0 overflow-hidden rounded-2xl border border-[#eee] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:w-[48%]"
        >
          <UnsplashPlusMark />
          <div className="flex h-full flex-col items-start px-5 pt-12 pb-8">
            <p className="text-xl leading-tight font-bold text-black">
              {promoTitle}
            </p>
              <p className="mt-1.5 text-[15px] leading-normal whitespace-pre-line text-[#767676]">
                {promoSubtitle}
              </p>
            <span className="mt-auto inline-flex h-9 w-fit items-center rounded-full bg-black px-4 text-sm text-white">
              {promoCta}
            </span>
          </div>
          <div className="relative hidden sm:block">
            {promoImages.map((image) => (
              <div
                key={`${image.src}-${image.className}`}
                className={`absolute overflow-hidden rounded-lg shadow-[0_16px_36px_rgba(0,0,0,0.18)] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </a>
      </div>
    </section>
  );
}

function UnsplashPlusMark() {
  return (
    <span className="absolute top-5 left-5 z-10" aria-hidden>
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="square"
          d="M12 5v14M5 12h14"
        />
      </svg>
    </span>
  );
}
