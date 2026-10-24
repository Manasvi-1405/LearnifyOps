import {
  ArrowRight,
  BookOpen,
  Building2,
  FileText,
  Globe2,
  GraduationCap,
  MessageSquare,
  Mail,
  Network,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Users
} from "lucide-react";
import PageHero from "../components/content/PageHero.jsx";
import { UniversitiesSection } from "../components/content/UniversitySections.jsx";
import {
  AppliedResearchSection,
  JourneySection,
  ProgramFacts,
  ResearchSection,
  ValueSection
} from "../components/content/ProgrammeSections.jsx";
import {
  AdmissionsSection,
  AudienceSection,
  CohortSection,
  ContactSection,
  CurriculumSection,
  FaqSection,
  FinalCta,
  OutcomesSection,
  TestimonialSection
} from "../components/content/AdmissionsSections.jsx";
import { SectionIntro } from "../components/ui/Actions.jsx";
import Admission from "./Admission.jsx";
import Partnership from "./Partnership.jsx";

// =========================================================================
// 1. PROGRAM PAGE (FULLY RESPONSIVE)
// =========================================================================
export function ProgramPage({ navigate }) {
  return (
    <>
      {/* Program Hero */}
      <section className="relative! flex! min-h-[580px]! sm:min-h-[660px]! md:min-h-[700px]! lg:min-h-[740px]! w-full! items-center! overflow-hidden! bg-[#061714]!">
        {/* Background Image */}
        <img
          src="/assets/reading.jpg"
          alt="A research-led DBA for experienced professionals"
          className="absolute! inset-0! h-full! w-full! object-cover! object-center! sm:object-[center_38%]!"
        />

        {/* Base Tint Overlay */}
        <div className="absolute! inset-0! bg-black/40!" />

        {/* Directional Gradient Overlays */}
        {/* <div className="absolute! inset-0! bg-gradient-to-r! from-black/95! via-black/80! to-black/30! sm:from-black/95! sm:via-black/75! sm:to-transparent!" /> */}
        {/* <div className="absolute! inset-0! bg-gradient-to-t! from-black/70! via-transparent! to-black/20!" /> */}

        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! inset-0! opacity-30!"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 70%, rgba(226, 182, 117, 0.25), transparent 70%)"
          }}
        />

        {/* Responsive Content Container */}
        <div className="relative! z-10! mx-auto! flex! w-full! max-w-7xl! items-center! justify-start! px-4! sm:px-8! md:px-10! lg:px-12! py-16! sm:py-20! lg:py-24!">
          <div className="w-full! max-w-2xl! text-left! text-white!">
            
            {/* Main Heading */}
            <h1 className="text-2xl! xs:text-3xl! sm:text-4xl! md:text-5xl! lg:text-[54px]! xl:text-6xl! font-bold! leading-[1.18]! tracking-tight! text-white! drop-shadow-md!">
              A research-led DBA for experienced professionals.
            </h1>

            {/* Description */}
            <p className="mt-4! sm:mt-6! max-w-xl! text-sm! sm:text-base! md:text-lg! leading-relaxed! text-white/90! drop-shadow-sm!">
              Develop advanced research and strategic decision-making capabilities through a flexible pathway designed for working professionals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6! sm:mt-8! flex! flex-col! sm:flex-row! items-stretch! sm:items-center! gap-3.5! sm:gap-4!">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="w-full! sm:w-auto! inline-flex! items-center! justify-center! gap-2.5! rounded-xl! bg-[#e2b675]! hover:bg-[#d4a560]! px-6! sm:px-7! py-3.5! text-xs! sm:text-sm! font-bold! text-slate-950! shadow-xl! shadow-black/30! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
              >
                <span>Enquire Now</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => navigate("/curriculum")}
                className="w-full! sm:w-auto! inline-flex! items-center! justify-center! gap-2! rounded-xl! border! border-white/40! bg-black/40! hover:bg-black/60! px-6! py-3.5! text-xs! sm:text-sm! font-semibold! text-white! backdrop-blur-md! transition-all! duration-200! cursor-pointer!"
              >
                View Curriculum
              </button>
            </div>

            {/* Information Cards Grid */}
         

          </div>
        </div>
      </section>

      <ProgramFacts />
      <ValueSection />
      <OutcomesSection />
      <ResearchSection
        navigate={navigate}
        image="/assets/dba-program-research-v2.jpg"
        variant="program"
      />
      <FinalCta
        navigate={navigate}
        tone="research"
        title="Turn professional experience into structured business research."
      />
    </>
  );
}

