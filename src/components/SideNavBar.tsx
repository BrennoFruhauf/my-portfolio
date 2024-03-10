'use client'

import { useActiveMenuItem } from '@/hooks/useActiveMenuItem'
import { useNav } from '@/hooks/useNav'
import { MenuItem } from '@/types/types'

import { IconButton } from './IconButton'

type Props = {
  menuItems: MenuItem[]
}

export function SideNavBar({ menuItems }: Props) {
  const activeItem = useActiveMenuItem()
  const { isActiveSideBar } = useNav()

  return (
    <nav
      className={`sideBarMask fixed left-0 top-1/2 lg:flex hidden flex-col gap-5 px-2 py-3 text-neutral-50 transition-transform ${isActiveSideBar ? '-translate-y-1/2 translate-x-0' : '-translate-y-1/2 -translate-x-14'}`}
    >
      {menuItems.map((item, index) => (
        <IconButton
          key={item.path + index}
          name={item.icon}
          href={`#${item.path}`}
          title={item.title}
          tooltipDirection="right"
          size={32}
          color="fill-neutral-50"
          active={activeItem === item.path}
        />
      ))}
    </nav>
  )
}
