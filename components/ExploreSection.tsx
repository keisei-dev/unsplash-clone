import PhotoTile from "@/components/PhotoTile";

export interface ExplorePhoto {
  src: string;
  alt: string;
  photographer: string;
  width: number;
  height: number;
  href?: string;
}

export interface ExploreSectionProps {
  id: string;
  title: string;
  photos: ExplorePhoto[];
}

function columnFor(photos: ExplorePhoto[], columns: number, index: number) {
  return photos.filter((_, photoIndex) => photoIndex % columns === index);
}

export default function ExploreSection({
  id,
  title,
  photos,
}: ExploreSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 pb-12 lg:px-8">
      <h2 className="sr-only">{title}</h2>

      <div className="flex flex-col gap-6 sm:hidden">
        {photos.map((photo) => (
          <PhotoTile key={`${photo.src}-${photo.photographer}`} {...photo} />
        ))}
      </div>

      <div className="hidden gap-6 sm:flex lg:hidden">
        {[0, 1].map((column) => (
          <div key={column} className="flex min-w-0 flex-1 flex-col gap-6">
            {columnFor(photos, 2, column).map((photo) => (
              <PhotoTile key={`${photo.src}-${photo.photographer}`} {...photo} />
            ))}
          </div>
        ))}
      </div>

      <div className="hidden gap-6 lg:flex">
        {[0, 1, 2].map((column) => (
          <div key={column} className="flex min-w-0 flex-1 flex-col gap-6">
            {columnFor(photos, 3, column).map((photo) => (
              <PhotoTile key={`${photo.src}-${photo.photographer}`} {...photo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
