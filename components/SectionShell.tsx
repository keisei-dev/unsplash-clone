export interface SectionShellProps {
  id: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionShell({
  id,
  title,
  description,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-b border-black/6 px-4 py-20 sm:px-6 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
