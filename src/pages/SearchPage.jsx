import { useMemo, useState } from "react";
import { Search, ArrowRight, X } from "lucide-react";
import DefaultLink from "../components/navigation/Link.jsx";
import { partnerUniversities, universityPath } from "../data/siteContent.js";

const corePages = [
  {
    title: "Home",
    description: "LearnifyOps global executive education, research doctorate pathways and DBA overview",
    path: "/",
    category: "Overview",
  },
  {
    title: "Doctor of Business Administration (DBA)",
    description: "Executive doctoral programme, applied business research, scholarship and leadership defense",
    path: "/program",
    category: "Programme",
  },
  {
    title: "Doctoral Pathways",
    description: "Explore all doctoral routes, executive DBA degrees and academic partnerships",
    path: "/doctoral",
    category: "Doctoral",
  },
  {
    title: "Partner Universities",
    description: "Accredited international partner universities, study institutions and executive routes",
    path: "/partnership",
    category: "Universities",
  },
  {
    title: "Admissions & Eligibility",
    description: "Candidate eligibility criteria, entry requirements, document submission and profile assessment",
    path: "/admissions",
    category: "Admissions",
  },
  {
    title: "Curriculum Framework",
    description: "Doctoral research methodology, executive governance, analytics and applied dissertation",
    path: "/curriculum",
    category: "Curriculum",
  },
  {
    title: "Executive Experience",
    description: "Global executive cohort diversity, flexible learning models, mentoring and peer network",
    path: "/experience",
    category: "Experience",
  },
  {
    title: "Contact & Consultation",
    description: "Book an advisory profile review, get prospectus guidance and connect with our team",
    path: "/contact",
    category: "Contact",
  },
];

const universityPages = partnerUniversities.map((uni) => ({
  title: uni.name,
  description: `${uni.programTitle} (${uni.country}) · ${uni.focus}. Duration: ${uni.duration}. Delivery: ${uni.delivery}.`,
  path: universityPath(uni),
  category: "University",
}));

const searchableContent = [...corePages, ...universityPages];

const quickSuggestions = [
  "DBA",
  "Doctoral",
  "Universities",
  "Admissions",
  "Curriculum",
  "Eligibility",
  "Kennedy",
  "Birchwood",
];

export default function SearchPage({ navigate, Link: CustomLink }) {
  const [query, setQuery] = useState("");
  const LinkComponent = CustomLink || DefaultLink;

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return [];

    return searchableContent.filter((item) =>
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(term)
    );
  }, [query]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && query) {
      setQuery("");
    }
  };

  return (
    <section className="site-search" aria-label="Website search">
      <div className="site-search-inner">
        <p className="site-search-eyebrow">EXPLORE LEARNIFYOPS</p>

        <h1>What are you looking for?</h1>

        <p className="site-search-subtitle">
          Search programmes, partner universities, admissions, curriculum and more.
        </p>

        <div className="site-search-input">
          <Search size={22} aria-hidden="true" />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search anything (e.g. DBA, Admissions, Kennedy)..."
            aria-label="Search website content"
            autoFocus
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search query"
            >
              <X size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="site-search-suggestions" aria-label="Popular search suggestions">
          <span className="suggestions-label">Popular:</span>
          {quickSuggestions.map((tag) => (
            <button
              key={tag}
              type="button"
              className={query.toLowerCase() === tag.toLowerCase() ? "search-chip active" : "search-chip"}
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {!query.trim() ? (
          <p className="site-search-hint">
            Try searching for DBA, universities, admissions, curriculum or specific institutions.
          </p>
        ) : results.length > 0 ? (
          <div className="site-search-results">
            <p className="site-search-count">
              {results.length} {results.length === 1 ? "result" : "results"} found for "{query}"
            </p>

            {results.map((item) => (
              <LinkComponent
                key={item.path}
                to={item.path}
                navigate={navigate}
                className="site-search-result"
              >
                <div>
                  <span>{item.category}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>

                <ArrowRight size={20} aria-hidden="true" />
              </LinkComponent>
            ))}
          </div>
        ) : (
          <div className="site-search-empty">
            <Search size={32} aria-hidden="true" />
            <h2>No results found for "{query}"</h2>
            <p>
              Try a different keyword, such as DBA, admissions, or click one of the popular search suggestions above.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}