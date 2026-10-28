import React from "react";

const Admission = ({
  eyebrow,
  icon: Icon,
  tone = "warm",
  image,
  caption,
  title,
  text,
  navigate,
}) => {
  return (
    <main
      className={`page-hero page-hero-${tone} !mt-0 !pt-0 ${
        tone === "warm" ? "bg-[#f6f2ea]" : "bg-white"
      }`}
    >
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Main warm overlay */}
        <div className="absolute inset-0 -z-10 bg-[#f6f2ea]/90" />

        {/* Right-side image treatment */}
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] lg:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f6f2ea] via-[#f6f2ea]/65 to-transparent" />

          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center opacity-80"
          />

          <div className="absolute inset-0 bg-[#8b7355]/10 mix-blend-multiply" />
        </div>

        {/* Editorial vertical line */}
        <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-slate-900/10 lg:left-12 lg:block" />

        {/* Content */}
        <div className="container relative mx-auto px-6 py-16 md:px-10 md:py-20 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:px-16 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-8">
            {/* Left content */}
            <div className="relative z-10 lg:col-span-7 xl:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                {Icon && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-900/15 bg-white/70 text-slate-900 shadow-sm backdrop-blur-sm">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-slate-900/40" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
                    {eyebrow}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="mt-8 max-w-4xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.025em] text-slate-950 md:text-6xl lg:text-[4.5rem] xl:text-[5.15rem]">
                {title}
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {text}
              </p>

              {/* Caption */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-slate-900/30" />

                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  {caption}
                </span>
              </div>
            </div>

            {/* Right image */}
            <div className="relative hidden lg:col-span-5 lg:col-start-8 lg:block">
              <div className="relative ml-auto w-full max-w-[470px]">
                {/* Outer frame */}
                <div className="absolute -inset-4 border border-slate-900/10" />

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/10" />
                </div>

                {/* Caption card */}
                <div className="absolute -bottom-7 -left-7 max-w-[240px] border border-slate-900/10 bg-[#f6f2ea]/95 p-5 backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {caption}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile image */}
            <div className="lg:hidden">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-3 border border-slate-900/10" />

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom detail */}
        {/* Bottom detail indicator */}
<div className="container relative mx-auto mt-10 px-6 pb-10 md:px-10 lg:mt-6 lg:px-16">
  <div className="flex items-center gap-4">
    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
      Admissions Profile
    </span>

    <span className="h-px w-16 bg-slate-900/20" />
  </div>
</div>
      </section>
    </main>
  );
};

export default Admission;