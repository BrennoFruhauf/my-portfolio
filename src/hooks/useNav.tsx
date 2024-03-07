import { useEffect, useState } from 'react'

export function useNav() {
  const breakpointOnMobileNav = 1024
  const [pageWidth, setPageWidth] = useState(0)
  const [isActiveSideBar, setIsActiveSideBar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseOnClick = () => {
    if (pageWidth < breakpointOnMobileNav) setIsOpen(false)
  }

  const handleToggleView = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const setCurrentWidth = () => setPageWidth(window.innerWidth)

    const handleSideMenu = () => {
      const menuHeight = 124
      const scrollPosition = window.scrollY

      if (scrollPosition >= menuHeight) setIsActiveSideBar(true)
      else setIsActiveSideBar(false)
    }

    handleSideMenu()
    window.addEventListener('resize', setCurrentWidth)
    window.addEventListener('scroll', handleSideMenu)
    return () => {
      window.removeEventListener('resize', setCurrentWidth)
      window.removeEventListener('scroll', handleSideMenu)
    }
  }, [])

  useEffect(() => {
    if (isOpen && pageWidth >= breakpointOnMobileNav) setIsOpen(false)
  }, [isOpen, pageWidth, breakpointOnMobileNav])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isOpen])

  return { isOpen, isActiveSideBar, handleCloseOnClick, handleToggleView }
}
