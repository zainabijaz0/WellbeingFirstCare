import React from "react";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className = "",
  variant = "default",
  showText = true,
  size = "md",
}: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-brand-navy";
  const imgSize = size === "lg" ? "h-16" : size === "sm" ? "h-10" : "h-12";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/withoutbackground.png"
        alt="Wellbeing First Care logo"
        className={`${imgSize} w-auto object-contain select-none`}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <div className={`${textColor}`}>
          <div className="font-bold text-xl leading-tight">Wellbeing First</div>
          <div className="font-semibold text-sm opacity-80">Care</div>
        </div>
      )}
    </div>
  );
}
