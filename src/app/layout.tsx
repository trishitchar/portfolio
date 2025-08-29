import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';

const siteUrl = "https://trishit.dev";
const siteName = "Trishit Char Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | " + siteName,
  },
  description:
    "Official portfolio of Trishit Char (@trishitchar) — Full-Stack Developer & UI/UX Designer. Explore projects, case studies, and articles on web development, React, TypeScript, and Next.js.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description:
      "Trishit Char (@trishitchar) — Full-Stack Developer & UI/UX Designer. Check out projects, blog posts, and case studies.",
    siteName,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trishit Char Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: siteName,
    description:
      "Explore Trishit Char's (@trishitchar) portfolio — Full-Stack Developer & UI/UX Designer.",
    images: ["/opengraph-image.png"],
  },
  authors: [{ name: "Trishit Char", url: siteUrl }],
  creator: "Trishit Char",
  publisher: "Trishit Char",
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Trishit Char",
              url: siteUrl,
              sameAs: [
                "https://twitter.com/trishitchar",
                "https://x.com/trishitchar",
                "https://github.com/trishitchar",
                "https://linkedin.com/in/trishitchar",
                "https://instagram.com/trishit.char",
              ],
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              image: `${siteUrl}/opengraph-image.png`,
            }),
          }}
        />
      </body>
    </html>
  );
}
