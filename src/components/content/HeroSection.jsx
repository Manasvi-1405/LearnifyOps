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
    <section className="relative isolate flex min-h-170  flex-col justify-between overflow-hidden bg-[#061714] text-white lg:min-h-[calc(100svh-72px)]">
      {/* Background */}
      <div
        className="absolute  inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
        role="img"
        aria-label={caption}
      />

      {/* Stronger overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-[#041713]/40" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#031410]/95 via-[#031410]/85 to-[#031410]/30" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#031410]/90 via-transparent to-[#031410]/20" />

      {/* Hero content */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-start justify-center px-6! py-8! sm:px-10! md:px-14! lg:px-20! xl:px-24!">
        <div className="w-full max-w-3xl">
          <div className="mb-8! inline-flex items-center gap-3! rounded-full border border-emerald-300/40 bg-[#052b22]/80 px-5! py-3 text-sm font-semibold text-emerald-100 shadow-lg backdrop-blur-md">
            {Icon && (
              <Icon
                size={20}
                strokeWidth={1.8}
                className="shrink-0 text-emerald-300"
              />
            )}
            <span>{eyebrow}</span>
          </div>

          <h1 className="max-w-3xl text-white! font-serif text-5xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[84px]">
            {title}
          </h1>

          <div className="my-7 h-1 w-16 rounded-full bg-emerald-300" />

          <p className="max-w-2xl text-white/90! text-base leading-8 sm:text-lg">
            {text}
          </p>

          <div className="mt-9! flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => navigate?.("/contact")}
              className="group btn btn-primary inline-flex min-h-14! items-center justify-center gap-4! rounded-full border border-emerald-300 bg-emerald-400 px-7! py-4! text-[#05271f]! font-bold shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300"
            >
              Speak with an adviser
              <ArrowRight
                size={19}
                className="transition-transform  group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("partner-pathways")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-5 py-3 text-white! font-semibold backdrop-blur-sm transition-all hover:border-emerald-300/70 hover:bg-white/10"
            >
              <span className="grid size-11 place-items-center rounded-full border border-white/60 text-white! transition-colors group-hover:border-emerald-300 group-hover:text-emerald-200!">
                <ArrowUpRight size={20} />
              </span>
              Explore our partners
            </button>
          </div>
        </div>

        {caption && (
          <div className="mt-6! flex items-center gap-3 text-white/90! text-xs font-bold uppercase tracking-[0.16em]">
            <span className="h-px w-8 bg-emerald-300" />
            {caption}
          </div>
        )}
      </div>

      {/* Bottom feature bar */}
      <div className="border-t border-white/20 bg-[#041b16]/85 backdrop-blur-xl">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 px-4 sm:px-8 lg:grid-cols-4 lg:px-16 xl:px-20">
          {features.map(({ icon: FeatureIcon, title, detail }, index) => (
            <div
              key={title}
              className={`flex items-center gap-3! px-3! py-5! sm:gap-4! sm:px-5! sm:py-6! ${index % 2 === 1 ? "border-l border-white/15" : ""
                } ${index > 1 ? "border-t border-white/15 lg:border-t-0" : ""
                } ${index > 0 ? "lg:border-l lg:border-white/15" : ""
                }`}
            >
              <FeatureIcon
                size={34}
                strokeWidth={1.5}
                className="shrink-0 text-emerald-300"
              />

              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-white! text-xs font-bold uppercase tracking-wider sm:text-sm">
                  {title}
                </span>
                <span className="text-white/70! text-xs sm:text-sm">
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