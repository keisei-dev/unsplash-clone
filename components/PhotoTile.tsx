import Image from "next/image";
import { Bookmark, Download, Plus } from "lucide-react";

export interface PhotoTileProps {
  src: string;
  alt: string;
  photographer: string;
  width: number;
  height: number;
  href?: string;
}

export default function PhotoTile({
  src,
  alt,
  photographer,
  width,
  height,
  href = "#explore",
}: PhotoTileProps) {
  return (
    <a href={href} className="group relative block bg-[#eee]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="block h-auto w-full"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#111]">
          <Plus size={16} strokeWidth={2} aria-hidden />
          <span className="sr-only">Add to collection</span>
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#111]">
          <Bookmark size={16} strokeWidth={2} aria-hidden />
          <span className="sr-only">Like</span>
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="truncate text-[15px] font-medium text-white">
          {photographer}
        </span>
        <span className="inline-flex h-8 items-center gap-1.5 rounded-[4px] bg-white px-3 text-[14px] text-[#111]">
          <Download size={15} aria-hidden />
          Download
        </span>
      </div>
    </a>
  );
}
