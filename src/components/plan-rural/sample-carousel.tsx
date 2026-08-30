import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface SampleCarouselProps {
  images: string[];
  className?: string;
}

export function SampleCarousel({ images, className }: SampleCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((src, index) => (
            <div
              key={src}
              className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
            >
              <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-soft">
                <img
                  src={src}
                  alt={`Muestra del material ${String(index + 1).padStart(2, "0")}`}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
