export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  brand: string;
  tagline: string;
  columns: FooterColumn[];
  socialLinks: FooterLink[];
  copyright: string;
}

export default function Footer({
  brand,
  tagline,
  columns,
  socialLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="mt-auto border-t border-black/8 bg-neutral-50">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div>
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-70"
            >
              {brand}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-600">
              {tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold tracking-wide text-neutral-900 uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-black/8 pt-6 text-sm text-neutral-500">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
