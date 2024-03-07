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
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height)
          setActiveMenuItem(section.id)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ActiveMenuItemContext.Provider value={activeMenuItem}>
      {children}
    </ActiveMenuItemContext.Provider>
  )
}
