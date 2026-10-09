import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "../components/navigation/Link.jsx";
import { PrimaryButton, SecondaryButton } from "../components/ui/Actions.jsx";
import { useRef, useState } from "react";

function PurposeMedallion({ type }) {
  const icons = {
    learning: (
      <svg viewBox="0 0 112 112" aria-hidden="true">
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
      <svg viewBox="0 0 112 112" aria-hidden="true">
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
      <svg viewBox="0 0 112 112" aria-hidden="true">
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
      <svg viewBox="0 0 112 112" aria-hidden="true">
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
    <span className={`editorial-purpose-icon editorial-purpose-icon-${type}`}>
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

  const carouselRef = useRef(null);

  const currentStory = hoveredStory !== null ? hoveredStory : activeStory;

  const goNext = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const goPrevious = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };
  return (
    <div className="editorial-home">
      {/* ================= HERO ================= */}
      <section
        className="editorial-world-hero relative mt-0 min-h-screen overflow-hidden bg-black pt-0"
        style={{
          backgroundImage: "url('/assets/hero-dashboard.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Image overlay — keeps all text visible */}
        <div className="absolute inset-0 z-0 bg-black/40" />

        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

        {/* Sparkles */}
        <div
          className="editorial-hero-sparkles relative z-10"
          aria-hidden="true"
        >
          {Array.from({ length: 18 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex min-h-screen items-center">
          <div className="editorial-world-copy container reveal visible">
            <span className="editorial-hero-eyebrow text-white">
              GLOBAL EXECUTIVE EDUCATION
            </span>

            <h1 className="max-w-4xl text-white">
              Learn, research and lead on a global stage.
            </h1>

            <p className="max-w-2xl text-white/90">
              LearnifyOps helps experienced professionals compare doctoral
              pathways and translate ambition into applied business research.
            </p>

            <PrimaryButton to="/contact" navigate={navigate}>
              Speak to an adviser
            </PrimaryButton>
          </div>
        </div>

        {/* Bottom Hero Note */}
        <div className="editorial-world-note relative z-20 text-white">
          International DBA pathways · flexible executive study
        </div>
      </section>

      {/* ================= FEATURED PATHWAY ================= */}
      <section className="editorial-spotlight section ">
        <div className="container ">
          <div className="editorial-label ">FEATURED PATHWAY</div>

          <div className="editorial-spotlight-card reveal">
            <div className="editorial-spotlight-copy">
              <span>DOCTOR OF BUSINESS ADMINISTRATION</span>

              <h2>Build research that changes how business moves.</h2>

              <p>
                Explore flexible DBA pathways designed around leadership
                experience, meaningful business questions and a world of
                professional perspectives.
              </p>

              <Link
                className="editorial-text-link"
                to="/program"
                navigate={navigate}
              >
                Discover the DBA programme
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="editorial-spotlight-image">
              <img
                src="/assets/featuredPath.jpeg"
                alt="Executive professionals in a strategic business discussion"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PURPOSE ================= */}
      <section className="editorial-purpose section">
        <div className="container   ">
          <div className="editorial-statement reveal">
            <p>
              LearnifyOps connects experienced professionals with the{" "}
              <strong>
                research tools, university pathways and admissions guidance
              </strong>{" "}
              to examine challenges that matter — and make a considered
              contribution to the future of business.
            </p>
          </div>

          <div className="editorial-principles">
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
                className="editorial-principle purpose-medallion reveal"
                key={title}
              >
                <PurposeMedallion type={type} />

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORIES ================= */}
      <section className="editorial-stories section">
        <div className="container">
          {/* HEADER */}
          <div className="editorial-section-head reveal ">
            <div>
              <div className="editorial-label ">WHAT'S NEW</div>

              <h2>Ideas, guidance and useful next steps.</h2>
            </div>

            <Link
              className="editorial-text-link"
              to="/program"
              navigate={navigate}
            >
              View DBA overview
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* CAROUSEL */}
          <div className="relative mt-8">
            {/* TRACK */}
            <div
              className="
          flex
          h-[420px]
          w-full
          gap-3
          overflow-hidden
          rounded-3xl

          /* MOBILE SLIDE */
          [--slide:0]
        "
              style={{
                "--slide": activeStory,
              }}
              onMouseLeave={() => setHoveredStory(null)}
            >
              <div
                className="
            flex
            h-full
            w-full
            gap-3

            transition-transform
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]

            [transform:translateX(calc(var(--slide)*-100%))]

            md:transform-none
          "
              >
                {stories.map((story, index) => {
                  const isOpen = currentStory === index;

                  return (
                    <article
                      key={`${story.title}-${index}`}
                      onMouseEnter={() => {
                        // Hover only matters on desktop
                        if (window.innerWidth >= 768) {
                          setHoveredStory(index);
                        }
                      }}
                      onClick={() => setActiveStory(index)}
                      className={`
                  group
                  relative
                  min-w-full
                  flex-none
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl

                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]

                  md:min-w-0
                  md:basis-0
                  ${isOpen ? "md:flex-[5]" : "md:flex-1"}
                `}
                    >
                      {/* IMAGE */}
                      <img
                        src={`/assets/${story.image}`}
                        alt={story.title}
                        className="
                    absolute
                    inset-0
                    block
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]

                    md:group-hover:scale-105
                  "
                      />

                      {/* OVERLAY */}
                      <div
                        className={`
                    absolute
                    inset-0
                    transition-all
                    duration-700

                    ${
                      isOpen
                        ? "bg-gradient-to-t from-black/90 via-black/35 to-transparent"
                        : "bg-black/35 md:group-hover:bg-black/45"
                    }
                  `}
                      />

                      {/* NUMBER */}
                      <span
                        className="
                    absolute
                    right-5
                    top-5
                    z-10
                    text-xs
                    font-semibold
                    text-white/90
                  "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* CLOSED CARD TITLE — DESKTOP ONLY */}
                      {!isOpen && (
                        <div
                          className="
                      absolute
                      inset-0
                      z-10

                      hidden
                      items-end
                      justify-center
                      p-4

                      md:flex
                    "
                        >
                          <h3
                            className="
                        whitespace-nowrap
                        text-base
                        font-semibold
                        text-white

                        [writing-mode:vertical-rl]
                        rotate-180

                        transition-transform
                        duration-500

                        group-hover:-translate-y-2
                      "
                          >
                            {story.title}
                          </h3>
                        </div>
                      )}

                      {/* OPEN CARD CONTENT */}
                      <div
                        className={`
                    absolute
                    inset-x-0
                    bottom-0
                    z-10

                    !p-8
                    md:!p-10

                    transition-all
                    duration-500

                    ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                      >
                        {/* LABEL */}
                        <span
                          className="
                      mb-4
                      inline-flex
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1

                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white

                      backdrop-blur-md
                    "
                        >
                          GUIDE
                        </span>

                        {/* TITLE */}
                        <h3
                          className="
    !text-white
    max-w-2xl
    text-2xl
    font-semibold
    leading-tight
    md:text-4xl
  "
                        >
                          {story.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
    !text-white/80
    mt-3
    max-w-xl
    text-sm
    leading-6
    md:text-base
  "
                        >
                          {story.text}
                        </p>

                        {/* LINK */}
                        <Link
                          to="/contact"
                          navigate={navigate}
                          aria-label={`Read more about ${story.title}`}
                          className="
  !text-white
  mt-5
  inline-flex
  items-center
  gap-2
  text-sm
  font-semibold
  transition-all
  duration-300
  hover:gap-3
"
                        >
                          Read the guide
                          <ArrowRight size={17} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* LEFT ARROW */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous story"
              className="
          absolute
          left-3
          top-1/2
          z-30

          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center

          rounded-full
          border
          border-white/30
          bg-white/90

          text-slate-800
          shadow-lg
          backdrop-blur-sm

          transition-all
          duration-300

          hover:scale-105
          hover:bg-white

          md:left-4
        "
            >
              <ChevronLeft size={21} />
            </button>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next story"
              className="
          absolute
          right-3
          top-1/2
          z-30

          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center

          rounded-full
          border
          border-white/30
          bg-white/90

          text-slate-800
          shadow-lg
          backdrop-blur-sm

          transition-all
          duration-300

          hover:scale-105
          hover:bg-white

          md:right-4
        "
            >
              <ChevronRight size={21} />
            </button>
          </div>

          {/* DOTS + COUNTER */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  aria-label={`Go to story ${index + 1}`}
                  className={`
              h-2
              rounded-full
              transition-all
              duration-500

              ${
                activeStory === index
                  ? "w-8 bg-slate-900"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }
            `}
                />
              ))}
            </div>

            <span className="text-xs font-medium text-slate-400">
              {String(activeStory + 1).padStart(2, "0")} /{" "}
              {String(stories.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMME ================= */}
      <section className="editorial-programme section">
        <div className="container editorial-programme-grid">
          <div className="editorial-programme-poster reveal">
            <img
              src="/assets/Globally-Recognised-Degree.jpg.jpeg"
              alt="Professional reviewing an applied business research project"
            />

            <div>
              <span>RESEARCH-LED</span>
              <strong>Designed for ambitious professionals.</strong>
            </div>
          </div>

          <div className="editorial-programme-copy reveal">
            <div className="editorial-label">DISCOVER LEARNIFYOPS</div>

            <h2>
              Find a pathway that respects where you've already been — and where
              you're headed.
            </h2>

            <p>
              We support the early work of comparing delivery formats, entry
              criteria, research expectations and institution information before
              you decide to apply.
            </p>

            <div className="editorial-programme-links">
              <Link to="/program" navigate={navigate}>
                DBA programme
                <ArrowRight size={16} />
              </Link>

              <Link to="/partnership" navigate={navigate}>
                Partner universities
                <ArrowRight size={16} />
              </Link>

              <Link to="/admissions" navigate={navigate}>
                Admissions review
                <ArrowRight size={16} />
              </Link>

              <Link to="/curriculum" navigate={navigate}>
                Curriculum framework
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      {/* <section className="editorial-impact">
        <div className="container">
          <span>WHY LEARNIFYOPS</span>

          <h2>Clarity for a defining professional decision.</h2>

          <p>
            From shortlisting institutions through to understanding the academic
            journey ahead, each conversation is built around your experience and
            goals.
          </p>

          <div className="editorial-metrics">
            <div>
              <strong>1:1</strong>
              <small>admissions profile review</small>
            </div>

            <div>
              <strong>6</strong>
              <small>partner institution pathways</small>
            </div>

            <div>
              <strong>24–48</strong>
              <small>months of flexible study options</small>
            </div>

            <div>
              <strong>Global</strong>
              <small>executive and research perspective</small>
            </div>
          </div>
        </div>
      </section> */}

      <section className="editorial-impact bg-[#f3f1eb] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl text-center space-y-8 ">
          {/* Heading */}
          <span
            className=" flex justify-center text-sm font-semibold uppercase tracking-[0.2em] text-[beige
          ]"
          >
            WHY LEARNIFYOPS
          </span>
        </div>
        <div className="flex justify-center">
          <h2 className="mt-4 font-bold italic text-black md:text-5xl lg:text-6xl">
            Clarity for a defining professional decision.
          </h2>
        </div>

        <div className="flex justify-evenly">
          {/* Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {/* Metric 1 */}
            <div className="px-6 py-6  border-r border-gray-900">
              <strong className="block text-5xl font-bold italic text-[white] md:text-6xl ">
                1:1
              </strong>

              <small className="mx-auto mt-4 block max-w-[220px] text-base leading-7 text-[white] md:text-lg">
                admissions profile review
              </small>
            </div>

            {/* Metric 2 */}
            <div className=" px-6 py-6 border-r border-gray-900">
              <strong className="block text-5xl font-bold italic text-[white] md:text-6xl">
                6
              </strong>

              <small className="mx-auto mt-4 block max-w-[220px] text-base leading-7 text-[white] md:text-lg">
                partner institution pathways
              </small>
            </div>

            {/* Metric 3 */}
            <div className=" px-6 py-6 border-r border-gray-900">
              <strong className="block text-5xl font-bold italic text-[white] md:text-6xl">
                24–48
              </strong>

              <small className="mx-auto mt-4 block max-w-[220px] text-base leading-7 text-[white] md:text-lg">
                months of flexible study options
              </small>
            </div>

            {/* Metric 4 */}
            <div className=" px-6 py-6  border-r border-gray-900">
              <strong className="block text-5xl font-bold italic text-[white] md:text-6xl">
                Global
              </strong>

              <small className="mx-auto mt-4 block max-w-[220px] text-base leading-7 text-[white] md:text-lg">
                executive and research perspective
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
    <section className="editorial-locations section">
  <div className="container">
    <div className="editorial-label text-center">
      OUR GLOBAL OUTLOOK
    </div>

    <h2 className="editorial-location-title reveal text-center">
      A learning network built across borders.
    </h2>

    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

      {/* Card 01 */}
      <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#fffaf0] hover:shadow-xl">
        <img
          src="/assets/cc1.jpg"
          alt="Partner university network"
          className="h-[300px] w-full object-cover"
        />

        <div className="flex flex-col items-center px-5 pb-7 pt-6 text-center">
          <div className="mb-4 h-[3px] w-10 bg-[#a9bfe5] transition-colors duration-300 group-hover:bg-[#c79500]" />

          <h3 className="text-xl font-semibold leading-snug text-[#173f43] transition-colors duration-300 group-hover:text-[#c79500]">
            Partner university network
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-[#9a7100]">
            Compare international institutions and their DBA delivery routes.
          </p>

          <Link
            to="/contact"
            navigate={navigate}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173f43] text-[#173f43] transition-all duration-300 group-hover:border-[#c79500] group-hover:bg-[#c79500] group-hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </article>

      {/* Card 02 */}
      <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#fffaf0] hover:shadow-xl">
        <img
          src="/assets/partnerUniver.jpeg"
          alt="Executive cohorts"
          className="h-[395px] w-full object-cover"
        />

        <div className="flex flex-col items-center px-5 pb-7 pt-6 text-center">
          <div className="mb-4 h-[3px] w-10 bg-[#a9bfe5] transition-colors duration-300 group-hover:bg-[#c79500]" />

          <h3 className="text-xl font-semibold leading-snug text-[#173f43] transition-colors duration-300 group-hover:text-[#c79500]">
            Executive cohorts
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-[#9a7100]">
            Exchange perspectives with experienced peers working across industries.
          </p>

          <Link
            to="/contact"
            navigate={navigate}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173f43] text-[#173f43] transition-all duration-300 group-hover:border-[#c79500] group-hover:bg-[#c79500] group-hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </article>

      {/* Card 03 */}
      <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#fffaf0] hover:shadow-xl">
        <img
          src="/assets/hold degree.jpeg"
          alt="Admissions support"
          className="h-[395px] w-full object-cover"
        />

        <div className="flex flex-col items-center px-5 pb-7 pt-6 text-center">
          <div className="mb-4 h-[3px] w-10 bg-[#a9bfe5] transition-colors duration-300 group-hover:bg-[#c79500]" />

          <h3 className="text-xl font-semibold leading-snug text-[#173f43] transition-colors duration-300 group-hover:text-[#c79500]">
            Admissions support
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-[#9a7100]">
            Start with a structured, confidential conversation about your fit.
          </p>

          <Link
            to="/contact"
            navigate={navigate}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173f43] text-[#173f43] transition-all duration-300 group-hover:border-[#c79500] group-hover:bg-[#c79500] group-hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </article>

      {/* Card 04 */}
      <article className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#fffaf0] hover:shadow-xl">
        <img
          src="/assets/research.jpeg"
          alt="Research relevance"
          className="h-[395px] w-full object-cover"
        />

        <div className="flex flex-col items-center px-5 pb-7 pt-6 text-center">
          <div className="mb-4 h-[3px] w-10 bg-[#a9bfe5] transition-colors duration-300 group-hover:bg-[#c79500]" />

          <h3 className="text-xl font-semibold leading-snug text-[#173f43] transition-colors duration-300 group-hover:text-[#c79500]">
            Research relevance
          </h3>

          <p className="mt-4 text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-[#9a7100]">
            Ground each research decision in the problem you want to solve.
          </p>

          <Link
            to="/contact"
            navigate={navigate}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#173f43] text-[#173f43] transition-all duration-300 group-hover:border-[#c79500] group-hover:bg-[#c79500] group-hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </article>

    </div>
  </div>
</section>

      {/* ================= EVENTS ================= */}
  

<section className="editorial-events section">
  <div className="container">
    <div className="editorial-section-head reveal">
      <div>
        <div className="editorial-label">START HERE</div>
        <h2>Plan your next conversation.</h2>
      </div>

      <Link
        className="editorial-text-link"
        to="/contact"
        navigate={navigate}
      >
        Request a prospectus
        <ArrowRight size={17} />
      </Link>
    </div>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Card 01 */}
      <Link
        className="group relative block h-[520px] overflow-hidden rounded-xl reveal"
        to="/contact"
        navigate={navigate}
      >
        <img
          src="/assets/consult1.jpg"
          alt="Book a DBA consultation"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001b2b]/95 via-[#001b2b]/25 to-transparent" />

        {/* Number */}
        <span className="absolute left-6 top-6 z-10 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f5c451]">
          01
        </span>

        {/* Centered text */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center text-white">

          <div className="mb-5 h-[4px] w-11 rounded-full bg-[#91c7ed] transition-colors duration-300 group-hover:bg-[#f5c451]" />

          <small className="mb-8 block text-m font-bold tracking-[0.2em] text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            CONSULTATION
          </small>

          <h3 className="mb-4 text-3xl font-semibold leading-tight  text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            Book a DBA
            <br />
            consultation
          </h3>

          <p className="max-w-sm text-base leading-7 text-white transition-colors duration-300 group-hover:text-[#f5c451]">
            Discuss your profile, interests and potential next steps.
          </p>
        </div>
      </Link>

      {/* Card 02 */}
      <Link
        className="group relative block h-[520px] overflow-hidden rounded-xl reveal"
        to="/partnership"
        navigate={navigate}
      >
        <img
          src="/assets/universitry-option.jpg"
          alt="Compare partner pathways"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001b2b]/95 via-[#001b2b]/25 to-transparent" />

        {/* Number */}
        <span className="absolute left-6 top-6 z-10 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f5c451]">
          02
        </span>

        {/* Centered text */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center text-white">

          <div className="mb-5 h-[4px] w-11 rounded-full bg-[#91c7ed] transition-colors duration-300 group-hover:bg-[#f5c451]" />

          <small className="mb-4 block text-m font-bold tracking-[0.2em] text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            UNIVERSITY OPTIONS
          </small>

          <h3 className="mb-4 text-3xl font-semibold leading-tight transition-colors duration-300 group-hover:text-[#f5c451]">
            Compare partner
            <br />
            pathways
          </h3>

          <p className="max-w-sm text-base leading-7 text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            Review structure, study formats and institutional information.
          </p>
        </div>
      </Link>

      {/* Card 03 */}
      <Link
        className="group relative block h-[520px] overflow-hidden rounded-xl reveal"
        to="/curriculum"
        navigate={navigate}
      >
        <img
          src="/assets/consult.jpg"
          alt="Explore the framework"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001b2b]/95 via-[#001b2b]/25 to-transparent" />

        {/* Number */}
        <span className="absolute left-6 top-6 z-10 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f5c451]">
          03
        </span>

        {/* Centered text */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center text-white">

          <div className="mb-5 h-[4px] w-11 rounded-full bg-[#91c7ed] transition-colors duration-300 group-hover:bg-[#f5c451]" />

          <small className="mb-4 block text-m font-bold tracking-[0.2em] text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            CURRICULUM
          </small>

          <h3 className="mb-4 text-3xl font-semibold leading-tight transition-colors duration-300 group-hover:text-[#f5c451]">
            Explore the
            <br />
            framework
          </h3>

          <p className="max-w-sm text-base leading-7 text-white/90 transition-colors duration-300 group-hover:text-[#f5c451]">
            See the learning and research phases involved in a DBA.
          </p>
        </div>
      </Link>

    </div>
  </div>
</section>





      {/* ================= CLOSING ================= */}
      <section className="editorial-closing">
        <div className="container editorial-closing-inner reveal">
          <div className="">
            <span>READY WHEN YOU ARE</span>

            <h2>
              Make your experience the starting point for original research.
            </h2>
          </div>

          <div>
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
