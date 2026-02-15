import { defineConfig } from 'vitepress'

import theme from './modules/theme.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: process.env.READTHEDOCS_CANONICAL_URL ? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "") : "",
	cleanUrls: true,
	description: "Academic archive by Duarte",
	ignoreDeadLinks: true,
	head: [
		['link', { rel: 'icon', href: '/favicon.png'}]
	],
	lastUpdated: true,
	logo: {
		dark: '/logo-light.png',
		light: '/logo-dark.png'
	},
	sitemap: {
		hostname: "https://duarte.readthedocs.io"
	},
	title: "Duarte's Portfolio",
	titleTemplate: ":title | Duarte's Portfolio",
  themeConfig: theme
})
