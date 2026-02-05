export default [
	{
		base: '/learning/courses/',
		items: [
			{ link: 'mathematical-engineering/index.md', text: 'Mathematical Engineering' }
		],
		text: 'Courses',
	},
	{
		base: '/learning/studies/',
		text: 'Studies',
		items: [
			{
				base: '/learning/studies/applied-sciences/',
				collapsed: true,
				text: 'Applied Sciences',
				items: [
					{ link: 'systems-science', text: 'Systems Science' }
				]
			},
			{
				base: '/learning/studies/formal-sciences/',
				collapsed: true,
				text: 'Formal Sciences',
				items: [
					{ link: 'applied-mathematics', text: 'Applied Mathematics' },
					{ link: 'computer-science', text: 'Computer Science' },
					{ link: 'logic', text: 'Logic' },
					{ link: 'pure-mathematics', text: 'Pure Mathematics' },
				]
			},
			{
				base: '/learning/studies/humanities/',
				collapsed: true,
				text: 'Humanities',
				items: [
					{ link: 'history', text: 'History' },
					{ link: 'language-and-literature', text: 'Language and Literature' },
					{ link: 'philosophy', text: 'Philosophy' },
					{ link: 'theology', text: 'Theology' },
				]
			},
			{
				base: '/learning/studies/natural-sciences/',
				collapsed: true,
				text: 'Natural Sciences',
				items: [
					{ link: 'biology', text: 'Biology' },
					{ link: 'chemistry', text: 'Chemistry' },
					{ link: 'physics', text: 'Physics' },
				]
			},
			{
				base: '/learning/studies/social-sciences/',
				collapsed: true,
				text: 'Social Sciences',
				items: [
					{ link: 'anthropology', text: 'Anthropology' },
					{ link: 'business', text: 'Business' },
					{ link: 'economics', text: 'Economics' },
					{ link: 'linguistics', text: 'Linguistics' },
					{ link: 'psychology', text: 'Psychology' },
					{ link: 'sociology', text: 'Sociology' },
				]
			}
		]
	}
]
