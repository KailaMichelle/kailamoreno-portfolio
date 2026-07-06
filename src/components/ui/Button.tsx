import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium no-underline transition'

  const styles =
    variant === 'primary'
      ? 'bg-black !text-white visited:!text-white hover:opacity-90'
      : 'border border-black/12 bg-transparent text-black/80 hover:border-black/25 hover:text-black'

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  )
}
