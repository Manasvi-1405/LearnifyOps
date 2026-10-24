import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  GraduationCap,
  Users,
  FileText,
} from "lucide-react";

const HeroSection = ({
  eyebrow,
  icon: Icon,
  title,
  text,
  image,
  tone = "midnight",
  caption = "Global DBA pathway",
  navigate,
}) => {
  const features = [
    { icon: Globe2, title: "International", detail: "Pathways" },
    { icon: GraduationCap, title: "Partner", detail: "Institutions" },
    { icon: Users, title: "Flexible", detail: "Study formats" },
    { icon: FileText, title: "Expert", detail: "Adviser support" },
  ];

  return (
    <section className="relative isolate flex min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[calc(100svh-72px)] w-full flex-col justify-between overflow-hidden bg-[#061714] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
        role="img"
        aria-label={caption}
      />

      {/* Layered Contrast Overlays */}
      <div className="absolute inset-0 -z-10 bg-[#041713]/60 sm:bg-[#041713]/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:from-[#031410]/95 sm:via-[#031410]/60 sm:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031410]/95 via-transparent to-[#031410]/40" />

      {/* Hero Content */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-14 lg:py-16">
        <div className="w-full max-w-3xl text-left">
          
          {/* Eyebrow Pill */}
          {eyebrow && (
            <div className="mb-5 sm:mb-7 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-emerald-300/40 bg-[#052b22]/85 px-3.5 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-emerald-100 shadow-lg backdrop-blur-md">
              {Icon && (
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-emerald-300"
                />
              )}
              <span className="tracking-wide">{eyebrow}</span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="max-w-3xl font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium leading-[1.12] sm:leading-[1.06] tracking-[-0.03em] text-white drop-shadow-md">
            {title}
          </h1>

          {/* Decorative Divider */}
          <div className="my-5 sm:my-7 h-1 w-12 sm:w-16 rounded-full bg-emerald-400" />

          {/* Descriptive Text */}
          <p className="max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed sm:leading-8 text-white/90 font-normal">
            {text}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigate?.("/contact")}
              className="group inline-flex min-h-12 sm:min-h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-emerald-300 bg-emerald-400 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-[#05271f] shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 cursor-pointer"
            >
              <span>Speak with an adviser</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("partner-pathways")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex min-h-12 sm:min-h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/25 bg-black/30 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-emerald-300/70 hover:bg-white/10 cursor-pointer"
            >
              <span className="grid size-8 sm:size-9 place-items-center rounded-full border border-white/50 text-white transition-colors group-hover:border-emerald-300 group-hover:text-emerald-200">
                <ArrowUpRight size={17} />
              </span>
              <span>Explore our partners</span>
            </button>
          </div>
        </div>

        {/* Caption Accent */}
        {caption && (
          <div className="mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            <span className="h-px w-6 sm:w-8 bg-emerald-400" />
            <span>{caption}</span>
          </div>
        )}
      </div>

      {/* Bottom Feature Bar */}
      <div className="border-t border-white/15 bg-[#041b16]/90 backdrop-blur-xl">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 lg:grid-cols-4 px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          {features.map(({ icon: FeatureIcon, title, detail }, index) => (
            <div
              key={title}
              className={`flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-5 py-4 sm:py-5 lg:py-6 ${
                index % 2 === 1 ? "border-l border-white/15" : ""
              } ${index > 1 ? "border-t border-white/15 lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              <FeatureIcon
                size={28}
                strokeWidth={1.5}
                className="shrink-0 text-emerald-300 sm:size-8"
              />

              <div className="flex min-w-0 flex-col text-left">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-white truncate">
                  {title}
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-white/70 truncate">
                  {detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;