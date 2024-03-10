import { useEffect, useState } from 'react'

export function useNav() {
  const breakpointOnMobileNav = 1024
  const [isActiveSideBar, setIsActiveSideBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let lastPageWidth = window.innerWidth

    const handleWidthResize = () => {
      const currentWidth = window.innerWidth

      if (currentWidth !== lastPageWidth && isOpen) {
        setIsOpen(false)
        lastPageWidth = currentWidth
      }
    }

    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    window.addEventListener('resize', handleWidthResize)
    return () => window.removeEventListener('resize', handleWidthResize)
  }, [isOpen])

  useEffect(() => {
    const menuHeight = 124
    const handleSideMenu = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > menuHeight && !isActiveSideBar)
        setIsActiveSideBar(true)
      else if (scrollPosition < menuHeight && isActiveSideBar)
        setIsActiveSideBar(false)
    }

    handleSideMenu()
    window.addEventListener('scroll', handleSideMenu)
    return () => window.removeEventListener('scroll', handleSideMenu)
  }, [isActiveSideBar])

  const handleToggleView = () => setIsOpen(!isOpen)
  const handleCloseOnClick = () => {
    if (window.innerWidth < breakpointOnMobileNav) setIsOpen(false)
  }

  return { isOpen, isActiveSideBar, handleCloseOnClick, handleToggleView }
}
