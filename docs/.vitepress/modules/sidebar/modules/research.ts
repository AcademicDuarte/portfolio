export default [
	{
		base: '/research/articles/',
		items: [
			{ link: 'biology/index.md', text: 'Biology' },
			{ link: 'chemistry/index.md', text: 'Chemistry' },
			{ link: 'mathematics/index.md', text: 'Mathematics' },
			{ link: 'philosophy/index.md', text: 'Philosophy' },
			{ link: 'physics/index.md', text: 'Physics' },
			{ link: 'psychology/index.md', text: 'Psychology' },
		],
		text: 'Articles',
	},
	{
		base: '/research/essays/',
		items: [
			{
				base: '/research/essays/applied/',
				collapsed: true,
				text: 'Applied Philosophy',
				items: [
					{ link: 'economics', text: 'Economics' },
					{ link: 'education', text: 'Education' },
					{ link: 'engineering', text: 'Engineering' },
					{ link: 'history', text: 'History' },
					{ link: 'language', text: 'Language' },
					{ link: 'music', text: 'Music' },
					{ link: 'physical-sciences', text: 'Physical Sciences' },
					{ link: 'policy', text: 'Policy' },
					{ link: 'psychology', text: 'Psychology' },
					{ link: 'religion', text: 'Religion' },
					{ link: 'social-sciences', text: 'Social Sciences' },
					{ link: 'systems', text: 'Systems' },
					{ link: 'technology', text: 'Technology' },
				]
			},
			{
				base: '/research/essays/fundamentals/',
				collapsed: true,
				text: 'Fundamentals',
				items: [
					{ link: 'aesthetics', text: 'Aesthetics' },
					{ link: 'epistemology', text: 'Epistemology' },
					{ link: 'ethics', text: 'Ethics' },
					{ link: 'logic', text: 'Logic' },
					{ link: 'meta-philosophy', text: 'Meta-philosophy' },
					{ link: 'metaphysics', text: 'Metaphysics' },
				]
			},
		],
		text: 'Essays'
	},
	{
		base: '/research/treaties/',
		text: 'Treaties',
		items: [
			{ link: 'applied-sciences', text: 'Applied Sciences' },
			{ link: 'formal-sciences', text: 'Formal Sciences' },
			{ link: 'humanities', text: 'Humanities' },
			{ link: 'natural-sciences', text: 'Natural Sciences' },
			{ link: 'social-sciences', text: 'Social Sciences' },
		]
	}
]
