import {
  Bookmark,
  Compass,
  Download,
  FolderPlus,
  MoreVertical,
  PenLine,
  UserRound,
} from "lucide-react";
export interface SidebarLink {
  label: string;
  href: string;
  icon:
    | "photos"
    | "contribute"
    | "explore"
    | "collections"
    | "download"
    | "bookmark"
    | "account"
    | "language"
    | "more";
}

export interface SidebarProps {
  brandHref: string;
  links: SidebarLink[];
}

const bottomIcons = new Set(["account", "language", "more"]);

export default function Sidebar({ brandHref, links }: SidebarProps) {
  const primary = links.filter((link) => !bottomIcons.has(link.icon));
  const utility = links.filter((link) => bottomIcons.has(link.icon));

  return (
    <aside className="sticky top-0 hidden h-screen w-14 shrink-0 flex-col items-center border-r border-[#eee] bg-[#fafafa] py-3 lg:flex">
      <a
        href={brandHref}
        className="mb-5 flex h-8 w-8 items-center justify-center text-black transition-opacity hover:opacity-70"
        aria-label="Unsplash home"
      >
        <UnsplashMark />
      </a>

      <nav className="flex flex-1 flex-col items-center gap-1" aria-label="Sidebar">
        {primary.map((link) => (
          <SidebarItem key={link.label} link={link} />
        ))}
      </nav>

      <div className="flex flex-col items-center gap-1 pb-1">
        {utility.map((link) => (
          <SidebarItem key={link.label} link={link} />
        ))}
      </div>
    </aside>
  );
}

function SidebarItem({ link }: { link: SidebarLink }) {
  return (
    <a
      href={link.href}
      title={link.label}
      className="flex h-9 w-9 items-center justify-center rounded-md text-[#111] transition-colors hover:bg-[#eee]"
    >
      <SidebarIcon name={link.icon} />
      <span className="sr-only">{link.label}</span>
    </a>
  );
}

function SidebarIcon({ name }: { name: SidebarLink["icon"] }) {
  const stroke = 1.5;

  switch (name) {
    case "photos":
      return <PhotosIcon />;
    case "contribute":
      return <PenLine size={18} strokeWidth={stroke} />;
    case "explore":
      return <Compass size={18} strokeWidth={stroke} />;
    case "collections":
      return <FolderPlus size={18} strokeWidth={stroke} />;
    case "download":
      return <Download size={18} strokeWidth={stroke} />;
    case "bookmark":
      return <Bookmark size={18} strokeWidth={stroke} />;
    case "account":
      return <UserRound size={18} strokeWidth={stroke} />;
    case "language":
      return <LanguageIcon />;
    case "more":
      return <MoreVertical size={18} strokeWidth={stroke} />;
    default:
      return null;
  }
}

function PhotosIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="6.5"
        width="11"
        height="11"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="9.5"
        y="3.5"
        width="11"
        height="11"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <span className="relative block h-4 w-4 text-[#111]">
      <span className="absolute top-0 left-0 text-[13px] leading-none font-medium">
        文
      </span>
      <span className="absolute right-0 bottom-0 text-[13px] leading-none font-medium">
        A
      </span>
    </span>
  );
}

function UnsplashMark() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden>
      <path fill="currentColor" d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
    </svg>
  );
}