// =========================================================================
// 2. CURRICULUM PAGE (FULLY RESPONSIVE)
// =========================================================================
export function CurriculumPage({ navigate }) {
  return (
    <>
      {/* Curriculum Hero */}
      <section className="relative! flex! min-h-[580px]! sm:min-h-[660px]! md:min-h-[700px]! w-full! items-center! overflow-hidden! bg-[#102f30]!">
        {/* Full Background Image */}
        <img
          src="/assets/curriculam1.jpg"
          alt="DBA curriculum and academic research"
          className="absolute! inset-0! h-full! w-full! object-cover! object-center!"
        />

        {/* Uniform Dark Overlays */}
        <div className="absolute! inset-0! bg-black/50!" />
        <div className="absolute! inset-0! bg-gradient-to-t! from-black/80! via-black/40! to-transparent! sm:bg-gradient-to-r! sm:from-black/40! sm:via-black/60! sm:to-black/85!" />

        {/* Right-Side Aligned Content */}
        <div className="relative! z-10! mx-auto! flex! w-full! max-w-7xl! justify-center! sm:justify-end! px-4! sm:px-8! md:px-10! lg:px-12! py-16! sm:py-20! lg:py-24!">
          <div className="w-full! text-left! text-white! sm:max-w-xl! lg:max-w-[560px]!">
            
            {/* Caption */}
            <p className="mb-3! sm:mb-4! text-xs! sm:text-sm! md:text-base! font-medium! italic! text-[#fce8bb]! tracking-wide!">
              Empirical study, strategic value
            </p>

            {/* Main Heading */}
            <h1 className="text-2xl! xs:text-3xl! sm:text-4xl! md:text-5xl! lg:text-5xl! font-bold! leading-[1.18]! tracking-tight! text-white! drop-shadow-md!">
              Modular coursework leading to a defence-ready dissertation.
            </h1>

            {/* Description */}
            <p className="mt-4! sm:mt-6! text-xs! sm:text-sm! md:text-base! leading-relaxed! sm:leading-7! text-white/90!">
              Review the DBA structure, research milestones, dissertation preparation and academic support available through the partner pathway selected during admissions.
            </p>

            {/* Divider Accent */}
            <div className="mt-6! sm:mt-8! h-1! w-16! sm:w-20! rounded-full! bg-[#e2b675]!" />

            {/* Information Cards Grid */}
            <div className="mt-6! sm:mt-8! grid! grid-cols-1! gap-3.5! sm:grid-cols-2! sm:gap-4! text-white!">
              <div className="rounded-2xl! border! border-white/20! bg-black/40! p-4! sm:p-5! backdrop-blur-md! transition-colors! duration-300! hover:bg-black/60!">
                <h3 className="text-xs! font-bold! uppercase! tracking-wider! text-[#e2b675]!">
                  Research Focus
                </h3>
                <p className="mt-2! text-xs! sm:text-sm! leading-relaxed! text-white/90!">
                  Applied research and strategic business challenges
                </p>
              </div>

              <div className="rounded-2xl! border! border-white/20! bg-black/40! p-4! sm:p-5! backdrop-blur-md! transition-colors! duration-300! hover:bg-black/60!">
                <h3 className="text-xs! font-bold! uppercase! tracking-wider! text-[#e2b675]!">
                  Academic Journey
                </h3>
                <p className="mt-2! text-xs! sm:text-sm! leading-relaxed! text-white/90!">
                  Coursework, research milestones and dissertation preparation
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CurriculumSection />
      <JourneySection navigate={navigate} />
      <FinalCta
        navigate={navigate}
        tone="curriculum"
        title="Review the DBA curriculum before choosing your pathway."
      />
    </>
  );
}

