import { ImagePlaceholder } from "./primitives";

/** Galería de 20 muestras — los mockups reales se agregan manualmente después. */
export function SampleGallery() {
  const samples = Array.from({ length: 20 }, (_, index) =>
    `muestra-${String(index + 1).padStart(2, "0")}`,
  );

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {samples.map((name) => (
        <ImagePlaceholder key={name} label={name} ratio="portrait" />
      ))}
    </div>
  );
}
