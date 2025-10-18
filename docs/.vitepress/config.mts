import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: process.env.READTHEDOCS_CANONICAL_URL ? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "") : "",
	clearUrls: true,
	// --------------------------------------------------------------------------------
	head: [
		['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
	],
	// --------------------------------------------------------------------------------
  title: "Duarte",
  titleTemplate: "Duarte",
  description: "My academic portfolio",
	// --------------------------------------------------------------------------------
  themeConfig: {
		// --------------------------------------------------------------------------------
		footer: {
			copyright: "Copyright © 2025, Duarte. All rights reserved."
		},
		// --------------------------------------------------------------------------------
		logo: '/logo.png',
		// --------------------------------------------------------------------------------
		nav: [
			{ text: 'Home', link: '/' },
		],
		// --------------------------------------------------------------------------------
		search: {
			provider: 'local'
		},
		// --------------------------------------------------------------------------------
		sidebar: {
		},
		// --------------------------------------------------------------------------------
		socialLinks: [
			{ icon: 'orcid', link: 'https://orcid.org/0009-0006-5258-5241' },
			{ icon: 'x', link: 'https://x.com/AcademicDuarte' }
		]
	}
})
