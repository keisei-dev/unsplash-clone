import PhotoTile from "@/components/PhotoTile";

export interface ExplorePhoto {
  src: string;
  alt: string;
  photographer: string;
  width: number;
  height: number;
}

export interface ExploreSectionProps {
  id: string;
  title: string;
  photos: ExplorePhoto[];
}

function packColumns(photos: ExplorePhoto[], columns: number) {
  const packed: ExplorePhoto[][] = Array.from({ length: columns }, () => []);
  const heights = Array.from({ length: columns }, () => 0);

  for (const photo of photos) {
    let shortest = 0;
    for (let column = 1; column < columns; column += 1) {
      if (heights[column] < heights[shortest]) {
        shortest = column;
      }
    }
    packed[shortest].push(photo);
    heights[shortest] += photo.height / photo.width;
  }

  return packed;
}

export default function ExploreSection({
  id,
  title,
  photos,
}: ExploreSectionProps) {
  return (
    <section id={id} className="scroll-mt-36 px-6 pb-12 lg:px-8">
      <h2 className="sr-only">{title}</h2>

      <div className="flex flex-col gap-6 sm:hidden">
        {photos.map((photo, index) => (
          <PhotoTile key={`${photo.src}-${index}`} {...photo} />
        ))}
      </div>

      <div className="hidden items-start gap-6 sm:flex lg:hidden">
        {packColumns(photos, 2).map((columnPhotos, column) => (
          <div key={column} className="flex min-w-0 flex-1 flex-col gap-6">
            {columnPhotos.map((photo, index) => (
              <PhotoTile key={`${photo.src}-${column}-${index}`} {...photo} />
            ))}
          </div>
        ))}
      </div>

      <div className="hidden items-start gap-6 lg:flex">
        {packColumns(photos, 3).map((columnPhotos, column) => (
          <div key={column} className="flex min-w-0 flex-1 flex-col gap-6">
            {columnPhotos.map((photo, index) => (
              <PhotoTile key={`${photo.src}-${column}-${index}`} {...photo} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
