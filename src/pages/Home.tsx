import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

function ProductThumbnail({
  image,
  title,
}: {
  image?: string
  title: string
}) {
  if (!image) return null

  return (
    <img
      className="product-thumbnail"
      src={image}
      alt={title}
      loading="lazy"
    />
  )
}

function ProductHeader({
  role,
  order,
}: {
  role: string
  order: number
}) {
  return (
    <div className="product-header">
      <span className="product-order">
        {String(order).padStart(2, '0')}
      </span>

      <span className="product-role">{role}</span>
    </div>
  )
}

function WorkSection({
  slug,
  title,
  description,
  status,
  image,
  role,
  order,
}: {
  slug: string
  title: string
  description: string
  status: string
  image?: string
  role: string
  order: number
}) {
  return (
    <section className="feature-section">
      <div className="feature-media-wrap">
        <ProductHeader role={role} order={order} />

        <Link
          to={`/work/${slug}`}
          className="feature-media"
          aria-label={`View ${title}`}
        >
          <ProductThumbnail image={image} title={title} />
        </Link>
      </div>

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
          <p>Product Designer · UX Engineer</p>
        </div>

        <div className="hero-meta" aria-label="Quick details">
          <span>Los Angeles, CA</span>
          <span>Currently @ Promenade</span>
          <span>Open to opportunities</span>

          <a href="#work" aria-label="Scroll to selected work">
            ↓
          </a>
        </div>
      </section>

      <section
        id="work"
        className="selected-work"
        aria-label="Selected work"
      >
        <p className="section-kicker">Selected Work</p>

        {featuredStudies.map((study, index) => (
          <WorkSection
            key={study.slug}
            slug={study.slug}
            title={study.title}
            description={study.description}
            status={study.status}
            image={study.thumbnailImage}
            role={study.role}
            order={index + 1}
          />
        ))}
      </section>

      <section
        className="capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="capabilities-heading">
          <p className="section-kicker">Capabilities</p>

          <h2 id="capabilities-title">
            Design thinking with technical depth.
          </h2>
        </div>

        <div className="capabilities-list">
          <div className="capability">
            <span>01</span>

            <div>
              <h3>Product Design</h3>
              <p>
                Research · User flows · Interaction design · Prototyping
              </p>
            </div>
          </div>

          <div className="capability">
            <span>02</span>

            <div>
              <h3>Design Systems</h3>
              <p>
                Reusable patterns · Components · Responsive systems ·
                Accessibility
              </p>
            </div>
          </div>

          <div className="capability">
            <span>03</span>

            <div>
              <h3>UX Engineering</h3>
              <p>
                React · TypeScript · Front-end collaboration · AI-assisted
                development
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
