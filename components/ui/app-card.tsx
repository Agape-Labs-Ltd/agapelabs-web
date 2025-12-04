"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for merging class names

// Define the props interface for type safety and clarity
export interface AppCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const AppCard = React.forwardRef<HTMLAnchorElement, AppCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View App", ...props }, ref) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden flex items-center justify-center relative">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={title === "Rhema" ? { transform: "scale(0.9)" } : undefined}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-muted-foreground">{description}</p>

          {/* Card Link/CTA */}
          <div className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300">
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </div>
        </div>
      </a>
    );
  }
);
AppCard.displayName = "AppCard";

export { AppCard };