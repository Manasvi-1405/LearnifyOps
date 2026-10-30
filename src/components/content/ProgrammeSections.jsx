import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  Target
} from "lucide-react";
import {
  appliedResearchSteps,
  britInstituteUrl,
  journey,
  productTools,
  researchTopics,
  technologyServices,
  valuePillars
} from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import { Eyebrow, PrimaryButton, SectionIntro } from "../ui/Actions.jsx";

export function ProgramFacts() {
  const facts = [
    {
      id: "01",
      label: "Qualification",
      value: "Doctor of Business Administration (DBA)",
      image: "/assets/dba1.jpg",
      imageAlt: "University graduation ceremony",
      colorHex: "#0d9488", // teal-600
      badge: "bg-teal-50 text-teal-800",
      hoverBorder: "hover:border-teal-300",
    },
    {
      id: "02",
      label: "Scholarly Approach",
      value: "Applied, research-driven business models",
      image: "/assets/scholorship.jpg",
      imageAlt: "Business research materials and notes",
      colorHex: "#2563eb", // blue-600
      badge: "bg-blue-50 text-blue-800",
      hoverBorder: "hover:border-blue-300",
    },
    {
      id: "03",
      label: "Candidate Profile",
      value: "Directors, consultants, and active founders",
      image: "/assets/candidate profile.jpg",
      imageAlt: "Professionals collaborating in a meeting",
      colorHex: "#7c3aed", // violet-600
      badge: "bg-violet-50 text-violet-800",
      hoverBorder: "hover:border-violet-300",
    },
    {
      id: "04",
      label: "Admissions Pipeline",
      value: "Transparent university matchmaking",
      image: "/assets/admission1.jpg",
      imageAlt: "University campus and academic buildings",
      colorHex: "#d97706", // amber-600
      badge: "bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-300",
    },
  ];

  return (
    <section
      aria-labelledby="program-facts-heading"
      className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
    >
      <div
<<<<<<< HEAD
=======
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "1280px",
      margin: "0 auto",
      minWidth: 0,
      boxSizing: "border-box",
    }}
  >
    {/* Centered section introduction */}
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span className="mb-5! mt-5! inline-flex! items-center! justify-center! rounded-full! border! border-teal-200! bg-teal-50! px-5! py-2! text-xs! font-semibold! uppercase! text-teal-800!">
        Your doctoral journey
      </span>

      <h2
        id="program-facts-heading"
        className="font-semibold tracking-tight text-slate-900"
