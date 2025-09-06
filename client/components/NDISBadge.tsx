import React from "react";

interface NDISBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export default function NDISBadge({
  className = "",
  size = "md",
  position = "bottom-right",
}: NDISBadgeProps) {
  const sizeClasses = size === "lg" ? "w-16" : size === "sm" ? "w-10" : "w-12";
  const posClasses =
    position === "top-left"
      ? "top-2 left-2"
      : position === "top-right"
        ? "top-2 right-2"
        : position === "bottom-left"
          ? "bottom-2 left-2"
          : "bottom-2 right-2";

  return (
    <img
      src="/images/NDIS.png"
      alt="NDIS registered provider"
      className={`pointer-events-none select-none drop-shadow-md absolute ${posClasses} ${sizeClasses} h-auto ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
