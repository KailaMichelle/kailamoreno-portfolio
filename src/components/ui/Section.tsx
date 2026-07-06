import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({
  children,
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 md:px-10 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
