import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'

export default function NotFound() {
  return (
    <Section className="pt-14 md:pt-20">
      <div className="max-w-3xl">
        <p className="mb-6 text-xs uppercase tracking-[0.22em] text-black/45">
          404
        </p>

        <h1 className="text-5xl leading-[0.98] tracking-[-0.05em] md:text-7xl">
          Page not found
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
          The page you’re looking for doesn’t exist or may have moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex text-sm text-black underline underline-offset-4"
        >
          Back to home
        </Link>
      </div>
    </Section>
  )
}