>>>>>>> 2a0febce88af48470d656501ca0387835d24d025
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 12px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            minWidth: 0,
            boxSizing: "border-box",
          }}
        >
          {/* Centered section introduction */}
          <div
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span className="mb-5! mt-2! inline-flex! items-center! justify-center! rounded-full! border! border-teal-200! bg-teal-50! px-5! py-2! text-sm! sm:text-xs! font-semibold! uppercase! tracking-[0.18em!] text-teal-800!">
              Your doctoral journey
            </span>

            <h2
              id="program-facts-heading"
              className="font-semibold tracking-tight text-slate-900"
              style={{
                width: "100%",
                maxWidth: "760px",
                margin: 0,
                textAlign: "center",
                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                lineHeight: 1.2,
              }}
            >
              A clear pathway to your next chapter
            </h2>

            <div
              aria-hidden="true"
              className="h-1 w-16 rounded-full bg-teal-600"
              style={{ margin: "24px auto" }}
            />

            <p
              className="text-[17px]! leading-relaxed! text-slate-600! sm:text-lg! sm:leading-8!"
              style={{
                width: "100%",
                maxWidth: "640px",
                margin: 0,
                textAlign: "center",
              }}
            >
              Explore the qualification, research approach, candidate profile,
              and admissions process.
            </p>
          </div>

          {/* Cards Grid with wide vertical gap */}
          <div className="flex w-full flex-wrap items-stretch justify-center gap-x-6 gap-y-10 sm:gap-y-12">
            {facts.map((fact) => (
              <article
                key={fact.id}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${fact.hoverBorder}`}
                style={{
                  flex: "1 1 270px",
                  maxWidth: "360px",
                }}
              >
                {/* Image Section */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden bg-slate-200">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300"
                  >
                    <svg
                      className="h-14 w-14 text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m3 17 5-5 4 4 3-3 6 6" />
                    </svg>
                  </div>

                  <img
                    src={fact.image}
                    alt={fact.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"
                  />

                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm! font-bold! text-slate-800 shadow-sm">
                    {fact.id}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col items-center p-6 pb-9 text-center">
                  <span
                    className={`mb-4 inline-flex min-h-8 items-center justify-center rounded-full px-4.5 py-1.5 text-sm! sm:text-xs! font-semibold leading-5 ${fact.badge}`}
                  >
                    {fact.label}
                  </span>

                  <h3
                    className="text-[22px]! sm:text-xl! font-semibold leading-snug tracking-tight text-slate-900"
                    style={{
                      width: "100%",
                      margin: 0,
                      textAlign: "center",
                      wordBreak: "normal",
                      overflowWrap: "break-word",
                      hyphens: "none",
                    }}
                  >
                    {fact.value}
                  </h3>
                </div>

                {/* Animated Bottom Line */}
                <div
                  aria-hidden="true"
                  style={{ backgroundColor: fact.colorHex }}
                  className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-1.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductEcosystemSection({ navigate }) {
  return (
    <section className="section product-section px-5 sm:px-8">
      <div className="container">
        <SectionIntro
          eyebrow="Proprietary Tech Suite"
          icon={Lightbulb}
          title="Custom AI application tools designed to elevate the student lifecycle."
          text="Our custom-built SaaS products are integrated into our educational pathways to streamline career outreach, simplify module navigation, and track research metrics."
        />

        {/* Product Cards */}
        <div className="product-grid">
          {productTools.map(([title, text], index) => (
            <Link
              className="product-card reveal"
              key={title}
              to="/contact"
              navigate={navigate}
              aria-label={`Discuss ${title}`}
            >
              <div className="product-card-top">
                <span className="product-dot" aria-hidden="true" />
                <span className="product-number text-base! sm:text-sm!">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title: 22px on mobile */}
              <h3 className="text-[22px]! sm:text-xl! font-bold leading-snug">
                {title}
              </h3>

              {/* Text: 16px on mobile */}
              <p className="text-[16px]! sm:text-sm! leading-relaxed text-slate-600">
                {text}
              </p>

              {/* Action link */}
              <span className="product-action text-base! sm:text-sm! font-semibold">
                Explore integration
                <span className="product-arrow">
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Brit Institute Highlight */}
        <div className="brit-institute-note reveal p-6! sm:p-8!">
          <div className="brit-note-content">
            <span className="brit-note-eyebrow text-xs! sm:text-xs! font-bold tracking-wider">
              <span className="brit-note-status" />
              BRIT INSTITUTE · DELIVERY PARTNER
            </span>

            <h3 className="text-xl! sm:text-2xl! md:text-3xl! font-bold leading-tight mt-2!">
              Turning technology into meaningful learning experiences.
            </h3>

            <p className="text-[16px]! sm:text-base! leading-relaxed mt-3!">
              LearnifyOps builds the technology and automation ecosystem,
              while Brit Institute delivers skill certifications, LMS-enabled
              learning, expert mentoring, interview preparation, and
              placement readiness.
            </p>
          </div>

          <a
            className="btn btn-primary brit-note-button text-base! sm:text-sm! py-3.5! px-6! mt-5! sm:mt-0! inline-flex items-center gap-2"
            href={britInstituteUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit Brit Institute
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TechnologyServicesSection({ navigate }) {
  return (
    <section className="section services-section px-5 sm:px-8">
      <div className="container services-layout">
        <div className="services-copy reveal">
          <Eyebrow icon={BriefcaseBusiness}>Enterprise Technology Solutions</Eyebrow>

          {/* Heading: 28px on mobile */}
          <h2 className="text-[28px]! sm:text-3xl! md:text-4xl! font-bold text-slate-900 leading-tight!">
            We design, engineer, and deploy high-performance SaaS, automation, and AI workflows.
          </h2>

          {/* Description: 17px on mobile */}
          <p className="text-[17px]! sm:text-base! leading-relaxed text-slate-600 mt-4!">
            Beyond our academic services, LearnifyOps serves as an active technology development partner for businesses. We build customized workflow engines, orchestrate AI agents, and implement CRM integrations to scale operations.
          </p>

          <div className="mt-6!">
            <PrimaryButton to="/contact" navigate={navigate}>
              Discuss Tech Services
            </PrimaryButton>
          </div>
        </div>

        <div className="services-panel reveal">
          {technologyServices.map((service) => (
            <span
              key={service}
              className="text-base! sm:text-sm! py-3! px-4! flex items-center gap-2.5 font-medium"
            >
              <CheckCircle2 size={18} className="shrink-0 text-teal-600" aria-hidden="true" />
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueSection() {
  const valueImages = [
    "/assets/01.jpg",
    "/assets/02.jpg",
    "/assets/03.jpg",
    "/assets/04.jpg",
    "/assets/05.jpg",
    "/assets/06.jpg",
  ];

  return (
    <section className="editorial-events section px-5 sm:px-8">
      <div className="container">
        <div className="editorial-section-head">
<<<<<<< HEAD
          <div className="mx-auto w-full text-center">
            {/* Eyebrow: 14px on mobile */}
            <div
              className="
                editorial-label mb-3
                text-sm! font-bold uppercase
                tracking-[0.25em] text-[#b08d35]
                sm:text-base md:text-lg
              "
            >
              PROFESSIONAL DEVELOPMENT
            </div>

            {/* Heading: 28px on mobile */}
            <h2
              className="
                text-[28px]! font-semibold tracking-tight
                text-[#163b50]
                sm:text-4xl md:text-5xl leading-tight
              "
            >
              Why pursue a DBA?
            </h2>
=======
        
<div className="mx-auto w-full text-center">
  <div
    className="editorial-label mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#b08d35] sm:text-base md:text-lg"
  >
    PROFESSIONAL DEVELOPMENT
  </div>

  <h2
    className="text-3xl font-semibold tracking-tight text-[#163b50] sm:text-4xl md:text-5xl"
  >
    Why pursue a DBA?
  </h2>

  <p
    className="mx-auto mt-10! text-base leading-8 text-slate-600 sm:text-xl!"
  >
    A Doctor of Business Administration can strengthen research
    capability, strategic thinking and specialist expertise. Career
    outcomes depend on the individual and their context.
  </p>
</div>
>>>>>>> 2a0febce88af48470d656501ca0387835d24d025

            {/* Description: 17px on mobile */}
            <p
              className="
                mx-auto mt-6! max-w-3xl
                text-[17px]! leading-relaxed text-slate-600
                sm:text-xl! sm:leading-8
              "
            >
              A Doctor of Business Administration can strengthen research
              capability, strategic thinking and specialist expertise. Career
              outcomes depend on the individual and their context.
            </p>
          </div>
        </div>

        {/* Animated Cards */}
<<<<<<< HEAD
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valuePillars.map(({ title, text }, index) => (
            <article
              key={title}
              className="
                group relative z-0 h-[480px] sm:h-[520px] cursor-pointer
                overflow-hidden rounded-2xl bg-[#163b50]
                transition-all duration-500 ease-out
                hover:z-20 hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-2xl hover:shadow-[#163b50]/40
                motion-reduce:transition-none
              "
            >
              {/* Background Image */}
              {valueImages[index] && (
                <img
                  src={valueImages[index]}
                  alt={title}
                  loading="lazy"
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />
              )}

              {/* Gradient Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#001b2b]/95
                  via-[#001b2b]/45
                  to-[#001b2b]/15
                  transition-all duration-500
                  group-hover:via-[#001b2b]/60
                "
              />

              {/* Hover Border */}
              <div
                className="
                  pointer-events-none absolute inset-0 z-20
                  rounded-2xl border border-white/10
                  transition-colors duration-500
                  group-hover:border-[#f5c451]/70
                "
              />

              {/* Number */}
              <span
                className="
                  absolute left-6 top-6 z-10
                  text-2xl font-bold text-white
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#f5c451]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Card Content */}
              <div
                className="
                  absolute inset-x-0 bottom-0 z-10
                  flex flex-col items-center
                  px-6! pb-10! sm:pb-12! text-center! text-white!
                  transition-transform! duration-500! ease-out!
                  group-hover:-translate-y-2!
                "
              >
                {/* Heading: 24px on mobile */}
                <h3
                  className="
                    mb-3 mt-2 text-center text-2xl!
                    font-bold leading-tight text-white
                    transition-colors duration-300
                    group-hover:text-[#f5c451]
                    sm:text-3xl!
                  "
                >
                  {title}
                </h3>

                {/* Description: 16px on mobile */}
                <p
                  className="
                    m-0! max-w-sm! text-center! text-[16px]!
                    leading-relaxed! text-white/90!
                    transition-colors! duration-300!
                    group-hover:text-white!
                    sm:text-base!
                  "
                >
                  {text}
                </p>
=======
  
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
  {valuePillars.map(({ title, text }, index) => (
    <article
      key={title}
      className="group relative z-0 h-[520px] cursor-pointer overflow-hidden rounded-xl bg-[#163b50] transition-all duration-500 ease-out hover:z-20 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#163b50]/40 motion-reduce:transition-none"
    >
      {/* Background Image */}
      {valueImages[index] && (
        <img
          src={valueImages[index]}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#001b2b]/95 via-[#001b2b]/40 to-[#001b2b]/10 transition-all duration-500 group-hover:via-[#001b2b]/55"
      />

      {/* Hover Border */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-xl border border-white/10 transition-colors duration-500 group-hover:border-[#f5c451]/70"
      />

      {/* Number */}
      <span
        className="absolute left-6 top-6 z-10 text-2xl font-semibold text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f5c451]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Card Content */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6! pb-12! text-center! text-white! transition-transform! duration-500! ease-out! group-hover:-translate-y-2!"
      >
   

        {/* Category */}
        

        {/* Heading */}
        <h3
          className="mb-4 mt-2 text-center text-xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#f5c451] sm:text-3xl"
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="m-0! max-w-sm! text-center! text-sm! leading-7! text-white/90! transition-colors! duration-300! group-hover:text-white! sm:text-base!"
        >
          {text}
        </p>
               {/* Accent Line */}
        <div
          className="mt-5! h-1! w-11! rounded-full! bg-[#91c7ed]! transition-all! duration-500! group-hover:w-20! group-hover:bg-[#f5c451]!"
        />
      </div>
    
    </article>
  ))}
</div>
>>>>>>> 2a0febce88af48470d656501ca0387835d24d025

                {/* Accent Line */}
                <div
                  className="
                    mt-5! h-1! w-11! rounded-full!
                    bg-[#91c7ed]!
                    transition-all! duration-500!
                    group-hover:w-20!
                    group-hover:bg-[#f5c451]!
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResearchSection({ navigate, image = "/assets/degree-fly.jpeg", variant = "home" }) {
  return (
    <section className={`section research-section research-${variant} px-5 sm:px-8`}>
      <div className="container split-layout">
        {/* LEFT SIDE — LARGE IMAGE */}
        <div className="split-image reveal">
          <img
            src={image}
            alt="Executive doctoral candidate reviewing applied research with an academic supervisor"
          />

          <div className="image-badge text-sm! sm:text-xs! py-2! px-3.5!">
            <BookOpen size={19} aria-hidden="true" />
            <span className="font-semibold">Applied Business Research</span>
          </div>
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div className="split-copy reveal">
          <Eyebrow icon={Lightbulb}>
            From Experience to Doctoral Research
          </Eyebrow>

          {/* Heading: 28px on mobile */}
          <h2 className="text-[28px]! sm:text-3xl! md:text-4xl! font-bold leading-tight! text-slate-900 mt-2!">
            Turn your professional expertise into
            <span className="research-heading-highlight text-[#008c75]!">
              {" "}meaningful business research.
            </span>
          </h2>

          {/* Paragraph: 17px on mobile */}
          <p className="research-description text-[17px]! sm:text-base! leading-relaxed text-slate-600 mt-4!">
            A Doctor of Business Administration helps you examine
            real-world business challenges through structured research.
            Connect your professional experience with strategic thinking,
            evidence-based insights and practical business solutions.
          </p>

          <div className="research-topics-heading text-base! sm:text-sm! font-bold text-slate-800 mt-6! mb-3!">
            Explore potential research areas
          </div>

          {/* Research Topic Pills: 15px on mobile */}
          <div
            className="research-topic-grid flex! flex-wrap! gap-2.5! sm:gap-3!"
            aria-label="Potential DBA research areas"
          >
            {researchTopics.map((topic) => (
              <span
                key={topic}
                className="research-topic inline-flex! items-center! px-4! py-2! rounded-full! bg-[#eef7f4]! text-[#135d50]! border! border-[#c2e5dc]! text-[15px]! sm:text-sm! font-medium! tracking-wide! shadow-2xs! transition-all! duration-200! hover:bg-[#dff0eb]! hover:border-[#9ed6c7]! hover:text-[#0b4239]! cursor-default!"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="research-bottom mt-8! flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <PrimaryButton to="/program" navigate={navigate}>
              Explore the DBA Programme
              <ArrowRight size={17} aria-hidden="true" />
            </PrimaryButton>

            <span className="research-note text-sm! sm:text-xs! text-slate-500">
              Find a research direction that fits your experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneySection({ navigate }) {
  const [activeCard, setActiveCard] = useState(1);

  const journeyCards = [
    {
      title: "Eligibility Review",
      verticalTitle: "Why Learn With Us?",
      text: "Review your academic background, professional leadership credentials, and doctoral research readiness with an advisor.",
      image: "/assets/eligibility.jpg",
      tint: "tint-purple",
    },
    {
      title: "Career Paths",
      verticalTitle: "Career Paths",
      text: "Compare international DBA pathways, accreditations, and executive study formats tailored to your career goals.",
      image: "/assets/careerpath.jpg",
      tint: "tint-teal",
    },
    {
      title: "Courses",
      verticalTitle: "Courses",
      text: "Understand the curriculum, dissertation milestones, academic support, and flexible study commitments.",
      image: "/assets/cources.jpg",
      tint: "tint-orange",
    },
    {
      title: "Student Support",
      verticalTitle: "Student Support",
      text: "Receive personalized 1-on-1 advisor guidance from profile documentation through graduation and research defense.",
      image: "/assets/studentsupport.jpg",
      tint: "tint-yellow",
    },
  ];

  return (
    <section className="section section-white dba-journey-section px-5 sm:px-8 py-14 sm:py-20">
      <div className="container container-wide mx-auto max-w-7xl">
        <SectionIntro 
          eyebrow="Your DBA Journey" 
          icon={Target} 
          title="A clear pathway from eligibility review to doctoral research." 
        />

        {/* Responsive Interactive Container: Mobile par flex-col, Desktop par horizontal accordion */}
        <div 
          className="journey-interactive-grid mt-10! flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:h-[500px] lg:h-[540px]" 
          onMouseLeave={() => setActiveCard(1)}
        >
          {journeyCards.map((card, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");
            const isActive = activeCard === index;

            return (
              <article
                className={`journey-accordion-card ${card.tint} ${isActive ? "active" : ""} relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out 
                  ${
                    isActive
                      ? "flex-[3.5] min-h-[380px] sm:min-h-0 scale-[1.01] sm:scale-[1.02] shadow-2xl z-20"
                      : "flex-1 min-h-[140px] sm:min-h-0 opacity-90 sm:opacity-75 hover:opacity-100 hover:scale-[1.01] shadow-md z-10"
                  }`}
                key={card.title}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                {/* Background Image Container */}
                <div className="journey-card-bg-wrap absolute inset-0 h-full w-full overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className={`journey-card-bg-img h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? "scale-110 brightness-95" : "scale-100 brightness-75"
                    }`} 
                  />
                  <div className={`journey-card-overlay absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-gradient-to-t from-black/90 via-black/50 to-black/20" : "bg-black/60"
                  }`}></div>
                </div>

                {/* Floating pill button */}
                <div className={`journey-floating-pill absolute top-4 right-4 z-20 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs! font-bold text-white transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 sm:opacity-0"
                }`}>
                  <span>Find out more</span>
                </div>

                {/* Closed state preview (desktop vertical, mobile compact) */}
                <div className={`journey-vertical-preview absolute inset-0 z-10 flex items-center justify-center p-4 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}>
                  <span className="vertical-title-text text-base sm:text-lg font-bold text-white tracking-wide sm:[writing-mode:vertical-rl] sm:rotate-180">
                    <span className="text-amber-400 font-extrabold mr-2 sm:mr-0 sm:mb-2 inline-block">{stepNumber}</span>
                    {card.verticalTitle}
                  </span>
                </div>

                {/* Hover / Active expanded content */}
                <div className={`journey-hover-content absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white transition-all duration-500 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}>
                  <h3 className="journey-expanded-title text-[24px]! sm:text-2xl! lg:text-3xl! font-bold leading-tight">
                    <span className="step-num-highlight text-amber-400">{stepNumber}</span>
                    <span className="step-bar mx-2 text-white/50">|</span>
                    {card.title}
                  </h3>
                  
                  <p className="journey-expanded-text text-[17px]! sm:text-base! leading-relaxed text-slate-100 mt-3! max-w-xl">
                    {card.text}
                  </p>
                  
                  <div className="journey-action-row mt-5!">
                    <span
                      className="journey-cta-link inline-flex items-center gap-1.5 text-base! sm:text-sm! font-bold text-amber-300 hover:text-amber-200 underline cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate?.("/contact");
                      }}
                    >
                      Find out more →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="center-action mt-10! flex justify-center">
          <PrimaryButton to="/contact" navigate={navigate}>
            Book a DBA Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export function AppliedResearchSection() {
  return (
    <section className="section section-sky applied-research-section px-5 sm:px-8">
      <div className="container">
        <SectionIntro
          eyebrow="Applied Research Process"
          icon={FileSearch}
          title="Research a business challenge that matters to your career."
          text="DBA candidates may investigate a relevant organisational, industry or management challenge using structured academic research methods."
        />
        <div className="research-process-grid mt-8!">
          {appliedResearchSteps.map((step, index) => (
            <article className="research-process-card reveal p-6! sm:p-7!" key={step}>
              {/* Step number: 20px on mobile */}
              <span className="text-xl! sm:text-lg! font-bold text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Step text: 18px on mobile */}
              <h3 className="text-lg! sm:text-base! font-semibold leading-snug mt-2! text-slate-900">
                {step}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}