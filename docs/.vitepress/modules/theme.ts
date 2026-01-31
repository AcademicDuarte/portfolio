import navbar from './navbar'
import sidebar from './sidebar'

export default {
	aside: true,
	footer: {
		copyright: 'Copyright © 2026, Duarte. All rights reserved.'
	},
	lastUpdated: {
		formatOptions: {
			dateStyle: 'full',
			timeStyle: 'short'
		},
		text: 'Last updated'
	},
	nav: navbar,
	search: {
		provider: 'local',
	},
	sidebar: sidebar,
	socialLinks: [
		{
			icon: 'orcid',
			link: 'https://orcid.org/0009-0006-5258-5241'
		},
		{
			icon: 'x',
			link: 'https://x.com/AcademicDuarte'
		}
	]
}
