const mathematics = [
	{ text: 'Applied Mathematics', link: 'applied' },
	{ text: 'Pure Mathematics', link: 'pure' }
]
const misc = [
	{ text: 'Applied Sciences', link: 'applied-sciences' },
	{ text: 'Formal Sciences', link: 'formal-sciences' },
	{ text: 'Humanities', link: 'humanities' },
	{ text: 'Natural Sciences', link: 'natural-sciences' },
	{ text: 'Social Sciences', link: 'social-sciences' },
]
const philosophy = [
	{ text: 'Aesthetics', link: 'aesthetics' },
	{ text: 'Applied Philosophy', link: 'applied' },
	{ text: 'Epistemology', link: 'epistemology' },
	{ text: 'Ethics', link: 'ethics' },
	{ text: 'History of Philosophy', link: 'history' },
	{ text: 'Logic', link: 'logic' },
	{ text: 'Meta-Philosophy', link: 'meta-philosophy' },
	{ text: 'Metaphysics', link: 'metaphysics' },
	{ text: 'Philosophers', link: 'philosophers' },
	{ text: 'Traditions and Schools', link: 'traditions-and-schools' },
]
const sciences = [
	{ text: 'Biology', link: 'biology' },
	{ text: 'Chemistry', link: 'chemistry' },
	{ text: 'Physics', link: 'physics' },
]

export default [
	{ text: 'Mathematics', base: '/studies/mathematics/', items: mathematics },
	{ text: 'Miscellaneous', base: '/studies/misc/', items: misc },
	{ text: 'Philosophy', base: '/studies/philosophy/', items: philosophy },
	{ text: 'Sciences', base: '/studies/sciences/', items: sciences },
]
