import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>Let’s build something thoughtful.</p>
        <div>
          <a href="mailto:kaila.moreno@outlook.com">Email</a>
          <a href="https://www.linkedin.com/in/kailamoreno/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/kailamichelle" target="_blank" rel="noreferrer">GitHub</a>
          <a href="/resume">Resume</a>
        </div>
      </Container>
    </footer>
  )
}
