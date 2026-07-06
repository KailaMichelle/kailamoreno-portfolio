import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { archiveProjects, experienceTags } from '../data/projects'

function ProductThumbnail({ image, title }: { image?: string; title: string }) {
  if (!image) return null

  return <img className="product-thumbnail" src={image} alt={title} loading="lazy" />
}

function WorkSection({
  slug,
  title,
  description,
  status,
  image,
  isInProgress,
}: {
  slug: string
  title: string
  description: string
  status: string
  image?: string
  isInProgress?: boolean
}) {
  if (isInProgress) {
    return (
      <section className="feature-section feature-section-compact">
        <div className="in-progress-card">
          <p>{status}</p>
          <h2>{title}</h2>
          <span>{description}</span>
          <small>In progress</small>
        </div>
      </section>
    )
  }

  return (
    <section className="feature-section">
      <Link to={`/work/${slug}`} className="feature-media" aria-label={`View ${title}`}>
        <ProductThumbnail image={image} title={title} />
      </Link>

      <div className="feature-copy">
        <p>{status}</p>
        <h2>{title}</h2>
        <span>{description}</span>
        <Link to={`/work/${slug}`} className="text-link">
          View project
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  const featuredStudies = caseStudies.filter((study) => study.featured)

  return (
    <>
      <section className="home-hero">
        <div className="hero-title">
          <h1>Designing thoughtful digital products.</h1>
          <p>UX Engineer &amp; Product Designer</p>
        </div>

        <div className="hero-meta" aria-label="Quick details">
          <span>Los Angeles, CA</span>
          <span>Currently @ BloomNation</span>
          <span>Open to opportunities</span>
          <a href="#work" aria-label="Scroll to selected work">
            ↓
          </a>
        </div>
      </section>

      <section id="work" className="selected-work" aria-label="Selected work">
        <p className="section-kicker">Selected Work</p>

        {featuredStudies.map((study) => (
          <WorkSection
            key={study.slug}
            slug={study.slug}
            title={study.title}
            description={study.description}
            status={study.status}
            image={study.thumbnailImage}
            isInProgress={study.status === 'In progress'}
          />
        ))}
      </section>

      <section className="earlier-projects" aria-label="Earlier projects">
        <div className="earlier-projects-heading">
          <p className="section-kicker">Earlier Projects</p>
          <h2>Additional product builds.</h2>
          <p>Selected work from my software engineering program that helped build my foundation in full-stack development and product thinking.</p>
        </div>

        <div className="earlier-projects-grid">
          {archiveProjects.map((project) => (
            <article className="earlier-project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              <div>
                <h3>{project.title}</h3>
                <p>{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-strip" aria-label="Additional experience">
        <p>Additional professional work available upon request.</p>
        <div>
          {experienceTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>
    </>
  )
}
