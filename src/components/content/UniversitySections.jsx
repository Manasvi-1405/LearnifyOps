import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Laptop,
  ShieldCheck,
  X
} from "lucide-react";
import { dbaBrochureUrl, dbaCurriculumUrl, partnerUniversities } from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import PageHero from "./PageHero.jsx";
import { DownloadButton, PrimaryButton } from "../ui/Actions.jsx";
import HeroSection from "./HeroSection.jsx";

export function UniversitiesSection({ navigate, compact = false }) {
  const universityRailRef = useRef(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const slideUniversities = (direction) => {
    universityRailRef.current?.scrollBy({
      left: direction * 380,
      behavior: "smooth"
    });
  };

  return (
    <section
      className={`relative overflow-hidden  !bg-[#f2faf7 text-[#183c35]! px-4 py-16 sm:px-6 sm:py-20  lg:px-8 lg:py-24 ${compact ? "py-10 sm:py-14 lg:py-16" : ""
        }`}
    >
      <div className="mx-auto! w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 grid grid-cols-1 items-end gap-7! md:mb-12! lg:grid-cols-[1.1fr_0.9fr] lg:gap-14!">
          <div>
            <span className="mb-5! mt-2! inline-flex items-center gap-2! rounded-full border! border-[#007b65]/20! bg-[#e8f7f1]! px-4! py-2! text-xs font-extrabold uppercase tracking-[0.12em]! text-[#006b58]!">
              <Building2 size={17} aria-hidden="true" />
              Partner Universities
            </span>

            <h2 className="max-w-3xl! text-[#123b34]! text-3xl! font-extrabold leading-[1.12]! tracking-tight sm:text-4xl! lg:text-5xl!">
              Compare international DBA partner institutions.
            </h2>
          </div>

          <div className="max-w-2xl!">
            <p className="text-[#5c746e]! text-sm leading-7! sm:text-base sm:leading-8!">
              Review programme focus, study format, entry information and
              research areas before speaking with an admissions adviser.
            </p>

            <div className="mt-6! flex flex-wrap gap-3!">
              <DownloadButton
                file={dbaBrochureUrl}
                label="DBA Programme Brochure"
              >
                <span className="inline-flex min-h-12! items-center justify-center gap-2! rounded-full border! border-[#007b65]/20! bg-white! px-5! py-3! text-sm! font-bold text-[#006b58]! shadow-sm transition duration-200 hover:bg-[#e8f7f1]!">
                  <FileText size={17} aria-hidden="true" />
                  Download DBA Brochure
                </span>
              </DownloadButton>

              <DownloadButton
                file={dbaCurriculumUrl}
                label="DBA Curriculum"
              >
                <span className="inline-flex min-h-12! items-center justify-center gap-2! rounded-full border! border-[#007b65]/20! bg-white! px-5! py-3! text-sm font-bold text-[#006b58]! shadow-sm transition duration-200 hover:bg-[#e8f7f1]!">
                  <BookOpen size={17} aria-hidden="true" />
                  Download Curriculum
                </span>
              </DownloadButton>
            </div>

            {compact && (
              <Link
                className="mt-5! inline-flex items-center gap-2! font-bold text-[#006b58]! transition hover:gap-3!"
                to="/partnership"
                navigate={navigate}
              >
                View Partner Institutions
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        {/* University carousel */}
        <div className="overflow-hidden rounded-3xl! border! border-[#007b65]/15! bg-white! p-4! shadow-[0_20px_56px_rgba(5,84,69,0.08)] sm:p-6! lg:p-7!">
          <div className="mb-6! flex flex-wrap items-center justify-between gap-4!">
            <div>
              <span className="inline-flex items-center rounded-full border! border-[#007b65]/20! bg-[#e8f7f1]! px-3! py-2! text-xs font-extrabold uppercase tracking-wider text-[#006b58]!">
                Our Academic Network
              </span>
              <p className="mt-2! text-sm text-[#5c746e]!">
                {partnerUniversities.length} partner institutions
              </p>
            </div>

            <div
              className="flex items-center gap-2!"
              aria-label="University carousel controls"
            >
              <button
                type="button"
                onClick={() => slideUniversities(-1)}
                aria-label="Show previous universities"
                className="inline-flex h-11! w-11! shrink-0 items-center justify-center rounded-full border! border-[#007b65]/20! bg-white! text-[#006b58]! shadow-sm transition duration-200 hover:bg-[#e8f7f1]! active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007b65]"
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => slideUniversities(1)}
                aria-label="Show next universities"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border! border-[#007b65]/20! bg-white! text-[#006b58]! shadow-sm transition duration-200 hover:bg-[#e8f7f1]! active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007b65]"
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={universityRailRef}
            className="flex snap-x pt-2! snap-mandatory gap-4! overflow-x-auto overflow-y-hidden scroll-smooth pb-2! scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {partnerUniversities.map((university, index) => (
              <button
                type="button"
                className={`group relative flex min-h-88 shrink-0 basis-[88%] snap-start flex-col overflow-hidden rounded-2xl border! p-5! text-left transition duration-300 ease-out sm:basis-[48%] sm:p-6! lg:basis-[calc((100%-3rem)/4)] ${selectedUniversity?.name === university.name
                    ? "border-[#007b65]! bg-[#f7fcfa]! shadow-[0_22px_52px_rgba(5,84,69,0.12)] ring-2 ring-[#007b65]/15"
                    : "border-[#007b65]/15! bg-white! shadow-[0_16px_42px_rgba(5,84,69,0.08)] hover:-translate-y-1 hover:border-[#007b65]/45! hover:shadow-[0_22px_52px_rgba(5,84,69,0.12)]"
                  }`}
                key={university.name}
                onClick={() => setSelectedUniversity(university)}
                aria-expanded={selectedUniversity?.name === university.name}
              >
                {/* Card accent */}
                <div className="pointer-events-none absolute -right-12! -top-12! h-32! w-32! rounded-full bg-[#e8f7f1] opacity-70 blur-2xl transition duration-300 group-hover:scale-125" />

                <div className="relative mb-6! flex w-full items-start justify-between gap-3!">
                  <span
                    aria-label={`${university.name} logo`}
                    className="flex min-w-0 max-w-[80%] items-center gap-3!"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#007b65]! text-white! shadow-[0_8px_20px_rgba(0,123,101,0.18)]">
                      <Building2 size={21} aria-hidden="true" />
                    </span>
                    <span className="wrap-break-word text-sm font-bold leading-5! text-[#123b34]!">
                      {university.name}
                    </span>
                  </span>

                  <span className="shrink-0 text-xs font-extrabold tracking-widest text-[#006b58]/60!">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mb-5! flex flex-wrap gap-2!">
                  <span className="rounded-full border! border-[#007b65]/20! bg-[#e8f7f1]! px-3!  text-[10px] font-extrabold uppercase tracking-wider text-[#006b58]!">
                    {university.type}
                  </span>
                  <span className="rounded-full border! border-[#007b65]/20! bg-white! px-3! py-1.5 text-[10px] font-bold text-[#006b58]!">
                    {university.country}
                  </span>
                </div>

                <h3 className="relative mb-3! text-[#123b34]! text-lg font-extrabold leading-snug sm:text-xl">
                  {university.name}
                </h3>

                <p className="relative mb-7! flex-1 text-[#5c746e]! text-sm leading-6!">
                  {university.overview}
                </p>

                <span className="relative mt-auto inline-flex items-center gap-2! border-t border-[#007b65]/15!pt-4! text-sm font-bold text-[#006b58]!">
                  View university details
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-3! flex items-center justify-center gap-2! text-xs text-[#5c746e]! sm:justify-end">
            <span className="h-1.5! w-1.5! rounded-full bg-[#007b65]!" />
            Swipe or use the arrows to explore institutions
          </div>

        </div>

        {/* Selected university details */}
        {selectedUniversity && (
          <div
            className="mt-7! rounded-3xl border! border-[#007b65]/15! bg-white! p-5! shadow-[0_20px_56px_rgba(5,84,69,0.08)]! sm:mt-8! sm:p-8! lg:p-10!"
            role="region"
            aria-label={`${selectedUniversity.name} pathway details`}
          >
            <div className="mb-7! flex items-start justify-between gap-5!">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border! border-[#007b65]/20! bg-[#e8f7f1]! px-3! py-1.5! text-[10px]! font-extrabold uppercase tracking-wider text-[#006b58]! sm:text-xs">
                  Partner institution · {selectedUniversity.country}
                </span>

                <h3 className="mt-4! text-[#123b34]! text-2xl font-extrabold leading-tight sm:text-3xl">
                  {selectedUniversity.name}
                </h3>

                <p className="mt-3! max-w-3xl text-[#5c746e]! text-sm leading-7! sm:text-base">
                  {selectedUniversity.focus}
                </p>
              </div>

              <button
                className="inline-flex h-10! w-10! shrink-0 items-center justify-center rounded-full border! border-[#007b65]/20! bg-white! text-[#006b58]! transition hover:bg-[#e8f7f1]! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007b65]"
                type="button"
                aria-label="Close university details"
                onClick={() => setSelectedUniversity(null)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div
              className="mb-7! grid grid-cols-1 gap-3! sm:grid-cols-2! lg:grid-cols-3!"
              aria-label={`${selectedUniversity.name} DBA facts`}
            >
              {[
                { label: "Duration", value: selectedUniversity.duration },
                { label: "Delivery", value: selectedUniversity.delivery },
                {
                  label: "Institutional information",
                  value: selectedUniversity.accreditation,
                },
              ].map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border! border-[#007b65]/15! bg-[#f7fcfa]! p-5!"
                >
                  <span className="mb-3! block text-xs font-extrabold uppercase tracking-wider text-[#006b58]!">
                    {stat.label}
                  </span>
                  <strong className="block wrap-break-word text-[#123b34]! text-lg font-extrabold leading-snug">
                    {stat.value}
                  </strong>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4! lg:grid-cols-3!">
              <article className="rounded-2xl border! border-[#007b65]/15! bg-[#f7fcfa]! p-5! sm:p-6!">
                <div className="mb-4! flex items-center gap-3!">
                  <span className="flex h-10! w-10! shrink-0 items-center justify-center rounded-xl bg-[#e8f7f1]! text-[#006b58]!">
                    <CheckCircle2 size={20} aria-hidden="true" />
                  </span>
                  <strong className="text-[#123b34]! text-sm font-extrabold leading-5!">
                    Eligibility discussed during profile review
                  </strong>
                </div>

                <ul className="grid gap-3!">
                  {selectedUniversity.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5! text-[#5c746e]! text-sm leading-6!"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-1!! shrink-0 text-[#007b65]!"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border! border-[#007b65]/15! bg-[#f7fcfa]! p-5! sm:p-6!">
                <div className="mb-4! flex items-center gap-3!">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f1]! text-[#006b58]!">
                    <BookOpen size={20} aria-hidden="true" />
                  </span>
                  <strong className="text-[#123b34]! text-sm font-extrabold leading-5">
                    Course and research areas
                  </strong>
                </div>

                <ul className="grid gap-3">
                  {selectedUniversity.curriculum.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[#5c746e]! text-sm leading-6"
                    >
                      <BookOpen
                        size={16}
                        className="mt-1 shrink-0 text-[#007b65]!"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border! border-[#007b65]/15! bg-[#f7fcfa]! p-5! sm:p-6!">
                <div className="mb-4! flex items-center gap-3!">
                  <span className="flex h-10! w-10! shrink-0 items-center justify-center rounded-xl bg-[#e8f7f1]! text-[#006b58]!">
                    <Building2 size={20} aria-hidden="true" />
                  </span>
                  <strong className="text-[#123b34]! text-sm font-extrabold leading-5!">
                    Degrees offered
                  </strong>
                </div>

                <div className="flex flex-wrap gap-2!">
                  {(selectedUniversity.degrees || ["DBA"]).map((degree) => (
                    <strong
                      key={degree}
                      className="rounded-full border! border-[#007b65]/20! bg-[#e8f7f1]! px-3! py-2! text-sm font-bold text-[#006b58]!"
                    >
                      {degree}
                    </strong>
                  ))}
                </div>
              </article>


            </div>

            <div className="mt-6! flex flex-col gap-5  rounded-2xl border! border-[#007b65]/15! bg-[#f7fcfa]! p-5! sm:p-6! lg:flex-row lg:items-center  lg:justify-between">

              <p className="max-w-2xl text-[#5c746e]! text-sm leading-7!">
                Programme structure, fees, timeline, awarding arrangements and
                institutional information are confirmed before enrolment.
              </p>

              <div className="flex flex-wrap  gap-3">
                <DownloadButton
                  file={dbaBrochureUrl}
                  label={`${selectedUniversity.name} DBA Brochure`}
                >
                  <span className="inline-flex min-h-11 items-center justify-center gap-2! rounded-full border! border-[#007b65]/20! bg-white! px-4! py-2.5! text-sm font-bold text-[#006b58]! transition hover:bg-[#e8f7f1]!">
                    <FileText size={16} aria-hidden="true" />
                    Brochure
                  </span>
                </DownloadButton>

                <DownloadButton
                  file={dbaCurriculumUrl}
                  label={`${selectedUniversity.name} DBA Curriculum`}
                >
                  <span className="inline-flex min-h-11 items-center justify-center gap-2! rounded-full border! border-[#007b65]/20! bg-white! px-4! py-2.5! text-sm font-bold text-[#006b58]! transition hover:bg-[#e8f7f1]!">
                    <BookOpen size={16} aria-hidden="true" />
                    Curriculum
                  </span>
                </DownloadButton>

                <PrimaryButton to="/contact" navigate={navigate}>
                  Check Your Eligibility
                </PrimaryButton>
              </div>
            </div>


          </div>
        )}

        {/* Admissions note */}
        {!compact && (
          <div className="mt-7! flex flex-col gap-5! rounded-2xl border! border-[#007b65]/15! bg-white! p-5! shadow-[0_12px_36px_rgba(5,84,69,0.05)] sm:p-6! lg:flex-row lg:items-center">
            <span className="flex h-12! w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f1]! text-[#006b58]!">
              <ShieldCheck size={23} aria-hidden="true" />
            </span>


            <div className="flex-1">
              <strong className="block text-[#123b34]! text-base font-extrabold">
                Transparent Admissions Guidance
              </strong>
              <p className="mt-2! text-[#5c746e]! text-sm leading-7">
                Fees, duration, dissertation requirements and awarding
                arrangements vary by institution. Candidates should review
                institution-specific information before enrolment.
              </p>
            </div>

            <div className="shrink-0">
              <PrimaryButton to="/contact" navigate={navigate}>
                Book a DBA Consultation
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function UniversityDetailPage({ navigate, university }) {
  return (
    <>
      {/* <PageHero
        eyebrow={`${university.country} · Doctoral Pathway`}
        icon={Building2}
        tone="executive"
        image="/assets/dba-universities-hero-v2.jpg"
        caption={university.name}
        title={university.programTitle}
        text={university.overview}
      /> */}
      <HeroSection
        eyebrow={`${university.country} · Doctoral Pathway`}
        icon={Building2}
        tone="executive"
        image="/assets/dba-universities-hero-v2.jpg"
        caption={university.name}
        title={university.programTitle}
        text={university.overview}
      ></HeroSection>
      <section className="section section-sky">
        <div className=" ">
          <div
            className="university-detail-panel px-18! border-none! university-detail-page-panel reveal visible overflow-hidden"
            role="region"
            aria-label={`${university.name} pathway details`}
          >
            {/* University heading */}
            <div className="university-detail-heading flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div className="min-w-0 flex-1">
                <span className="university-type inline-flex items-center gap-2">
                  <GraduationCap size={17} aria-hidden="true" />
                  Partner institution · {university.country}
                </span>

                <h3 className="mb-3! wrap-break-word">
                  {university.name}
                </h3>

                <p className="mb-0! max-w-3xl leading-7">
                  {university.focus}
                </p>
              </div>

              <div className="shrink-0 md:pt-2">
                <Link
                  className="text-link btn btn-primary inline-flex items-center gap-2"
                  to="/partnership"
                  navigate={navigate}
                >
                  View all universities
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* University facts */}
            <div
              className="university-program-stats grid grid-cols-1 sm:grid-cols-3"
              aria-label={`${university.name} DBA facts`}
            >
              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} aria-hidden="true" />
                  Duration
                </span>
                <strong className="wrap-break-word">
                  {university.duration}
                </strong>
              </article>

              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <Laptop size={16} aria-hidden="true" />
                  Delivery
                </span>
                <strong className="wrap-break-word">
                  {university.delivery}
                </strong>
              </article>

              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} aria-hidden="true" />
                  Institutional information
                </span>
                <strong className="wrap-break-word">
                  {university.accreditation}
                </strong>
              </article>
            </div>

            {/* Eligibility and curriculum */}
            <div className="university-detail-content grid grid-cols-1 gap-6 lg:grid-cols-2!">
              <article className="min-w-0">
                <div className="mb-5 flex items-center gap-3">
                  
                  <strong className="mb-0!">
                    Eligibility discussed during profile review
                  </strong>
                </div>

                <ul className="space-y-3">
                  {university.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-6"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="min-w-0">
                <div className="mb-5 flex items-center gap-3">
                  
                  <strong className="mb-0!">
                    Course and research areas
                  </strong>
                </div>

                <ul className="space-y-3">
                  {university.curriculum.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-6"
                    >
                      <BookOpen
                        size={16}
                        className="mt-1 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* University offerings */}
            <div className="university-offerings grid grid-cols-1 gap-5 lg:grid-cols-3">
              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} aria-hidden="true" />
                  Degrees offered
                </span>

                <div className="degree-badge-list flex flex-wrap items-center gap-2">
                  {(university.degrees || ["DBA"]).map((degree) => (
                    <strong key={degree}>{degree}</strong>
                  ))}
                </div>

                <p className="mb-0! mt-4 leading-6">
                  Programme structure, awarding arrangements and institutional
                  information are confirmed before enrolment and should be
                  independently reviewed.
                </p>
              </article>

              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <BookOpen size={16} aria-hidden="true" />
                  Course areas available
                </span>

                <div className="course-chip-list flex flex-wrap items-center gap-2">
                  {university.curriculum.map((item) => (
                    <em key={item}>{item}</em>
                  ))}
                </div>
              </article>

              <article className="min-w-0">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} aria-hidden="true" />
                  Study format
                </span>

                <div className="study-format-list flex flex-wrap items-center gap-2">
                  <strong>{university.duration}</strong>
                  <strong>{university.delivery}</strong>
                </div>

                <p className="mb-0! mt-4 leading-6">
                  Designed for working professionals comparing flexible doctoral
                  and executive research pathways.
                </p>
              </article>
            </div>

            {/* Actions */}
            <div className="university-detail-actions flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="mb-0! max-w-2xl leading-6">
                Programme structure, fees, timeline, awarding arrangements and
                institutional information are confirmed before enrolment.
              </p>

              <div className="university-detail-buttons flex flex-wrap items-center gap-3">
                <DownloadButton
                  file={dbaBrochureUrl}
                  label={`${university.name} DBA Brochure`}
                >
                  <FileText size={16} aria-hidden="true" />
                  Brochure
                </DownloadButton>

                <DownloadButton
                  file={dbaCurriculumUrl}
                  label={`${university.name} DBA Curriculum`}
                >
                  <BookOpen size={16} aria-hidden="true" />
                  Curriculum
                </DownloadButton>

                <PrimaryButton to="/contact" navigate={navigate}>
                  Request Profile Review
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}