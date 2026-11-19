import { useEffect, useState } from "react";

const galleryPhotos = Object.entries(import.meta.glob<string>("/src/assets/galeria-runda-1/*.{jpg,jpeg,JPG,JPEG}", { eager: true, query: "?url", import: "default" }))
  .sort(([a], [b]) => a.localeCompare(b, "pl", { numeric: true }))
  .map(([path, url]) => ({ path, url }));

const headingStyle = { fontFamily: '"Barlow Condensed", sans-serif' };

export function RoundOneGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const count = galleryPhotos.length;
  const selected = selectedIndex === null ? null : galleryPhotos[selectedIndex];

  const previous = () => {
    setSelectedIndex((index) => (index === null ? null : (index - 1 + count) % count));
  };
  const next = () => {
    setSelectedIndex((index) => (index === null ? null : (index + 1) % count));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((index) => (index === null ? null : (index - 1 + count) % count));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((index) => (index === null ? null : (index + 1) % count));
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, count]);

  if (count === 0) return null;

  return (
    <section aria-labelledby="round-one-gallery-heading" className="space-y-6 border-t border-[#bebdbc] pt-8">
      <h2 id="round-one-gallery-heading" className="text-[#1c3b56] text-[32px] font-semibold leading-[normal]" style={headingStyle}>
        Galeria rundy I
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {galleryPhotos.map((photo, index) => (
          <button
            type="button"
            key={photo.path}
            className="relative block aspect-square w-full overflow-hidden bg-[#d9d3cf] cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00378D] focus-visible:outline-offset-2 group"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Powiększ zdjęcie ${index + 1} z ${count}`}
          >
            <img
              src={photo.url}
              alt={`Zdjęcie ${index + 1} z pierwszej rundy kampanii`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Zdjęcie ${selectedIndex + 1} z ${count}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0e]/95 px-2 sm:px-6 py-8"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-3 sm:right-8 sm:top-5 z-10 text-white text-[34px] leading-none hover:opacity-70"
            aria-label="Zamknij galerię"
            onClick={(event) => { event.stopPropagation(); setSelectedIndex(null); }}
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white text-[42px] leading-none hover:opacity-70"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => { event.stopPropagation(); previous(); }}
          >
            ‹
          </button>
          <img
            src={selected.url}
            alt={`Powiększone zdjęcie ${selectedIndex + 1} z kampanii`}
            className="max-h-[82vh] max-w-[calc(100vw-96px)] sm:max-w-[85vw] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white text-[42px] leading-none hover:opacity-70"
            aria-label="Następne zdjęcie"
            onClick={(event) => { event.stopPropagation(); next(); }}
          >
            ›
          </button>
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[16px] font-medium"
            style={headingStyle}
          >
            {selectedIndex + 1} / {count}
          </p>
        </div>
      )}
    </section>
  );
}
