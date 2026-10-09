import React from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    university: "Partner University",
    title: "Doctor of Business Administration",
    description:
      "A flexible doctoral pathway for experienced professionals seeking to strengthen their leadership, research and strategic expertise.",
    duration: "3–4 years",
    mode: "Flexible / Blended",
    location: "International",
  },
  {
    number: "02",
    university: "Partner University",
    title: "Professional Doctoral Pathway",
    description:
      "Designed for professionals who want to connect advanced research with real-world organisational and professional challenges.",
    duration: "3–4 years",
    mode: "Flexible / Blended",
    location: "International",
  },
  {
    number: "03",
    university: "Partner University",
    title: "Executive Doctoral Pathway",
    description:
      "A senior-level route combining professional experience, applied research and doctoral-level academic development.",
    duration: "3–4 years",
    mode: "Flexible / Blended",
    location: "International",
  },
];

const Doctoral = ({ navigate }) => {
  return (
    <main className="">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/glob.png"
            alt=""
            className="h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        <div className="container relative z-10">
          <div className="grid min-h-[560px] items-center py-20 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold !text-blue-200">
                <GraduationCap size={16} />
                Doctoral Programmes
              </div>

              <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight !text-white sm:text-5xl lg:text-6xl">
                Choose your doctoral pathway
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 !text-slate-200 sm:text-lg">
                Three flexible routes for experienced professionals. Select the
                pathway that aligns with your professional goals, research
                readiness, and career vision.
              </p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="btn btn-primary"
              >
                Book consultation
                <ArrowRight size={17} />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-white">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Your doctoral journey
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
                Doctoral study built around experienced professionals.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-slate-600">
                Doctoral study is a significant professional and academic
                commitment. The right pathway should reflect your experience,
                ambitions and the kind of impact you want your research to
                create.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500">
                Explore our doctoral routes below and identify the programme
                that best matches your professional direction and research
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
   {/* PROGRAMMES */}
<section className="section section-soft">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">Our pathways</span>

      <h2>Explore doctoral programmes</h2>
    </div>

  <div className="!space-y-6">
  {programmes.map((programme) => (
    <article
      key={programme.title}
      className="rounded-[20px]  border  border-[#8fb8ad]/30  !p-7 transition-all duration-300 hover:border-[#008b70]/40 hover:shadow-[0_20px_50px_rgba(5,84,69,0.08)] md:p-8"
    >
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">

        {/* CONTENT */}
        <div>
          <span className="eyebrow">
            {programme.university}
          </span>

          <h3>
            {programme.title}
          </h3>

          <p>
            {programme.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays size={16} />
              {programme.duration}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users size={16} />
              {programme.mode}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              {programme.location}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="lg:justify-self-end">
          <button
            type="button"
            onClick={() => navigate("/partnership")}
            className="btn btn-primary"
          >
            Explore programme
            <ArrowRight size={17} />
          </button>
        </div>

      </div>
    </article>
  ))}
</div>
  </div>
</section>

      {/* WHY LEARNIFYOPS */}
      <section className="section section-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Why LearnifyOps
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
                More than a programme. A pathway built around your goals.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 !p-6">
                <Sparkles className="text-blue-600" size={20} />
                <h3 className="mt-5 font-bold text-slate-950">
                  Flexible pathways
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Designed to work alongside the responsibilities of
                  experienced professionals.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 !p-6">
                <GraduationCap className="text-blue-600" size={20} />
                <h3 className="mt-5 font-bold text-slate-950">
                  Academic partnerships
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Access doctoral pathways through established academic
                  partnerships.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 !p-6">
                <Users className="text-blue-600" size={20} />
                <h3 className="mt-5 font-bold text-slate-950">
                  Professional focus
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect doctoral research with your professional experience
                  and ambitions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 !p-6">
                <CheckCircle2 className="text-blue-600" size={20} />
                <h3 className="mt-5 font-bold text-slate-950">
                  Personal guidance
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Get guidance while evaluating which pathway is right for
                  your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
   {/* CTA */}
<section className="final-cta">
  <div className="container">
    <div className="final-cta-inner">
      <div>
        <span className="eyebrow">
          Start with a conversation
        </span>

        <h2>
          Not sure which doctoral pathway is right for you?
        </h2>

        <p>
          Talk to our team about your experience, professional goals and
          research ambitions before selecting your pathway.
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/contact")}
        className="btn !border !border-white btn-primary"
      >
        Book consultation
        <ArrowRight size={17} />
      </button>
    </div>
  </div>
</section>
    </main>
  );
};

export default Doctoral;