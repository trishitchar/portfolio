import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Link from "next/link";
import RightSide from "@/components/RightSide";

const siteUrl = "https://trishit.dev";
const siteName = "Trishit Char Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | " + siteName },
  description:
    "Trishit Char (Trishit) - Official portfolio at trishit.dev. Full-Stack Developer specializing in React, TypeScript, Next.js, Node.js, and AI integration. Explore projects by Trishit including AI-flix and TcharGram. Available for freelance and full-time opportunities.",
  keywords: [
    "Trishit",
    "Trishit Char",
    "Trishit developer",
    "Trishit Char developer",
    "Trishit full stack developer",
    "Trishit Char portfolio",
    "Trishit.dev",
    "trishit.dev",
    "Trishit Char projects",
    "Trishit React developer",
    "Trishit TypeScript",
    "Trishit Next.js",
    "Trishit AI developer",
    "@trishitchar",
    "trishitchar GitHub",
    "Trishit web developer",
    "Trishit Char full stack",
    "Trishit MERN stack",
  ],
  alternates: {
    canonical: siteUrl,
    languages: { en: siteUrl },
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Trishit Char RSS Feed" }],
    }
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Trishit Char | Full-Stack Developer Portfolio",
    description:
      "Trishit Char (Trishit) - Full-Stack Developer & UI/UX Designer at trishit.dev. Specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications. Check out projects, blog posts, and case studies by Trishit.",
    siteName,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trishit Char - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "Trishit Char | Full-Stack Developer Portfolio",
    description:
      "Explore Trishit Char's (Trishit) portfolio at trishit.dev - Full-Stack Developer & UI/UX Designer specializing in React, Next.js, and AI integration.",
    images: ["/opengraph-image.png"],
  },
  authors: [{ name: "Trishit Char", url: siteUrl }],
  creator: "Trishit Char",
  publisher: "Trishit Char",
  category: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Link href={'/'} aria-label="Trishit Char Home">
            <h1 className="fixed top-3 left-4 md:top-5 md:left-5 z-50 text-sm md:text-base font-light hover:cursor-pointer hover:underline font-mono" itemProp="name">
              Trishit Char
            </h1>
          </Link>
          {/* middle render children */}
          <div className="h-full p-4 pt-16 md:pt-4 max-w-6xl mx-auto">
            {children}
          </div>
          {/* Navigation - fixed top right on all sizes */}
          <div className="fixed right-4 top-3 md:right-5 md:top-5 z-50 flex flex-col items-end">
            <RightSide />
          </div>
        </ThemeProvider>
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
              alternateName: ["Trishit", "trishitchar", "@trishitchar"],
              url: siteUrl,
              image: `${siteUrl}/opengraph-image.png`,
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              description: "Trishit Char (Trishit) is a Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, and AI integration. Based in India, Trishit creates modern web applications and has worked on projects like AI-flix (GPT-powered movie platform) and TcharGram (social networking app). View Trishit's complete portfolio at trishit.dev.",
              email: "trishitchar@gmail.com",
              telephone: "+91-8101326242",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "West Bengal",
              },
              sameAs: [
                "https://twitter.com/trishitchar",
                "https://x.com/trishitchar",
                "https://github.com/trishitchar",
                "https://linkedin.com/in/trishitchar",
                "https://instagram.com/trishit.char",
                "https://facebook.com/trishitchar",
                "https://youtube.com/c/trishitchar",
                "https://discord.com/users/374062634840743680",
              ],
              knowsAbout: [
                "Web Development",
                "Full-Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "AI Integration",
                "UI/UX Design",
                "MERN Stack",
                "REST APIs",
                "WebSockets",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "HETC",
                  sameAs: "https://www.hetc.ac.in",
                }
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Revmaxx",
                }
              ],
            }),
          }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Trishit Char Portfolio",
              alternateName: ["Trishit.dev", "Trishit Developer Portfolio"],
              url: siteUrl,
              description: "Official portfolio website of Trishit Char (Trishit), showcasing full-stack development projects, technical blog posts, and professional experience.",
              author: {
                "@type": "Person",
                name: "Trishit Char",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/projects?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              inLanguage: "en-US",
            }),
          }}
        />

        {/* Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects",
                  item: `${siteUrl}/projects`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Experience",
                  item: `${siteUrl}/experience`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: `${siteUrl}/contact`,
                },
              ],
            }),
          }}
        />

        {/* Structured Data: ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Trishit Char",
                alternateName: "Trishit",
                identifier: "trishitchar",
              },
              url: siteUrl,
              name: "Trishit Char - Developer Portfolio",
            }),
          }}
        />
      </body>
    </html>
  );
}
