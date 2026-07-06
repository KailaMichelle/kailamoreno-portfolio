import { Outlet } from 'react-router-dom'
import SiteShell from './components/layout/SiteShell'
import ScrollToTop from './app/ScrollToTop'

export default function App() {
  return (
    <SiteShell>
      <ScrollToTop />
      <Outlet />
    </SiteShell>
  )
}