// =========================================================================
// 3. EXPERIENCE PAGE (FULLY RESPONSIVE)
// =========================================================================
export function ExperiencePage({ navigate }) {
  return (
    <>
      <section className="relative! flex! min-h-[580px]! sm:min-h-[660px]! md:min-h-[720px]! lg:min-h-[780px]! w-full! items-center! justify-center! overflow-hidden! bg-[#102f30]! py-16! sm:py-20! px-4! sm:px-8! md:px-10!">
        {/* Background Image */}
        <img
          src="/assets/curriculam.jpg"
          alt="Global DBA peer network"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";
          }}
          className="absolute! inset-0! h-full! w-full! object-cover! object-[center_15%]! sm:object-[center_10%]! brightness-95!"
        />

        {/* Readability Contrast Overlays */}
        <div className="absolute! inset-0! bg-black/40!" />
        <div className="absolute! inset-0! bg-gradient-to-b! from-black/75! via-black/40! to-black/80!" />

        {/* Ambient Radial Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! inset-0! opacity-20!"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(234, 155, 62, 0.3), transparent 70%)"
          }}
        />

        {/* Center Content */}
        <div className="relative! z-10! w-full! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center!">
          
          {/* Main Large Editorial Heading */}
          <h1 className="text-2xl! xs:text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-serif! font-normal! leading-[1.18]! tracking-tight! text-white! drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]! mb-3.5! sm:mb-4!">
            Learn within a globally connected executive cohort.
          </h1>

          {/* Subheader Badge/Metric Bar */}
          <p className="text-xs! sm:text-sm! md:text-base! font-semibold! text-[#fce8bb]! tracking-wide! mb-4! sm:mb-5! drop-shadow-sm! px-2!">
            Global DBA peer network &middot; Flexible doctoral milestones &middot; Applied executive research
          </p>

          {/* Descriptive Body */}
          <p className="text-xs! sm:text-sm! md:text-base! lg:text-lg! leading-relaxed! text-[#f1f5f9]! max-w-2xl! mb-6! sm:mb-8! drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]!">
            The DBA experience is built for senior professionals who want academic structure, peer critique, flexible milestones and research conversations connected to real executive practice.
          </p>

          {/* CTA Button */}
          <div className="mb-6! sm:mb-8! w-full! sm:w-auto!">
            <button
              type="button"
              onClick={() => (navigate ? navigate("/apply") : null)}
              className="w-full! sm:w-auto! inline-flex! items-center! justify-center! px-6! sm:px-8! py-3.5! sm:py-4! text-xs! sm:text-sm! font-bold! text-slate-950! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-xl! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
            >
              Get course advice and pricing
            </button>
          </div>

          {/* Partner / Cohort Card */}
          <div className="inline-flex! flex-wrap! items-center! justify-center! gap-2.5! sm:gap-6! rounded-2xl! border! border-white/20! bg-black/60! px-4! sm:px-6! py-3! backdrop-blur-md! shadow-xl! text-white! text-center!">
            <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#4ade80]!">
              <span className="h-2! w-2! rounded-full! bg-[#4ade80]! animate-pulse!" />
              Accredited Cohort
            </div>
            <div className="hidden! sm:block! h-4! w-px! bg-white/30!" />
            <div className="flex! flex-wrap! items-center! justify-center! gap-2! text-xs! font-semibold! text-white/90!">
              <span>Global DBA Network</span>
              <span>&middot;</span>
              <span>Partner Universities</span>
            </div>
          </div>

        </div>
      </section>

      <CohortSection />
      <TestimonialSection />
      <AudienceSection navigate={navigate} />
      <FinalCta
        navigate={navigate}
        tone="network"
        title="Join a DBA pathway designed for senior professional momentum."
      />
    </>
  );
}

