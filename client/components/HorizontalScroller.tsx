import React, { PropsWithChildren, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HorizontalScrollerProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}>;

export default function HorizontalScroller({
  className,
  contentClassName,
  children,
}: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.ceil(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative group", className)}>
      <div
        ref={ref}
        className={cn(
          "flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-1",
          "mask-gradient-x",
          contentClassName,
        )}
      >
        {children}
      </div>

      {/* Left/Right controls */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByAmount(-1)}
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2",
          "bg-white/90 shadow-md ring-1 ring-black/5 hover:bg-white",
          "opacity-0 group-hover:opacity-100 transition-opacity",
        )}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByAmount(1)}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2",
          "bg-white/90 shadow-md ring-1 ring-black/5 hover:bg-white",
          "opacity-0 group-hover:opacity-100 transition-opacity",
        )}
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
}
