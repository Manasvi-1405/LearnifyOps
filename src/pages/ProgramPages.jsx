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
import Partnership from "./Partnership.jsx"

export function ProgramPage({ navigate }) {
  return (
    <>
      {/* Program Hero with Full Background Image */}
      <section className="relative! flex min-h-[640px]! sm:min-h-[700px]! lg:min-h-[740px]! w-full! items-center! overflow-hidden! bg-[#061714]!">
        {/* Full Background Image */}
        <img
          src="/assets/program-over.jpg"
          alt="A research-led DBA for experienced professionals"
          className="absolute! inset-0! h-full! w-full! object-cover! object-center! sm:object-[center_38%]!"
        />

        {/* Base Tint Overlay */}
        <div className="absolute! inset-0! bg-black/35!" />

        {/* Directional Gradient: Dark on the left for maximum text contrast, transparent on the right so the laptop and books show clearly */}
        <div className="absolute! inset-0! bg-gradient-to-r! from-black/90! via-black/70! to-black/20! sm:from-black/95! sm:via-black/75! sm:to-transparent!" />

        {/* Subtle Bottom Vignette */}
        <div className="absolute! inset-0! bg-gradient-to-t! from-black/60! via-transparent! to-black/20!" />

        {/* Elegant Curved Ambient Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! inset-0! opacity-30!"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 70%, rgba(226, 182, 117, 0.25), transparent 70%)"
          }}
        />

        {/* Left-Aligned Hero Content */}
        <div className="relative! z-10! mx-auto! flex! w-full! max-w-7xl! items-center! justify-start! px-6! py-20! sm:px-10! sm:py-24! lg:px-12!">
          <div className="w-full! max-w-2xl! text-left! text-white!">
            {/* Eyebrow */}
            

            {/* Caption */}
           

            {/* Main Heading */}
            <h1 className="text-4xl! font-bold! leading-[1.14]! tracking-tight! text-white! sm:text-5xl! lg:text-6xl!">
              A research-led DBA for experienced professionals.
            </h1>

            {/* Description */}
            <p className="mt-6! max-w-xl! text-base! leading-relaxed! text-white/90! sm:text-lg!">
              Develop advanced research and strategic decision-making capabilities through a flexible pathway designed for working professionals.
            </p>

            {/* CTA Buttons (warm golden/amber button matching reference) */}
            <div className="mt-8! flex! flex-wrap! items-center! gap-4!">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex! items-center! gap-2.5! rounded-lg! bg-[#e2b675]! hover:bg-[#d4a560]! px-7! py-3.5! text-sm! font-bold! text-slate-950! shadow-xl! shadow-black/30! transition-all! duration-200! hover:scale-[1.02]!"
              >
                Enquire Now
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={() => navigate("/curriculum")}
                className="inline-flex! items-center! gap-2! rounded-lg! border! border-white/40! bg-black/40! hover:bg-black/60! px-6! py-3.5! text-sm! font-semibold! text-white! backdrop-blur-md! transition-all! duration-200!"
              >
                View Curriculum
              </button>
            </div>

            {/* Information Cards (translucent dark cards with gold accent) */}
            <div className="mt-10! grid! max-w-xl! grid-cols-1! gap-4! sm:grid-cols-2! text-white!">
              <div className="rounded-xl! border! border-white/20! bg-black/40! p-4! backdrop-blur-md! transition-colors! duration-300! hover:bg-black/60!">
                <h3 className="text-xs! font-bold! uppercase! tracking-wider! text-[#e2b675]!">
                  Applied Research
                </h3>
                <p className="mt-1.5! text-sm! leading-6! text-white/90!">
                  Strategic decision-making & executive business challenge solutions
                </p>
              </div>

              <div className="rounded-xl! border! border-white/20! bg-black/40! p-4! backdrop-blur-md! transition-colors! duration-300! hover:bg-black/60!">
                <h3 className="text-xs! font-bold! uppercase! tracking-wider! text-[#e2b675]!">
                  Doctoral Pathway
                </h3>
                <p className="mt-1.5! text-sm! leading-6! text-white/90!">
                  Flexible milestones designed for senior working executives
                </p>
              </div>
            </div>
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


export function CurriculumPage({ navigate }) {
  return (
    <>
      {/* Curriculum Hero */}
      <section className="relative! flex min-h-[680px]! w-full! items-center! overflow-hidden! bg-[#102f30]!">
        {/* Full Background Image */}
        <img
          src="/assets/curriculam1.jpg"
          alt="DBA curriculum and academic research"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Uniform Dark Overlay - No Gradient */}
        <div className="absolute! inset-0! bg-black/40!" />

        {/* Right-Side Content */}
        <div className="relative! z-10!  mx-auto! flex! w-full! max-w-7xl! justify-end! px-6! py-20! sm:px-10! lg:px-12!">
          <div className="w-full! text-left! text-white! sm:max-w-xl! lg:max-w-[560px]!">
            {/* Eyebrow */}
           

            {/* Caption */}
            <p className="mb-5!  text-base! font-medium! italic! text-white! sm:text-lg! text-white!">
              Empirical study, strategic value
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl! font-bold! leading-tight! tracking-tight! text-white! sm:text-5xl! lg:text-6xl! text-white!">
              Modular coursework leading to a defence-ready dissertation.
            </h1>

            {/* Description */}
            <p className="mt-6! text-base! leading-8! text-white! sm:text-lg! text-white!">
              Review the DBA structure, research milestones, dissertation
              preparation and academic support available through the
              partner pathway selected during admissions.
            </p>

            {/* White Divider */}
            <div className="mt-8! h-1! w-20! rounded-full! bg-white!" />

            {/* Information Cards */}
            <div className="mt-8! grid! grid-cols-1! gap-4! sm:grid-cols-2! text-white!">
             <div className="rounded-xl! border! border-white/40! bg-black/30! p-5! transition-colors! duration-300! hover:bg-black/50!">
                <h3 className="text-sm! font-bold! uppercase! tracking-wider! text-white!">
                  Research Focus
                </h3>

                <p className="mt-3! text-sm! leading-6! text-white!">
                  Applied research and strategic business challenges
                </p>
              </div>

              <div className="rounded-xl! border! border-white/40! bg-black/30! p-5! transition-colors! duration-300! hover:bg-black/50!">
                <h3 className="text-sm! font-bold! uppercase! tracking-wider! text-white!">
                  Academic Journey
                </h3>

                <p className="mt-3! text-sm! leading-6! text-white!">
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


export function PageHeroImmersive({ eyebrow, icon, title, text, image, caption = "Global DBA pathway" }) {
  return (
    <section className="page-hero page-hero-immersive">
      <div className="page-hero-image">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal visible">
          <Eyebrow icon={icon} className="eyebrow-light">{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          <span className="page-caption">{caption}</span>
        </div>
      </div>
    </section>
  );
}
export function ExperiencePage({ navigate }) {
  return (
    <>
<section className="relative! flex min-h-[720px]! lg:min-h-[780px]! w-full! items-center! justify-center! overflow-hidden! bg-[#102f30]! py-16! px-6! sm:px-10!">
  {/* ---------------- BACKGROUND IMAGE (FULL & PROPERLY POSITIONED) ---------------- */}
  <img
    src="/assets/curriculam.jpg"
    alt="Global DBA peer network"
    onError={(e) => {
      e.currentTarget.src =
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";
    }}
    className="absolute! inset-0! h-full! w-full! object-cover! object-[center_15%]! sm:object-[center_10%]! brightness-95!"
  />

  {/* ---------------- SOFT BALANCED CONTRAST OVERLAYS ---------------- */}



  {/* Subtle gradient taaki center text pe perfect readability mile bina image hide kiye */}
  <div className="absolute! inset-0! bg-gradient-to-b! from-black/60! via-black/25! to-black/70!" />

  {/* Subtle warm ambient glow matching CTA accent */}
  <div
    aria-hidden="true"
    className="pointer-events-none! absolute! inset-0! opacity-20!"
    style={{
      background:
        "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(234, 155, 62, 0.3), transparent 70%)"
    }}
  />

  {/* ---------------- CENTERED FOREGROUND CONTENT ---------------- */}
  <div className="relative! z-10! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center!">
    {/* 1. Eyebrow Tag */}
  

    {/* 2. Main Large Editorial Heading */}
    <h1 className="text-3xl! sm:text-5xl! lg:text-6xl! font-serif! font-normal! leading-[1.15]! tracking-tight! text-white! drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]! mb-4!">
      Learn within a globally connected executive cohort.
    </h1>

    {/* 3. Subheader / Metric Highlight bar */}
    <p className="text-sm! sm:text-base! font-semibold! text-[#fce8bb]! tracking-wide! mb-5! drop-shadow-sm!">
      Global DBA peer network &middot; Flexible doctoral milestones &middot; Applied executive research
    </p>

    {/* 4. Descriptive Body Text */}
    <p className="text-sm! sm:text-base! lg:text-lg! leading-relaxed! text-[#f1f5f9]! max-w-2xl! mb-8! drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]!">
      The DBA experience is built for senior professionals who want academic structure, peer critique, flexible milestones and research conversations connected to real executive practice.
    </p>

    {/* 5. CTA Button */}
    <div className="mb-8!">
      <button
        type="button"
        onClick={() => (navigate ? navigate("/apply") : null)}
        className="inline-flex! items-center! justify-center! px-7! py-3.5! text-xs! sm:text-sm! font-bold! text-slate-950! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-lg! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
      >
        Get course advice and pricing
      </button>
    </div>

    {/* 6. Partner / Accreditation Card */}
    <div className="inline-flex! flex-wrap! items-center! justify-center! gap-4! sm:gap-6! rounded-2xl! border! border-white/30! bg-black/60! px-6! py-3! backdrop-blur-md! shadow-xl! text-white!">
      <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#4ade80]!">
        <span className="h-2! w-2! rounded-full! bg-[#4ade80]! animate-pulse!" />
        Accredited Cohort
      </div>
      <div className="hidden! sm:block! h-4! w-px! bg-white/30!" />
      <div className="flex! items-center! gap-3! text-xs! font-semibold! text-white!">
        <span>Global DBA Network</span>
        <span>&middot;</span>
        <span>Partner Universities</span>
      </div>
    </div>
  </div>



</section>

      {/* ---------------- REMAINING SECTIONS ---------------- */}
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


export function AdmissionsPage({ navigate }) {
  return (
    <>
      {/* ---------------- ADMISSION HERO (TEXT ON LEFT, IMAGE ON RIGHT) ---------------- */}
      <section className="relative! flex min-h-[700px]! lg:min-h-[760px]! w-full! items-center! overflow-hidden! bg-gradient-to-br! from-[#071312]! via-[#0f2321]! to-[#091514]! py-16! px-6! sm:px-10! lg:px-16!">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute! top-1/4! left-[-10%]! h-[450px]! w-[450px]! rounded-full! bg-[#1b433e]/30! blur-[120px]! pointer-events-none!" />
        <div className="absolute! bottom-[-10%]! right-10! h-[380px]! w-[380px]! rounded-full! bg-[#ea9b3e]/10! blur-[140px]! pointer-events-none!" />

        {/* Main 2-Column Grid Layout */}
        <div className="relative! z-10! mx-auto! grid! w-full! max-w-7xl! grid-cols-1! items-center! gap-12! lg:grid-cols-12!">
          
          {/* Left Column: Text & Content (lg:col-span-7) */}
          <div className="flex! flex-col! items-start! text-left! font-sans! lg:col-span-7!">
            
            {/* Main Heading */}
            <h1 className="text-3xl! sm:text-4xl! lg:text-[48px]! font-sans! font-extrabold! leading-[1.2]! tracking-normal! text-[#ffffff]! drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]! mb-4!">
              Start with a profile review before selecting your DBA pathway.
            </h1>

            {/* Subheader */}
            <p className="text-sm! sm:text-base! lg:text-lg! font-medium! text-[#ebd5b3]! tracking-wide! mb-5! drop-shadow-sm!">
              Rigorous, personalized screening &middot; Document eligibility &middot; Partner university matching
            </p>

            {/* Description */}
            <p className="text-sm! sm:text-base! leading-relaxed! text-[#e2e8f0]! font-normal! max-w-xl! mb-7! drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]!">
              Share your academic background, leadership experience and research goals so an advisor can confirm fit, documentation requirements and partner-university options.
            </p>

            {/* CTA Button */}
            <div className="mb-8!">
              <button
                type="button"
                onClick={() => (navigate ? navigate("/contact") : null)}
                className="inline-flex! items-center! justify-center! gap-2.5! px-8! py-3.5! text-xs! sm:text-sm! font-bold! text-[#1c1306]! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-lg! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
              >
                Submit Profile for Review
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Information Trust Cards */}
            <div className="grid! grid-cols-1! sm:grid-cols-2! gap-4! w-full! text-left!">
              <div className="rounded-xl! border! border-white/15! bg-black/45! p-4! sm:p-5! backdrop-blur-md! shadow-lg!">
                <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ea9b3e]!">
                  <CheckCircle2 size={16} className="text-[#4ade80]!" />
                  Eligibility Assessment
                </div>
                <p className="mt-2! text-xs! sm:text-sm! text-[#f1f5f9]! leading-snug! font-normal!">
                  Evaluate management track record, thesis focus, and prior degree equivalence.
                </p>
              </div>

              <div className="rounded-xl! border! border-white/15! bg-black/45! p-4! sm:p-5! backdrop-blur-md! shadow-lg!">
                <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ea9b3e]!">
                  <FileText size={16} className="text-[#4ade80]!" />
                  Documentation Guidance
                </div>
                <p className="mt-2! text-xs! sm:text-sm! text-[#f1f5f9]! leading-snug! font-normal!">
                  Full checklist support for transcripts, CV review, and research intent statement.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Smaller Framed Image (lg:col-span-5) */}
          <div className="relative! flex! w-full! items-center! justify-center! lg:justify-end! lg:col-span-5!">
            <div className="relative! h-[380px]! sm:h-[460px]! lg:h-[500px]! w-full! max-w-[420px]! overflow-hidden! rounded-2xl! border! border-white/20! shadow-2xl! shadow-black/80!">
              <img
                src="/assets/admission-hero.jpeg"
                alt="Admissions Profile and Screening"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80";
                }}
                className="h-full! w-full! object-cover! object-top! brightness-95!"
              />
              {/* Subtle inner dark gradient at the bottom edge */}
              <div className="absolute! inset-0! bg-gradient-to-t! from-black/60! via-transparent! to-transparent!" />
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- REST OF THE SECTIONS ---------------- */}
      <FaqSection />
      <FinalCta
        navigate={navigate}
        tone="admissions"
        title="Start with a profile review before selecting a DBA pathway."
      />
    </>
  );
}


export function PartnershipPage({ navigate }) {
  return <>   <Partnership
  
    eyebrow="Partner Network"
    icon={Building2}
    tone="campus"
    image="/assets/university.jpg"
    caption="International pathways"
    title="Compare DBA pathways before you apply."
    text="Review the available partner institutions, then speak with an adviser about eligibility, programme structure, fees, study format and application requirements."
    navigate={navigate}
   /></>;
}

export function ContactPage({ navigate, contactProps }) {
  return (
    <>
      {/* ---------------- HIGH-VISIBILITY HERO SECTION ---------------- */}
      <section className="relative! flex min-h-[700px]! lg:min-h-[760px]! w-full! items-center! justify-center! overflow-hidden! bg-[#0c1a17]! py-16! px-6! sm:px-10!">
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

        {/* Soft Balanced Contrast Overlays (Text clear dikhe bina image hide kiye) */}
        <div className="absolute! inset-0! bg-black/50!" />
        <div className="absolute! inset-0! bg-gradient-to-b! from-black/65! via-black/30! to-black/75!" />

        {/* Center Foreground Content */}
        <div className="relative! z-10! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center!">
          {/* Eyebrow */}
          <div className="inline-flex! items-center! justify-center! gap-2! mb-5! px-4! py-1.5! rounded-full! border! border-white/30! bg-black/40! backdrop-blur-md! shadow-sm!">
            <Mail className="w-4! h-4! text-[#ffd089]! shrink-0!" />
            <span className="text-xs! uppercase! tracking-[0.2em]! font-semibold! text-white!">
              Advisor Consultation
            </span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-3xl! sm:text-5xl! lg:text-6xl! font-serif! font-normal! leading-[1.15]! tracking-tight! text-white! drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]! mb-4!">
            Explore DBA admissions pathways with an academic advisor.
          </h1>

          {/* Subheader / Caption */}
          <p className="text-sm! sm:text-base! font-semibold! text-[#fce8bb]! tracking-wide! mb-5! drop-shadow-sm!">
            Start with a profile review &middot; 1-on-1 academic consultation &middot; Tailored guidance
          </p>

          {/* Descriptive Body Text */}
          <p className="text-sm! sm:text-base! lg:text-lg! leading-relaxed! text-[#f1f5f9]! max-w-2xl! mb-8! drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]!">
            Schedule a consultation to review your credentials, request DBA prospectus documents, and understand the right partner-university pathway for your goals.
          </p>

          {/* Action CTA Buttons */}
          <div className="mb-8! flex! flex-wrap! items-center! justify-center! gap-4!">
            <a
              href="#contact-form"
              className="inline-flex! items-center! justify-center! gap-2! px-8! py-3.5! text-xs! sm:text-sm! font-bold! text-slate-950! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-lg! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
            >
              Book Advisor Consultation
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Bottom Trust Cards */}
          <div className="grid! grid-cols-1! sm:grid-cols-2! gap-4! w-full! max-w-xl! text-white!">
            <div className="rounded-xl! border! border-white/20! bg-black/50! p-4! backdrop-blur-md! shadow-lg! text-left!">
              <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ffd089]!">
                <ShieldCheck size={16} className="text-[#4ade80]!" />
                Confidential Review
              </div>
              <p className="mt-1! text-xs! sm:text-sm! text-white/85! leading-snug!">
                Independent assessment of your academic credentials & eligibility.
              </p>
            </div>

            <div className="rounded-xl! border! border-white/20! bg-black/50! p-4! backdrop-blur-md! shadow-lg! text-left!">
              <div className="flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-wider! text-[#ffd089]!">
                <Clock size={16} className="text-[#4ade80]!" />
                Fast Turnaround
              </div>
              <p className="mt-1! text-xs! sm:text-sm! text-white/85! leading-snug!">
                Get comprehensive feedback and institution options within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Side Support Trigger */}
        <div className="absolute! right-4! sm:right-6! top-1/2! -translate-y-1/2! z-20!">
          <button
            aria-label="Direct message advisor"
            className="w-11! h-11! rounded-lg! bg-[#ea9b3e]! text-slate-950! flex! items-center! justify-center! shadow-2xl! hover:bg-[#dc8d30]! transition-transform! hover:scale-105! cursor-pointer!"
          >
            <MessageSquare className="w-5! h-5! fill-current!" />
          </button>
        </div>
      </section>

      {/* ---------------- EXISTING REMAINING SECTIONS ---------------- */}
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


