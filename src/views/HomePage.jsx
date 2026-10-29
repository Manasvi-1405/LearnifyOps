import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "../components/navigation/Link.jsx";
import { PrimaryButton, SecondaryButton } from "../components/ui/Actions.jsx";
import { useRef, useState } from "react";

function PurposeMedallion({ type }) {
  const icons = {
    learning: (
      <svg viewBox="0 0 112 112" aria-hidden="true" className="w-full! h-full!">
        <circle cx="56" cy="56" r="52" fill="#b6e5c4" />
        <path
          d="M40 28c-13 6-19 20-15 34 3 10 10 16 18 19v14h32V76c7-7 10-17 8-27-3-15-15-25-29-25-5 0-9 1-14 4Z"
          fill="#008c75"
        />
        <path d="M72 72H57l-7 9h28l-6-9Z" fill="#008c75" />
        <g fill="#004c48">
          <circle cx="55" cy="52" r="14" />
          <rect x="52" y="32" width="6" height="11" rx="2" />
          <rect x="52" y="61" width="6" height="11" rx="2" />
          <rect x="35" y="49" width="11" height="6" rx="2" />
          <rect x="64" y="49" width="11" height="6" rx="2" />
          <rect
            x="40"
            y="38"
            width="6"
            height="10"
            rx="2"
            transform="rotate(-45 43 43)"
          />
          <rect
            x="65"
            y="56"
            width="6"
            height="10"
            rx="2"
            transform="rotate(-45 68 61)"
          />
          <rect
            x="64"
            y="38"
            width="6"
            height="10"
            rx="2"
            transform="rotate(45 67 43)"
          />
          <rect
            x="40"
            y="56"
            width="6"
            height="10"
            rx="2"
            transform="rotate(45 43 61)"
          />
        </g>
        <circle cx="55" cy="52" r="6" fill="#38b889" />
      </svg>
    ),
    research: (
      <svg viewBox="0 0 112 112" aria-hidden="true" className="w-full! h-full!">
        <circle cx="56" cy="56" r="52" fill="#00564f" />
        <path d="M56 4a52 52 0 0 1 0 104Z" fill="#009d78" />
        <path
          d="M57 27c-12 0-21 10-21 22 0 7 3 12 8 16 3 3 5 6 5 11h15c0-5 2-8 5-11 5-4 8-9 8-16 0-12-9-22-20-22Z"
          fill="#a6e7b9"
        />
        <path
          d="M49 80h15M50 86h13M53 92h7"
          fill="none"
          stroke="#9ce2b1"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="m52 47 6-6 8 8M58 41v20"
          fill="none"
          stroke="#008b74"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M78 30v19M78 30l-8 8M78 30l8 8"
          fill="none"
          stroke="#c3f0ca"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    leadership: (
      <svg viewBox="0 0 112 112" aria-hidden="true" className="w-full! h-full!">
        <circle cx="56" cy="56" r="52" fill="#00564f" />
        <path d="M56 4a52 52 0 0 1 0 104Z" fill="#004a45" />
        <path d="M57 18v76" stroke="#a4e6b6" strokeWidth="3" />
        <path d="M57 19h16l-7 8 7 8H57" fill="#9bdcaa" />
        <path
          d="M50 39C38 40 30 49 27 62c11 1 21-4 25-15-1 14-7 24-19 30 9 3 20 0 26-8"
          fill="#00a376"
        />
        <path
          d="M66 47c8 2 14 8 18 16-10 0-17-5-20-14 1 11 7 18 17 22-8 5-18 4-25-2"
          fill="#00b987"
        />
        <path
          d="M30 86c11-2 21-6 26-15M82 87c-10-2-19-7-25-16"
          fill="none"
          stroke="#7ed7a1"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    global: (
      <svg viewBox="0 0 112 112" aria-hidden="true" className="w-full! h-full!">
        <circle cx="56" cy="56" r="52" fill="#00a67d" />
        <circle
          cx="56"
          cy="56"
          r="24"
          fill="none"
          stroke="#85e1b2"
          strokeWidth="2"
        />
        <path
          d="M32 56h48M56 32c8 7 11 15 11 24s-3 17-11 24M56 32c-8 7-11 15-11 24s3 17 11 24M37 43h38M37 69h38"
          fill="none"
          stroke="#85e1b2"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 52c1-15 12-27 27-31M44 16l5 6-8 2M91 60c-2 15-14 27-29 30M68 96l-5-6 8-3"
          fill="none"
          stroke="#c4f4cd"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <span className={`editorial-purpose-icon editorial-purpose-icon-${type} inline-flex! items-center! justify-center! w-14! h-14! sm:w-16! sm:h-16! mb-4!`}>
      {icons[type]}
    </span>
  );
}

function HomePage({ navigate }) {
  const stories = [
    {
      image: "dba-home-research-v2.jpg",
      title: "How to choose a DBA research area",
      text: "From a professional challenge to a credible, focused question.",
    },
    {
      image: "dba-program-hero-v2.jpg",
      title: "A flexible route to doctoral study",
      text: "Understand programme structure, commitments and milestones.",
    },
    {
      image: "dba-admissions-hero-v2.jpg",
      title: "Preparing for a profile review",
      text: "What to have ready before you compare university pathways.",
    },
    {
      image: "buildProfile.jpeg",
      title: "Build your doctoral profile",
      text: "Explore the experience and thinking that can shape your DBA journey.",
    },
  ];

  const [activeStory, setActiveStory] = useState(0);
  const [hoveredStory, setHoveredStory] = useState(null);

  const currentStory = hoveredStory !== null ? hoveredStory : activeStory;

  const goNext = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const goPrevious = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="editorial-home w-full! overflow-x-hidden!">
      {/* ================= 1. HERO ================= */}
      <section
        className="editorial-world-hero relative! mt-0! min-h-[580px]! sm:min-h-[640px]! md:min-h-[720px]! lg:min-h-screen! w-full! overflow-hidden! bg-black! flex! flex-col! justify-between!"
        style={{
          backgroundImage: "url('/assets/hero-dashboard.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Contrast Overlays */}
        <div className="absolute! inset-0! z-0! bg-black/45!" />
        <div className="absolute! inset-0! z-0! bg-gradient-to-r! from-black/85! via-black/50! to-black/20!" />
        <div className="absolute! inset-0! z-0! bg-gradient-to-t! from-black/80! via-transparent! to-black/30!" />

        {/* Hero Sparkles */}
        <div className="editorial-hero-sparkles relative! z-10! pointer-events-none!" aria-hidden="true">
          {Array.from({ length: 14 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative! z-20! flex! flex-1! items-center! px-4! sm:px-8! md:px-12! lg:px-16! py-16! sm:py-20! lg:py-24!">
          <div className="w-full! px-4! py-6! sm:px-6! sm:py-8! lg:px-10! lg:py-12!">
            <p className="mb-3! text-xs! font-semibold! uppercase! tracking-[0.2em]! text-[#c7b68c]! sm:text-sm!">
              Your Next Chapter
            </p>

            <h1 className="max-w-3xl! text-2xl! font-semibold! leading-tight! tracking-tight! text-white! sm:text-3xl! md:text-4xl! lg:text-5xl!">
              Lead with Knowledge.
              <span className="block! text-[#c7b68c]!">
                Grow with Purpose.
              </span>
            </h1>
       <p className="font-serif! text-lg! xs:text-2xl! sm:text-3xl! md:text-4xl! lg:text-[42px]! font-normal! leading-[1.25]! tracking-normal! text-[#b6e5c4]! drop-shadow-md! max-w-2xl! mb-3!">
  Online certifications, AI training, and career support. Learn, qualify, get hired
</p>

            <p className="mt-4! max-w-2xl! text-sm! leading-6! text-gray-300! sm:text-base! sm:leading-7!">
              Your journey towards leadership, innovation, and academic excellence starts here.
            </p>

            <div className="mt-8! sm:mt-10!">
        <Link
          to="/contact"
          navigate={navigate}
          className="inline-flex! items-center! justify-center! px-8! sm:px-10! py-4! sm:py-4.5! rounded-xl! bg-[#f0a041]! hover:bg-[#e29332]! active:bg-[#cf8324]! text-[#1f242e]! font-sans! font-bold! text-base! sm:text-lg! shadow-[0_10px_25px_-5px_rgba(240,160,65,0.4)]! hover:shadow-[0_15px_30px_-5px_rgba(240,160,65,0.55)]! transition-all! duration-300! hover:scale-[1.02]! cursor-pointer!"
        >
          Start your career journey
        </Link>
      </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FEATURED PATHWAY ================= */}
    <section className="editorial-spotlight section py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! w-full! bg-white">
  <div className="container mx-auto! max-w-7xl! w-full!">
    <div className="editorial-label text-xs font-bold uppercase tracking-[0.2em] text-[#008c75] mb-4">
      FEATURED PATHWAY
    </div>

    <div className="editorial-spotlight-card rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-[#faf8f5] overflow-hidden flex! flex-col! lg:flex-row! items-stretch! w-full! shadow-xs hover:shadow-md transition-shadow">
      <div className="editorial-spotlight-copy flex-1! p-6! sm:p-10! lg:p-14! flex! flex-col! justify-center! text-left!">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">
          Doctor of Business Administration
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          Build research that changes how business moves.
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 sm:mb-8">
          Explore flexible DBA pathways designed around leadership experience, meaningful business questions and a world of professional perspectives.
        </p>

        <Link
          className="editorial-text-link inline-flex! items-center! gap-2! text-sm sm:text-base font-bold text-[#173f43] hover:text-[#c79500] transition-colors"
          to="/program"
          navigate={navigate}
        >
          <span>Discover the DBA programme</span>
          <ArrowRight size={17} />
        </Link>
      </div>

      <div className="editorial-spotlight-image w-full! lg:w-[48%]! relative! min-h-[260px]! sm:min-h-[340px]! lg:min-h-auto!">
        <img
          src="/assets/featuredPath.jpeg"
          alt="Executive professionals in a strategic business discussion"
          className="h-full! w-full! object-cover! object-center!"
        />
      </div>
    </div>
  </div>
</section>

      {/* ================= 3. PURPOSE ================= */}
      <section className="editorial-purpose section py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! bg-slate-50!">
        <div className="container mx-auto! max-w-7xl!">
          <div className="editorial-statement mb-12! sm:mb-16! text-center! max-w-4xl! mx-auto!">
            <p className="text-lg! sm:text-2xl! md:text-3xl! leading-relaxed! text-slate-800! font-serif!">
              LearnifyOps connects experienced professionals with the{" "}
              <strong className="text-slate-950! font-semibold!">
                research tools, university pathways and admissions guidance
              </strong>{" "}
              to examine challenges that matter — and make a considered contribution to the future of business.
            </p>
          </div>

          <div className="editorial-principles grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-4! gap-6! sm:gap-8!">
            {[
              [
                "learning",
                "Applied research",
                "Turn a real management challenge into a structured doctoral investigation.",
              ],
              [
                "research",
                "Global perspective",
                "Compare options and study alongside professionals across markets and industries.",
              ],
              [
                "leadership",
                "Executive community",
                "Learn within a focused peer network built around practical leadership experience.",
              ],
              [
                "global",
                "Guided decisions",
                "Move from initial profile review to programme selection with confidence.",
              ],
            ].map(([type, title, text]) => (
              <article
                className="editorial-principle purpose-medallion rounded-2xl! bg-white! p-6! sm:p-7! border! border-slate-200/80! shadow-xs! hover:shadow-md! transition-all! text-center! flex! flex-col! items-center!"
                key={title}
              >
                <PurposeMedallion type={type} />
                <h3 className="text-base! sm:text-lg! font-bold! text-slate-900! mb-2!">{title}</h3>
                <p className="text-xs! sm:text-sm! text-slate-600! leading-relaxed!">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. STORIES & CAROUSEL ================= */}
      <section className="editorial-stories section py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! bg-white!">
        <div className="container mx-auto! max-w-7xl!">
          {/* Header */}
          <div className="editorial-section-head flex! flex-col! sm:flex-row! sm:items-end! justify-between! gap-4! mb-8!">
            <div>
              <div className="editorial-label text-xs! font-bold! uppercase! tracking-[0.2em]! text-[#008c75]! mb-2!">
                WHAT'S NEW
              </div>
              <h2 className="text-2xl! sm:text-3xl! md:text-4xl! font-bold! text-slate-900! leading-tight!">
                Ideas, guidance and useful next steps.
              </h2>
            </div>

            <Link
              className="editorial-text-link inline-flex! items-center! gap-2! text-xs! sm:text-sm! font-bold! text-[#173f43]! hover:text-[#c79500]! transition-colors!"
              to="/program"
              navigate={navigate}
            >
              <span>View DBA overview</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Interactive Carousel */}
          <div className="relative! mt-6! sm:mt-8!">
            <div
              className="flex! h-[380px]! sm:h-[420px]! md:h-[450px]! w-full! gap-3! overflow-hidden! rounded-2xl! sm:rounded-3xl!"
              style={{ "--slide": activeStory }}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div
                className="flex! h-full! w-full! gap-3! transition-transform! duration-700! ease-[cubic-bezier(.22,1,.36,1)]! md:transform-none!"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? `translateX(calc(${activeStory} * -100% - ${activeStory * 12}px))`
                      : "none",
                }}
              >
                {stories.map((story, index) => {
                  const isOpen = currentStory === index;

                  return (
                    <article
                      key={`${story.title}-${index}`}
                      onMouseEnter={() => {
                        if (typeof window !== "undefined" && window.innerWidth >= 768) {
                          setHoveredStory(index);
                        }
                      }}
                      onClick={() => setActiveStory(index)}
                      className={`
                        group relative! min-w-full! flex-none! cursor-pointer! overflow-hidden! rounded-2xl! sm:rounded-3xl!
                        transition-all! duration-700! ease-[cubic-bezier(.22,1,.36,1)]!
                        md:min-w-0! md:basis-0!
                        ${isOpen ? "md:flex-[4.5]!" : "md:flex-1!"}
                      `}
                    >
                      <img
                        src={`/assets/${story.image}`}
                        alt={story.title}
                        className="absolute! inset-0! block! h-full! w-full! object-cover! transition-transform! duration-700! group-hover:scale-105!"
                      />

                      <div
                        className={`absolute! inset-0! transition-all! duration-700! ${
                          isOpen
                            ? "bg-gradient-to-t! from-black/95! via-black/40! to-black/20!"
                            : "bg-black/50! md:group-hover:bg-black/60!"
                        }`}
                      />

                      <span className="absolute! right-4! top-4! z-10! text-xs! font-bold! text-white/90! bg-black/40! px-2.5! py-1! rounded-full! backdrop-blur-md!">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {!isOpen && (
                        <div className="absolute! inset-0! z-10! hidden! items-end! justify-center! p-4! md:flex!">
                          <span aria-hidden="true" className="editorial-story-label whitespace-nowrap! text-sm! lg:text-base! font-semibold! text-white! [writing-mode:vertical-rl]! rotate-180! transition-transform! duration-500! group-hover:-translate-y-2!">
                            {story.title}
                          </span>
                        </div>
                      )}

                      <div
                        className={`absolute! inset-x-0! bottom-0! z-10! p-6! sm:p-8! md:p-10! transition-all! duration-500! ${
                          isOpen ? "translate-y-0! opacity-100!" : "translate-y-6! opacity-0!"
                        }`}
                      >
                        <span className="mb-3! inline-flex! rounded-full! border! border-white/20! bg-white/10! px-3! py-1! text-[10px]! font-bold! uppercase! tracking-[0.18em]! text-white! backdrop-blur-md!">
                          GUIDE
                        </span>

                        <h3 className="max-w-2xl! text-xl! sm:text-2xl! md:text-3xl! font-bold! leading-snug! text-white!">
                          {story.title}
                        </h3>

                        <p className="mt-2.5! max-w-xl! text-xs! sm:text-sm! md:text-base! leading-relaxed! text-slate-200!">
                          {story.text}
                        </p>

                        <Link
                          to="/contact"
                          navigate={navigate}
                          aria-label={`Read more about ${story.title}`}
                          className="mt-4! inline-flex! items-center! gap-2! text-xs! sm:text-sm! font-bold! text-[#e2b675]! hover:text-white! transition-colors!"
                        >
                          <span>Read the guide</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous story"
              className="absolute! left-2! sm:left-4! top-1/2! z-30! flex! h-9! w-9! sm:h-11! sm:w-11! -translate-y-1/2! items-center! justify-center! rounded-full! border! border-white/30! bg-white/90! text-slate-800! shadow-md! backdrop-blur-sm! transition-all! hover:scale-105! hover:bg-white!"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next story"
              className="absolute! right-2! sm:right-4! top-1/2! z-30! flex! h-9! w-9! sm:h-11! sm:w-11! -translate-y-1/2! items-center! justify-center! rounded-full! border! border-white/30! bg-white/90! text-slate-800! shadow-md! backdrop-blur-sm! transition-all! hover:scale-105! hover:bg-white!"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-5! sm:mt-6! flex! items-center! justify-between!">
            <div className="flex! items-center! gap-2!">
              {stories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  aria-label={`Go to story ${index + 1}`}
                  className={`h-2! rounded-full! transition-all! duration-300! ${
                    activeStory === index ? "w-7! sm:w-8! bg-slate-900!" : "w-2! bg-slate-300! hover:bg-slate-400!"
                  }`}
                />
              ))}
            </div>

            <span className="text-xs! font-semibold! text-slate-400!">
              {String(activeStory + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ================= 5. PROGRAMME SECTION ================= */}
      <section className="editorial-programme section py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! bg-slate-50!">
        <div className="container mx-auto! max-w-7xl!">
          <div className="grid! grid-cols-1! lg:grid-cols-12! gap-8! lg:gap-12! items-center!">
            
            {/* Left Poster */}
            <div className="lg:col-span-5! relative! overflow-hidden! rounded-2xl! sm:rounded-3xl! shadow-lg! border! border-slate-200!">
              <img
                src="/assets/Globally-Recognised-Degree.jpg.jpeg"
                alt="Professional reviewing an applied business research project"
                className="w-full! h-[320px]! sm:h-[400px]! lg:h-[480px]! object-cover!"
              />
              <div className="absolute! inset-0! bg-gradient-to-t! from-black/85! via-black/30! to-transparent! flex! flex-col! justify-end! p-6! text-white! text-left!">
                <span className="text-[10px]! font-bold! uppercase! tracking-widest! text-[#e2b675]! mb-1!">
                  RESEARCH-LED
                </span>
                <strong className="text-lg! sm:text-xl! font-bold!">
                  Designed for ambitious professionals.
                </strong>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7! text-left!">
              <div className="editorial-label text-xs! font-bold! uppercase! tracking-[0.2em]! text-[#008c75]! mb-2!">
                DISCOVER LEARNIFYOPS
              </div>

              <h2 className="text-2xl! sm:text-3xl! md:text-4xl! font-bold! text-slate-900! leading-tight! mb-4!">
                Find a pathway that respects where you've already been — and where you're headed.
              </h2>

              <p className="text-sm! sm:text-base! leading-relaxed! text-slate-600! mb-6! sm:mb-8!">
                We support the early work of comparing delivery formats, entry criteria, research expectations and institution information before you decide to apply.
              </p>

              <div className="grid! grid-cols-1! sm:grid-cols-2! gap-3! sm:gap-4!">
                {[
                  { label: "DBA programme", path: "/program" },
                  { label: "Partner universities", path: "/partnership" },
                  { label: "Admissions review", path: "/admissions" },
                  { label: "Curriculum framework", path: "/curriculum" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    navigate={navigate}
                    className="flex! items-center! justify-between! p-4! rounded-xl! bg-white! border! border-slate-200/80! text-sm! font-semibold! text-slate-800! hover:border-[#ea9b3e]! hover:text-[#ea9b3e]! transition-colors! shadow-xs!"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 6. IMPACT & METRICS ================= */}
      <section className="editorial-impact bg-[#f3f1eb]! px-4! sm:px-8! md:px-12! py-14! sm:py-20! lg:py-24!">
        <div className="mx-auto! max-w-7xl! text-center!">
          <span className="inline-block! text-xs! font-bold! uppercase! tracking-[0.25em]! text-[#173f43]! mb-3!">
            WHY LEARNIFYOPS
          </span>

          <h2 className="text-2xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-bold! font-serif! italic! text-slate-950! max-w-4xl! mx-auto! leading-tight! mb-12! sm:mb-16!">
            Clarity for a defining professional decision.
          </h2>

          <div className="grid! grid-cols-2! lg:grid-cols-4! gap-4! sm:gap-6! lg:gap-8!">
            {[
              { stat: "1:1", label: "admissions profile review" },
              { stat: "6", label: "partner institution pathways" },
              { stat: "24–48", label: "months of flexible study options" },
              { stat: "Global", label: "executive and research perspective" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="p-5! sm:p-7! rounded-2xl! bg-[#0c1a17]! text-white! flex! flex-col! justify-center! items-center! shadow-md! border! border-white/10!"
              >
                <strong className="block! text-3xl! sm:text-4xl! md:text-5xl! font-bold! italic! text-[#e2b675]! mb-2!">
                  {metric.stat}
                </strong>
                <small className="block! text-xs! sm:text-sm! leading-snug! text-slate-200! max-w-[180px]!">
                  {metric.label}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. GLOBAL OUTLOOK / LOCATIONS ================= */}
<section className="editorial-locations py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! w-full! overflow-hidden! bg-white">
  <div className="container mx-auto! max-w-7xl! w-full!">
    <div className="text-center! mb-10! sm:mb-12!">
      <div className="editorial-label text-xs font-bold uppercase tracking-[0.2em] text-[#008c75] mb-2">
        OUR GLOBAL OUTLOOK
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        A learning network built across borders.
      </h2>
    </div>

    <div className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-4! gap-6! w-full!">
      {[
        {
          img: "/assets/cc1.jpg",
          title: "Partner university network",
          desc: "Compare international institutions and their DBA delivery routes.",
        },
        {
          img: "/assets/partnerUniver.jpeg",
          title: "Executive cohorts",
          desc: "Exchange perspectives with experienced peers working across industries.",
        },
        {
          img: "/assets/Dba.jpg",
          title: "Admissions support",
          desc: "Start with a structured, confidential conversation about your fit.",
        },
        {
          img: "/assets/research.jpeg",
          title: "Research relevance",
          desc: "Ground each research decision in the problem you want to solve.",
        },
      ].map((card, i) => (
        <article
          key={i}
          className="group flex! flex-col! justify-between! w-full! overflow-hidden! rounded-2xl bg-white border border-slate-200 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
        >
          <div className="h-48! xs:h-52! sm:h-56! md:h-60! w-full! overflow-hidden! bg-slate-900">
            <img
              src={card.img}
              alt={card.title}
              className="h-full! w-full! object-cover! transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex! flex-col! items-center! p-5! sm:p-6! text-center! flex-1! justify-between! w-full!">
            <div className="w-full!">
              <div className="mx-auto! mb-3! h-[3px]! w-8! bg-[#008c75] transition-colors group-hover:bg-[#c79500]" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#c79500] transition-colors leading-snug">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {card.desc}
              </p>
            </div>

            <Link
              to="/contact"
              navigate={navigate}
              className="mt-5! inline-flex! h-9! w-9! shrink-0! items-center!  justify-center! rounded-full border border-slate-300 text-slate-800 transition-all group-hover:border-[#c79500] group-hover:bg-[#c79500] group-hover:text-white"
            >
              <ArrowRight size={15} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* ================= 8. START HERE / EVENTS ================= */}
      <section className="editorial-events py-14! sm:py-18! md:py-24! px-4! sm:px-8! md:px-12! bg-slate-50!">
        <div className="container mx-auto! max-w-7xl!">
          <div className="flex! flex-col! sm:flex-row! sm:items-end! justify-between! gap-4! mb-8! sm:mb-10!">
            <div>
              <div className="editorial-label text-xs! font-bold! uppercase! tracking-[0.2em]! text-[#008c75]! mb-2!">
                START HERE
              </div>
              <h2 className="text-2xl! sm:text-3xl! md:text-4xl! font-bold! text-slate-900! leading-tight!">
                Plan your next conversation.
              </h2>
            </div>

            <Link
              className="editorial-text-link inline-flex! items-center! gap-2! text-xs! sm:text-sm! font-bold! text-[#173f43]! hover:text-[#c79500]! transition-colors!"
              to="/contact"
              navigate={navigate}
            >
              <span>Request a prospectus</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6!">
            {[
              {
                num: "01",
                tag: "CONSULTATION",
                title: "Book a DBA consultation",
                desc: "Discuss your profile, interests and potential next steps.",
                img: "/assets/consult1.jpg",
                link: "/contact",
              },
              {
                num: "02",
                tag: "UNIVERSITY OPTIONS",
                title: "Compare partner pathways",
                desc: "Review structure, study formats and institutional information.",
                img: "/assets/universitry-option.jpg",
                link: "/partnership",
              },
              {
                num: "03",
                tag: "CURRICULUM",
                title: "Explore the framework",
                desc: "See the learning and research phases involved in a DBA.",
                img: "/assets/consult.jpg",
                link: "/curriculum",
              },
            ].map((event, i) => (
              <Link
                key={i}
                to={event.link}
                navigate={navigate}
                className="group relative! block! h-[380px]! sm:h-[440px]! md:h-[480px]! overflow-hidden! rounded-2xl! shadow-sm! hover:shadow-xl! transition-all! duration-300!"
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="absolute! inset-0! h-full! w-full! object-cover! transition-transform! duration-700! group-hover:scale-105!"
                />

                <div className="absolute! inset-0! bg-gradient-to-t! from-[#001b2b]/95! via-[#001b2b]/35! to-transparent!" />

                <span className="absolute! left-5! top-5! z-10! text-xl! font-bold! text-white! transition-colors! group-hover:text-[#f5c451]!">
                  {event.num}
                </span>

                <div className="absolute! inset-x-0! bottom-0! z-10! flex! flex-col! items-center! px-6! pb-8! text-center! text-white!">
                  <div className="mb-3! h-[3px]! w-9! rounded-full! bg-[#91c7ed]! transition-colors! group-hover:bg-[#f5c451]!" />
                  <small className="mb-2! block! text-[11px]! font-bold! tracking-[0.2em]! text-white/90! uppercase! group-hover:text-[#f5c451]!">
                    {event.tag}
                  </small>
                  <h3 className="mb-2! text-xl! sm:text-2xl! font-bold! leading-tight! group-hover:text-[#f5c451]! transition-colors!">
                    {event.title}
                  </h3>
                  <p className="max-w-xs! text-xs! sm:text-sm! text-slate-200! group-hover:text-white! transition-colors!">
                    {event.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. CLOSING ================= */}
      <section className="editorial-closing py-16! sm:py-20! lg:py-24! px-4! sm:px-8! md:px-12! bg-[#061714]! text-white!">
        <div className="container mx-auto! max-w-6xl! flex! flex-col! md:flex-row! items-center! justify-between! gap-8! text-center! md:text-left!">
          <div className="max-w-2xl!">
            <span className="block! text-xs! font-bold! uppercase! tracking-[0.22em]! text-[#e2b675]! mb-2!">
              READY WHEN YOU ARE
            </span>
            <h2 className="text-2xl! sm:text-3xl! md:text-4xl! lg:text-5xl! font-bold! leading-tight!">
              Make your experience the starting point for original research.
            </h2>
          </div>

          <div className="flex! flex-col! sm:flex-row! items-stretch! sm:items-center! gap-3.5! w-full! md:w-auto!">
            <PrimaryButton to="/contact" navigate={navigate}>
              Book a consultation
            </PrimaryButton>
            <SecondaryButton to="/program" navigate={navigate}>
              About the programme
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
