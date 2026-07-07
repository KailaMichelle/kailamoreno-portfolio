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

  const caseStudyList = caseStudies.filter((item) => item.status !== 'In progress')
  const currentIndex = caseStudyList.findIndex((item) => item.slug === slug)
  const nextStudy = caseStudyList[(currentIndex + 1) % caseStudyList.length]

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
            alt={`${study.title} hero presentation`}
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

      {study.sections && (
        <section className="case-story-section">
          <div className="case-story-grid">
            {study.sections.map((section) => (
              <article key={section.title}>
                {section.kicker && <p className="eyebrow">{section.kicker}</p>}
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      )}

      {study.flowImage && (
        <section className="case-artifact-section">
          <div className="case-section-heading">
            <p className="eyebrow">{study.flowEyebrow ?? 'User flow'}</p>
            <h2>{study.flowTitle ?? 'Mapping the path from selection to publish.'}</h2>
            {study.flowDescription && <p>{study.flowDescription}</p>}
          </div>

          <figure className="case-wide-artifact">
            <img src={study.flowImage} alt={`${study.title} user flow`} />
            {study.flowCaption && <figcaption>{study.flowCaption}</figcaption>}
          </figure>
        </section>
      )}

      {study.wireframeImage && (
        <section className="case-artifact-section">
          <div className="case-section-heading">
            <p className="eyebrow">{study.wireframeEyebrow ?? 'Wireframes'}</p>
            <h2>{study.wireframeTitle ?? 'Early structure before visual design.'}</h2>
            {study.wireframeDescription && <p>{study.wireframeDescription}</p>}
          </div>

          <figure className="case-wide-artifact">
            <img src={study.wireframeImage} alt={`${study.title} wireframes`} />
            {study.wireframeCaption && <figcaption>{study.wireframeCaption}</figcaption>}
          </figure>
        </section>
      )}

      {(study.existingDesktopImage || study.existingMobileImage) && (
        <section className="case-existing-section">
          <div className="case-section-heading">
            <p className="eyebrow">{study.existingEyebrow ?? 'Existing experience'}</p>
            <h2>{study.existingTitle ?? 'Understanding the starting point.'}</h2>
            {study.existingDescription && <p>{study.existingDescription}</p>}
          </div>

          <div className="case-existing-grid">
            {study.existingDesktopImage && (
              <figure>
                <img
                  src={study.existingDesktopImage}
                  alt={`${study.title} existing desktop experience`}
                />
                <figcaption>
                  {study.existingDesktopCaption ?? 'Existing desktop experience'}
                </figcaption>
              </figure>
            )}

            {study.existingMobileImage && (
              <figure>
                <img
                  src={study.existingMobileImage}
                  alt={`${study.title} existing mobile experience`}
                />
                <figcaption>
                  {study.existingMobileCaption ?? 'Existing mobile experience'}
                </figcaption>
              </figure>
            )}
          </div>
        </section>
      )}

      {(study.desktopImage || study.mobileImage || study.mobileImageTwo) && (
        <section className="case-device-section" aria-label={`${study.title} responsive screens`}>
          <div className="case-section-heading">
            <p className="eyebrow">{study.finalEyebrow ?? 'Final design'}</p>
            <h2>{study.finalTitle ?? 'A responsive experience across screen sizes.'}</h2>
            {study.finalDescription && <p>{study.finalDescription}</p>}
          </div>

          <div className="case-device-grid">
            {study.desktopImage && (
              <figure className="case-device-desktop">
                <img src={study.desktopImage} alt={`${study.title} desktop screen`} />
                <figcaption>
                  {study.desktopCaption ?? 'Desktop experience'}
                </figcaption>
              </figure>
            )}

            <div className="case-mobile-stack">
              {study.mobileImage && (
                <figure>
                  <img src={study.mobileImage} alt={`${study.title} mobile screen`} />
                  <figcaption>
                    {study.mobileCaption ?? 'Mobile experience'}
                  </figcaption>
                </figure>
              )}

              {study.mobileImageTwo && (
                <figure>
                  <img src={study.mobileImageTwo} alt={`${study.title} second mobile screen`} />
                  <figcaption>
                    {study.mobileTwoCaption ?? 'Additional mobile state'}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      )}

      {study.templateImage && (
        <section className="case-artifact-section">
          <div className="case-section-heading">
            <p className="eyebrow">{study.templateEyebrow ?? 'Template example'}</p>
            <h2>{study.templateTitle ?? 'A recreated template direction.'}</h2>
            {study.templateDescription && <p>{study.templateDescription}</p>}
          </div>

          <figure className="case-wide-artifact">
            <img src={study.templateImage} alt={`${study.title} recreated template`} />
            {study.templateCaption && <figcaption>{study.templateCaption}</figcaption>}
          </figure>
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
                <span>{artifact.label}</span>
                <h3>{artifact.title}</h3>
                <p>{artifact.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="next-case">
        <p>Next project</p>
        <Link to={`/work/${nextStudy.slug}`}>{nextStudy.title} →</Link>
      </section>
    </main>
  )
}
