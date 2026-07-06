import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import CaseStudy from '../pages/CaseStudy'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Resume from '../pages/Resume'
import Work from '../pages/Work'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:slug', element: <CaseStudy /> },
      { path: 'about', element: <About /> },
      { path: 'resume', element: <Resume /> },
    ],
  },
])
