import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import CursorDot from './CursorDot'

type SiteShellProps = {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <CursorDot />
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
