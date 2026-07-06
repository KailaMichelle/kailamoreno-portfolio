import aboutImage from '../assets/kaila.jpg'

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <p className="small-label">About</p>
          <h1>I like making complicated products feel calmer.</h1>
        </div>
        <div className="about-photo">
          <img src={aboutImage}/>
        </div>
      </section>

      <section className="about-copy">
        <p>
          My background blends communication design, product design, and front-end product experience.
        </p>
        <p>
          I care about hierarchy, states, spacing, responsiveness, and the handoff between what looks good and what can actually ship.
        </p>
        <p>
          I’m especially drawn to product work that needs structure: marketplaces, design systems, workflows, and tools that need to feel simple without becoming shallow.
        </p>
      </section>
    </main>
  )
}
