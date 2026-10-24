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
  X,
  Award,
  ExternalLink,
  Info,
  ChevronLeft
} from "lucide-react";
import { ChevronDown } from "lucide-react";
import { dbaBrochureUrl, dbaCurriculumUrl, partnerUniversities } from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import PageHero from "./PageHero.jsx";
import { DownloadButton, PrimaryButton } from "../ui/Actions.jsx";
import HeroSection from "./HeroSection.jsx";
import { universityAccreditations } from "../../data/accreditationData.js";
// ---------------- COMPLETE ACCREDITATION & RECOGNITION DATABASE ---------------- //
const ALL_ACCREDITATION_DATA = {
  "kennedy university": {
    name: "Kennedy University & Kennedy University of Baptist",
    tagline: "Global Statutory Authorizations, Ministerial Listings & Transnational Recognitions",
    daughterNote:
      "Kennedy University is the daughter university of Kennedy University of Baptist. Credits earned at Kennedy University are recognized by Kennedy University of Baptist, and credits earned at Kennedy University of Baptist are recognized by Kennedy University. Students at both institutions have reciprocal options to pursue double degrees.",
    categories: [
      {
        categoryTitle: "European & French Ministry Authorization",
        items: [
          {
            title: "French Ministry of National Education, Higher Education, Research and Innovation",
            badge: "Authorized Private Higher Education Establishment",
            description:
              "Authorized in accordance with the French Education Law (Code de l'Éducation, Articles L 444-1 to L 444-11 and R 444-1 to R 444-28). Listed on the official web portal of the French Ministry of National Education as a Centre d'enseignement à distance. Degrees awarded are Private Institutional Degrees developed and delivered under internal academic authority."
          },
          {
            title: "European Council of Leading Business Schools (ECLBS)",
            badge: "CHEA CIQG & INQAAHE Member",
            description:
              "Institutional membership with ECLBS. Recognized by CHEA CIQG (USA), holds bilateral recognition with the Arab Network for Quality Assurance in Higher Education (ANQAHE), listed on UIA (United Nations mandate, UNESCO consultative status), and member of INQAAHE Europe."
          },
          {
            title: "European Institute for Medical Studies (EIMS) & European College of Innovation (ECI)",
            badge: "MFHEA Malta & CHEA Directory",
            description:
              "Strategic academic partnerships with EIMS and ECI — both accredited by the Malta Further and Higher Education Authority (MFHEA), which is listed in the International Directory of the Council for Higher Education Accreditation (CHEA) in the United States."
          }
        ]
      },
      {
        categoryTitle: "International Quality Assurance & CHEA-Affiliated Councils",
        items: [
          {
            title: "Independent Kazakhstan Center of Accreditation (IKCA)",
            badge: "Doctor of Professional Studies Accreditation",
            description:
              "Accredited by IKCA. IKCA is listed in the US CHEA International Directory, holds Full Membership in INQAAHE, Affiliate Membership in ENQA (Europe), Full Membership in CEENQA, and is included in Register 1 of Recognized Accreditation Bodies by the Ministry of Science and Higher Education of the Republic of Kazakhstan (EAEU founding state)."
          },
          {
            title: "Association of Universities of Asia and the Pacific (AUAP)",
            badge: "First Accredited Member Institution",
            description:
              "First institution ever to receive accredited member status from AUAP. AUAP is listed in the US CHEA International Directory, holds consultative status with UNESCO, and partners with WFUNA holding Category One Consultative Status with UN ECOSOC."
          },
          {
            title: "Americas Accreditation Council (AAC)",
            badge: "WHED / UNESCO & ACBSP Partner",
            description:
              "Institutional Member listed in the US CHEA International Directory, officially recognized by the Ministry of Education of Curaçao (Kingdom of the Netherlands) and Anguilla (British Overseas Territory). Listed in UNESCO WHED, holds affiliate status with ENQA, maintains a formal MoU with ACBSP, and participates in the AAC AI+QA Institute."
          },
          {
            title: "International Association for Quality Assurance in Higher Education (QAHE)",
            badge: "Full International Accreditation",
            description:
              "QAHE accreditation recognized by National Agency for Quality Assurance in Education & Research (Moldova), Higher Education Council (HEC Syria), EdNet (Kyrgyz Republic), and ACE (Indonesia)."
          },
          {
            title: "International Accreditation & Quality Assurance Council (IAQAC)",
            badge: "Institutional Excellence",
            description:
              "Full institutional accreditation based on comprehensive international standards for curriculum governance, ethical service delivery, and global marketplace credibility."
          },
          {
            title: "Quality Education Assurance Accreditation (QEAA)",
            badge: "Full Accreditation Status",
            description:
              "Recognized by Board of Quality Standards (BQS), INQAAHE, Society of Quality Assurance (SQA), International Accreditation Service (IAS), QATC, and UK Accreditation Forum (UKAF)."
          }
        ]
      },
      {
        categoryTitle: "United States Statutory & State Verifications",
        items: [
          {
            title: "Florida Department of Education (Commission for Independent Education)",
            badge: "Florida Statutes 1005.03 & 1005.06",
            description:
              "Granted Annual Verification as a Religious College by the Florida Department of Education Commission for Independent Education. Legally authorized to confer Bachelor's, Master's, and Doctoral degrees under Florida Statutes 1005.03(1)(e) and 1005.06(1)(f)."
          },
          {
            title: "Florida Department of State (Division of Corporations)",
            badge: "Registered Corporate Entity",
            description:
              "Registered with the Division of Corporations, Florida Department of State, under Chapter 607 and 621 Florida Statutes."
          },
          {
            title: "President's Volunteer Service Award (President of the United States)",
            badge: "Official Certifying Organization",
            description:
              "Approved official Certifying Organization authorized to confer the prestigious President's Volunteer Service Award on behalf of the President of the United States."
          }
        ]
      },
      {
        categoryTitle: "Sovereign Ministries & International Authorizations",
        items: [
          {
            title: "Ministry of Education, Culture and Higher Education (Galmudug State of Somalia)",
            badge: "Accredited & Authorized Degree Granting",
            description:
              "Accredited and authorized by the Ministry of Education of Galmudug State of Somalia as a higher education institution registered to issue valid and legal degrees (Somalia is a full UN member state)."
          },
          {
            title: "Ministry of Education, Culture and Higher Education (Hirshabelle State of Somalia)",
            badge: "Registered Degree Granting Authority",
            description:
              "Authorized to issue valid and legal degrees recognized in the Hirshabelle State of Somalia."
          },
          {
            title: "Ministry of General Education and Instruction (Republic of South Sudan)",
            badge: "Foreign University Recognition",
            description:
              "Formally recognized as a foreign university by the South Sudan Ministry of General Education and Instruction, validating qualifications within the territory."
          },
          {
            title: "State of the African Diaspora (Office of the Minister of Education)",
            badge: "African Union 6th Region Recognition",
            description:
              "Accredited and recognized by the Office of the Minister of Education of the State of the African Diaspora, established under African Union constitutional principles."
          },
          {
            title: "Ministry of Education (Dominion of Melchizedek)",
            badge: "Licensed Institution",
            description:
              "Licensed to confer Bachelor's, Master's, and Doctoral degrees under international treaties and laws of the Dominion of Melchizedek."
          },
          {
            title: "Royal Council of Atjeh Darussalam (Indonesia)",
            badge: "Royal Council Accreditation",
            description:
              "Accredited by the King and Royal Council of Atjeh Darussalam empowering the conferral of Bachelor's, Master's, and Doctoral degrees."
          },
          {
            title: "Registrar of the Government of Saint Lucia",
            badge: "Registered International Corporation",
            description:
              "Duly registered as an international corporation with the Registrar of the Government of Saint Lucia."
          }
        ]
      },
      {
        categoryTitle: "Academic Partnerships & Multilateral Cooperation",
        items: [
          {
            title: "University of the Pacific (UNESCO IAU Listed)",
            badge: "Branch Status & Dual Degrees",
            description:
              "Holds branch status of the University of the Pacific. Listed in the UNESCO International Association of Universities (IAU) database, facilitating international double degrees."
          },
          {
            title: "College of Pharmaceutical Sciences Riau (Indonesia)",
            badge: "National University Partnership",
            description:
              "Strategic partnership with Indonesia's leading pharmacy institution covering visiting lectures, student exchanges, joint research papers, and co-organized scientific conferences."
          },
          {
            title: "Taongi National University & KBS Sport College",
            badge: "Academic Credit Reciprocity",
            description:
              "Cooperation agreements with Taongi National University (Liberia National Commissioner of Higher Education approved) and KBS Sport College (South Korea's national broadcaster institution)."
          },
          {
            title: "United Nations DESA & International Society of Diplomats (ISD)",
            badge: "UN DESA Listed & Diplomatic Endorsement",
            description:
              "Listed in the UN Department of Economic and Social Affairs database. Collaborative relationship with the International Society of Diplomats and College of Diplomatic Studies and International Relations (CDSIR)."
          }
        ]
      }
    ]
  }
};

