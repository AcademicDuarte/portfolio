import { defineConfig } from 'vitepress';
import module_base from './modules/base';
import module_navbar from './modules/navbar';
import module_sidebar from './modules/sidebar';

export default defineConfig({
	base: module_base,
	ignoreDeadLinks: true,
	markdown: { math: true },
	title: "Duarte",
	titleTemplate: ":title | Duarte",
	cleanUrls: true,
	description: "My academic portfolio",
	rewrites: {
		'records/:page*': ':page*'
	},
	themeConfig: {
		logo: './logo.png',
		nav: module_navbar,
		sidebar: module_sidebar,
		socialLinks: [
			{ icon: 'orcid', link: 'https://orcid.org/0009-0006-5258-5241' },
			{ icon: 'x', link: 'https://x.com/AcademicDuarte' }
		]
	}
})
