"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";
import { IconBrandAppleFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for merging class names

// Define the props interface for type safety and clarity
export interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  downloadLink?: string;
  instagramLink?: string;
}

const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View App", downloadLink = "#", instagramLink = "#", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
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

          {/* Action Buttons Row */}
          <div className="mt-4 flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              {/* Download Button with Rainbow Gradient Border */}
              <a
                href={downloadLink}
                className="group/download relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-cyan-500 to-yellow-500 rounded-xl opacity-75 group-hover/download:opacity-100 blur-sm group-hover/download:blur transition-all duration-500 animate-gradient-x" />

                {/* Button content */}
                <span className="relative bg-black text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium text-sm whitespace-nowrap">
                  <IconBrandAppleFilled className="h-4 w-4" />
                  Download
                </span>
              </a>

              {/* Instagram Button */}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-black/20 bg-black/5 hover:bg-black/10 hover:border-black/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Visit Site Link */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:gap-2"
            >
              {linkText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }
);
AppCard.displayName = "AppCard";

export { AppCard };