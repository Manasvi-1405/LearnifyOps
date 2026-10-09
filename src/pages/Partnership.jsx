import React from "react";
import { Building2, Globe2, FileText, Users, ShieldCheck } from "lucide-react";

import UniversitiesSection from "../components/content/UniversitySections.jsx";
import FinalCta from "../components/content/AdmissionsSections.jsx";
import SectionIntro from "../components/ui/Actions.jsx";

// =====================================
// 1. PARTNERSHIP HERO SECTION
// =====================================

function PartnershipHero() {
  return (
    <main className="page-hero page-hero-warm !mt-0 !pt-0 bg-[#f6f2ea]">
      <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/assets/university.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#f6f2ea]/90" />

        {/* Right Side Image Treatment */}
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] lg:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f6f2ea] via-[#f6f2ea]/65 to-transparent" />

          <img
            src="/assets/university.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-80"
          />

          <div className="absolute inset-0 bg-[#8b7355]/10 mix-blend-multiply" />
        </div>

        {/* Vertical Line */}
        <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-slate-900/10 lg:left-12 lg:block" />

        {/* Hero Content */}
        <div className="container relative mx-auto px-6 py-16 md:px-10 md:py-20 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:px-16 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-8">
            {/* Left Content */}
            <div className="relative z-10 lg:col-span-7 xl:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-900/15 bg-white/70 text-slate-900 shadow-sm backdrop-blur-sm">
                  <Building2 className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-slate-900/40" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
                    Partner Network
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="mt-8 max-w-4xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.025em] text-slate-950 md:text-6xl lg:text-[4.5rem] xl:text-[5.15rem]">
                Compare DBA pathways before you apply.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Review the available partner institutions, then speak with an
                adviser about eligibility, programme structure, fees, study
                format and application requirements.
              </p>

              {/* Caption */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-slate-900/30" />

                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  International pathways
                </span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:col-span-5 lg:col-start-8 lg:block">
              <div className="relative ml-auto w-full max-w-[470px]">
                {/* Outer Frame */}
                <div className="absolute -inset-4 border border-slate-900/10" />

                {/* Main Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/assets/university.jpg"
                    alt="University campus"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/10" />
                </div>

                {/* Image Caption */}
                <div className="absolute -bottom-7 -left-7 max-w-[240px] border border-slate-900/10 bg-[#f6f2ea]/95 p-5 backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    International pathways
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-3 border border-slate-900/10" />

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/university.jpg"
                    alt="University campus"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="container relative mx-auto mt-10 px-6 pb-10 md:px-10 lg:mt-6 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Partnership Profile
            </span>

            <span className="h-px w-16 bg-slate-900/20" />
          </div>
        </div>
      </section>
    </main>
  );
}

function GuidanceCard({ icon: Icon, title, text }) {
  return (
    <article className="value-card reveal">
      <span className="icon-box">
        <Icon size={23} />
      </span>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

// =====================================
// 3. ADMISSIONS GUIDANCE SECTION
// =====================================

function AdmissionsGuidanceSection() {
  const cards = [
    {
      icon: FileText,
      title: "Eligibility Review",
      text: "Compare your academic and professional profile with the published requirements for each applicable pathway.",
    },
    {
      icon: Users,
      title: "Application Support",
      text: "Prepare research objectives, motivation statements and supporting documents for the relevant admissions process.",
    },
    {
      icon: Building2,
      title: "Institution Comparison",
      text: "Compare programme structure, expected duration, study format, fees and research requirements across six partner institutions.",
    },
    {
      icon: ShieldCheck,
      title: "Decision Support",
      text: "Review awarding arrangements and institutional information before enrolment, with independent verification encouraged.",
    },
  ];

  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro
          eyebrow="Admissions Guidance"
          icon={Globe2}
          title="A structured process from qualification review to enrolment."
          text="LearnifyOps helps you compare suitable routes, prepare documents and understand institution-specific requirements."
        />

        <div className="value-grid">
          {cards.map((card) => (
            <GuidanceCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================
// 4. PARTNERSHIP CTA
// =====================================

function PartnershipFinalCta({ navigate }) {
  return (
    <FinalCta
      navigate={navigate}
      tone="partner"
      title="Compare partner institutions before you commit to a DBA route."
    />
  );
}

// =====================================
// 5. MAIN PARTNERSHIP PAGE
// =====================================

export default function PartnershipPage({ navigate }) {
  return (
    <>
      <PartnershipHero />

      <UniversitiesSection navigate={navigate} />

      <AdmissionsGuidanceSection />

      <PartnershipFinalCta navigate={navigate} />
    </>
  );
}
