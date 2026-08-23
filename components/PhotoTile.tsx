import Image from "next/image";
import { Download } from "lucide-react";

export interface PhotoTileProps {
  src: string;
  alt: string;
  photographer: string;
  href?: string;
  className?: string;
}

export default function PhotoTile({
  src,
  alt,
  photographer,
  href = "#explore",
  className = "",
}: PhotoTileProps) {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="truncate text-sm font-medium text-white">
          {photographer}
        </span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/95 text-neutral-800 shadow-sm">
          <Download size={15} aria-hidden />
          <span className="sr-only">Download</span>
        </span>
      </div>
    </a>
  );
}
