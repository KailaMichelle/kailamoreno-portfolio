import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY
    let raf = 0

    const updatePosition = (event: PointerEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18
      currentY += (mouseY - currentY) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      raf = requestAnimationFrame(animate)
    }

    const setCursorState = (target: EventTarget | null) => {
      const dot = dotRef.current
      if (!dot || !(target instanceof Element)) return

      const projectTarget = target.closest('[data-cursor="project"]')
      const linkTarget = target.closest('a, button, [data-cursor="hover"]')

      dot.classList.toggle('cursor-project', Boolean(projectTarget))
      dot.classList.toggle('cursor-link', !projectTarget && Boolean(linkTarget))
    }

    const handlePointerOver = (event: PointerEvent) => setCursorState(event.target)
    const handlePointerOut = (event: PointerEvent) => setCursorState(event.relatedTarget)

    window.addEventListener('pointermove', updatePosition)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', updatePosition)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
}
