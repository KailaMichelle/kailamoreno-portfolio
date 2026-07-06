import resumePdf from '../assets/kaila-moreno-resume.pdf'

export default function Resume() {
  return (
    <main className="simple-page resume-page">
      <p className="eyebrow">Resume</p>

      <h1>Product design with an engineering-aware point of view.</h1>

      <p className="resume-intro">
        A PDF version of my resume is available to view or download.
      </p>

      <div className="resume-actions">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          View PDF
        </a>

        <a
          href={resumePdf}
          download="Kaila-Moreno-Resume.pdf"
          className="button secondary"
        >
          Download PDF
        </a>
      </div>

      {/* <div className="resume-grid">
        <section>
          <h2>Focus</h2>
          <p>
            Product design, UX systems, workflow design, prototyping, and
            responsive interface design.
          </p>
        </section>

        <section>
          <h2>Tools</h2>
          <p>
            Figma, React, TypeScript, HTML, CSS, Tailwind, Jira, Confluence, and
            AI-assisted prototyping.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            <a href="mailto:kaila.moreno@outlook.com">
              kaila.moreno@outlook.com
            </a>
          </p>
        </section>
      </div> */}
    </main>
  )
}