// =========================================================================
// 4. ADMISSIONS PAGE (FULLY RESPONSIVE)
// =========================================================================
export function AdmissionsPage({ navigate }) {
  return (
    <>
      {/* Admission Hero */}
      <section className="relative! flex! min-h-[620px]! sm:min-h-[680px]! lg:min-h-[760px]! w-full! items-center! overflow-hidden! bg-gradient-to-br! from-[#071312]! via-[#0f2321]! to-[#091514]! py-14! sm:py-16! lg:py-20! px-4! sm:px-8! md:px-10! lg:px-16!">
        
        {/* Ambient Glows */}
        <div className="absolute! top-1/4! left-[-10%]! h-[300px]! sm:h-[450px]! w-[300px]! sm:w-[450px]! rounded-full! bg-[#1b433e]/30! blur-[100px]! sm:blur-[120px]! pointer-events-none!" />
        <div className="absolute! bottom-[-10%]! right-[-5%]! h-[280px]! sm:h-[380px]! w-[280px]! sm:w-[380px]! rounded-full! bg-[#ea9b3e]/10! blur-[100px]! sm:blur-[140px]! pointer-events-none!" />

        {/* 2-Column Responsive Grid */}
        <div className="relative! z-10! mx-auto! grid! w-full! max-w-7xl! grid-cols-1! items-center! gap-10! lg:grid-cols-12! lg:gap-12!">
          
          {/* Left Column: Content (lg:col-span-7) */}
          <div className="flex! flex-col! items-start! text-left! font-sans! lg:col-span-7!">
            
            {/* Main Heading */}
            <h1 className="text-2xl! xs:text-3xl! sm:text-4xl! md:text-5xl! lg:text-[46px]! xl:text-[50px]! font-sans! font-extrabold! leading-[1.2]! tracking-normal! text-white! drop-shadow-md! mb-3.5! sm:mb-4!">
              Start with a profile review before selecting your DBA pathway.
            </h1>

            {/* Subheader */}
            <p className="text-xs! sm:text-sm! md:text-base! font-medium! text-[#ebd5b3]! tracking-wide! mb-4! sm:mb-5! drop-shadow-sm!">
              Rigorous, personalized screening &middot; Document eligibility &middot; Partner university matching
            </p>

            {/* Description */}
            <p className="text-xs! sm:text-sm! md:text-base! leading-relaxed! text-[#e2e8f0]! font-normal! max-w-xl! mb-6! sm:mb-7!">
              Share your academic background, leadership experience and research goals so an advisor can confirm fit, documentation requirements and partner-university options.
            </p>

            {/* CTA Button */}
            <div className="mb-6! sm:mb-8! w-full! sm:w-auto!">
              <button
                type="button"
                onClick={() => (navigate ? navigate("/contact") : null)}
                className="w-full! sm:w-auto! inline-flex! items-center! justify-center! gap-2.5! px-7! sm:px-8! py-3.5! text-xs! sm:text-sm! font-bold! text-[#1c1306]! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-xl! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
              >
                <span>Submit Profile for Review</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Information Trust Cards */}
            <div className="grid! grid-cols-1! sm:grid-cols-2! gap-3.5! sm:gap-4! w-full! text-left!">
              <div className="rounded-2xl! border! border-white/15! bg-black/45! p-4! sm:p-5! backdrop-blur-md! shadow-lg!">
                <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ea9b3e]!">
                  <CheckCircle2 size={16} className="text-[#4ade80]! shrink-0!" />
                  <span>Eligibility Assessment</span>
                </div>
                <p className="mt-2! text-xs! sm:text-sm! text-[#f1f5f9]! leading-relaxed! font-normal!">
                  Evaluate management track record, thesis focus, and prior degree equivalence.
                </p>
              </div>

              <div className="rounded-2xl! border! border-white/15! bg-black/45! p-4! sm:p-5! backdrop-blur-md! shadow-lg!">
                <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ea9b3e]!">
                  <FileText size={16} className="text-[#4ade80]! shrink-0!" />
                  <span>Documentation Guidance</span>
                </div>
                <p className="mt-2! text-xs! sm:text-sm! text-[#f1f5f9]! leading-relaxed! font-normal!">
                  Full checklist support for transcripts, CV review, and research intent statement.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Framed Image (lg:col-span-5) */}
          <div className="relative! flex! w-full! items-center! justify-center! lg:justify-end! lg:col-span-5! mt-4! lg:mt-0!">
            <div className="relative! h-[300px]! xs:h-[360px]! sm:h-[420px]! md:h-[460px]! lg:h-[500px]! w-full! max-w-[340px]! sm:max-w-[420px]! overflow-hidden! rounded-2xl! sm:rounded-3xl! border! border-white/20! shadow-2xl! shadow-black/80!">
              <img
                src="/assets/admission-hero.jpeg"
                alt="Admissions Profile and Screening"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";
                }}
                className="h-full! w-full! object-cover! object-top! brightness-95!"
              />
              <div className="absolute! inset-0! bg-gradient-to-t! from-black/60! via-transparent! to-transparent!" />
            </div>
          </div>

        </div>
      </section>

      <FaqSection />
      <FinalCta
        navigate={navigate}
        tone="admissions"
        title="Start with a profile review before selecting a DBA pathway."
      />
    </>
  );
}

