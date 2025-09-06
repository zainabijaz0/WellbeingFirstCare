import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NDISBadge from "@/components/NDISBadge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ServiceItem = {
  title: string;
  image: string;
  description: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type Props = {
  item: ServiceItem;
  className?: string;
  revealOnHover?: boolean; // if false, details are always visible
  fullWidth?: boolean; // if true, card expands to fill its container (for grids)
};

export default function ServiceCard({
  item,
  className,
  revealOnHover = true,
  fullWidth = false,
}: Props) {
  const Icon = item.icon;
  const reveal = revealOnHover;

  const sizeClasses = fullWidth
    ? "w-full h-[28rem] sm:h-[24rem]"
    : "h-96 sm:h-80 w-64 sm:w-72 md:w-96";

  return (
    <Link to={item.href} className={cn("block", className)}>
      <Card
        className={cn(
          "relative overflow-hidden rounded-xl mx-auto cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-brand-teal/40",
          sizeClasses,
        )}
      >
        {/* Background Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <NDISBadge />

        {/* Dark gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300",
            reveal
              ? "opacity-40 sm:opacity-0 sm:group-hover:opacity-100"
              : "opacity-40",
          )}
        />

        {/* Floating white info panel */}
        <div className="absolute left-4 right-4 bottom-4">
          <div
            className={cn(
              "relative rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-4 sm:p-5 transition-all duration-300",
              reveal
                ? "translate-y-0 opacity-100 sm:translate-y-6 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                : "translate-y-0 opacity-100",
            )}
          >
            <div className="hidden sm:block absolute -left-3 -top-3 h-8 w-8 rounded-xl bg-brand-teal" />
            <div className="flex items-start gap-3">
              {Icon && (
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-teal">
                  <Icon className="h-5 w-5 text-white" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 break-words">
                  {item.description}
                </p>
                <div className="mt-3 inline-flex items-center text-brand-teal font-medium">
                  Explore More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
