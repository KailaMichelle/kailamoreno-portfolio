import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <main className="simple-page">
        <p>Case study not found.</p>
        <Link to="/work">Back to work</Link>
      </main>
    )
  }

  if (study.status === 'In progress') {
    return <Navigate to="/" replace />
  }

  const caseStudyList = caseStudies.filter((item) => item.status !== 'In progress')
  const currentIndex = caseStudyList.findIndex((item) => item.slug === slug)
  const nextStudy = caseStudyList[(currentIndex + 1) % caseStudyList.length]

  return (
    <main className={`case-page ${study.accent ?? ''}`}>
      <Link to="/work" className="back-link">
        ← Work
      </Link>

      <section className="case-hero">
        <p className="eyebrow">{study.eyebrow}</p>
        <h1>{study.title}</h1>
        <p>{study.subtitle}</p>

        {study.liveUrl && (
          <a href={study.liveUrl} target="_blank" rel="noreferrer" className="case-link">
            View live experience →
          </a>
        )}
      </section>

      {study.heroImage && (
        <section className="case-image-section" aria-label={`${study.title} hero`}>
          <img
            src={study.heroImage}
            alt={`${study.title} final design`}
            className="case-hero-image"
          />
          {study.imageNote && <p className="case-image-note">{study.imageNote}</p>}
        </section>
      )}

      <section className="case-meta" aria-label="Project details">
        <Meta label="Role" value={study.role} />
        <Meta label="Scope" value={study.scope} />
        <Meta label="Team" value={study.team} />
        <Meta label="Outcome" value={study.outcome} />
      </section>

      {(study.existingDesktopImage || study.existingMobileImage) && (
        <section className="case-existing-section">
          <div className="case-section-heading">
            <p className="eyebrow">Existing experience</p>
            <h2>Location was buried in long-form pages.</h2>
            <p>
              The previous flow separated business details from geographic context, making
              comparison feel slower.
            </p>
          </div>

          <div className="case-existing-grid">
            {study.existingDesktopImage && (
              <figure>
                <img
                  src={study.existingDesktopImage}
                  alt={`${study.title} existing desktop experience`}
                />
                <figcaption>Existing desktop experience</figcaption>
              </figure>
            )}

            {study.existingMobileImage && (
              <figure>
                <img
                  src={study.existingMobileImage}
                  alt={`${study.title} existing mobile experience`}
                />
                <figcaption>Existing mobile experience</figcaption>
              </figure>
            )}
          </div>
        </section>
      )}

      {(study.desktopImage || study.mobileImage || study.mobileImageTwo) && (
        <section className="case-device-section" aria-label={`${study.title} responsive screens`}>
          <div className="case-section-heading">
            <p className="eyebrow">Final design</p>
            <h2>A map-first experience across screen sizes.</h2>
            <p>
              The final design keeps result details and location context close together, with
              mobile patterns tailored for smaller screens.
            </p>
          </div>

          <div className="case-device-grid">
            {study.desktopImage && (
              <figure className="case-device-desktop">
                <img src={study.desktopImage} alt={`${study.title} desktop screen`} />
                <figcaption>Desktop split view pairs results with map context.</figcaption>
              </figure>
            )}

            <div className="case-mobile-stack">
              {study.mobileImage && (
                <figure>
                  <img src={study.mobileImage} alt={`${study.title} mobile list view`} />
                  <figcaption>Mobile list view prioritizes quick scanning.</figcaption>
                </figure>
              )}

              {study.mobileImageTwo && (
                <figure>
                  <img src={study.mobileImageTwo} alt={`${study.title} mobile map view`} />
                  <figcaption>Mobile map view keeps nearby options visible.</figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      )}

      {study.artifacts && (
        <section className="case-highlights" aria-label="Key improvements">
          <div className="case-section-heading case-highlights-heading">
            <p className="eyebrow">Key improvements</p>
            <h2>What changed</h2>
          </div>

          <div className="case-highlights-grid">
            {study.artifacts.map((artifact) => (
              <article key={artifact.title}>
                <h3>{artifact.title}</h3>
                <p>{artifact.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="next-case">
        <p>Next</p>
        <Link to="/work">Back to selected work →</Link>
      </section>
    </main>
  )
}
