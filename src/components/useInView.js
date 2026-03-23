import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Fallback for older browsers/environments without IntersectionObserver.
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    let observer
    try {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(element)
        }
      }, { threshold: 0.15, ...options })

      observer.observe(element)
      return () => observer.disconnect()
    } catch {
      setInView(true)
    }
  }, [])

  return [ref, inView]
}