const UNIVERSITY_IMAGES = {
  "kennedy university": "/assets/KU.avif",
  "birchwood university": "/assets/BU.jpg",
  "florida coastal university": "/assets/FCU.jpg",
  "london school of business and science": "/assets/LSBS.jpeg",
  "dunster business school": "/assets/DBS.jpeg",
  "emit": "/assets/EMIT.webp",
};

// ---------------- UNIVERSITIES DIRECTORY SECTION ---------------- //
export function UniversitiesSection({ navigate }) {
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

        <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-8!">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="group! relative! flex! flex-col! justify-between! rounded-[32px]! sm:rounded-[36px]! border! border-white/80! bg-white/80! backdrop-blur-xl! shadow-[0_12px_40px_-10px_rgba(20,50,40,0.08)]! ring-1! ring-slate-900/5! overflow-hidden! transition-all! duration-500! hover:-translate-y-2! hover:shadow-[0_24px_55px_-8px_rgba(20,50,40,0.16)]!"
            >
              <div>
                <div className="relative! h-[210px]! w-full! overflow-hidden! bg-slate-900!">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="h-full! w-full! object-cover! object-center! transition-transform! duration-700! group-hover:scale-110!"
                  />
                  <div className="absolute! inset-0! bg-gradient-to-t! from-black/75! via-black/20! to-transparent!" />

                  <div className="absolute! top-4! inset-x-4! flex! items-center! justify-between! z-10!">
                    <span className="px-3! py-1! rounded-full! bg-black/60! backdrop-blur-md! border! border-white/20! text-[11px]! font-bold! tracking-wider! text-[#ffd089]!">
                      PATHWAY {uni.id}
                    </span>

                    <span className="inline-flex! items-center! gap-1.5! px-3! py-1! rounded-full! bg-black/60! backdrop-blur-md! border! border-white/20! text-[11px]! font-medium! text-white!">
                      <MapPin size={12} className="text-[#ea9b3e]!" />
                      {uni.location}
                    </span>
                  </div>

                  <div className="absolute! bottom-3! left-4! z-10!">
                    <span className="inline-flex! items-center! gap-1.5! text-xs! font-semibold! text-emerald-300!">
                      <span className="h-2! w-2! rounded-full! bg-[#4ade80]! animate-ping!" />
                      {uni.type}
                    </span>
                  </div>
                </div>

                <div className="p-7! sm:p-8!">
                  <h3 className="text-xl! sm:text-2xl! font-bold! tracking-tight! text-slate-900! mb-3! group-hover:text-[#184841]! transition-colors! duration-300!">
                    {uni.name}
                  </h3>

                  <div className="mb-4! inline-flex! items-center! gap-2! px-3! py-1.5! rounded-lg! bg-amber-50! border! border-amber-200/60! text-xs! font-bold! text-[#945512]!">
                    <Sparkles size={13} className="text-[#ea9b3e]! shrink-0!" />
                    <span className="truncate!">{uni.focus}</span>
                  </div>

                  <p className="text-sm! sm:text-[14.5px]! leading-relaxed! text-slate-600! mb-6!">
                    {uni.description}
                  </p>

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

// ---------------- DEDICATED FULL ACCREDITATION PAGE VIEW ---------------- //
// DedicatedAccreditationView with Expandable Cards & Read More Feature

function AccreditationCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textLimit = 220; // Kitne characters ke baad "Read More" button aayega
  const needsTruncation = item.description && item.description.length > textLimit;

  return (
    <div className="group/card! relative! flex! flex-col! justify-between! p-6! sm:p-7! rounded-[28px]! bg-white/90! hover:bg-white! border! border-slate-200/90! hover:border-[#ea9b3e]/60! backdrop-blur-md! shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)]! hover:shadow-[0_20px_40px_-12px_rgba(234,155,62,0.18)]! transition-all! duration-300!">
      <div>
        {/* Top Row: Logo Slot & Badge */}
        <div className="flex! items-start! justify-between! gap-4! mb-5!">
          {/* Reserved Logo Space */}
          <div className="flex! h-14! w-14! sm:h-16! sm:w-16! shrink-0! items-center! justify-center! rounded-2xl! bg-slate-50! border! border-slate-200/80! p-2! shadow-xs! group-hover/card:border-[#ea9b3e]/50! group-hover/card:bg-amber-50/40! transition-colors! duration-300!">
            {item.logo ? (
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="h-full! w-full! object-contain! transition-transform! duration-300! group-hover/card:scale-105!"
              />
            ) : (
              <Building2 size={24} className="text-slate-400! group-hover/card:text-[#ea9b3e]! transition-colors!" />
            )}
          </div>

          <span className="inline-flex! items-center! text-right! px-3! py-1.5! rounded-full! bg-emerald-50! border! border-emerald-200/80! text-[11px]! font-extrabold! text-[#175249]! uppercase! tracking-wider!">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base! sm:text-lg! font-bold! text-slate-900! mb-3! leading-snug! group-hover/card:text-[#184841]! transition-colors!">
          {item.title}
        </h3>

        {/* Description with Read More Toggle */}
        <div className="text-xs! sm:text-[13.5px]! text-slate-600! leading-relaxed! font-normal!">
          <p className="inline!">
            {isExpanded || !needsTruncation
              ? item.description
              : `${item.description.slice(0, textLimit)}... `}
          </p>

          {needsTruncation && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex! items-center! gap-1! font-bold! text-[#ea9b3e]! hover:text-[#dc8d30]! ml-1.5! transition-colors! cursor-pointer! focus:outline-hidden!"
            >
              <span>{isExpanded ? "Read Less" : "Read More"}</span>
              <ChevronDown
                size={14}
                className={`transition-transform! duration-300! ${isExpanded ? "rotate-180!" : "rotate-0!"}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Card Bottom Status */}
      <div className="mt-6! pt-4! border-t! border-slate-100! flex! items-center! justify-between! text-[11px]! font-semibold! text-slate-500!">
        <div className="flex! items-center! gap-2!">
          <CheckCircle2 size={15} className="text-emerald-600! shrink-0!" />
          <span>Verified Statutory Record</span>
        </div>
        <span className="text-[10px]! font-bold! text-amber-600/80! uppercase! tracking-wider!">
          Active
        </span>
      </div>
    </div>
  );
}

function DedicatedAccreditationView({ university, onBack, onConsult }) {
  const uniKey = university.name?.toLowerCase().trim() || "";
  const data = universityAccreditations[uniKey] || universityAccreditations["kennedy university"];

  return (
    <div className="min-h-screen! bg-slate-50! font-sans! text-slate-900! pb-24!">
      {/* ---------------- 1. BEAUTIFUL HERO SECTION ---------------- */}
      <section className="relative! w-full! min-h-[580px]! lg:min-h-[640px]! flex! items-center! justify-center! bg-[#070d0c]! py-20! lg:py-24! px-6! sm:px-10! lg:px-16! text-white! overflow-hidden!">
        <div className="absolute! inset-0! bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,155,62,0.18),rgba(7,13,12,0.95))]!" />
        <div className="absolute! inset-0! bg-gradient-to-b! from-transparent! via-[#070d0c]/70! to-[#070d0c]!" />

        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! inset-0! opacity-15! mix-blend-overlay! bg-[radial-gradient(#ea9b3e_1px,transparent_1px)]! [background-size:24px_24px]!"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! -top-32! -right-20! h-[420px]! w-[420px]! rounded-full! bg-gradient-to-br! from-amber-400/25! to-[#ea9b3e]/10! blur-[140px]! animate-pulse!"
          style={{ animationDuration: "7s" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none! absolute! -bottom-32! -left-20! h-[450px]! w-[450px]! rounded-full! bg-gradient-to-tr! from-emerald-500/20! to-teal-400/10! blur-[140px]! animate-pulse!"
          style={{ animationDuration: "9s" }}
        />

        <div className="relative! z-10! w-full! max-w-6xl! mx-auto! flex! flex-col! items-start!">
          <button
            type="button"
            onClick={onBack}
            className="group/back! inline-flex! items-center! gap-2.5! mb-8! px-4! py-2.5! rounded-2xl! bg-white/5! hover:bg-white/10! border! border-white/10! hover:border-amber-400/40! text-xs! sm:text-sm! font-semibold! text-slate-300! hover:text-white! backdrop-blur-xl! shadow-lg! transition-all! duration-300! hover:-translate-x-1! cursor-pointer!"
          >
            <ChevronLeft size={17} className="transition-transform! duration-300! group-hover/back:-translate-x-0.5! text-[#ea9b3e]!" />
            <span>Back to University Overview</span>
          </button>

          <div className="inline-flex! items-center! gap-2.5! mb-6! px-4! py-2! rounded-full! border! border-amber-400/35! bg-amber-500/15! backdrop-blur-md! shadow-sm!">
            <span className="relative! flex! h-2! w-2!">
              <span className="animate-ping! absolute! inline-flex! h-full! w-full! rounded-full! bg-[#ea9b3e]! opacity-75!" />
              <span className="relative! inline-flex! rounded-full! h-2! w-2! bg-[#ea9b3e]!" />
            </span>
            <ShieldCheck size={16} className="text-[#ea9b3e]!" />
            <span className="text-[11px]! sm:text-xs! font-bold! uppercase! tracking-[0.2em]! text-amber-200!">
              Official Regulatory & Accreditation Register
            </span>
          </div>

          <h1 className="text-3xl! sm:text-5xl! lg:text-6xl! font-extrabold! tracking-tight! text-white! drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]! leading-[1.12]! mb-4!">
            Accreditation &amp; <span className="text-transparent! bg-clip-text! bg-gradient-to-r! from-white! via-[#ebd5b3]! to-[#ea9b3e]!">Recognition</span>
          </h1>

          <div className="inline-flex! items-center! gap-2! text-base! sm:text-xl! font-bold! text-[#ebd5b3]! tracking-wide! mb-4!">
            <Building2 size={18} className="text-[#ea9b3e]! shrink-0!" />
            <span>{data.name}</span>
          </div>

          <p className="text-sm! sm:text-base! lg:text-lg! text-slate-300! max-w-3xl! leading-relaxed! mb-6! font-normal! drop-shadow-sm!">
            {data.tagline}
          </p>

          {data.specialNote && (
            <div className="group/note! relative! w-full! max-w-4xl! p-5! sm:p-6! rounded-3xl! border! border-emerald-400/25! bg-gradient-to-br! from-emerald-950/30! via-slate-900/60! to-slate-900/80! backdrop-blur-2xl! shadow-[0_12px_35px_-8px_rgba(4,120,87,0.2)]! transition-all! duration-300! hover:border-emerald-400/40!">
              <div className="flex! items-start! gap-3.5!">
                <div className="flex! h-9! w-9! shrink-0! items-center! justify-center! rounded-xl! bg-emerald-500/15! border! border-emerald-400/30! text-[#4ade80]!">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <span className="block! text-xs! sm:text-sm! font-bold! uppercase! tracking-wider! text-amber-300! mb-1.5!">
                    Reciprocal Degree &amp; Credit Architecture
                  </span>
                  <p className="text-xs! sm:text-[14px]! leading-relaxed! text-slate-200! font-normal!">
                    {data.specialNote}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 2. CATEGORIES GRID WITH READ MORE ---------------- */}
      <section className="relative! py-16! lg:py-24! px-6! sm:px-10! lg:px-16! max-w-7xl! mx-auto! font-sans! overflow-hidden!">
        <div className="space-y-16!">
          {data.categories.map((category, idx) => (
            <div key={idx} className="space-y-6!">
              <div className="flex! items-center! justify-between! pb-4! border-b! border-slate-200/80!">
                <div className="flex! items-center! gap-3.5!">
                  <div className="flex! h-11! w-11! items-center! justify-center! rounded-2xl! bg-[#ea9b3e]/15! text-[#ea9b3e]! shadow-inner!">
                    <Award size={22} />
                  </div>
                  <div>
                    <span className="text-[11px]! font-extrabold! uppercase! tracking-[0.18em]! text-[#175249]! block! mb-0.5!">
                      Section {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl! sm:text-2xl! lg:text-3xl! font-extrabold! tracking-tight! text-slate-900!">
                      {category.categoryTitle}
                    </h2>
                  </div>
                </div>
                <span className="hidden! sm:inline-flex! text-xs! font-bold! text-slate-400! uppercase! tracking-widest!">
                  {category.items.length} Authorizations
                </span>
              </div>

              {/* Dynamic Grid with Expandable Cards */}
              <div className="grid! grid-cols-1! md:grid-cols-2! gap-6!">
                {category.items.map((item, itemIdx) => (
                  <AccreditationCard key={itemIdx} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisor Verification CTA */}
        <div className="relative! mt-20! p-8! sm:p-10! lg:p-12! rounded-[36px]! bg-[#0e1615]! text-white! shadow-2xl! overflow-hidden! border! border-white/10!">
          <div
            aria-hidden="true"
            className="pointer-events-none! absolute! -top-24! -right-24! h-72! w-72! rounded-full! bg-[#ea9b3e]/20! blur-[90px]!"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none! absolute! -bottom-24! -left-24! h-72! w-72! rounded-full! bg-emerald-400/20! blur-[90px]!"
          />

          <div className="relative! z-10! flex! flex-col! lg:flex-row! lg:items-center! justify-between! gap-8!">
            <div className="max-w-2xl!">
              <div className="inline-flex! items-center! gap-2! px-3.5! py-1.5! rounded-full! bg-white/10! border! border-white/15! text-xs! font-bold! uppercase! tracking-[0.18em]! text-[#ea9b3e]! mb-4! backdrop-blur-md!">
                <ShieldCheck size={16} />
                Candidate Profile Verification
              </div>
              <h3 className="text-2xl! sm:text-3xl! font-extrabold! tracking-tight! leading-tight! mb-3!">
                Confirm institutional degree equivalence with an advisor
              </h3>
              <p className="text-xs! sm:text-sm! text-slate-300! leading-relaxed! font-normal!">
                Transcripts, French Education Code registration dossiers, IKCA/AUAP certificates, and legalisation workflows are shared during your formal pre-admissions profile review.
              </p>
            </div>

            <div className="flex! items-center! shrink-0!">
              <button
                type="button"
                onClick={onConsult}
                className="group/btn! w-full! sm:w-auto! inline-flex! items-center! justify-center! gap-2.5! px-8! py-4! rounded-2xl! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! text-slate-950! font-bold! text-xs! sm:text-sm! shadow-xl! shadow-amber-500/20! transition-all! duration-300! hover:scale-[1.03]! cursor-pointer!"
              >
                <span>Schedule Verification</span>
                <ArrowRight size={17} className="transition-transform! duration-300! group-hover/btn:translate-x-1!" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------- MAIN UNIVERSITY DETAIL PAGE COMPONENT ---------------- //
export function UniversityDetailPage({
  navigate,
  university,
  dbaBrochureUrl = "#",
  dbaCurriculumUrl = "#"
}) {
  const [showFullAccreditation, setShowFullAccreditation] = useState(false);

  if (!university) return null;

  const uniKey = university.name?.toLowerCase().trim() || "";
  const dynamicCampusImage =
    university.image ||
    UNIVERSITY_IMAGES[uniKey] ||
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80";

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  // Agar user ne Accreditation par click kiya, toh seedha full dedicated view dikhao
  if (showFullAccreditation) {
    return (
      <DedicatedAccreditationView
        university={university}
        onBack={() => {
          setShowFullAccreditation(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onConsult={() => handleNavigate("/contact")}
      />
    );
  }

  return (
    <>
      {/* ---------------- 1. DYNAMIC HIGH-VISIBILITY HERO SECTION ---------------- */}
      <section className="relative! flex min-h-[580px]! lg:min-h-[640px]! w-full! items-center! justify-center! overflow-hidden! bg-[#0e1615]! py-16! px-6! sm:px-10!">
        <img
          src={dynamicCampusImage}
          alt={`${university.name} campus background`}
          className="absolute! inset-0! h-full! w-full! object-cover! object-[center_25%]! brightness-90!"
        />

        <div className="absolute! inset-0! bg-black/60!" />

        <div className="relative! z-10! max-w-4xl! mx-auto! flex! flex-col! items-center! text-center! font-sans!">
          <div className="flex! flex-wrap! items-center! justify-center! gap-2.5! mb-5!">
            <div className="inline-flex! items-center! justify-center! gap-2! px-4! py-1.5! rounded-full! border! border-white/20! bg-black/40! backdrop-blur-md! shadow-sm!">
              <Building2 className="w-4! h-4! text-[#ea9b3e]! shrink-0!" />
              <span className="text-xs! uppercase! tracking-[0.2em]! font-bold! text-[#f4ede4]!">
                {university.country || "International"} &middot; Doctoral Pathway
              </span>
            </div>

            {/* Top Accreditation Quick Trigger */}
            <button
              type="button"
              onClick={() => {
                setShowFullAccreditation(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex! items-center! gap-1.5! px-3.5! py-1.5! rounded-full! border! border-amber-400/40! bg-amber-500/20! hover:bg-amber-500/30! backdrop-blur-md! text-xs! font-bold! text-amber-200! transition-all! cursor-pointer!"
            >
              <ShieldCheck size={14} className="text-[#ea9b3e]!" />
              <span>Accreditation & Recognition</span>
              <ExternalLink size={12} className="opacity-70!" />
            </button>
          </div>

          <h1 className="text-3xl! sm:text-5xl! lg:text-[54px]! font-sans! font-extrabold! leading-[1.16]! tracking-normal! text-white! drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]! mb-4!">
            {university.programTitle || `${university.name} Executive DBA`}
          </h1>

          <p className="text-sm! sm:text-base! lg:text-lg! font-medium! text-[#ebd5b3]! tracking-wide! mb-5!">
            {university.name} &middot; Executive Doctoral Pathway
          </p>

          <p className="text-sm! sm:text-base! lg:text-lg! leading-relaxed! text-[#e2e8f0]! font-normal! max-w-2xl! mb-8! drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]!">
            {university.overview || university.focus}
          </p>

          <div className="flex! flex-wrap! items-center! justify-center! gap-4!">
            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
              className="inline-flex! items-center! justify-center! gap-2.5! px-8! py-3.5! text-xs! sm:text-sm! font-bold! text-[#1c1306]! bg-[#ea9b3e]! hover:bg-[#dc8d30]! active:bg-[#c97d22]! rounded-lg! shadow-xl! shadow-black/40! transition-all! duration-200! hover:scale-[1.02]! cursor-pointer!"
            >
              Request Profile Evaluation
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => {
                setShowFullAccreditation(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex! items-center! justify-center! gap-2! px-6! py-3.5! text-xs! sm:text-sm! font-semibold! text-white! bg-white/10! hover:bg-white/20! border! border-white/25! rounded-lg! backdrop-blur-md! transition-all! duration-200! cursor-pointer!"
            >
              <ShieldCheck size={16} className="text-[#ea9b3e]!" />
              View Recognition Register
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- 2. STRUCTURED DETAIL PANEL SECTION ---------------- */}
      <section className="relative! w-full! bg-gradient-to-br! from-[#f5fbf9]! via-[#fdfbf6]! to-[#eef6f3]! py-16! sm:py-20! px-6! sm:px-10! lg:px-16! font-sans! overflow-hidden!">
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
          <div className="rounded-[36px]! sm:rounded-[44px]! border! border-white/80! bg-white/85! p-6! sm:p-10! lg:p-12! backdrop-blur-xl! shadow-[0_20px_50px_-15px_rgba(20,50,40,0.1)]! ring-1! ring-slate-900/5!">
            
            {/* Header: Title & Actions */}
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

              <div className="flex! flex-wrap! items-center! gap-3!">
                {/* Accreditation & Recognition Button */}
                <button
                  type="button"
                  onClick={() => {
                    setShowFullAccreditation(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex! items-center! gap-2! px-4! py-2.5! rounded-xl! bg-amber-500/10! hover:bg-amber-500/20! border! border-amber-300! text-xs! sm:text-sm! font-bold! text-[#945512]! transition-all! cursor-pointer!"
                >
                  <ShieldCheck size={16} className="text-[#ea9b3e]!" />
                  <span>Accreditation & Recognition</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigate("/partnership")}
                  className="group/all! inline-flex! items-center! gap-2! px-5! py-2.5! rounded-xl! bg-white! hover:bg-slate-50! border! border-slate-300/80! text-xs! sm:text-sm! font-semibold! text-slate-800! shadow-xs! transition-all! duration-200! hover:border-[#ea9b3e]! cursor-pointer!"
                >
                  <span>View all universities</span>
                  <ArrowRight size={15} className="text-[#ea9b3e]! transition-transform! duration-200! group-hover/all:translate-x-1!" />
                </button>
              </div>
            </div>

            {/* Quick Stats Bar */}
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

              {/* Clickable Accreditation Stat Box */}
              <button
                type="button"
                onClick={() => {
                  setShowFullAccreditation(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group/acc! flex! items-center! justify-between! p-4! rounded-2xl! bg-[#f8faf9]! hover:bg-amber-50/60! border! border-slate-200/60! hover:border-amber-300! transition-all! duration-200! text-left! cursor-pointer!"
              >
                <div className="flex! items-center! gap-4!">
                  <div className="flex! h-12! w-12! shrink-0! items-center! justify-center! rounded-xl! bg-blue-500/10! group-hover/acc:bg-amber-500/10! text-blue-600! group-hover/acc:text-[#ea9b3e]! transition-colors!">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="text-xs! uppercase! tracking-wider! font-bold! text-slate-400!">Accreditation & Recognition</span>
                    <p className="text-sm! sm:text-base! font-bold! text-slate-900! group-hover/acc:text-[#945512]!">
                      French Code & International Bodies ↗
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-slate-400! group-hover/acc:text-[#ea9b3e]! transition-colors!" />
              </button>
            </div>

            {/* 3-Column Structured Information Grid */}
            <div className="grid! grid-cols-1! md:grid-cols-2! lg:grid-cols-3! gap-6! pt-4!">
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
              <div className="flex! flex-col! gap-2! max-w-xl! text-center! lg:text-left!">
                <p className="text-xs! sm:text-sm! text-slate-500!">
                  Programme structure, fees, timeline, awarding arrangements and institutional information should be confirmed before enrolment.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowFullAccreditation(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex! items-center! gap-1.5! text-xs! font-bold! text-[#175249]! hover:text-[#ea9b3e]! transition-colors! cursor-pointer! self-center! lg:self-start!"
                >
                  <ShieldCheck size={14} className="text-[#ea9b3e]!" />
                  <span>Read full accreditation & statutory compliance parameters &rarr;</span>
                </button>
              </div>

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