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
    <footer className="mt-auto border-t border-[#eee] bg-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <a href="#hero" className="text-[15px] font-bold text-[#111]">
              {brand}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-[1.6] text-[#767676]">
              {tagline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#767676] transition-colors hover:text-[#111]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-[#111]">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#767676] transition-colors hover:text-[#111]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-[#eee] pt-5 text-xs leading-[1.6] text-[#767676]">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
