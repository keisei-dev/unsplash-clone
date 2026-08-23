"use client";

import { Search, TrendingUp } from "lucide-react";
import Image from "next/image";

export interface HeroProps {
  id: string;
  headline: string;
  subheadline: string;
  searchPlaceholder: string;
  trendingLabel: string;
  trendingHref: string;
  sponsorLabel: string;
  image: {
    src: string;
    alt: string;
  };
  photographer: {
    name: string;
    href: string;
  };
}

export default function Hero({
  id,
  headline,
  subheadline,
  searchPlaceholder,
  trendingLabel,
  trendingHref,
  sponsorLabel,
  image,
  photographer,
}: HeroProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-[min(88vh,920px)] scroll-mt-28 items-center justify-center overflow-hidden"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-black/45 via-black/40 to-black/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-28">
        <div className="hero-enter">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg md:text-xl">
            {subheadline}
          </p>
          <p className="mt-2 text-sm text-white/70">{sponsorLabel}</p>
        </div>

        <form
          className="hero-enter hero-enter-delay mt-8 sm:mt-10"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <label htmlFor="hero-search" className="sr-only">
            {searchPlaceholder}
          </label>
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-neutral-500 sm:left-5"
              aria-hidden
            />
            <input
              id="hero-search"
              type="search"
              placeholder={searchPlaceholder}
              className="h-12 w-full rounded-md bg-white pr-4 pl-11 text-sm text-neutral-900 shadow-lg outline-none transition-[box-shadow,transform] placeholder:text-neutral-500 hover:shadow-xl focus:shadow-xl focus-visible:ring-2 focus-visible:ring-white/80 sm:h-14 sm:rounded-lg sm:pl-12 sm:text-base"
            />
          </div>
        </form>

        <a
          href={trendingHref}
          className="hero-enter hero-enter-delay-2 mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <TrendingUp size={16} aria-hidden />
          {trendingLabel}
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-4">
          <p className="text-xs text-white/75 sm:text-sm">
            Photo by{" "}
            <a
              href={photographer.href}
              className="underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
            >
              {photographer.name}
            </a>{" "}
            on Unsplash
          </p>
        </div>
      </div>
    </section>
  );
}
