import PhotoTile from "@/components/PhotoTile";

export interface ExplorePhoto {
  src: string;
  alt: string;
  photographer: string;
  href?: string;
}

export interface ExploreSectionProps {
  id: string;
  title: string;
  description: string;
  photos: ExplorePhoto[];
}

export default function ExploreSection({
  id,
  title,
  description,
  photos,
}: ExploreSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-black/6 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => {
            const tall = index % 5 === 1 || index % 5 === 3;
            return (
              <PhotoTile
                key={`${photo.src}-${photo.photographer}`}
                src={photo.src}
                alt={photo.alt}
                photographer={photo.photographer}
                href={photo.href}
                className={`mb-4 break-inside-avoid ${
                  tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
