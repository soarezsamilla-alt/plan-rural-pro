import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

/** Placeholder visual para imagens que serão inseridas manualmente depois. */
export interface ImagePlaceholderProps extends ComponentProps<"div"> {
  label: string;
  ratio?: "square" | "portrait" | "wide" | "tall";
}

const ratioMap: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
  tall: "aspect-[4/5]",
};

export function ImagePlaceholder({
  label,
  ratio = "wide",
  className,
  ...props
}: ImagePlaceholderProps) {
  const isUrl = /^https?:\/\//i.test(label);
  if (isUrl) {
    return (
      <img
        src={label}
        alt="Mockup del bono"
        className={cn(
          "h-auto w-full rounded-xl object-contain",
          className,
        )}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      {...props}
      className={cn(
        "flex w-full items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/60 p-4 text-center",
        ratioMap[ratio],
        className,
      )}
    >
      <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        [IMAGEN: {label}]
      </span>
    </div>
  );
}

export interface SectionProps extends ComponentProps<"section"> {
  children: ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section {...props} className={cn("px-5 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "font-display text-3xl leading-tight text-foreground md:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
