import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://trishit.dev";

  const posts = [
    {
      title: "How to Build an SEO-Friendly Next.js Website",
      link: `${siteUrl}/blog/seo-friendly-nextjs`,
      description: "Step-by-step guide to making your Next.js app rank higher on Google.",
      pubDate: new Date("2025-08-01").toUTCString(),
    },
    {
      title: "Mastering TypeScript in React",
      link: `${siteUrl}/blog/typescript-react`,
      description: "Learn best practices for writing React code with TypeScript.",
      pubDate: new Date("2025-07-15").toUTCString(),
    },
    {
      title: "Dockerizing Your Node.js App",
      link: `${siteUrl}/blog/docker-node`,
      description: "A beginner-friendly guide to running Node.js apps in Docker containers.",
      pubDate: new Date("2025-06-20").toUTCString(),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Example Blog</title>
      <link>${siteUrl}</link>
      <description>Latest tutorials and articles on web development.</description>
      <language>en-us</language>
      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>${post.link}</link>
          <description>${post.description}</description>
          <pubDate>${post.pubDate}</pubDate>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
