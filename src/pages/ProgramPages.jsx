import {
  BookOpen,
  Building2,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  Network,
  ShieldCheck,
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

// export function ProgramPage({ navigate }) {
//   return <><PageHero eyebrow="DBA Programme" icon={GraduationCap}
//    tone="midnight" image="/assets/dba-program-hero-v2.jpg" caption="Applied business research doctorate" title="A research-led DBA for experienced professionals." text="Develop advanced research and strategic decision-making capabilities through a flexible pathway designed for working professionals." /><ProgramFacts /><ValueSection /><OutcomesSection /><ResearchSection navigate={navigate} image="/assets/dba-program-research-v2.jpg" variant="program" /><FinalCta navigate={navigate} tone="research" title="Turn professional experience into structured business research." /></>;
// }
export function ProgramPage({ navigate }) {
  return (
    <>
      <PageHero
        eyebrow="DBA Programme"
        icon={GraduationCap}
        tone="midnight"
        image="/assets/dba-program-hero-v2.jpg"
        caption="Applied business research doctorate"
        title="A research-led DBA for experienced professionals."
        text="Develop advanced research and strategic decision-making capabilities through a flexible pathway designed for working professionals."
      />

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
  return <><PageHero eyebrow="Curriculum Framework" icon={BookOpen} tone="editorial" image="/assets/dba-curriculum-hero-v2.jpg" caption="Empirical study, strategic value" title="Modular coursework leading to a defence-ready dissertation." text="Review the DBA structure, research milestones, dissertation preparation and academic support available through the partner pathway selected during admissions." /><CurriculumSection /><JourneySection navigate={navigate} /><FinalCta navigate={navigate} tone="curriculum" title="Review the DBA curriculum before choosing your pathway." /></>;
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
  return <><PageHero eyebrow="Executive Experience" icon={Network} tone="executive" image="/assets/dba-experience-hero-v2.jpg" caption="Global DBA peer network" title="Learn within a globally connected executive cohort." text="The DBA experience is built for senior professionals who want academic structure, peer critique, flexible milestones and research conversations connected to real executive practice." /><CohortSection /><TestimonialSection /><AudienceSection navigate={navigate} /><FinalCta navigate={navigate} tone="network" title="Join a DBA pathway designed for senior professional momentum." /></>;
}

export function AdmissionsPage({ navigate }) {
  return <>   <Admission
    eyebrow="Admissions Profile"
    icon={ShieldCheck}
    tone="warm"
    image="/assets/dba-admissions-hero-v2.jpg"
    caption="Rigorous, personalized screening"
    title="Start with a profile review before selecting your DBA pathway."
    text="Share your academic background, leadership experience and research goals so an advisor can confirm fit, documentation requirements and partner-university options."
    navigate={navigate}
  /><FaqSection /><FinalCta navigate={navigate} tone="admissions" title="Start with a profile review before selecting a DBA pathway." /></>;
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
  return <><PageHero eyebrow="Advisor Consultation" icon={Mail} tone="contact" image="/assets/dba-contact-hero-v2.jpg" caption="Start with a profile review" title="Explore DBA admissions pathways with an academic advisor." text="Schedule a consultation to review your credentials, request DBA prospectus documents, and understand the right partner-university pathway for your goals." /><ContactSection {...contactProps} /><FinalCta navigate={navigate} tone="contact" title="Start your DBA consultation with clarity and confidence." /></>;
}


