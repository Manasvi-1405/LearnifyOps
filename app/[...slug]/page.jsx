import { notFound } from "next/navigation";
import SiteApp from "../../src/main.jsx";
import { getUniversityByPath, navItems, partnerUniversities, universityPath } from "../../src/data/siteContent.js";

const pagePaths = [
  ...navItems.map(([, path]) => path).filter((path) => path !== "/"),
  ...partnerUniversities.map(universityPath)
];

export const dynamicParams = false;

export function generateStaticParams() {
  return pagePaths.map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const label = getUniversityByPath(path)?.name || navItems.find(([, route]) => route === path)?.[0];

  if (!label) return {};
  // Matches the existing document.title logic rather than changing page copy.
  return { title: `${label} | LearnifyOps` };
}

export default async function SitePage({ params }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  if (!pagePaths.includes(path)) notFound();

  return <SiteApp initialPath={path} />;
}
