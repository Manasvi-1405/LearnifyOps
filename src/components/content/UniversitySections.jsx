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
  MapPin,
  Sparkles,
  Clock,
  X
} from "lucide-react";
import { dbaBrochureUrl, dbaCurriculumUrl, partnerUniversities } from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import PageHero from "./PageHero.jsx";
import { DownloadButton, PrimaryButton } from "../ui/Actions.jsx";
import HeroSection from "./HeroSection.jsx";

export function UniversitiesSection({ navigate }) {
  // Saara actual data with university campus images & exact destination routes
  const universities = [
    {
      id: "01",
      name: "Kennedy University",
      type: "Partner University",
      location: "USA",
      image: "/assets/KU.avif",
      description: "A DBA pathway for experienced professionals seeking to connect applied business research with strategy, governance and leadership practice within a flexible study structure.",
      focus: "Strategy, Governance & Applied Research",
      duration: "24–48 Months",
      path: "/universities/kennedy-university"
    },
    {
      id: "02",
      name: "Birchwood University",
      type: "Partner University",
      location: "USA / International",
      image: "/assets/BU.jpg",
      description: "A DBA pathway for experienced professionals interested in applied research across entrepreneurship, organisational change, innovation and practical business model development.",
      focus: "Innovation & Business Transformation",
      duration: "24–48 Months",
      path: "/universities/birchwood-university"
    },
    {
      id: "03",
      name: "Florida Coastal University",
      type: "Partner University",
      location: "USA",
      image: "/assets/FCU.jpg",
      description: "A DBA pathway for experienced professionals exploring applied research in global business, operational performance, leadership practice and evidence-based decision-making.",
      focus: "Global Business & Leadership Practice",
      duration: "24–48 Months",
      path: "/universities/florida-coastal-university"
    },
    {
      id: "04",
      name: "London School of Business and Science",
      type: "Partner Institution",
      location: "United Kingdom",
      image: "/assets/LSBS.jpeg",
      description: "A DBA pathway for working professionals comparing applied business research in leadership, consulting, strategy and organisational performance within a flexible study format.",
      focus: "Applied Leadership & Business Strategy",
      duration: "24–48 Months",
      path: "/universities/london-school-of-business-and-science"
    },
    {
      id: "05",
      name: "Dunster Business School",
      type: "Partner Institution",
      location: "International",
      image: "/assets/DBS.jpeg",
      description: "A DBA pathway for senior professionals interested in international business, leadership practice and structured research focused on practical management questions.",
      focus: "International Business & Executive Leadership",
      duration: "24–48 Months",
      path: "/universities/dunster-business-school"
    },
    {
      id: "06",
      name: "EMIT",
      type: "Partner Institution",
      location: "International",
      image: "/assets/EMIT.webp",
      description: "A technology-oriented DBA pathway for professionals interested in applied management research across digital transformation, enterprise systems, automation and organisational change.",
      focus: "Technology, AI & Enterprise Systems",
      duration: "24–48 Months",
      path: "/universities/emit"
    }
  ];

  const handleNavigate = (path) => {
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <section className="relative! w-full! bg-gradient-to-br! from-[#f5fbf9]! via-[#fdfbf6]! to-[#eef6f3]! py-24! sm:py-32! px-6! sm:px-10! lg:px-16! font-sans! overflow-hidden!">
      
      {/* ---------------- FLOATING AMBIENT GLOW ANIMATIONS ---------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! -top-20! left-1/5! h-96! w-96! rounded-full! bg-amber-200/35! blur-[100px]! animate-pulse!"
        style={{ animationDuration: "6s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none! absolute! bottom-10! right-1/5! h-[420px]! w-[420px]! rounded-full! bg-emerald-200/30! blur-[110px]! animate-pulse!"
        style={{ animationDuration: "8s" }}
      />

      <div className="relative! z-10! mx-auto! max-w-7xl!">
        
        {/* ---------------- SECTION HEADER ---------------- */}
        <div className="mb-16! text-center! flex! flex-col! items-center!">
          <div className="inline-flex! items-center! gap-2! mb-4! px-4! py-1.5! rounded-full! border! border-emerald-900/10! bg-white/80! backdrop-blur-md! shadow-xs!">
            <GraduationCap className="w-4! h-4! text-[#ea9b3e]!" />
            <span className="text-xs! uppercase! tracking-[0.2em]! font-bold! text-[#1b433d]!">
              Partner University Network
            </span>
          </div>

          <h2 className="text-3xl! sm:text-5xl! lg:text-[52px]! font-sans! font-extrabold! tracking-tight! text-slate-900! mb-5!">
            Compare DBA pathways before you apply
          </h2>

          <p className="max-w-2xl! text-base! sm:text-lg! text-slate-600! font-normal! leading-relaxed!">
            Review the available partner institutions, then speak with an adviser about eligibility, programme structure, fees, study format and application requirements.
          </p>
        </div>

        {/* ---------------- INTERACTIVE 3-COLUMN UNIVERSITY GRID ---------------- */}
        <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-8!">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="group! relative! flex! flex-col! justify-between! rounded-[32px]! sm:rounded-[36px]! border! border-white/80! bg-white/80! backdrop-blur-xl! shadow-[0_12px_40px_-10px_rgba(20,50,40,0.08)]! ring-1! ring-slate-900/5! overflow-hidden! transition-all! duration-500! hover:-translate-y-2! hover:shadow-[0_24px_55px_-8px_rgba(20,50,40,0.16)]!"
            >
              <div>
                {/* 1. CAMPUS IMAGE BANNER WITH OVERLAYS */}
                <div className="relative! h-[210px]! w-full! overflow-hidden! bg-slate-900!">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="h-full! w-full! object-cover! object-center! transition-transform! duration-700! group-hover:scale-110!"
                  />
                  {/* Subtle tint on image */}
                  <div className="absolute! inset-0! bg-gradient-to-t! from-black/75! via-black/20! to-transparent!" />

                  {/* Top badges: Index and Location */}
                  <div className="absolute! top-4! inset-x-4! flex! items-center! justify-between! z-10!">
                    <span className="px-3! py-1! rounded-full! bg-black/60! backdrop-blur-md! border! border-white/20! text-[11px]! font-bold! tracking-wider! text-[#ffd089]!">
                      PATHWAY {uni.id}
                    </span>

                    <span className="inline-flex! items-center! gap-1.5! px-3! py-1! rounded-full! bg-black/60! backdrop-blur-md! border! border-white/20! text-[11px]! font-medium! text-white!">
                      <MapPin size={12} className="text-[#ea9b3e]!" />
                      {uni.location}
                    </span>
                  </div>

                  {/* Institution Badge on image bottom */}
                  <div className="absolute! bottom-3! left-4! z-10!">
                    <span className="inline-flex! items-center! gap-1.5! text-xs! font-semibold! text-emerald-300!">
                      <span className="h-2! w-2! rounded-full! bg-[#4ade80]! animate-ping!" />
                      {uni.type}
                    </span>
                  </div>
                </div>

                {/* 2. CARD CONTENT AREA */}
                <div className="p-7! sm:p-8!">
                  {/* University Name */}
                  <h3 className="text-xl! sm:text-2xl! font-bold! tracking-tight! text-slate-900! mb-3! group-hover:text-[#184841]! transition-colors! duration-300!">
                    {uni.name}
                  </h3>

                  {/* Research Focus Tag */}
                  <div className="mb-4! inline-flex! items-center! gap-2! px-3! py-1.5! rounded-lg! bg-amber-50! border! border-amber-200/60! text-xs! font-bold! text-[#945512]!">
                    <Sparkles size={13} className="text-[#ea9b3e]! shrink-0!" />
                    <span className="truncate!">{uni.focus}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm! sm:text-[14.5px]! leading-relaxed! text-slate-600! mb-6!">
                    {uni.description}
                  </p>

                  {/* Study format info pills */}
                  <div className="grid! grid-cols-2! gap-2! py-3! border-t! border-slate-100! text-xs! text-slate-500!">
                    <div className="flex! items-center! gap-1.5!">
                      <Clock size={13} className="text-slate-400!" />
                      <span>{uni.duration}</span>
                    </div>
                    <div className="flex! items-center! gap-1.5!">
                      <ShieldCheck size={13} className="text-[#4ade80]!" />
                      <span>Executive Format</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. INTERACTIVE REDIRECTION BUTTON */}
              <div className="px-7! pb-7! sm:px-8! sm:pb-8! pt-0!">
                <button
                  type="button"
                  onClick={() => handleNavigate(uni.path)}
                  className="group/btn! w-full! inline-flex! items-center! justify-center! gap-2! px-5! py-3.5! rounded-xl! bg-[#f2f7f5]! hover:bg-[#ea9b3e]! text-slate-800! hover:text-slate-950! font-bold! text-xs! sm:text-sm! border! border-emerald-900/10! hover:border-[#ea9b3e]! transition-all! duration-300! hover:shadow-lg! hover:shadow-amber-500/25! cursor-pointer!"
                >
                  <span>View University Details</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform! duration-300! group-hover/btn:translate-x-1.5!"
                  />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
/////university page

// export function UniversityDetailPage({ navigate, university }) {
//   return (
//     <>
//       {/* <PageHero
//         eyebrow={`${university.country} · Doctoral Pathway`}
//         icon={Building2}
//         tone="executive"
//         image="/assets/dba-universities-hero-v2.jpg"
//         caption={university.name}
//         title={university.programTitle}
//         text={university.overview}
//       /> */}
//       <HeroSection
//         eyebrow={`${university.country} · Doctoral Pathway`}
//         icon={Building2}
//         tone="executive"
//         image=".jpg"
//         caption={university.name}
//         title={university.programTitle}
//         text={university.overview}
//       ></HeroSection>
      
// <section className="section section-sky university-detail-section">
//   <div className="university-detail-panel university-detail-page-panel">

//     {/* University Header */}
//     <div className="university-detail-heading">
//       <div className="university-heading-content">
//         <span className="university-type">
//           <GraduationCap size={19} aria-hidden="true" />
//           Partner institution · {university.country}
//         </span>

//         <h3>{university.name}</h3>

//         <p>{university.focus || university.overview}</p>
//       </div>

//       <Link
//         className="university-view-btn"
//         to="/partnership"
//         navigate={navigate}
//       >
//         View all universities
//         <ArrowRight size={17} aria-hidden="true" />
//       </Link>
//     </div>

//     {/* University Information Strip */}
//     <div className="university-program-stats">
//       <article>
//         <span>
//           <Clock3 size={19} aria-hidden="true" />
//           Duration
//         </span>
//         <strong>{university.duration}</strong>
//       </article>

//       <article>
//         <span>
//           <Laptop size={19} aria-hidden="true" />
//           Delivery
//         </span>
//         <strong>{university.delivery}</strong>
//       </article>

//       <article>
//         <span>
//           <ShieldCheck size={19} aria-hidden="true" />
//           Institutional Information
//         </span>
//         <strong>{university.accreditation}</strong>
//       </article>
//     </div>

//     {/* Main Three-Column Grid */}
//     <div className="university-main-grid">

//       {/* Eligibility */}
//       <article className="university-info-card">
//         <div className="university-card-heading">
//           <ShieldCheck size={21} aria-hidden="true" />
//           <h4>Eligibility</h4>
//         </div>

//         <ul>
//           {university.highlights?.map((item) => (
//             <li key={item}>
//               <CheckCircle2 size={15} aria-hidden="true" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </article>

//       {/* Course and Research Areas */}
//       <article className="university-info-card">
//         <div className="university-card-heading">
//           <BookOpen size={21} aria-hidden="true" />
//           <h4>Course and Research Areas</h4>
//         </div>

//         <ul>
//           {university.curriculum?.map((item) => (
//             <li key={item}>
//               <CheckCircle2 size={15} aria-hidden="true" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </article>

//       {/* University Image */}
//       <div className="university-campus-card">
//         <img
//           src={university.image || "/assets/KU.avif"}
//           alt={`${university.name} campus`}
//           loading="lazy"
//         />
//       </div>

//       {/* Degrees Offered */}
//       <article className="university-info-card university-offer-card">
//         <div className="university-card-heading">
//           <GraduationCap size={21} aria-hidden="true" />
//           <h4>Degrees Offered</h4>
//         </div>

//         <ul>
//           {(university.degrees?.length
//             ? university.degrees
//             : ["DBA"]
//           ).map((degree) => (
//             <li key={degree}>
//               <CheckCircle2 size={15} aria-hidden="true" />
//               <span>{degree}</span>
//             </li>
//           ))}
//         </ul>
//       </article>

//       {/* Course Areas Available */}
//       <article className="university-info-card university-offer-card">
//         <div className="university-card-heading">
//           <BookOpen size={21} aria-hidden="true" />
//           <h4>Course Areas Available</h4>
//         </div>

//         <ul>
//           {university.curriculum?.map((item) => (
//             <li key={item}>
//               <CheckCircle2 size={15} aria-hidden="true" />
//               <span>{item}</span>
//             </li>
//           ))}
//         </ul>
//       </article>

//       {/* Study Format */}
//       <article className="university-info-card university-offer-card">
//         <div className="university-card-heading">
//           <CalendarDays size={21} aria-hidden="true" />
//           <h4>Study Format</h4>
//         </div>

//         <ul>
//           {[university.duration, university.delivery]
//             .filter(Boolean)
//             .map((item) => (
//               <li key={item}>
//                 <CheckCircle2 size={15} aria-hidden="true" />
//                 <span>{item}</span>
//               </li>
//             ))}

//           <li>
//             <CheckCircle2 size={15} aria-hidden="true" />
//             <span>
//               Designed for working professionals
//             </span>
//           </li>
//         </ul>
//       </article>
//     </div>

//     {/* Bottom Actions */}
//     <div className="university-detail-actions">
//       <p>
//         Programme structure, fees, timeline, awarding arrangements
//         and institutional information should be confirmed before
//         enrolment.
//       </p>

//       <div className="university-detail-buttons">
//         <DownloadButton
//           file={dbaBrochureUrl}
//           label={`${university.name} DBA Brochure`}
//         >
//           <FileText size={16} aria-hidden="true" />
//           Brochure
//         </DownloadButton>

//         <DownloadButton
//           file={dbaCurriculumUrl}
//           label={`${university.name} DBA Curriculum`}
//         >
//           <BookOpen size={16} aria-hidden="true" />
//           Curriculum
//         </DownloadButton>

//         <PrimaryButton to="/contact" navigate={navigate}>
//           Request Profile Review
//         </PrimaryButton>
//       </div>
//     </div>

//   </div>
// </section>


//     </>
//   );
// }


const UNIVERSITY_IMAGES = {
  "kennedy university": "/assets/KU.avif",
  "birchwood university": "/assets/BU.jpg",
  "florida coastal university": "/assets/FCU.jpg",
  "london school of business and science": "/assets/LSBS.jpeg",
  "dunster business school": "/assets/DBS.jpeg",
  "emit": "/assets/EMIT.webp",
};

export function UniversityDetailPage({
  navigate,
  university,
  dbaBrochureUrl = "#",
  dbaCurriculumUrl = "#"
}) {
  if (!university) return null;

  // University specific image select karega ya fallback lagayega
  const uniKey = university.name?.toLowerCase().trim() || "";
  const dynamicCampusImage =
    university.image ||
    UNIVERSITY_IMAGES[uniKey] ||
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80";

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  return (
    <>
      {/* ---------------- 1. DYNAMIC HIGH-VISIBILITY HERO SECTION ---------------- */}
      <section className="relative! flex min-h-[580px]! lg:min-h-[640px]! w-full! items-center! justify-center! overflow-hidden! bg-[#0e1615]! py-16! px-6! sm:px-10!">
        {/* Dynamic Background Image per University */}
        <img
          src={dynamicCampusImage}
          alt={`${university.name} campus background`}
          className="absolute! inset-0! h-full! w-full! object-cover! object-[center_25%]! brightness-90!"
        />

        {/* Flat Clean Contrast Overlay (No ugly gradients) */}
        <div className="absolute! inset-0! bg-black/60!" />

        {/* Center Foreground Content */}
        <div className="relative! z-10! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center! font-sans!">
          {/* Eyebrow */}
          <div className="inline-flex! items-center! justify-center! gap-2! mb-5! px-4! py-1.5! rounded-full! border! border-white/20! bg-black/40! backdrop-blur-md! shadow-sm!">
            <Building2 className="w-4! h-4! text-[#ea9b3e]! shrink-0!" />
            <span className="text-xs! uppercase! tracking-[0.2em]! font-bold! text-[#f4ede4]!">
              {university.country || "International"} &middot; Doctoral Pathway
            </span>
          </div>

          {/* Main University Program Title */}
          <h1 className="text-3xl! sm:text-5xl! lg:text-[54px]! font-sans! font-extrabold! leading-[1.16]! tracking-normal! text-white! drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]! mb-4!">
            {university.programTitle || `${university.name} Executive DBA`}
          </h1>

          {/* Caption */}
          <p className="text-sm! sm:text-base! lg:text-lg! font-medium! text-[#ebd5b3]! tracking-wide! mb-5!">
            {university.name} &middot; Executive Doctoral Pathway
          </p>

          {/* Descriptive Body Text */}
          <p className="text-sm! sm:text-base! lg:text-lg! leading-relaxed! text-[#e2e8f0]! font-normal! max-w-2xl! mb-8! drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]!">
            {university.overview || university.focus}
          </p>

          {/* Action Button */}
          <button
            type="button"
            onClick={() => handleNavigate("/contact")}
            className="inline-flex! items-center! justify-center! gap-2.5! px-8! py-3.5! text-xs! sm:text-sm! font-bold! text-[#1c1306]! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-lg! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
          >
            Request Profile Evaluation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ---------------- 2. STRUCTURED DETAIL PANEL SECTION ---------------- */}
      <section className="relative! w-full! bg-gradient-to-br! from-[#f5fbf9]! via-[#fdfbf6]! to-[#eef6f3]! py-16! sm:py-20! px-6! sm:px-10! lg:px-16! font-sans! overflow-hidden!">
        {/* Soft Ambient Floating Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! -top-20! left-1/4! h-96! w-96! rounded-full! bg-amber-200/30! blur-[100px]! animate-pulse!"
          style={{ animationDuration: "6s" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! -bottom-20! right-1/4! h-96! w-96! rounded-full! bg-emerald-200/30! blur-[100px]! animate-pulse!"
          style={{ animationDuration: "8s" }}
        />

        <div className="relative! z-10! mx-auto! max-w-7xl!">
          
          {/* Main Floating Glass Card */}
          <div className="rounded-[36px]! sm:rounded-[44px]! border! border-white/80! bg-white/85! p-6! sm:p-10! lg:p-12! backdrop-blur-xl! shadow-[0_20px_50px_-15px_rgba(20,50,40,0.1)]! ring-1! ring-slate-900/5!">
            
            {/* Header: Institution Title & "View All Universities" Link */}
            <div className="flex! flex-col! lg:flex-row! lg:items-center! justify-between! gap-6! pb-8! border-b! border-slate-200/80!">
              <div className="max-w-3xl!">
                <div className="inline-flex! items-center! gap-2! mb-3! px-3.5! py-1! rounded-full! bg-emerald-50! border! border-emerald-200/70! text-xs! font-bold! text-[#175249]!">
                  <GraduationCap size={16} className="text-[#ea9b3e]!" />
                  <span>Partner Institution &middot; {university.country}</span>
                </div>
                <h2 className="text-2xl! sm:text-4xl! font-bold! text-slate-900! tracking-tight!">
                  {university.name}
                </h2>
                <p className="mt-2! text-sm! sm:text-base! text-slate-600! leading-relaxed!">
                  {university.focus || university.overview}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleNavigate("/partnership")}
                className="group/all! inline-flex! items-center! gap-2! self-start! lg:self-center! px-5! py-2.5! rounded-xl! bg-white! hover:bg-slate-50! border! border-slate-300/80! text-xs! sm:text-sm! font-semibold! text-slate-800! shadow-xs! transition-all! duration-200! hover:border-[#ea9b3e]! cursor-pointer!"
              >
                <span>View all universities</span>
                <ArrowRight size={15} className="text-[#ea9b3e]! transition-transform! duration-200! group-hover/all:translate-x-1!" />
              </button>
            </div>

            {/* Program Quick Stats Bar */}
            <div className="grid! grid-cols-1! sm:grid-cols-3! gap-4! py-8!">
              <div className="flex! items-center! gap-4! p-4! rounded-2xl! bg-[#f8faf9]! border! border-slate-200/60!">
                <div className="flex! h-12! w-12! shrink-0! items-center! justify-center! rounded-xl! bg-amber-500/10! text-[#ea9b3e]!">
                  <Clock3 size={24} />
                </div>
                <div>
                  <span className="text-xs! uppercase! tracking-wider! font-bold! text-slate-400!">Duration</span>
                  <p className="text-sm! sm:text-base! font-bold! text-slate-900!">{university.duration || "24–48 Months"}</p>
                </div>
              </div>

              <div className="flex! items-center! gap-4! p-4! rounded-2xl! bg-[#f8faf9]! border! border-slate-200/60!">
                <div className="flex! h-12! w-12! shrink-0! items-center! justify-center! rounded-xl! bg-emerald-500/10! text-emerald-600!">
                  <Laptop size={24} />
                </div>
                <div>
                  <span className="text-xs! uppercase! tracking-wider! font-bold! text-slate-400!">Delivery</span>
                  <p className="text-sm! sm:text-base! font-bold! text-slate-900!">{university.delivery || "Executive Online / Hybrid"}</p>
                </div>
              </div>

              <div className="flex! items-center! gap-4! p-4! rounded-2xl! bg-[#f8faf9]! border! border-slate-200/60!">
                <div className="flex! h-12! w-12! shrink-0! items-center! justify-center! rounded-xl! bg-blue-500/10! text-blue-600!">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="text-xs! uppercase! tracking-wider! font-bold! text-slate-400!">Institutional Info</span>
                  <p className="text-sm! sm:text-base! font-bold! text-slate-900!">{university.accreditation || "Accredited Global Body"}</p>
                </div>
              </div>
            </div>

            {/* 3-Column Structured Information Grid */}
            <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6! pt-4!">
              
              {/* Card 1: Eligibility */}
              <div className="flex! flex-col! justify-between! rounded-2xl! bg-white! border! border-slate-200/80! p-6! shadow-xs! transition-all! duration-300! hover:shadow-md! hover:-translate-y-1!">
                <div>
                  <div className="flex! items-center! gap-2.5! mb-4! text-[#175249]!">
                    <ShieldCheck size={20} className="text-[#ea9b3e]!" />
                    <h3 className="text-base! font-bold! uppercase! tracking-wider! text-slate-900!">Eligibility</h3>
                  </div>
                  <ul className="space-y-3!">
                    {(university.highlights?.length ? university.highlights : [
                      "Master's degree or equivalent executive experience",
                      "5+ years of strategic management experience",
                      "Demonstrated research interest or business problem",
                      "English proficiency for doctoral study"
                    ]).map((item, idx) => (
                      <li key={idx} className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                        <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 2: Research Areas */}
              <div className="flex! flex-col! justify-between! rounded-2xl! bg-white! border! border-slate-200/80! p-6! shadow-xs! transition-all! duration-300! hover:shadow-md! hover:-translate-y-1!">
                <div>
                  <div className="flex! items-center! gap-2.5! mb-4! text-[#175249]!">
                    <BookOpen size={20} className="text-[#ea9b3e]!" />
                    <h3 className="text-base! font-bold! uppercase! tracking-wider! text-slate-900!">Course & Research</h3>
                  </div>
                  <ul className="space-y-3!">
                    {(university.curriculum?.length ? university.curriculum : [
                      "Applied Strategic Management",
                      "Qualitative & Quantitative Research Methods",
                      "Organisational Behavior & Governance",
                      "Dissertation Defense & Milestone Review"
                    ]).map((item, idx) => (
                      <li key={idx} className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                        <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Dynamic Campus Card with Hover Reveal */}
              <div className="group/img! relative! min-h-[260px]! rounded-2xl! overflow-hidden! shadow-md! border! border-slate-200/80!">
                <img
                  src={dynamicCampusImage}
                  alt={`${university.name} campus view`}
                  className="h-full! w-full! object-cover! object-center! transition-transform! duration-700! group-hover/img:scale-110!"
                />
                <div className="absolute! inset-0! bg-gradient-to-t! from-black/80! via-black/20! to-transparent!" />
                <div className="absolute! bottom-4! left-4! right-4!">
                  <div className="inline-flex! items-center! gap-1.5! px-3! py-1! rounded-lg! bg-black/60! backdrop-blur-md! text-white! text-xs! font-bold! mb-1!">
                    <MapPin size={12} className="text-[#ea9b3e]!" />
                    {university.name}
                  </div>
                  <p className="text-xs! text-slate-200!">Official Partner Institution Campus</p>
                </div>
              </div>

              {/* Card 4: Degrees Offered */}
              <div className="flex! flex-col! justify-between! rounded-2xl! bg-white! border! border-slate-200/80! p-6! shadow-xs! transition-all! duration-300! hover:shadow-md! hover:-translate-y-1!">
                <div>
                  <div className="flex! items-center! gap-2.5! mb-4! text-[#175249]!">
                    <GraduationCap size={20} className="text-[#ea9b3e]!" />
                    <h3 className="text-base! font-bold! uppercase! tracking-wider! text-slate-900!">Degrees Offered</h3>
                  </div>
                  <ul className="space-y-3!">
                    {(university.degrees?.length ? university.degrees : ["Doctor of Business Administration (DBA)", "Executive Certificate in Research"]).map((degree, idx) => (
                      <li key={idx} className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                        <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                        <span>{degree}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 5: Study Format */}
              <div className="flex! flex-col! justify-between! rounded-2xl! bg-white! border! border-slate-200/80! p-6! shadow-xs! transition-all! duration-300! hover:shadow-md! hover:-translate-y-1!">
                <div>
                  <div className="flex! items-center! gap-2.5! mb-4! text-[#175249]!">
                    <CalendarDays size={20} className="text-[#ea9b3e]!" />
                    <h3 className="text-base! font-bold! uppercase! tracking-wider! text-slate-900!">Study Format</h3>
                  </div>
                  <ul className="space-y-3!">
                    <li className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                      <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                      <span>{university.duration || "24–48 Months"} completion timeline</span>
                    </li>
                    <li className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                      <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                      <span>{university.delivery || "Flexible milestone model"}</span>
                    </li>
                    <li className="flex! items-start! gap-2.5! text-xs! sm:text-sm! text-slate-600!">
                      <CheckCircle2 size={16} className="text-emerald-500! shrink-0! mt-0.5!" />
                      <span>Built for actively employed senior executives</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 6: Academic Advisory Support */}
              <div className="flex! flex-col! justify-between! rounded-2xl! bg-gradient-to-br! from-slate-900! to-slate-950! text-white! p-6! shadow-md! transition-all! duration-300! hover:-translate-y-1!">
                <div>
                  <div className="flex! items-center! gap-2.5! mb-4! text-[#ea9b3e]!">
                    <Sparkles size={20} />
                    <h3 className="text-base! font-bold! uppercase! tracking-wider! text-white!">Advisory Support</h3>
                  </div>
                  <p className="text-xs! sm:text-sm! text-slate-300! leading-relaxed! mb-4!">
                    Direct access to academic advisors for milestone tracking, thesis defense preparation, and credit equivalence confirmation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigate("/contact")}
                  className="w-full! py-2.5! rounded-xl! bg-[#ea9b3e]! hover:bg-[#dc8d30]! text-slate-950! font-bold! text-xs! transition-all! cursor-pointer!"
                >
                  Speak With Advisor
                </button>
              </div>

            </div>

            {/* Bottom Actions & Downloads */}
            <div className="mt-12! pt-8! border-t! border-slate-200/80! flex! flex-col! lg:flex-row! items-center! justify-between! gap-6!">
              <p className="text-xs! sm:text-sm! text-slate-500! max-w-xl! text-center! lg:text-left!">
                Programme structure, fees, timeline, awarding arrangements and institutional information should be confirmed before enrolment.
              </p>

              <div className="flex! flex-wrap! items-center! justify-center! gap-3!">
                <a
                  href={dbaBrochureUrl}
                  download
                  className="inline-flex! items-center! gap-2! px-5! py-3! rounded-xl! bg-white! hover:bg-slate-50! border! border-slate-300/80! text-xs! sm:text-sm! font-semibold! text-slate-800! shadow-xs! transition-all! cursor-pointer!"
                >
                  <FileText size={16} className="text-[#ea9b3e]!" />
                  <span>Brochure</span>
                </a>

                <a
                  href={dbaCurriculumUrl}
                  download
                  className="inline-flex! items-center! gap-2! px-5! py-3! rounded-xl! bg-white! hover:bg-slate-50! border! border-slate-300/80! text-xs! sm:text-sm! font-semibold! text-slate-800! shadow-xs! transition-all! cursor-pointer!"
                >
                  <BookOpen size={16} className="text-[#ea9b3e]!" />
                  <span>Curriculum</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleNavigate("/contact")}
                  className="inline-flex! items-center! gap-2! px-6! py-3! rounded-xl! bg-[#ea9b3e]! hover:bg-[#dc8d30]! text-slate-950! font-bold! text-xs! sm:text-sm! shadow-lg! shadow-amber-500/25! transition-all! hover:scale-[1.02]! cursor-pointer!"
                >
                  <span>Request Profile Review</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}