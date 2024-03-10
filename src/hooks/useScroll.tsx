import { useEffect, useState } from 'react'

export function useScroll() {
  const [isPageTop, setPageTop] = useState(true)
  const [scrollDirection, setScrollDirection] = useState('')

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDirection])

  useEffect(() => {
    const handleOnTop = () => {
      const viewTopScroll = window.scrollY

      if (viewTopScroll <= 50 && !isPageTop) setPageTop(true)
      else if (viewTopScroll > 50 && isPageTop) setPageTop(false)
    }

    window.addEventListener('scroll', handleOnTop)
    return () => window.removeEventListener('scroll', handleOnTop)
  }, [isPageTop])

  return { isPageTop, scrollDirection }
}
