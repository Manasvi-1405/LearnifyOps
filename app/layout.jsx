import "../src/styles.css";

const organisation = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LearnifyOps",
  description: "DBA programme comparison, admissions guidance and onboarding support for experienced professionals considering international doctoral pathways.",
  email: "info@learnifyops.com",
  telephone: "+447447177848",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 7084, 58 Peregrine Road, Hainault",
    addressLocality: "Ilford",
    addressRegion: "Essex",
    postalCode: "IG6 3SZ",
    addressCountry: "GB"
  },
  areaServed: ["United Kingdom", "Europe", "Middle East", "Asia", "International"],
  sameAs: []
};

// The existing text and sharing metadata are retained from the Vite index.html.
export const metadata = {
  metadataBase: new URL("https://learnifyops.com"),
  title: "Doctor of Business Administration (DBA) | LearnifyOps",
  description: "Explore international Doctor of Business Administration pathways with LearnifyOps. Compare DBA programmes, review eligibility and receive personalised admissions guidance.",
  keywords: "Doctor of Business Administration, DBA UK, DBA programme, DBA eligibility, international DBA, online DBA, DBA universities, applied business research doctorate",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Doctor of Business Administration (DBA) | LearnifyOps",
    description: "Compare international DBA pathways, review your eligibility and receive personalised admissions guidance from application through enrolment.",
    type: "website",
    images: ["/assets/dba-executive-hero.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
