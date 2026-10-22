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
      accent: "bg-teal-600",
      badge: "bg-teal-50 text-teal-800",
      hoverBorder: "hover:border-teal-300",
    },
    {
      id: "02",
      label: "Scholarly Approach",
      value: "Applied, research-driven business models",
      image: "/assets/scholorship.jpg",
      imageAlt: "Business research materials and notes",
      accent: "bg-blue-600",
      badge: "bg-blue-50 text-blue-800",
      hoverBorder: "hover:border-blue-300",
    },
    {
      id: "03",
      label: "Candidate Profile",
      value: "Directors, consultants, and active founders",
      image: "/assets/candidate profile.jpg",
      imageAlt: "Professionals collaborating in a meeting",
      accent: "bg-violet-600",
      badge: "bg-violet-50 text-violet-800",
      hoverBorder: "hover:border-violet-300",
    },
    {
      id: "04",
      label: "Admissions Pipeline",
      value: "Transparent university matchmaking",
      image: "/assets/admission.jpg",
      imageAlt: "University campus and academic buildings",
      accent: "bg-amber-600",
      badge: "bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-300",
    },
  ];

  return (
    <section
      aria-labelledby="program-facts-heading"
      className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 "
    >
      <div
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
      <span className="mb-5 inline-flex items-center justify-center rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">
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
          wordBreak: "normal",
          overflowWrap: "normal",
          hyphens: "none",
        }}
      >
        A clear pathway to
        <br />
        your next chapter.
      </h2>

      <div
        aria-hidden="true"
        className="h-1 w-16 rounded-full bg-teal-600"
        style={{ margin: "24px auto" }}
      />

      <p
        className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
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

    {/* Centered cards */}
    <div className="flex w-full flex-wrap items-stretch justify-center gap-6">
      {facts.map((fact) => (
        <article
          key={fact.id}
          className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none ${fact.hoverBorder}`}
          style={{
            flex: "1 1 260px",
            maxWidth: "360px",
          }}
        >
          {/* Image with fallback background */}
          <div className="relative h-52 w-full shrink-0 overflow-hidden bg-slate-200">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300"
            >ghguhy
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
              className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"
            />

            <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-800 shadow-sm">
              {fact.id}
            </span>
          </div>

          {/* Centered card content */}
          <div className="flex flex-1 flex-col items-center p-6 text-center">
            <span
              className={`mb-4 inline-flex min-h-8 items-center justify-center rounded-full px-4 py-1.5 text-xs font-semibold leading-5 ${fact.badge}`}
            >
              {fact.label}
            </span>

            <h3
              className="text-xl font-semibold leading-relaxed tracking-tight text-slate-900"
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

            <div aria-hidden="true" className="mt-auto w-full pt-7">
              <div className="h-px w-full bg-slate-100" />

              <div
                className={`mx-auto mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16 motion-reduce:transition-none ${fact.accent}`}
              />
            </div>
          </div>
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
   

<section className="section product-section">
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
            <span className="product-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3>{title}</h3>

          <p>{text}</p>

          <span className="product-action">
            Explore integration
            <span className="product-arrow">
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </span>
        </Link>
      ))}
    </div>

    {/* Brit Institute Highlight */}
    <div className="brit-institute-note reveal">
      <div className="brit-note-content">
        <span className="brit-note-eyebrow">
          <span className="brit-note-status" />
          BRIT INSTITUTE · DELIVERY PARTNER
        </span>

        <h3>
          Turning technology into meaningful learning experiences.
        </h3>

        <p>
          LearnifyOps builds the technology and automation ecosystem,
          while Brit Institute delivers skill certifications, LMS-enabled
          learning, expert mentoring, interview preparation, and
          placement readiness.
        </p>
      </div>

      <a
        className="btn btn-primary brit-note-button"
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
    <section className="section services-section">
      <div className="container services-layout">
        <div className="services-copy reveal">
          <Eyebrow icon={BriefcaseBusiness}>Enterprise Technology Solutions</Eyebrow>
          <h2>We design, engineer, and deploy high-performance SaaS, automation, and AI workflows.</h2>
          <p>Beyond our academic services, LearnifyOps serves as an active technology development partner for businesses. We build customized workflow engines, orchestrate AI agents, and implement CRM integrations to scale operations.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Discuss Tech Services</PrimaryButton>
        </div>
        <div className="services-panel reveal">
          {technologyServices.map((service) => (
            <span key={service}><CheckCircle2 size={16} aria-hidden="true" />{service}</span>
          ))}
        </div>
      </div>
    </section>
  );
}


export function ValueSection() {
  const valueImages = [
    "/assets/01.jpg", // "/assets/research.jpg"
    "/assets/02.jpg", // "/assets/strategy.jpg"
    "/assets/03.jpg", // "/assets/expertise.jpg"
    "/assets/04.jpg", // Add another image if needed
     "/assets/05.jpg", // Add another image if needed
      "/assets/06.jpg", // Add another image if needed
  ];

  return (
    <section className="editorial-events section">
      <div className="container">
        <div className="editorial-section-head">
        
<div className="mx-auto w-full text-center">
  <div
    className="
      editorial-label mb-4
      text-sm font-bold uppercase
      tracking-[0.3em] text-[#b08d35]
      sm:text-base md:text-lg
    "
  >
    PROFESSIONAL DEVELOPMENT
  </div>

  <h2
    className="
      text-3xl font-semibold tracking-tight
      text-[#163b50]
      sm:text-4xl md:text-5xl
    "
  >
    Why pursue a DBA?
  </h2>

  <p
    className="
      mx-auto mt-10!
      text-base leading-8 text-slate-600
      sm:text-xl!
    "
  >
    A Doctor of Business Administration can strengthen research
    capability, strategic thinking and specialist expertise. Career
    outcomes depend on the individual and their context.
  </p>
</div>

        </div>

        {/* Animated Cards */}
  
<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {valuePillars.map(({ title, text }, index) => (
    <article
      key={title}
      className="
        group relative z-0 h-[520px] cursor-pointer
        overflow-hidden rounded-xl bg-[#163b50]
        transition-all duration-500 ease-out
        hover:z-20 hover:-translate-y-2 hover:scale-[1.04]
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
          via-[#001b2b]/40
          to-[#001b2b]/10
          transition-all duration-500
          group-hover:via-[#001b2b]/55
        "
      />

      {/* Hover Border */}
      <div
        className="
          pointer-events-none absolute inset-0 z-20
          rounded-xl border border-white/10
          transition-colors duration-500
          group-hover:border-[#f5c451]/70
        "
      />

      {/* Number */}
      <span
        className="
          absolute left-6 top-6 z-10
          text-2xl font-semibold text-white
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
          px-6 pb-12 text-center text-white
          transition-transform duration-500 ease-out
          group-hover:-translate-y-2
        "
      >
        {/* Accent Line */}
        <div
          className="
            mb-5 h-1 w-11 rounded-full
            bg-[#91c7ed]
            transition-all duration-500
            group-hover:w-20
            group-hover:bg-[#f5c451]
          "
        />

        {/* Category */}
        <span
          className="
            mb-4 block text-sm font-bold uppercase
            tracking-[0.2em] text-white/90
            transition-colors duration-300
            group-hover:text-[#f5c451]
            sm:text-base
          "
        >
          Professional Development
        </span>

        {/* Heading */}
        <h3
          className="
            mb-4 mt-0 text-center text-2xl
            font-semibold leading-tight text-white
            transition-colors duration-300
            group-hover:text-[#f5c451]
            sm:text-3xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            m-0 max-w-sm text-center text-sm
            leading-7 text-white/90
            transition-colors duration-300
            group-hover:text-white
            sm:text-base
          "
        >
          {text}
        </p>
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
    
<section className={`section research-section research-${variant}`}>
  <div className="container split-layout">

    {/* LEFT SIDE — LARGE IMAGE */}
    <div className="split-image reveal">
      <img
        src={image}
        alt="Executive doctoral candidate reviewing applied research with an academic supervisor"
      />

      <div className="image-badge">
        <BookOpen size={19} aria-hidden="true" />
        <span>Applied Business Research</span>
      </div>
    </div>

    {/* RIGHT SIDE — CONTENT */}
    <div className="split-copy reveal">

      <Eyebrow icon={Lightbulb}>
        From Experience to Doctoral Research
      </Eyebrow>

      <h2>
        Turn your professional expertise into
        <span className="research-heading-highlight">
          {" "}meaningful business research.
        </span>
      </h2>

      <p className="research-description">
        A Doctor of Business Administration helps you examine
        real-world business challenges through structured research.
        Connect your professional experience with strategic thinking,
        evidence-based insights and practical business solutions.
      </p>

      <div className="research-topics-heading">
        Explore potential research areas
      </div>

      <div
        className="research-topic-grid"
        aria-label="Potential DBA research areas"
      >
        {researchTopics.map((topic, index) => (
          <span
            className={`research-topic research-topic-${index % 5}`}
            key={topic}
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="research-bottom">
        <PrimaryButton to="/program" navigate={navigate}>
          Explore the DBA Programme
          <ArrowRight size={17} aria-hidden="true" />
        </PrimaryButton>

        <span className="research-note">
          Find a research direction that fits your experience.
        </span>
      </div>

    </div>
  </div>
</section>


  );
}

export function JourneySection({ navigate }) {
  const [activeCard, setActiveCard] = useState(1); // Default Card 2 active, matching the reference screenshot

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
      image:"/assets/studentsupport.jpg",
      tint: "tint-yellow",
    },
  ];

  return (
    <section className="section section-white dba-journey-section">
      <div className="container container-wide">
        <SectionIntro 
          eyebrow="Your DBA Journey" 
          icon={Target} 
          title="A clear pathway from eligibility review to doctoral research." 
        />

        <div className="journey-interactive-grid" onMouseLeave={() => setActiveCard(1)}>
          {journeyCards.map((card, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");
            const isActive = activeCard === index;

            return (
              <article
                className={`journey-accordion-card ${card.tint} ${isActive ? "active" : ""}`}
                key={card.title}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                {/* Background Image Container */}
                <div className="journey-card-bg-wrap">
                  <img src={card.image} alt={card.title} className="journey-card-bg-img" />
                  <div className="journey-card-overlay"></div>
                </div>

                {/* Floating pill button matching reference */}
                <div className="journey-floating-pill">
                  <span>Find out more</span>
                </div>

                {/* 1. Closed state vertical rotated title */}
                <div className="journey-vertical-preview">
                  <span className="vertical-title-text">
                    {card.verticalTitle}
                  </span>
                </div>

                {/* 2. Hover / Active expanded content */}
                <div className="journey-hover-content">
                  <h3 className="journey-expanded-title">
                    <span className="step-num-highlight">{stepNumber}</span>
                    <span className="step-bar">|</span>
                    {card.title}
                  </h3>
                  
                  <p className="journey-expanded-text">{card.text}</p>
                  
                  <div className="journey-action-row">
                    <span
                      className="journey-cta-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate?.("/contact");
                      }}
                    >
                      Find out more
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="center-action">
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
    <section className="section section-sky applied-research-section">
      <div className="container">
        <SectionIntro
          eyebrow="Applied Research Process"
          icon={FileSearch}
          title="Research a business challenge that matters to your career."
          text="DBA candidates may investigate a relevant organisational, industry or management challenge using structured academic research methods."
        />
        <div className="research-process-grid">
          {appliedResearchSteps.map((step, index) => (
            <article className="research-process-card reveal" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


