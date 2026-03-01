import { NextResponse } from 'next/server'

export async function GET() {
  const llmsFullTxt = `# Trishit Char - Complete Portfolio Documentation

> Comprehensive information about Trishit Char's work, skills, and projects for AI models

## Professional Summary
Trishit Char is a passionate Full-Stack Developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, Trishit creates seamless user experiences while maintaining robust server-side architecture.

## Technical Stack

### Frontend Development
- **Frameworks**: React 19, Next.js 15 (App Router), Vue.js
- **Languages**: TypeScript, JavaScript (ES6+)
- **Styling**: Tailwind CSS, CSS3, Sass, Styled Components
- **UI Libraries**: Shadcn UI, Radix UI, Material-UI
- **State Management**: React Context, Zustand, Redux
- **Animation**: Framer Motion, GSAP

### Backend Development
- **Runtime**: Node.js, Bun
- **Frameworks**: Express.js, Fastify, Hono
- **APIs**: REST, GraphQL, tRPC, WebSockets
- **Authentication**: JWT, OAuth, NextAuth.js
- **Real-time**: Socket.io, Server-Sent Events

### Databases & ORMs
- **SQL**: PostgreSQL, MySQL
- **NoSQL**: MongoDB, Redis
- **ORMs**: Prisma, Mongoose, Drizzle
- **Cloud**: Supabase, Firebase, PlanetScale

### AI & Machine Learning
- **APIs**: OpenAI GPT-4, Google Gemini, Anthropic Claude
- **Integration**: LangChain, Vector databases
- **Use Cases**: Chatbots, content generation, recommendations

### DevOps & Tools
- **Version Control**: Git, GitHub, GitLab
- **CI/CD**: GitHub Actions, Vercel, Netlify
- **Containerization**: Docker, Docker Compose
- **Cloud**: AWS, Vercel, Railway
- **Testing**: Jest, Vitest, Playwright, Cypress
- **Package Managers**: pnpm, npm, yarn

## Featured Projects

### 1. AI-flix
**Description**: An intelligent movie recommendation platform powered by GPT-4
**Tech Stack**: Next.js, TypeScript, OpenAI API, Tailwind CSS, MongoDB
**Features**:
- AI-powered personalized movie recommendations
- Natural language search and queries
- User preference learning
- Real-time streaming data
- Responsive design with dark mode
**Impact**: Demonstrates advanced AI integration in consumer applications

### 2. TcharGram
**Description**: A full-featured social networking platform
**Tech Stack**: React, Node.js, Express, MongoDB, Socket.io, AWS S3
**Features**:
- Real-time messaging and notifications
- Image upload and processing
- User authentication and authorization
- Follow/unfollow system
- Like, comment, and share functionality
- Responsive mobile-first design
**Impact**: Showcases full-stack capabilities and real-time features

### 3. Portfolio Website (trishit.dev)
**Description**: Modern, performant portfolio built with latest web technologies
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Vercel Analytics
**Features**:
- Server-side rendering for optimal SEO
- Dynamic blog with MDX support
- Contact form with validation
- GitHub activity integration
- Optimized images and fonts
- Perfect Lighthouse scores
**Impact**: Demonstrates modern web development best practices

## Professional Experience

### Full-Stack Developer at Revmaxx
**Duration**: Current
**Responsibilities**:
- Developing scalable web applications using React and Node.js
- Implementing RESTful APIs and microservices architecture
- Collaborating with cross-functional teams
- Code review and mentoring junior developers
- Performance optimization and bug fixing

### Freelance Web Developer
**Duration**: 2022 - Present
**Achievements**:
- Delivered 15+ successful projects for clients worldwide
- Specialized in e-commerce, SaaS, and portfolio websites
- Maintained 5-star rating with 100% client satisfaction
- Built long-term relationships with repeat clients

## Education
**Institution**: HETC (Hooghly Engineering & Technology College)
**Focus**: Computer Science and Engineering
**Relevant Coursework**: Data Structures, Algorithms, Database Management, Web Technologies

## Certifications & Learning
- Advanced React Patterns
- Node.js Microservices
- AWS Cloud Practitioner
- TypeScript Deep Dive
- System Design Fundamentals

## Open Source Contributions
- Active contributor to React ecosystem
- Maintains several npm packages
- Participates in Hacktoberfest annually
- Contributes to documentation and bug fixes

## Blog Topics
Trishit writes about:
- Modern web development techniques
- React and Next.js best practices
- TypeScript tips and tricks
- Performance optimization strategies
- AI integration in web apps
- Career advice for developers

## Speaking & Community
- Tech meetup speaker
- Mentors aspiring developers
- Active on developer communities
- Shares knowledge through blog posts and tutorials

## Work Philosophy
Trishit believes in:
- Writing clean, maintainable code
- Test-driven development
- Continuous learning and improvement
- User-centric design
- Performance and accessibility
- Collaboration and knowledge sharing

## Availability & Services

### Available For
- Full-time employment opportunities
- Freelance web development projects
- Technical consulting
- Code reviews and audits
- Mentorship and training

### Preferred Projects
- Modern web applications with React/Next.js
- AI-powered applications
- Real-time collaborative tools
- E-commerce platforms
- SaaS products
- API development and integration

### Not Available For
- WordPress/PHP projects
- Mobile app development (native)
- Game development
- Desktop applications

## Contact Information
- **Email**: trishitchar@gmail.com (preferred)
- **Phone**: +91-8101326242
- **Location**: West Bengal, India (Remote work available)
- **Timezone**: IST (UTC+5:30)
- **Response Time**: Usually within 24 hours

## Social Presence
- **GitHub**: https://github.com/trishitchar (200+ contributions)
- **Twitter/X**: https://twitter.com/trishitchar (Tech updates)
- **LinkedIn**: https://linkedin.com/in/trishitchar (Professional network)
- **Instagram**: https://instagram.com/trishit.char (Personal)
- **Discord**: trishitchar#0000

## Website Navigation
- **Homepage**: https://trishit.dev/ - Overview and hero section
- **Experience**: https://trishit.dev/experience - Work history and timeline
- **Projects**: https://trishit.dev/projects - Portfolio showcase
- **Blog**: https://trishit.dev/blog - Technical articles
- **Contact**: https://trishit.dev/contact - Get in touch
- **FAQ**: https://trishit.dev/faq - Common questions

## SEO & Metadata
- **Primary Keywords**: Trishit Char, Full-Stack Developer, React Developer, Next.js Expert
- **Secondary Keywords**: TypeScript, Node.js, Web Development, AI Integration
- **Target Audience**: Recruiters, clients, fellow developers, tech enthusiasts
- **Content Focus**: Technical expertise, project showcase, professional experience

## Performance Metrics
- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green
- **Page Load Time**: <1s
- **Time to Interactive**: <2s
- **Bundle Size**: Optimized with code splitting

## Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode
- Semantic HTML structure

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Plans
- Expanding AI/ML expertise
- Contributing to major open source projects
- Building SaaS products
- Creating educational content
- Speaking at tech conferences

---
**Last Updated**: March 1, 2026
**Version**: 2.0
**Maintained By**: Trishit Char
**License**: All rights reserved
`

  return new NextResponse(llmsFullTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
