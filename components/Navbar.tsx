"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand: string;
  links: NavLink[];
  topics: NavLink[];
  searchPlaceholder: string;
  loginLabel: string;
  joinLabel: string;
  submitLabel: string;
}

export default function Navbar({
  brand,
  links,
  topics,
  searchPlaceholder,
  loginLabel,
  joinLabel,
  submitLabel,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:gap-4 sm:px-6">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a
          href="#hero"
          className="shrink-0 text-lg font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-70"
        >
          {brand}
        </a>

        <form
          className="relative hidden min-w-0 flex-1 md:block"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-neutral-500"
            aria-hidden
          />
          <input
            type="search"
            placeholder={searchPlaceholder}
            className="h-10 w-full rounded-full bg-neutral-100 pr-4 pl-10 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 hover:bg-neutral-200/80 focus:bg-neutral-200/80 focus-visible:ring-2 focus-visible:ring-neutral-900/20"
          />
        </form>

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href="#subscribe"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:inline-flex"
          >
            {loginLabel}
          </a>
          <a
            href="#subscribe"
            className="inline-flex h-9 items-center rounded-md bg-neutral-900 px-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            {joinLabel}
          </a>
          <a
            href="#explore"
            className="hidden h-9 items-center rounded-md border border-neutral-300 px-3.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50 sm:inline-flex"
          >
            {submitLabel}
          </a>
        </div>
      </div>

      <nav
        className="hidden border-t border-black/6 lg:block"
        aria-label="Topics"
      >
        <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-4 py-2 sm:px-6">
          {topics.map((topic, index) => (
            <a
              key={topic.href}
              href={topic.href}
              className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                index === 0
                  ? "font-semibold text-neutral-900"
                  : "font-medium text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {topic.label}
            </a>
          ))}
        </div>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-black/8 bg-white px-4 py-4 lg:hidden"
        >
          <form
            className="relative mb-4 md:hidden"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <Search
              size={16}
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-neutral-500"
              aria-hidden
            />
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="h-10 w-full rounded-full bg-neutral-100 pr-4 pl-10 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-neutral-900/20"
            />
          </form>

          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-3 border-t border-black/8 pt-3">
            <p className="mb-2 px-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
              Topics
            </p>
            <nav className="flex flex-col gap-1" aria-label="Mobile topics">
              {topics.map((topic) => (
                <a
                  key={topic.href}
                  href={topic.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {topic.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#explore"
            className="mt-4 flex h-10 items-center justify-center rounded-md border border-neutral-300 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50 sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            {submitLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
}
