import { NextResponse } from "next/server";

// Revalidate every 1 hour to keep the feed fresh while remaining cache-friendly
export const revalidate = 3600;

export async function GET() {
  const siteUrl = "https://trishit.dev";

  // Mirror the existing placeholder posts under /app/blog
  const posts = [
    {
      title: "My First Post",
      link: `${siteUrl}/blog/my-first-post`,
      description: "This is the first blog post by Trishit Char.",
      pubDate: new Date("2025-01-15").toUTCString(),
    },
    {
      title: "My Second Post",
      link: `${siteUrl}/blog/my-second-post`,
      description: "Another blog post sharing insights on development.",
      pubDate: new Date("2025-02-12").toUTCString(),
    },
    {
      title: "My Third Post",
      link: `${siteUrl}/blog/my-third-post`,
      description: "Learning journey and experiences in coding.",
      pubDate: new Date("2025-03-18").toUTCString(),
    },
    {
      title: "My Fourth Post",
      link: `${siteUrl}/blog/my-fourth-post`,
      description: "Sharing thoughts on projects and technology.",
      pubDate: new Date("2025-04-10").toUTCString(),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Trishit.dev Blog (Trishit Char)</title>
      <link>${siteUrl}</link>
      <description>Latest posts by Trishit Char (Trishit) on web development and projects.</description>
      <language>en-us</language>
      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${posts
        .map(
          (post) => `
        <item>
          <title>${post.title}</title>
          <link>${post.link}</link>
          <description>${post.description}</description>
          <pubDate>${post.pubDate}</pubDate>
          <guid>${post.link}</guid>
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
