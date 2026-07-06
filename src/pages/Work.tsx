import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

export default function Work() {
  const publicStudies = caseStudies.filter((study) => study.status !== 'In progress')
  const inProgressStudies = caseStudies.filter((study) => study.status === 'In progress')

  return (
    <main className="work-page">
      <p className="small-label">Selected work</p>
      <h1>Selected product work.</h1>

      <div className="work-index-list">
        {publicStudies.map((study) => (
          <Link key={study.slug} to={`/work/${study.slug}`} className="work-index-item">
            <span>{study.status}</span>
            <strong>{study.title}</strong>
            <p>{study.description}</p>
          </Link>
        ))}

        {inProgressStudies.map((study) => (
          <article key={study.slug} className="work-index-item work-index-item-disabled">
            <span>{study.status}</span>
            <strong>{study.title}</strong>
            <p>{study.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
