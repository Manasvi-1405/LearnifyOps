// src/pages/AccreditationPage.jsx
import React from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Globe2,
  ArrowRight,
  ChevronLeft,
  FileText,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { universityAccreditations } from "../data/accreditationData";

export default function AccreditationPage({ universitySlug = "kennedy-university", navigate }) {
  // Slug match karega ya default Kennedy University load karega
  const data = universityAccreditations[universitySlug] || universityAccreditations["kennedy-university"];

  const handleNavigate = (path) => {
    if (navigate) navigate(path);
    else window.location.href = path;
  };

  return (
    <div className="min-h-screen! bg-slate-50! font-sans! text-slate-900!">
      {/* ---------------- 1. DYNAMIC HEADER BANNER ---------------- */}
      <section className="relative! w-full! bg-[#0e1615]! py-20! px-6! sm:px-10! lg:px-16! text-white! overflow-hidden!">
        <div className="absolute! inset-0! bg-gradient-to-r! from-black/90! via-black/75! to-[#132321]!" />

        {/* Ambient Glows */}
        <div className="pointer-events-none! absolute! -top-24! right-10! h-80! w-80! rounded-full! bg-amber-400/20! blur-[120px]!" />
        <div className="pointer-events-none! absolute! -bottom-24! left-10! h-80! w-80! rounded-full! bg-emerald-400/20! blur-[120px]!" />

        <div className="relative! z-10! max-w-6xl! mx-auto!">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => handleNavigate(`/universities/${universitySlug}`)}
            className="inline-flex! items-center! gap-2! mb-6! px-4! py-2! rounded-xl! bg-white/10! hover:bg-white/20! border! border-white/20! text-xs! sm:text-sm! font-semibold! text-slate-200! backdrop-blur-md! transition-all! cursor-pointer!"
          >
            <ChevronLeft size={16} />
            <span>Back to University Profile</span>
          </button>

          <div className="inline-flex! items-center! gap-2! mb-4! px-4! py-1.5! rounded-full! border! border-amber-400/40! bg-amber-500/20! text-xs! font-bold! uppercase! tracking-widest! text-amber-300! backdrop-blur-md!">
            <ShieldCheck size={16} className="text-[#ea9b3e]!" />
            Institutional Due Diligence
          </div>

          <h1 className="text-3xl! sm:text-5xl! lg:text-5xl! font-extrabold! leading-tight! text-white! mb-4!">
            Accreditation & Recognition
          </h1>

          <p className="text-lg! sm:text-xl! font-semibold! text-[#ebd5b3]! mb-4!">
            {data.universityName}
          </p>

          <p className="text-sm! sm:text-base! text-slate-300! max-w-3xl! leading-relaxed!">
            {data.overview}
          </p>

          {data.dualDegreeNote && (
            <div className="mt-6! p-4! rounded-2xl! bg-white/5! border! border-white/15! backdrop-blur-md! max-w-3xl! text-xs! sm:text-sm! text-emerald-200/90! leading-relaxed!">
              <strong className="text-amber-300! block! mb-1!">Reciprocal Degree & Credit Architecture:</strong>
              {data.dualDegreeNote}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- 2. STRUCTURED ACCREDITATION CATEGORIES ---------------- */}
      <section className="py-16! px-6! sm:px-10! lg:px-16! max-w-6xl! mx-auto!">
        <div className="space-y-12!">
          {data.categories.map((cat, cIdx) => (
            <div key={cIdx} className="space-y-5!">
              {/* Category Heading */}
              <div className="flex! items-center! gap-3! pb-3! border-b! border-slate-200!">
                <div className="flex! h-9! w-9! items-center! justify-center! rounded-xl! bg-[#ea9b3e]/15! text-[#ea9b3e]!">
                  <Award size={20} />
                </div>
                <h2 className="text-xl! sm:text-2xl! font-bold! text-slate-900!">
                  {cat.categoryName}
                </h2>
              </div>

              {/* Items Cards Grid */}
              <div className="grid! grid-cols-1! md:grid-cols-2! gap-5!">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex! flex-col! justify-between! p-6! rounded-2xl! bg-white! border! border-slate-200/80! shadow-xs! hover:shadow-md! hover:border-[#ea9b3e]/60! transition-all! duration-300!"
                  >
                    <div>
                      <div className="flex! flex-wrap! items-start! justify-between! gap-2! mb-3!">
                        <span className="inline-block! px-3! py-1! rounded-full! bg-emerald-50! border! border-emerald-200! text-[11px]! font-bold! text-[#175249]! uppercase! tracking-wide!">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-base! sm:text-lg! font-bold! text-slate-900! mb-2.5! leading-snug!">
                        {item.title}
                      </h3>

                      <p className="text-xs! sm:text-sm! text-slate-600! leading-relaxed!">
                        {item.details}
                      </p>
                    </div>

                    <div className="mt-5! pt-3! border-t! border-slate-100! flex! items-center! gap-2! text-[11px]! font-semibold! text-slate-500!">
                      <CheckCircle2 size={14} className="text-emerald-600!" />
                      <span>Verified Regulatory Standing</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- 3. FOOTER DUE DILIGENCE ADVISORY ---------------- */}
        <div className="mt-16! p-8! rounded-3xl! bg-gradient-to-br! from-slate-900! to-slate-950! text-white! shadow-xl! flex! flex-col! md:flex-row! items-center! justify-between! gap-6!">
          <div className="max-w-2xl!">
            <div className="inline-flex! items-center! gap-2! text-xs! font-bold! uppercase! tracking-widest! text-[#ea9b3e]! mb-2!">
              <ShieldCheck size={16} />
              Candidate Document Verification
            </div>
            <h3 className="text-xl! sm:text-2xl! font-bold! mb-2!">
              Review statutory documentation with an academic advisor
            </h3>
            <p className="text-xs! sm:text-sm! text-slate-300! leading-relaxed!">
              Full copies of French ministerial registration listings, IKCA & AUAP accreditation certificates, and apostille verification workflows are reviewed with eligible candidates during initial profile assessment.
            </p>
          </div>

          <div className="flex! flex-wrap! items-center! gap-3!">
            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
              className="inline-flex! items-center! gap-2! px-6! py-3.5! rounded-xl! bg-[#ea9b3e]! hover:bg-[#dc8d30]! text-slate-950! font-bold! text-xs! sm:text-sm! transition-all! hover:scale-[1.02]! cursor-pointer!"
            >
              <span>Schedule Advisor Verification</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}