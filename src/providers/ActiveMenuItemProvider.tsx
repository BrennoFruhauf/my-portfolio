import { ReactNode, useEffect, useState } from 'react'

import { useLocale } from 'next-intl'

import { ActiveMenuItemContext } from '@/contexts/ActiveMenuItemContext'

type Props = {
  children: ReactNode
}

export function ActiveMenuItemProvider({ children }: Props) {
  const locale = useLocale()

  const initialState = locale === 'pt-BR' ? 'inicio' : 'home'
  const [activeMenuItem, setActiveMenuItem] = useState(initialState)

  useEffect(() => {
    const lastActiveMenuItem = activeMenuItem
    const sections = document.querySelectorAll('section')

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      let currentActiveMenuItem = ''

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height)
          currentActiveMenuItem = section.id
      }, currentActiveMenuItem)

      if (currentActiveMenuItem !== lastActiveMenuItem)
        setActiveMenuItem(currentActiveMenuItem)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeMenuItem])

  return (
    <ActiveMenuItemContext.Provider value={activeMenuItem}>
      {children}
    </ActiveMenuItemContext.Provider>
  )
}
