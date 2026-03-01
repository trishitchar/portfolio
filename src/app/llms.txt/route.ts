import { NextResponse } from 'next/server'

export async function GET() {
  const llmsTxt = `# Trishit Char - Full-Stack Developer Portfolio

> trishit.dev - Official portfolio of Trishit Char

## About
Trishit Char (also known as Trishit, @trishitchar) is a Full-Stack Developer and UI/UX Designer specializing in modern web technologies including React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and AI integration.

## Contact
- Email: trishitchar@gmail.com
- Phone: +91-8101326242
- Location: West Bengal, India

## Social Links
- GitHub: https://github.com/trishitchar
- Twitter/X: https://twitter.com/trishitchar
- LinkedIn: https://linkedin.com/in/trishitchar
- Instagram: https://instagram.com/trishit.char

## Key Skills
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Shadcn UI
- Backend: Node.js, Express, REST APIs, WebSockets
- Databases: MongoDB, PostgreSQL, Prisma
- AI/ML: OpenAI API, Gemini API, AI integration
- Tools: Git, Docker, Vercel, AWS

## Featured Projects
1. **AI-flix** - GPT-powered movie recommendation platform with personalized suggestions
2. **TcharGram** - Full-stack social networking application with real-time features
3. **Portfolio Website** - Modern, responsive portfolio built with Next.js 15 and TypeScript

## Professional Experience
- Full-Stack Developer at Revmaxx
- Freelance Web Developer
- Open Source Contributor

## Education
- HETC (Hooghly Engineering & Technology College)

## Site Structure
- Homepage: https://trishit.dev/
- Experience: https://trishit.dev/experience
- Projects: https://trishit.dev/projects
- Blog: https://trishit.dev/blog
- Contact: https://trishit.dev/contact
- FAQ: https://trishit.dev/faq

## Technical Expertise
Trishit specializes in building modern, scalable web applications with focus on:
- Performance optimization
- Responsive design
- SEO best practices
- Accessibility compliance
- AI-powered features
- Real-time functionality

## Availability
Open to freelance projects and full-time opportunities in web development, particularly roles involving React, Next.js, and full-stack development.

---
Last Updated: 2026-03-01
`

  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
