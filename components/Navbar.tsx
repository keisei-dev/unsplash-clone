"use client";

import { Menu, ScanSearch, Search, X } from "lucide-react";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand: string;
  links: NavLink[];
  topics: { label: string }[];
  searchPlaceholder: string;
  plusLabel: string;
  loginLabel: string;
  submitLabel: string;
}

export default function Navbar({
  brand,
  links,
  topics,
  searchPlaceholder,
  plusLabel,
  loginLabel,
  submitLabel,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="flex h-14 items-center gap-3 px-4 lg:h-16 lg:px-6">
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center text-[#111] transition-colors hover:opacity-70 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <a
          href="#hero"
          className="shrink-0 text-[15px] font-bold text-[#111] lg:hidden"
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
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#767676]"
            aria-hidden
          />
          <input
            type="search"
            placeholder={searchPlaceholder}
            className="h-10 w-full rounded-full bg-[#eee] px-10 text-sm text-[#111] outline-none placeholder:text-[#767676] hover:bg-[#e1e1e1] focus:bg-white focus:ring-1 focus:ring-[#d1d1d1]"
          />
          <span className="absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]">
            <ScanSearch size={16} aria-hidden />
          </span>
        </form>

        <div className="ml-auto flex items-center gap-0.5 md:ml-2">
          <a
            href="#subscribe"
            className="hidden px-2.5 py-2 text-sm text-[#767676] transition-colors hover:text-[#111] sm:inline-flex"
          >
            {plusLabel}
          </a>
          <a
            href="#subscribe"
            className="hidden px-2.5 py-2 text-sm text-[#767676] transition-colors hover:text-[#111] sm:inline-flex"
          >
            {loginLabel}
          </a>
          <a
            href="#community"
            className="ml-1 inline-flex h-8 items-center rounded-sm border border-[#d1d1d1] bg-white px-3 text-sm text-[#111] transition-colors hover:border-[#111]"
          >
            {submitLabel}
          </a>
        </div>
      </div>

      <nav className="border-b border-[#eee]" aria-label="Photo categories">
        <div className="flex gap-6 overflow-x-auto px-4 lg:px-6">
          {topics.map((topic, index) => (
            <button
              key={topic.label}
              type="button"
              className={`shrink-0 border-b-2 py-3 text-sm transition-colors ${
                index === 0
                  ? "border-[#111] font-bold text-[#111]"
                  : "border-transparent text-[#767676] hover:text-[#111]"
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </nav>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-b border-[#eee] bg-white px-4 py-4 lg:hidden">
          <form
            className="relative mb-4 md:hidden"
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <Search
              size={16}
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#767676]"
              aria-hidden
            />
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="h-10 w-full rounded-full bg-[#eee] pr-4 pl-10 text-sm text-[#111] outline-none placeholder:text-[#767676]"
            />
          </form>
          <nav className="flex flex-col" aria-label="Mobile primary">
            {[
              ...links,
              { label: plusLabel, href: "#subscribe" },
              { label: loginLabel, href: "#subscribe" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2.5 text-[15px] text-[#111]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