// =========================================================================
// 5. PARTNERSHIP PAGE
// =========================================================================
export function PartnershipPage({ navigate }) {
  return (
    <Partnership
      eyebrow="Partner Network"
      icon={Building2}
      tone="campus"
      image="/assets/university.jpg"
      caption="International pathways"
      title="Compare DBA pathways before you apply."
      text="Review the available partner institutions, then speak with an adviser about eligibility, programme structure, fees, study format and application requirements."
      navigate={navigate}
    />
  );
}

// =========================================================================
// 6. CONTACT PAGE (FULLY RESPONSIVE)
// =========================================================================
export function ContactPage({ navigate, contactProps }) {
  return (
    <>
      <section className="relative! flex! min-h-[620px]! sm:min-h-[680px]! lg:min-h-[760px]! w-full! items-center! justify-center! overflow-hidden! bg-[#0c1a17]! py-16! sm:py-20! px-4! sm:px-8! md:px-10!">
        {/* Full Background Image */}
        <img
          src="/assets/contact.jpg"
          alt="Explore DBA admissions pathways"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";
          }}
          className="absolute! inset-0! h-full! w-full! object-cover! object-[center_20%]! brightness-95!"
        />

        {/* Contrast Overlays */}
        <div className="absolute! inset-0! bg-black/45!" />
        <div className="absolute! inset-0! bg-gradient-to-b! from-black/75! via-black/35! to-black/85!" />

        {/* Center Content */}
        <div className="relative! z-10! w-full! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center!">
          
          {/* Eyebrow */}
          <div className="inline-flex! items-center! justify-center! gap-2! mb-4! sm:mb-5! px-3.5! sm:px-4! py-1.5! rounded-full! border! border-white/30! bg-black/40! backdrop-blur-md! shadow-sm!">
            <Mail className="w-3.5! h-3.5! sm:w-4! sm:h-4! text-[#ffd089]! shrink-0!" />
            <span className="text-[11px]! sm:text-xs! uppercase! tracking-[0.2em]! font-semibold! text-white!">
              Advisor Consultation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl! xs:text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-serif! font-normal! leading-[1.18]! tracking-tight! text-white! drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]! mb-3.5! sm:mb-4!">
            Explore DBA admissions pathways with an academic advisor.
          </h1>

          {/* Subheader */}
          <p className="text-xs! sm:text-sm! md:text-base! font-semibold! text-[#fce8bb]! tracking-wide! mb-4! sm:mb-5! drop-shadow-sm! px-2!">
            Start with a profile review &middot; 1-on-1 academic consultation &middot; Tailored guidance
          </p>

          {/* Body */}
          <p className="text-xs! sm:text-sm! md:text-base! lg:text-lg! leading-relaxed! text-[#f1f5f9]! max-w-2xl! mb-6! sm:mb-8! drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]!">
            Schedule a consultation to review your credentials, request DBA prospectus documents, and understand the right partner-university pathway for your goals.
          </p>

          {/* Action Button */}
          <div className="mb-6! sm:mb-8! w-full! sm:w-auto!">
            <a
              href="#contact-form"
              className="w-full! sm:w-auto! inline-flex! items-center! justify-center! gap-2! px-7! sm:px-8! py-3.5! sm:py-4! text-xs! sm:text-sm! font-bold! text-slate-950! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-xl! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
            >
              <span>Book Advisor Consultation</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Bottom Trust Cards */}
          <div className="grid! grid-cols-1! sm:grid-cols-2! gap-3.5! sm:gap-4! w-full! max-w-xl! text-white!">
            <div className="rounded-2xl! border! border-white/20! bg-black/55! p-4! sm:p-5! backdrop-blur-md! shadow-lg! text-left!">
              <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ffd089]!">
                <ShieldCheck size={16} className="text-[#4ade80]! shrink-0!" />
                <span>Confidential Review</span>
              </div>
              <p className="mt-1.5! text-xs! sm:text-sm! text-white/85! leading-snug!">
                Independent assessment of your academic credentials & eligibility.
              </p>
            </div>

            <div className="rounded-2xl! border! border-white/20! bg-black/55! p-4! sm:p-5! backdrop-blur-md! shadow-lg! text-left!">
              <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ffd089]!">
                <Clock size={16} className="text-[#4ade80]! shrink-0!" />
                <span>Fast Turnaround</span>
              </div>
              <p className="mt-1.5! text-xs! sm:text-sm! text-white/85! leading-snug!">
                Get comprehensive feedback and institution options within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Floating Side Support Action - Adapts for Mobile (bottom fixed corner) vs Desktop (side centered) */}
        <div className="fixed! sm:absolute! right-4! sm:right-6! bottom-6! sm:bottom-auto! sm:top-1/2! sm:-translate-y-1/2! z-30!">
          <button
            type="button"
            aria-label="Direct message advisor"
            onClick={() => {
              const el = document.getElementById("contact-form");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-12! h-12! sm:w-11! sm:h-11! rounded-2xl! sm:rounded-xl! bg-[#ea9b3e]! text-slate-950! flex! items-center! justify-center! shadow-2xl! hover:bg-[#dc8d30]! transition-all! hover:scale-105! cursor-pointer!"
          >
            <MessageSquare className="w-5! h-5! fill-current!" />
          </button>
        </div>
      </section>

      <div id="contact-form">
        <ContactSection {...contactProps} />
      </div>

      <FinalCta
        navigate={navigate}
        tone="contact"
        title="Start your DBA consultation with clarity and confidence."
      />
    </>
  );
}

// =========================================================================
// 7. PAGE HERO IMMERSIVE (UTILITY)
// =========================================================================
export function PageHeroImmersive({ eyebrow, icon, title, text, image, caption = "Global DBA pathway" }) {
  return (
    <section className="page-hero page-hero-immersive">
      <div className="page-hero-image">
        <img src={image} alt="" className="h-full! w-full! object-cover!" />
      </div>
      <div className="container page-hero-grid px-4 sm:px-8">
        <div className="page-hero-copy reveal visible">
          {eyebrow && <span className="eyebrow-light">{eyebrow}</span>}
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{title}</h1>
          <p className="text-sm sm:text-base text-slate-200 mt-2">{text}</p>
          <span className="page-caption block mt-4 text-xs font-semibold text-[#e2b675]">{caption}</span>
        </div>
      </div>
    </section>
  );
}

