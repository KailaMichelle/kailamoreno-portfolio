import { NavLink } from 'react-router-dom'
import Container from '../ui/Container'

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

export default function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <NavLink to="/" className="wordmark" aria-label="Kaila Moreno home">
          Kaila Moreno
        </NavLink>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}
