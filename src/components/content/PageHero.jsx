import React from "react";
import { Eyebrow } from "../ui/Actions.jsx";

export default function PageHero({
  eyebrow,
  icon,
  title,
  text,
  image,
  tone = "midnight",
  caption = "Global DBA pathway",
}) {
  return (
    <section
      className={`relative flex min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[calc(100vh-80px)] w-full items-center overflow-hidden page-hero-${tone}`}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80";
          }}
        />

        {/* Base Tint Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Directional Gradient for Perfect Text Legibility across Mobile & Desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 sm:bg-gradient-to-l sm:from-black/95 sm:via-black/70 sm:to-black/25" />
      </div>

      {/* Hero Content: Mobile par clean centered/left stack, Desktop par right-aligned */}
      <div className="container relative z-10 mx-auto flex min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[calc(100vh-80px)] items-center justify-start sm:justify-end px-4 sm:px-8 md:px-10 lg:px-16 py-14 sm:py-20">
        <div className="w-full max-w-xl text-left sm:text-left lg:mr-4 xl:mr-12">
          
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-4 sm:mb-6">
              <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-md">
            {title}
          </h1>

          {/* Descriptive Text */}
          {text && (
            <p className="mt-4 sm:mt-6 max-w-lg text-xs sm:text-base md:text-lg leading-relaxed sm:leading-8 text-white/90 drop-shadow-sm font-normal">
              {text}
            </p>
          )}

          {/* Caption Accent */}
          {caption && (
            <div className="mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-3">
              <span className="h-px w-6 sm:w-8 bg-[#e2b675]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#fce8bb]">
                {caption}
              </span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}