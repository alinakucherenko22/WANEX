import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(element)
      }
    }, { threshold: 0.15, ...options })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
