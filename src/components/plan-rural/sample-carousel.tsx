import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface SampleCarouselProps {
  images: string[];
  className?: string;
  size?: "small" | "default" | "large";
  showArrows?: boolean;
  marquee?: boolean;
}

const slideSizeMap = {
  small: {
    mobile: "flex-[0_0_38%]",
    sm: "sm:flex-[0_0_24%]",
    md: "md:flex-[0_0_18%]",
    lg: "lg:flex-[0_0_14%]",
  },
  default: {
    mobile: "flex-[0_0_75%]",
    sm: "sm:flex-[0_0_50%]",
    md: "md:flex-[0_0_33.333%]",
    lg: "lg:flex-[0_0_25%]",
  },
  large: {
    mobile: "flex-[0_0_85%]",
    sm: "sm:flex-[0_0_60%]",
    md: "md:flex-[0_0_40%]",
    lg: "lg:flex-[0_0_30%]",
  },
};

const marqueeSlideSizeMap = {
  small: {
    mobile: "w-[130px]",
    sm: "sm:w-[150px]",
    md: "md:w-[170px]",
    lg: "lg:w-[190px]",
  },
  default: {
    mobile: "w-[220px]",
    sm: "sm:w-[260px]",
    md: "md:w-[300px]",
    lg: "lg:w-[340px]",
  },
  large: {
    mobile: "w-[260px]",
    sm: "sm:w-[320px]",
    md: "md:w-[380px]",
    lg: "lg:w-[440px]",
  },
};

function MarqueeSlide({
  src,
  index,
  size,
}: {
  src: string;
  index: number;
  size: "small" | "default" | "large";
}) {
  const slideClasses = slideSizeMap[size];
  return (
    <div
      className={cn(
        "min-w-0 shrink-0 px-2",
        slideClasses.mobile,
        slideClasses.sm,
        slideClasses.md,
        slideClasses.lg,
      )}
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
  );
}

export function SampleCarousel({
  images,
  className,
  size = "default",
  showArrows = true,
  marquee = false,
}: SampleCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slideClasses = slideSizeMap[size];

  if (marquee) {
    const duplicatedImages = [...images, ...images];
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", className)}>
        <div className="marquee-track">
          {duplicatedImages.map((src, index) => (
            <MarqueeSlide key={`${src}-${index}`} src={src} index={index % images.length} size={size} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                "min-w-0",
                slideClasses.mobile,
                slideClasses.sm,
                slideClasses.md,
                slideClasses.lg,
              )}
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

      {showArrows && (
        <>
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-primary text-primary-foreground shadow-lift backdrop-blur-sm transition-all",
              "hover:scale-110 hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none",
              "-translate-x-0 md:-translate-x-5",
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-primary text-primary-foreground shadow-lift backdrop-blur-sm transition-all",
              "hover:scale-110 hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none",
              "translate-x-0 md:translate-x-5",
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
