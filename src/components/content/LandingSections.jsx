import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import {
  academicNetworkSignals,
  clientProofTiles,
  companyTimeline,
  comparisonRows,
  dbaBrochureUrl,
  ecosystemFlow,
  learnerJourney,
  partnerUniversities = [],
  successSnapshots,
  trustMetrics
} from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import { DownloadButton, Eyebrow, PrimaryButton, SectionIntro } from "../ui/Actions.jsx";

// =========================================================================
// 1. HOME HERO (FULLY RESPONSIVE)
// =========================================================================
export function HomeHero({ navigate }) {
  return (
    <section className="relative w-full bg-[#f6f2ea] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & Actions (lg:col-span-7) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <Eyebrow icon={GraduationCap}>Doctor of Business Administration</Eyebrow>

            <h1 className="mt-4 sm:mt-5 font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-medium leading-[1.14] tracking-[-0.025em] text-slate-950">
              Advance your career with a DBA designed for{" "}
              <span className="text-[#008c70] font-semibold">experienced professionals.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Compare DBA pathways from international partner institutions, understand your eligibility, and receive personalised admissions support from application through enrolment.
            </p>

            <div className="mt-5 sm:mt-6 flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-slate-700 shadow-xs max-w-2xl">
              <Building2 size={18} className="text-[#ea9b3e] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-relaxed">
                For senior managers, founders, consultants, directors and experienced professionals developing their research and strategic decision-making capabilities.
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <PrimaryButton to="/contact" navigate={navigate}>
                Book DBA Consultation
              </PrimaryButton>

              <DownloadButton
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 transition-colors shadow-xs"
                file={dbaBrochureUrl}
                label="DBA Programme Brochure"
              >
                Download Programme Brochure
              </DownloadButton>
            </div>
          </div>

          {/* Right Column: Visual Showcase (lg:col-span-5) */}
          <div className="relative w-full flex items-center justify-center lg:justify-end lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Framed Visual */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-900/10">
                <img
                  src="/assets/dba-home-hero-v2.jpg"
                  alt="International executives participating in a strategic DBA roundtable"
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Floating Overlay Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 p-4 sm:p-5 rounded-2xl bg-white/95 sm:backdrop-blur-md border border-slate-200/90 shadow-xl max-w-sm text-left">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#008c70] mb-1">
                  Compare International DBA Pathways
                </span>
                <strong className="block text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                  University options, eligibility and admissions guidance in one place.
                </strong>
                <small className="block text-[11px] text-slate-500 leading-tight">
                  United Kingdom &middot; Europe &middot; Middle East &middot; Asia &middot; International
                </small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 2. GLOBAL ACADEMIC NETWORK (FULLY RESPONSIVE)
// =========================================================================
export function GlobalAcademicNetworkSection({ navigate }) {
  return (
    <section className="section py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="academic-network-copy lg:col-span-5 text-left">
            <Eyebrow icon={Globe2}>International DBA Pathways</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-3 mb-4">
              Compare universities before you make your decision.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
              LearnifyOps helps professionals evaluate DBA programmes based on their background, research interests, preferred study format and career goals.
            </p>
            <PrimaryButton to="/partnership" navigate={navigate}>
              Explore Partner Universities
            </PrimaryButton>
          </div>

          <div className="academic-network-panel lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {academicNetworkSignals.map(([title, text]) => (
              <article
                key={title}
                className="p-5 rounded-2xl bg-[#faf8f5] border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-[#008c70] mb-3">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Marquee / Partner Universities strip */}
        {partnerUniversities.length > 0 && (
          <div className="mt-14 pt-8 border-t border-slate-200/80">
            <span className="block text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">
              Institutional Network
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {partnerUniversities.map((university, index) => (
                <span
                  key={`${university.name}-${index}`}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-700"
                >
                  {university.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// =========================================================================
// 3. TRUST STRIP (FULLY RESPONSIVE)
// =========================================================================
export function TrustIndicatorsSection() {
  return (
    <section className="trust-strip py-10 sm:py-14 bg-[#0a1815] text-white px-4 sm:px-8 border-y border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {trustMetrics.map(([value, label], idx) => (
            <article key={idx} className="flex flex-col items-center justify-center p-2">
              <strong className="block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#e2b675] mb-1.5">
                {value}
              </strong>
              <span className="text-xs sm:text-sm text-slate-300 max-w-[190px] leading-snug">
                {label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 4. CLIENT PROOF SECTION (FULLY RESPONSIVE)
// =========================================================================
export function ClientProofSection() {
  return (
    <section className="section section-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Audience Fit"
            icon={ShieldCheck}
            title="Built for education teams, business operators and placement-focused programs."
            text="This section shows the real audience categories LearnifyOps serves without using unsupplied client claims."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {clientProofTiles.map((item) => (
            <article
              className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-slate-200/90 shadow-xs hover:shadow-md transition-all text-left"
              key={item}
            >
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-[#ea9b3e]/20 text-xs sm:text-sm font-extrabold text-slate-900">
                {item.split(" ").map((word) => word[0]).join("")}
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {item}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 5. LEARNING JOURNEY SECTION (FULLY RESPONSIVE)
// =========================================================================
export function LearningJourneySection() {
  return (
    <section className="section section-sky py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-[#f7faf9]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Learner Journey"
            icon={Target}
            title="A clear path from enrolment to placement readiness."
            text="Visitors understand the process quickly when the learning, mentorship and placement flow is visible."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {learnerJourney.map(([title, text], index) => (
            <article
              className="p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between text-left"
              key={title}
            >
              <div>
                <span className="inline-block text-3xl sm:text-4xl font-serif font-bold text-[#ea9b3e] mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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

// =========================================================================
// 6. WHY CHOOSE SECTION (COMPARISON MATRIX - RESPONSIVE)
// =========================================================================
export function WhyChooseSection() {
  return (
    <section className="section section-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Why Choose LearnifyOps"
            icon={Award}
            title="More than a course platform — a training, technology and placement ecosystem."
          />
        </div>

        {/* Clean Responsive Comparison Cards */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-[#faf8f5] overflow-hidden shadow-xs">
          
          {/* Header Row */}
          <div className="grid grid-cols-2 p-4 sm:p-5 bg-slate-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider text-left">
            <span className="text-slate-400">Typical platforms</span>
            <span className="text-[#e2b675]">LearnifyOps Advantage</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200/80">
            {comparisonRows.map(([others, learnify], idx) => (
              <div key={idx} className="grid grid-cols-2 p-4 sm:p-5 items-center gap-4 text-left text-xs sm:text-sm">
                <span className="text-slate-500 font-normal">
                  {others}
                </span>

                <strong className="flex items-start gap-2 text-slate-900 font-bold leading-snug">
                  <CheckCircle2 size={16} className="text-[#008c70] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{learnify}</span>
                </strong>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 7. ECOSYSTEM MAP SECTION (FULLY RESPONSIVE PREVIEW)
// =========================================================================
export function EcosystemMapSection({ navigate }) {
  return (
    <section className="section py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-[#071312] text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 sm:mb-16">
          
          {/* Left Narrative */}
          <div className="ecosystem-copy lg:col-span-5 text-left">
            <Eyebrow icon={Network}>LearnifyOps Ecosystem</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3 mb-4 text-white">
              One connected product suite for learning, automation and placement operations.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-6">
              Visitors should immediately see that LearnifyOps is not just training. It combines LMS delivery, CRM visibility, AI automation, portals, certificates and analytics into one operating model.
            </p>
            <PrimaryButton to="/contact" navigate={navigate}>
              Talk to an Expert
            </PrimaryButton>
          </div>

          {/* Right Simulated Interactive Device */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <div className="w-full max-w-xl rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl p-4 sm:p-5 backdrop-blur-md">
              {/* Window Controls */}
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] text-slate-400 ml-2 font-mono">learnifyops-console.app</span>
              </div>

              {/* Internal Screen Content */}
              <div className="grid grid-cols-12 gap-3 text-left">
                {/* Sidebar */}
                <aside className="col-span-3 sm:col-span-4 bg-black/40 rounded-xl p-3 space-y-2 text-[10px] sm:text-xs text-slate-400 font-medium">
                  <strong className="block text-white mb-2 text-xs font-bold">Dashboard</strong>
                  <span className="block px-2 py-1 rounded-md bg-white/10 text-white font-semibold">CRM Hub</span>
                  <span className="block px-2 py-1">LMS Sync</span>
                  <span className="block px-2 py-1">AI Pipeline</span>
                  <span className="block px-2 py-1">Analytics</span>
                </aside>

                {/* Dashboard Main Visual */}
                <main className="col-span-9 sm:col-span-8 space-y-3">
                  {/* Metric Bars */}
                  <div className="h-28 sm:h-36 bg-black/40 rounded-xl p-3 flex items-end justify-around gap-2">
                    <span className="w-5 sm:w-8 bg-[#008c70] rounded-t-md transition-all" style={{ height: "54%" }} />
                    <span className="w-5 sm:w-8 bg-[#ea9b3e] rounded-t-md transition-all" style={{ height: "76%" }} />
                    <span className="w-5 sm:w-8 bg-sky-500 rounded-t-md transition-all" style={{ height: "42%" }} />
                    <span className="w-5 sm:w-8 bg-emerald-400 rounded-t-md transition-all" style={{ height: "88%" }} />
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-[10px] sm:text-xs font-bold text-white">
                      Candidates
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-[10px] sm:text-xs font-bold text-white">
                      Pipelines
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-[10px] sm:text-xs font-bold text-white">
                      Placements
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

        </div>

        {/* Ecosystem Flow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-6 border-t border-white/10">
          {ecosystemFlow.map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] sm:text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 8. SUCCESS SNAPSHOTS SECTION (FULLY RESPONSIVE)
// =========================================================================
export function SuccessSnapshotsSection() {
  return (
    <section className="section section-white py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-[#faf8f5]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Outcome Frameworks"
            icon={Users}
            title="Every learner or business journey should show measurable progress."
            text="These structured outcome cards explain how LearnifyOps supports career movement, LMS visibility and business productivity without using unverified public-review claims."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {successSnapshots.map((story) => (
            <article
              className="p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between text-left"
              key={story.name}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ea9b3e]/20 text-sm font-bold text-slate-900">
                    {story.name.split(" ").map((word) => word[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{story.name}</h4>
                    <span className="text-[11px] text-slate-500 font-medium">Candidate Trajectory</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 leading-snug">
                  {story.outcome}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm">
                  <p className="text-slate-500">
                    <strong className="text-slate-800 block text-xs uppercase tracking-wider mb-0.5">
                      Before
                    </strong>
                    {story.before}
                  </p>
                  <p className="text-slate-700">
                    <strong className="text-[#008c70] block text-xs uppercase tracking-wider mb-0.5">
                      After
                    </strong>
                    {story.after}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Outcome Framework</span>
                <span className="text-emerald-700 font-bold">Verified Model</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 9. COMPANY TIMELINE SECTION (FULLY RESPONSIVE)
// =========================================================================
export function CompanyTimelineSection() {
  return (
    <section className="section timeline-section py-14 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-10 lg:px-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Company Timeline"
            icon={Clock3}
            title="From training support to a complete AI-enabled education and technology company."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
          {companyTimeline.map(([title, text], index) => (
            <article
              className="p-6 rounded-2xl sm:rounded-3xl bg-[#faf8f5] border border-slate-200/90 shadow-xs flex flex-col justify-between"
              key={title}
            >
              <div>
                <span className="inline-block text-3xl sm:text-4xl font-serif font-bold text-[#008c70] mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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