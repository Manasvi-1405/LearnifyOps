import SiteApp from "../src/main.jsx";
import { pageDescriptions } from "../src/data/seoMetadata.js";

export const metadata = {
  // Absolute URLs need no base here. Next normalises a base-resolved root URL
  // without its slash; keep the requested homepage canonical's trailing slash.
  // The root layout's already-resolved sharing metadata remains inherited.
  metadataBase: null,
  description: pageDescriptions["/"],
  alternates: { canonical: "https://learnifyops.com/" }
};

export default function Home() {
  return <SiteApp initialPath="/" />;
}
