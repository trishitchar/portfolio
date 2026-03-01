import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			// AI Crawlers for training and indexing
			{ userAgent: 'GPTBot', allow: '/' }, // OpenAI
			{ userAgent: 'ChatGPT-User', allow: '/' }, // OpenAI ChatGPT
			{ userAgent: 'Google-Extended', allow: '/' }, // Google Gemini & AI experiments
			{ userAgent: 'ClaudeBot', allow: '/' }, // Anthropic Claude
			{ userAgent: 'CCBot', allow: '/' }, // Common Crawl (used by many LLMs)
			{ userAgent: 'anthropic-ai', allow: '/' }, // Anthropic
			{ userAgent: 'PerplexityBot', allow: '/' }, // Perplexity AI
			{ userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
			{ userAgent: 'cohere-ai', allow: '/' }, // Cohere
			
			// Traditional search engines
			{ userAgent: 'Googlebot', allow: '/', crawlDelay: 2 },
			{ userAgent: 'Bingbot', allow: '/', crawlDelay: 2 },
			
			// General rule
			{ userAgent: '*', allow: '/', disallow: ['/private/', '/admin/'] },
		],
		sitemap: 'https://trishit.dev/sitemap.xml',
		host: 'https://trishit.dev',
	}
}
