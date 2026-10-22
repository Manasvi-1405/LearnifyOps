import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  Quote,
  ShieldCheck,
  Users,
  X,
  Sparkles
  
} from "lucide-react";
import {
  admissionsSteps,
  audience,
  curriculum,
  eligibility,
  faq,
  outcomes
} from "../../data/siteContent.js";
import { Eyebrow, PrimaryButton, SecondaryButton, SectionIntro } from "../ui/Actions.jsx";



export function AudienceSection({ navigate }) {

  const audienceCards = [
    {
      title: "Senior Executives & Directors",
      text: "Hear firsthand experiences about how doctoral research directly influences high-stakes corporate strategy and board-level execution.",
      image: "/assets/senior-director.jpg",
      cta: "Find out more",
      link: "/admissions"
    },
    {
      title: "Entrepreneurs & Founders",
      text: "We partner with visionary leaders who want to systematize proprietary market methodologies into accredited, research-backed frameworks.",
      image: "/assets/founder.jpg",
      cta: "Find out more",
      link: "/admissions"
    },
    {
      title: "Strategic Consultants & Advisors",
      text: "Our candidate values underpin rigorous empirical grounding, establishing unmatched credibility with enterprise clients and global institutions.",
      image: "/assets/consultant.jpg",
      cta: "Find out more",
      link: "/admissions"
    },
      {
      title: "Corporate Directors",
      text: "Our candidate values underpin rigorous empirical grounding, establishing unmatched credibility with enterprise clients and global institutions.",
      image: "/assets/corporate-director.jpg",
      cta: "Find out more",
      link: "/admissions"
    },
     {
      title: "Public Sector Leaders",
      text: "Our candidate values underpin rigorous empirical grounding, establishing unmatched credibility with enterprise clients and global institutions.",
      image: "/assets/leader.jpg",
      cta: "Find out more",
      link: "/admissions"
    },
     {
      title: "Academic & Industry Practitioners",
      text: "Our candidate values underpin rigorous empirical grounding, establishing unmatched credibility with enterprise clients and global institutions.",
      image: "/assets/acadmic-parti.jpg",
      cta: "Find out more",
      link: "/admissions"
    }
  ];

  return (
    <section className="relative! w-full! bg-[#fbfdfc]! py-20! sm:py-24! px-6! sm:px-10! lg:px-16! font-sans! overflow-hidden!">
      {/* Background Soft Glow Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -top-40! -right-40! h-[500px]! w-[500px]! rounded-full! bg-amber-100/40! blur-3xl!"
      />

      <div className="relative! z-10! mx-auto! max-w-7xl!">
        
        {/* Section Intro / Heading */}
        <div className="mb-14! text-center! flex! flex-col! items-center!">
          <div className="mb-4! inline-flex! items-center! gap-2! rounded-full! border! border-emerald-900/10! bg-[#eef7f5]! px-4! py-1.5! text-[#1d4d44]!">
            <Users className="h-4! w-4! text-[#ea9b3e]!" />
            <span className="text-xs! font-bold! uppercase! tracking-[0.2em]!">
              Candidate Profile
            </span>
          </div>

          <h2 className="text-3xl! font-serif! font-normal! tracking-tight! text-slate-900! sm:text-4xl! lg:text-5xl!">
            Who is the DBA for?
          </h2>

          <p className="mt-4! max-w-2xl! text-base! text-slate-600! sm:text-lg!">
            Built for professionals with significant business and leadership experience ready to turn practice into doctoral-level contribution.
          </p>
        </div>

        {/* 3-Column Card Layout Matching Reference Image */}
        <div className="grid! grid-cols-1! gap-8! md:grid-cols-2! lg:grid-cols-3!">
          {audienceCards.map((card, idx) => (
            <div
              key={idx}
              className="group! flex! flex-col! justify-between! overflow-hidden! rounded-[32px]! sm:rounded-[38px]! border! border-slate-200/80! bg-white! shadow-[0_8px_30px_rgb(0,0,0,0.06)]! transition-all! duration-300! hover:-translate-y-1.5! hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]!"
            >
              {/* Card Image */}
              <div className="relative! h-[250px]! sm:h-[280px]! w-full! overflow-hidden! bg-slate-100!">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full! w-full! object-cover! object-center! transition-transform! duration-500! group-hover:scale-105!"
                />
              </div>

              {/* Card Content */}
              <div className="flex! flex-1! flex-col! justify-between! p-7! sm:p-9!">
                <div>
                  <h3 className="text-xl! sm:text-2xl! font-bold! tracking-tight! text-slate-900! mb-3.5!">
                    {card.title}
                  </h3>
                  <p className="text-sm! sm:text-[15px]! leading-relaxed! text-slate-600!">
                    {card.text}
                  </p>
                </div>

                {/* "Find out more" Link with Accent Underline */}
                <div className="mt-8! pt-2!">
                  <button
                    type="button"
                    onClick={() => (navigate ? navigate(card.link) : null)}
                    className="group/link! inline-flex! flex-col! items-start! cursor-pointer!"
                  >
                    <span className="text-base! font-bold! text-slate-900! transition-colors! duration-200! group-hover/link:text-[#ea9b3e]!">
                      {card.cta}
                    </span>
                    <span className="mt-1! h-[2.5px]! w-full! rounded-full! bg-[#b8c7db]! transition-all! duration-200! group-hover/link:bg-[#ea9b3e]!" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Primary Action Button */}
        <div className="mt-16! flex! justify-center!">
          <button
            type="button"
            onClick={() => (navigate ? navigate("/admissions") : null)}
            className="inline-flex! items-center! gap-2! rounded-lg! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! px-8! py-4! text-sm! font-bold! text-slate-950! shadow-lg! shadow-amber-500/25! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
          >
            Check Your Eligibility
            <ArrowRight size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}


export function OutcomesSection() {
  return (
    <section className="section section-sky">
      <div className="container outcome-layout">
        <div className="outcome-copy reveal">
          <Eyebrow icon={Award}>Research Capabilities</Eyebrow>
          <h2>Develop practical doctoral research skills.</h2>
          <p>Build the research literacy, analytical judgement and communication skills required for applied business research.</p>
        </div>
        <div className="outcome-list reveal">
          {outcomes.map((item) => <div key={item}><CheckCircle2 size={19} aria-hidden="true" /><span>{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}


export function CurriculumSection() {
  return (
    <section className="section section-white bg-[#f5f5f3] py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
             Modular, research-focused curriculum tailored for management professionals.
            </h2>

            <p className="mt-7 max-w-xl font-serif text-lg leading-relaxed text-[#171717] sm:text-xl">
             While exact modules depend on your selected university, this framework communicates the vital knowledge domains necessary for a defense-ready doctoral thesis.
            </p>

            <a
              href="/contact"
              className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#dca43c] px-8 py-4 text-base font-bold text-[#171717] transition-colors duration-300 hover:bg-[#c58b27]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Get in touch
            </a>

            {/* <p className="mt-7 text-base text-[#171717] sm:text-lg">
              Or call{" "}
              <a
                href="tel:01273907919"
                className="font-bold hover:underline"
              >
                01273 907 919
              </a>
              {" / "}
              <a
                href="tel:08000141311"
                className="font-bold hover:underline"
              >
                0800 0141 311
              </a>
            </p> */}
          </div>

          {/* Right Column — Numbered Steps */}
          <div className="flex flex-col gap-12">

            {/* Step 1 */}
            <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-5 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
              <span className="font-serif text-7xl font-normal leading-none text-[#171717] sm:text-8xl">
                1
              </span>

              <div>
                <h3 className="text-xl font-medium leading-snug text-[#171717] sm:text-2xl">
                  Strategic Foresight & Change Orchestration

                </h3>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#252525] sm:text-lg">
                 Analyze advanced governance paradigms, system changes, and high-impact decision-making frameworks in global business environments.
                </p>

             
              </div>
            </article>

            {/* Step 2 */}
             <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-5 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
              <span className="font-serif text-7xl font-normal leading-none text-[#171717] sm:text-8xl">
                2
              </span>

              <div>
                <h3 className="text-xl font-medium leading-snug text-[#171717] sm:text-2xl">
                  Doctoral Research Design & Methods
                </h3>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#252525] sm:text-lg">
                 Analyze advanced governance paradigms, system changes, and high-impact decision-making frameworks in global business environments.

                </p>

             
              </div>
            </article>
            {/* step3 */}
               <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-5 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
              <span className="font-serif text-7xl font-normal leading-none text-[#171717] sm:text-8xl">
                3
              </span>

              <div>
                <h3 className="text-xl font-medium leading-snug text-[#171717] sm:text-2xl">
                  International Business & Growth Strategy
                </h3>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#252525] sm:text-lg">
                  Investigate market conditions, innovation and operational choices affecting responsible growth across international markets.
                </p>

             
              </div>
            </article>
            {/* step4 */}
               <article className="grid grid-cols-[76px_minmax(0,1fr)] gap-5 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
              <span className="font-serif text-7xl font-normal leading-none text-[#171717] sm:text-8xl">
                4
              </span>

              <div>
                <h3 className="text-xl font-medium leading-snug text-[#171717] sm:text-2xl">
                  Applied Doctoral Thesis & Research Project
                </h3>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#252525] sm:text-lg">
                  Synthesize executive insights into a peer-reviewed, defense-ready dissertation solving a critical business challenge.
                </p>

             
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

//experienec epage 
export function CohortSection() {
  const cards = [
    {
      title: "Global Perspective",
      desc: "Examine management trends across US, European, and Asian markets. The LearnifyOps cohort model connects you with executives, founders, and consultants across major trade zones.",
      icon: Globe2,
      gradient: "from-sky-400 to-teal-400",
      iconColor: "text-teal-600"
    },
    {
      title: "Experienced Peers",
      desc: "Collaborate with founders, managers, consultants and corporate directors. Share real-time executive critiques and build lifelong advisory relationships.",
      icon: Users,
      gradient: "from-teal-400 to-emerald-400",
      iconColor: "text-emerald-600"
    },
    {
      title: "Flexible Milestones",
      desc: "Structured deadlines and clear doctoral checkpoints allowing you to continue active high-stakes corporate employment without pause.",
      icon: Clock3,
      gradient: "from-amber-400 to-orange-400",
      iconColor: "text-amber-600"
    },
    {
      title: "Advisor Supervision",
      desc: "1-on-1 personalized supervision from seasoned international research faculty throughout your thesis and defense preparation.",
      icon: BookOpen,
      gradient: "from-blue-400 to-indigo-400",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="w-full! bg-[#1e1e1e]! py-20! px-6! sm:px-10! lg:px-16! text-white! font-sans! antialiased!">
      <div className="max-w-7xl! mx-auto!">
        
        {/* Top Header Section */}
     
<div className="mb-14!">
  <div className="inline-flex! items-center! gap-2! mb-4! px-3.5! py-1.5! rounded-full! bg-white/10! border! border-white/15! backdrop-blur-md!">
    <Network className="w-4! h-4! text-[#ea9b3e]!" />
    <span className="text-xs! uppercase! tracking-[0.2em]! font-semibold! text-white/90!">
      Executive Experience
    </span>
  </div>

  <h2 className="text-4xl! sm:text-5xl! lg:text-[56px]! font-serif! font-normal! tracking-tight! text-white! leading-[1.12]!">
    What you will benefit from
  </h2>

  <p className="mt-4! text-base! sm:text-lg! text-slate-300! max-w-3xl! leading-relaxed!">
    The LearnifyOps cohort model connects you with executives, founders, and consultants across major trade zones. Collaborate on modules, critique research frameworks, and build lifelong professional relationships.
  </p>
</div>


        {/* 2x2 Rounded White Card Grid */}
  
<div className="grid! grid-cols-1! md:grid-cols-2! gap-8! mb-12!">
  {cards.map((item, idx) => {
    const Icon = item.icon;
    return (
      <div
        key={idx}
        className="group! relative! bg-white! text-slate-900! rounded-[36px]! sm:rounded-[44px]! p-8! sm:p-12! shadow-xl! hover:shadow-2xl! transition-all! duration-300! flex! flex-col! justify-between! overflow-hidden!"
      >
        <div className="flex! items-start! justify-between! gap-6!">
          <div className="max-w-[70%]!">
            <h3 className="text-xl! sm:text-2xl! font-bold! tracking-tight! text-slate-900! mb-4!">
              {item.title}
            </h3>
            <p className="text-sm! sm:text-[15px]! leading-relaxed! text-slate-600! font-normal!">
              {item.desc}
            </p>
          </div>

          <div
            className={`w-20! h-20! sm:w-24! sm:h-24! shrink-0! rounded-3xl! bg-gradient-to-br! ${item.gradient} p-0.5! shadow-md! flex! items-center! justify-center!`}
          >
            <div className="w-full! h-full! bg-white! rounded-[22px]! flex! items-center! justify-center!">
              <Icon
                className={`w-10! h-10! ${item.iconColor} group-hover:scale-110! transition-transform! duration-300!`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

{/* Global Network Map Card */}
<div className="relative! w-full! rounded-[36px]! sm:rounded-[44px]! bg-gradient-to-br! from-slate-900! to-slate-950! border! border-white/10! p-8! sm:p-12! lg:p-14! overflow-hidden! shadow-2xl!">
  <div
    aria-hidden="true"
    className="pointer-events-none! absolute! -right-20! -top-20! w-96! h-96! bg-[#ea9b3e]/15! rounded-full! blur-3xl!"
  />

  <div className="relative! z-10! grid! grid-cols-1! lg:grid-cols-12! gap-10! items-center!">

    {/* Left Narrative */}
    <div className="lg:col-span-5!">
      <div className="inline-flex! items-center! gap-2! mb-4! px-3! py-1! rounded-full! bg-[#ea9b3e]/20! text-[#ea9b3e]! text-xs! font-bold! uppercase! tracking-wider!">
        <Sparkles className="w-3.5! h-3.5!"/>
        Global Cohort Dynamics
      </div>

      <h3 className="text-2xl! sm:text-3xl! font-serif! text-white! mb-4! leading-snug!">
        Unified ambition. Global perspective.
      </h3>

      <p className="text-sm! sm:text-base! text-slate-300! leading-relaxed! mb-6!">
        Build valuable advisory relationships with senior managers who understand high-stakes corporate execution across the United Kingdom, North America, Australia, and worldwide markets.
      </p>

      <div className="flex! flex-wrap! gap-2.5!">
        <span className="px-3.5! py-1.5! rounded-full! bg-white/10! border! border-white/15! text-xs! font-medium! text-white!">
          United Kingdom
        </span>
        <span className="px-3.5! py-1.5! rounded-full! bg-white/10! border! border-white/15! text-xs! font-medium! text-white!">
          North America
        </span>
        <span className="px-3.5! py-1.5! rounded-full! bg-white/10! border! border-white/15! text-xs! font-medium! text-white!">
          Australia
        </span>
        <span className="px-3.5! py-1.5! rounded-full! bg-[#ea9b3e]/20! border! border-[#ea9b3e]/40! text-xs! font-semibold! text-[#f8cf8e]!">
          Global Cohort
        </span>
      </div>
    </div>

    {/* Right Map Canvas */}
    <div className="lg:col-span-7!">
      <div className="relative! w-full! h-[280px]! sm:h-[340px]! rounded-3xl! overflow-hidden! border! border-white/10! bg-slate-900/80! shadow-inner! flex! items-center! justify-center!">

        <svg
          viewBox="0 0 1000 500"
          className="w-full! h-full! object-cover! opacity-20! text-slate-400!"
          fill="currentColor"
        >
          <path d="M150,150 Q180,100 260,110 T300,180 T260,260 T180,240 Z" />
          <path d="M220,290 Q260,280 280,340 T240,440 T200,380 Z" />
          <path d="M460,110 Q540,80 580,130 T540,210 T460,180 Z" />
          <path d="M480,220 Q560,200 590,290 T540,420 T470,350 Z" />
          <path d="M620,100 Q780,70 850,160 T800,290 T660,220 Z" />
          <path d="M760,340 Q840,320 860,390 T800,450 T740,410 Z" />
        </svg>

        {/* North America */}
        <div className="absolute! top-[32%]! left-[22%]! -translate-x-1/2! -translate-y-1/2! flex! flex-col! items-center! group! cursor-pointer!">
          <div className="px-3! py-1! rounded-lg! bg-black/80! border! border-white/30! text-white! text-[11px]! font-semibold! backdrop-blur-md! shadow-lg! mb-1! flex! items-center! gap-1.5! whitespace-nowrap!">
            <span className="w-2! h-2! rounded-full! bg-emerald-400! animate-ping!"/>
            North America
          </div>
          <MapPin className="w-5! h-5! text-emerald-400! drop-shadow!"/>
        </div>

        {/* United Kingdom */}
        <div className="absolute! top-[26%]! left-[48%]! -translate-x-1/2! -translate-y-1/2! flex! flex-col! items-center! group! cursor-pointer!">
          <div className="px-3! py-1! rounded-lg! bg-black/80! border! border-white/30! text-white! text-[11px]! font-semibold! backdrop-blur-md! shadow-lg! mb-1! flex! items-center! gap-1.5! whitespace-nowrap!">
            <span className="w-2! h-2! rounded-full! bg-[#ea9b3e]!"/>
            United Kingdom
          </div>
          <MapPin className="w-5! h-5! text-[#ea9b3e]! drop-shadow!"/>
        </div>

        {/* Australia */}
        <div className="absolute! top-[72%]! left-[82%]! -translate-x-1/2! -translate-y-1/2! flex! flex-col! items-center! group! cursor-pointer!">
          <div className="px-3! py-1! rounded-lg! bg-black/80! border! border-white/30! text-white! text-[11px]! font-semibold! backdrop-blur-md! shadow-lg! mb-1! flex! items-center! gap-1.5! whitespace-nowrap!">
            <span className="w-2! h-2! rounded-full! bg-sky-400!"/>
            Australia
          </div>
          <MapPin className="w-5! h-5! text-sky-400! drop-shadow!"/>
        </div>

        {/* Global Cohort Badge */}
        <div className="absolute! bottom-4! left-4! sm:bottom-6! sm:left-6! px-4! py-2! rounded-xl! bg-black/70! border! border-white/20! backdrop-blur-md! text-xs! font-semibold! text-white! flex! items-center! gap-2!">
          <Globe2 className="w-4! h-4! text-emerald-400!"/>
          Active Global Network
        </div>

      </div>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="relative! w-full! overflow-hidden! bg-gradient-to-br! from-[#0c1f1c]! via-[#142e2a]! to-[#091714]! py-24! sm:py-32! px-6! sm:px-10! lg:px-16! text-white! font-sans!">
      
      {/* ---------------- ANIMATED AMBIENT GLOW BACKDROPS ---------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -top-24! left-1/4! h-96! w-96! rounded-full! bg-[#ea9b3e]/15! blur-[120px]! animate-pulse!"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -bottom-24! right-1/4! h-96! w-96! rounded-full! bg-emerald-500/10! blur-[130px]! animate-pulse!"
        style={{ animationDuration: "6s" }}
      />

      {/* Subtle Grid / Star Pattern Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! inset-0! opacity-[0.03]!"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* ---------------- CENTERED TESTIMONIAL CARD ---------------- */}
      <div className="relative! z-10! mx-auto! max-w-4xl! text-center! flex! flex-col! items-center!">
        
        {/* Animated Floating Quote Badge */}
        <div className="group! relative! mb-8! inline-flex! items-center! justify-center!">
          <div className="absolute! inset-0! rounded-2xl! bg-[#ea9b3e]/30! blur-md! transition-all! duration-500! group-hover:blur-lg!" />
          
          <div className="relative! flex! h-16! w-16! sm:h-20! sm:w-20! items-center! justify-center! rounded-2xl! border! border-white/20! bg-gradient-to-tr! from-white/10! to-white/5! shadow-2xl! backdrop-blur-xl! transition-transform! duration-300! hover:scale-110!">
            <Quote
              size={36}
              className="text-[#ea9b3e]! transition-transform! duration-500! group-hover:rotate-12!"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Small Top Tag */}
        <div className="mb-6! inline-flex! items-center! gap-2! rounded-full! border! border-white/15! bg-white/5! px-4! py-1.5! backdrop-blur-md!">
          <Sparkles className="h-3.5! w-3.5! text-[#ea9b3e]!" />
          <span className="text-[11px]! font-bold! uppercase! tracking-[0.25em]! text-emerald-200/90!">
            Executive Perspective
          </span>
        </div>

        {/* The Quote Statement with refined Serif typography */}
        <blockquote className="relative! text-2xl! sm:text-3xl! md:text-4xl! lg:text-[40px]! font-serif! font-light! leading-[1.3]! tracking-tight! text-[#f4f7f6]! drop-shadow-md!">
          <span className="text-[#ea9b3e]! font-serif! text-3xl! sm:text-5xl! mr-1!">&ldquo;</span>
          A Doctor of Business Administration empowers seasoned executives to conceptualize complex corporate behavior and orchestrate systemic transformation.
          <span className="text-[#ea9b3e]! font-serif! text-3xl! sm:text-5xl! ml-1!">&rdquo;</span>
        </blockquote>

        {/* Animated Elegant Center Divider */}
        <div className="my-8! flex! items-center! justify-center! gap-3!">
          <div className="h-[1px]! w-12! sm:w-20! bg-gradient-to-r! from-transparent! to-[#ea9b3e]/60!" />
          <div className="h-2! w-2! rotate-45! rounded-xs! bg-[#ea9b3e]! shadow-[0_0_10px_#ea9b3e]!" />
          <div className="h-[1px]! w-12! sm:w-20! bg-gradient-to-l! from-transparent! to-[#ea9b3e]/60!" />
        </div>

        {/* Subtitle / Citation */}
        <p className="text-xs! sm:text-sm! font-semibold! tracking-[0.2em]! uppercase! text-emerald-100/80!">
          Strategic Cohort Positioning for Professional Scholars
        </p>

      </div>
    </section>
  );
}

export function AdmissionsSection({ navigate }) {
  return (
    <section className="section admissions-section">
      <div className="container admissions-layout">
        <div className="admissions-copy reveal">
          <Eyebrow icon={ShieldCheck}>Admissions Review</Eyebrow>
          <h2>Find the DBA pathway that fits your experience and goals.</h2>
          <p>LearnifyOps reviews your profile, explains applicable university options and helps you understand the information required before you apply.</p>
          <ul className="check-list">
            {eligibility.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
          <PrimaryButton to="/contact" navigate={navigate}>Request an Eligibility Review</PrimaryButton>
        </div>
        <div className="admissions-steps reveal">
          {admissionsSteps.map(([title, text], index) => (
            <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section section-sky">
      <div className="container">
        <SectionIntro eyebrow="Support & Advice" icon={FileText} title="Clear guidance for your doctoral journey." />
        <div className="faq-grid">
          {faq.map(([question, answer]) => <article className="faq-card reveal" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>
  );
}


export function ContactSection({ handleSubmit, formState, formStatus }) {
  return (
    <section className="section section-white contact-section">
      <div className="container contact-layout">

        {/* TOP LEFT: PROFESSIONAL IMAGE */}
        <div className="contact-image contact-image-top reveal">
          <img
            src="assets/flyingcap.jpg"
            alt="Professional advisor reviewing academic opportunities"
          />
        </div>

        {/* TOP RIGHT: CONTACT FORM */}
        <form
          className="contact-form reveal"
          onSubmit={handleSubmit}
          aria-describedby="privacy-help form-status"
        >
          <div className="form-row">
            <label htmlFor="name">
              Full Name
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </label>

            <label htmlFor="email">
              Work Email
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="phone">
              Contact Number
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+44 / +1 / +61..."
                autoComplete="tel"
              />
            </label>

            <label htmlFor="type">
              Primary Interest
              <select
                id="type"
                name="type"
                defaultValue="Request the DBA prospectus"
                required
              >
                <option>Request the DBA prospectus</option>
                <option>Arrange a profile review</option>
                <option>Discuss certification support</option>
                <option>Discuss placement support</option>
                <option>Discuss technology services</option>
                <option>Compare university pathways</option>
              </select>
            </label>
          </div>

          <label htmlFor="message" className="contact-message-label">
            Research Area / Project Goals
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Briefly describe your executive career, target research areas, or custom software requirements."
              required
            />
          </label>

          <label className="consent-row" htmlFor="consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
            />
            <span>
              I consent to admissions contact regarding my enquiry
              and agree to the storage of my profile details.
            </span>
          </label>

          <p id="privacy-help" className="form-help">
            Your information will be handled in accordance with
            applicable data protection requirements.
          </p>

          <button
            className="btn btn-primary submit-button"
            type="submit"
            disabled={formState === "saving"}
          >
            {formState === "saving" ? "Submitting..." : "Submit Inquiry"}
            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <p
            id="form-status"
            className={`form-status ${formState}`}
            role="status"
          >
            {formStatus}
          </p>
        </form>

        {/* BOTTOM LEFT: CONTACT DETAILS */}
        <div className="contact-copy reveal">
          <Eyebrow icon={Mail}>Advisor Onboarding</Eyebrow>

          <h2>Schedule a confidential profiles discussion.</h2>

          <p>
            Share your academic background, research interests, or corporate
            tech consulting requirements. Our team will guide you through
            university pathways and next steps.
          </p>

          <div className="contact-lines">
            <a href="mailto:info@learnifyops.com">
              <Mail size={18} aria-hidden="true" />
              <span>info@learnifyops.com</span>
            </a>

            <a href="tel:+447447177848">
              <Phone size={18} aria-hidden="true" />
              <span>+44 7447 177848</span>
            </a>

            <span>
              <MapPin size={18} aria-hidden="true" />
              <span>United Kingdom & India Admissions Support</span>
            </span>

            <span>
              <Globe2 size={18} aria-hidden="true" />
              <span>
                Consultations across UK, USA, Australia, and Middle East
                time zones.
              </span>
            </span>
          </div>
        </div>

        {/* BOTTOM RIGHT: UNIVERSITY IMAGE */}
        <div className="contact-image contact-image-bottom reveal">
          <img
            src="/assets/glob.png"
            alt="Historic university buildings and campus"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

export function FinalCta({
  navigate,
  tone = "doctoral",
  title = "Start Your DBA Journey",
  eyebrow = "Speak with a DBA admissions adviser.",
  text = "Discuss your professional background, career goals and research interests and explore DBA pathways available through the LearnifyOps partner network."
}) {
  return (
    <section className="relative! w-full! overflow-hidden! bg-gradient-to-br! from-[#f2f8f6]! via-[#fbfaf6]! to-[#eaf4f0]! py-24! sm:py-32! px-6! sm:px-10! lg:px-16! font-sans!">
      
      {/* ---------------- BACKGROUND MOVING LIGHT ANIMATIONS ---------------- */}
      {/* Amber floating glowing blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -top-28! left-1/6! h-[420px]! w-[420px]! rounded-full! bg-gradient-to-tr! from-amber-200/50! to-orange-100/35! blur-[110px]! animate-pulse!"
        style={{ animationDuration: "5s" }}
      />
      {/* Emerald floating glowing blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -bottom-28! right-1/6! h-[440px]! w-[440px]! rounded-full! bg-gradient-to-bl! from-emerald-200/45! to-teal-100/30! blur-[120px]! animate-pulse!"
        style={{ animationDuration: "7s" }}
      />

      {/* Subtle background dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! inset-0! opacity-[0.035]!"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* ---------------- MAIN FLOATING CARD CONTAINER WITH SHADOW & HOVER ---------------- */}
      <div className="relative! z-10! mx-auto! max-w-4xl! rounded-[36px]! sm:rounded-[44px]! border! border-white/80! bg-white/75! p-8! sm:p-14! lg:p-16! text-center! backdrop-blur-xl! shadow-[0_20px_60px_-15px_rgba(20,50,40,0.12)]! ring-1! ring-slate-900/5! transition-all! duration-500! hover:-translate-y-1.5! hover:shadow-[0_30px_70px_-10px_rgba(20,50,40,0.18)]! flex! flex-col! items-center!">
        
        {/* 1. Animated Eyebrow Badge */}
        <div className="group! inline-flex! items-center! justify-center! gap-2! mb-6! px-4! py-1.5! rounded-full! border! border-emerald-900/10! bg-white/90! shadow-xs! transition-all! duration-300! hover:shadow-md! hover:scale-105!">
          <Sparkles
            className="w-4! h-4! text-[#ea9b3e]! animate-spin!"
            style={{ animationDuration: "8s" }}
          />
          <span className="text-xs! uppercase! tracking-[0.2em]! font-bold! text-[#1b433d]!">
            {eyebrow}
          </span>
        </div>

        {/* 2. Main Title */}
        <h2 className="text-3xl! sm:text-4xl! lg:text-[46px]! font-sans! font-extrabold! leading-[1.2]! tracking-tight! text-slate-900! mb-5! max-w-2xl!">
          {title}
        </h2>

        {/* 3. Description Text */}
        {text && (
          <p className="text-sm! sm:text-base! lg:text-lg! leading-relaxed! text-slate-600! font-normal! max-w-2xl! mb-10!">
            {text}
          </p>
        )}

        {/* 4. Action Buttons with Moving Hover Animations */}
        <div className="flex! flex-wrap! items-center! justify-center! gap-4!">
          {/* Primary Button */}
          <button
            type="button"
            onClick={() => (navigate ? navigate("/contact") : null)}
            className="group! inline-flex! items-center! justify-center! gap-2.5! px-8! py-4! text-xs! sm:text-sm! font-bold! text-slate-950! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-2xl! shadow-lg! shadow-amber-500/25! transition-all! duration-300! hover:scale-[1.03]! hover:shadow-xl! hover:shadow-amber-500/35! cursor-pointer!"
          >
            Book a DBA Consultation
            <ArrowRight
              size={17}
              className="transition-transform! duration-300! group-hover:translate-x-1.5!"
            />
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            onClick={() => (navigate ? navigate("/program") : null)}
            className="group! inline-flex! items-center! justify-center! gap-2! px-7! py-4! text-xs! sm:text-sm! font-semibold! text-slate-800! bg-white/90! hover:bg-white! active:bg-slate-100! border! border-slate-300/80! rounded-2xl! shadow-xs! transition-all! duration-300! hover:scale-[1.02]! hover:border-slate-400! hover:shadow-md! cursor-pointer!"
          >
            <BookOpen
              size={17}
              className="text-[#ea9b3e]! transition-transform! duration-300! group-hover:rotate-12!"
            />
            View Programme Details
          </button>
        </div>

      </div>
    </section>
  );
}

export function DownloadGateModal({ request, onClose }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  if (!request) return null;

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = request.file;
    link.download = request.file.split("/").pop() || request.label;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadLead = async (event) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("Saving your details...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      document: request.label,
      source: "download_gate",
      page: window.location.pathname,
      consent: formData.get("consent") === "on",
      submittedAt: new Date().toISOString()
    };

    try {
      const previous = JSON.parse(localStorage.getItem("learnifyops-download-leads") || "[]");
      localStorage.setItem("learnifyops-download-leads", JSON.stringify([...previous, payload]));
    } catch {
      // Local storage can be unavailable in strict browser modes; the form should still work.
    }

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          interest: `Download: ${request.label}`,
          message: `Requested ${request.label} from ${window.location.pathname}`
        })
      });
    } catch {
      // If the API is not available in the static build, keep the gated download flow working.
    }

    setStatus("success");
    setMessage("Thank you. Your download is starting now.");
    triggerDownload();
    window.setTimeout(onClose, 900);
  };

  return (
    <div className="download-modal-backdrop" role="presentation">
      <div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-modal-title">
        <button className="download-modal-close" type="button" onClick={onClose} aria-label="Close download form">
          <X size={18} aria-hidden="true" />
        </button>
        <Eyebrow icon={FileText}>Before Download</Eyebrow>
        <h2 id="download-modal-title">Enter your details to download the {request.label}.</h2>
        <p>We use this information to share DBA admissions guidance and follow up on your program enquiry.</p>
        <form className="download-form" onSubmit={handleDownloadLead}>
          <label htmlFor="download-name">Full name</label>
          <input id="download-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
          <label htmlFor="download-email">Email address</label>
          <input id="download-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          <label htmlFor="download-phone">Phone number</label>
          <input id="download-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+44 / +91 / +1..." />
          <label className="consent-row" htmlFor="download-consent">
            <input id="download-consent" name="consent" type="checkbox" required />
            <span>I consent to be contacted about the DBA program and document I requested.</span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
            {status === "saving" ? "Preparing..." : `Download ${request.label}`} <ArrowRight size={18} aria-hidden="true" />
          </button>
          {message && <p className={`download-status ${status}`}>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default FinalCta;


