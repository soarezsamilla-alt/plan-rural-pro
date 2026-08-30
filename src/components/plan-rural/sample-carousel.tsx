import { cn } from "@/lib/utils";

interface SampleCarouselProps {
  images: string[];
  className?: string;
  size?: "small" | "default" | "large";
  showArrows?: boolean;
}

const slideSizeMap = {
  small: {
    mobile: "flex-[0_0_52%]",
    sm: "sm:flex-[0_0_34%]",
    md: "md:flex-[0_0_24%]",
    lg: "lg:flex-[0_0_18%]",
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

export function SampleCarousel({
  images,
  className,
  size = "default",
}: SampleCarouselProps) {
  const slideClasses = slideSizeMap[size];
  const durationSeconds = Math.max(images.length * 3, 30);

  const renderSlides = (offsetIndex: number) =>
    images.map((src, index) => {
      const key = `${src}-${offsetIndex}`;
      return (
        <div
          key={key}
          className={cn(
            "min-w-0 shrink-0",
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
              draggable={false}
            />
          </div>
        </div>
      );
    });

  return (
    <div className={cn("overflow-hidden rounded-2xl", className)}>
      <div
        className="sample-marquee-track gap-4"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {renderSlides(0)}
        {renderSlides(1)}
      </div>
    </div>
  );
}
