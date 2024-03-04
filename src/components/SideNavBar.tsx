'use client'

import { useEffect, useState } from 'react'

import { useActiveMenuItem } from '@/hooks/useActiveMenuItem'
import { MenuItem } from '@/types/types'

import { IconButton } from './IconButton'

type Props = {
  menuItems: MenuItem[]
}

export function SideNavBar({ menuItems }: Props) {
  const activeItem = useActiveMenuItem()
  const [isActiveSideBar, setIsActiveSideBar] = useState(false)

  useEffect(() => {
    const handleSideMenu = () => {
      const menuHeight = 124
      const scrollPosition = window.scrollY

      if (scrollPosition >= menuHeight) setIsActiveSideBar(true)
      else setIsActiveSideBar(false)
    }

    handleSideMenu()
    window.addEventListener('scroll', handleSideMenu)
    return () => window.removeEventListener('scroll', handleSideMenu)
  }, [])
  return (
    <nav
      className={`sideBarMask fixed left-0 top-1/2  flex flex-col gap-5 px-2 py-3 text-neutral-50 transition-transform ${isActiveSideBar ? '-translate-y-1/2 translate-x-0' : '-translate-y-1/2 -translate-x-14'}`}
    >
      {menuItems.map((item, index) => (
        <IconButton
          key={item.path + index}
          name={item.icon}
          href={`#${item.path}`}
          title={item.title}
          tooltipDirection="right"
          size={32}
          color={`${activeItem === item.path ? 'fill-primary-500' : 'fill-neutral-50'}`}
        />
      ))}
    </nav>
  )
}
