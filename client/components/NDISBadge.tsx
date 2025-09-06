import React from "react";

interface NDISBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function NDISBadge({
  className = "",
  size = "lg",
  position = "top-right",
}: NDISBadgeProps) {
  const sizeClasses = size === "lg" ? "w-20" : size === "sm" ? "w-12" : "w-14";
  const posClasses =
    position === "top-left"
      ? "top-2 left-2"
      : position === "top-right"
        ? "top-2 right-2"
        : position === "bottom-left"
          ? "bottom-2 left-2"
          : "bottom-2 right-2";

  return (
    <div
      className={`pointer-events-none select-none absolute ${posClasses} z-20 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-white/50 shadow-lg p-1.5 ${className}`}
    >
      <img
        src="/images/NDIS.png"
        alt="NDIS"
        className={`${sizeClasses} h-auto drop-shadow-sm`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
