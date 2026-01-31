import articles from './modules/articles.ts'
import constructs from './modules/constructs.ts'
import courses from './modules/courses.ts'
import essays from './modules/essays.ts'
import studies from './modules/studies.ts'

export default {
	'/articles/': articles,
	'/constructs/': constructs,
	'/courses/': courses,
	'/essays/': essays,
	'/studies/': studies,
}
