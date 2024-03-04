'use client'

import Link from 'next/link'

import { useActiveMenuItem } from '@/hooks/useActiveMenuItem'
import { MenuItem } from '@/types/types'

type Props = {
  menuItems: MenuItem[]
}

export function NavBar({ menuItems }: Props) {
  const activeItem = useActiveMenuItem()

  return (
    <nav className="flex gap-5 absolute left-1/2 -translate-x-1/2 font-mono">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          href={`#${item.path}`}
          className={`p-2 hover:text-primary-500 transition-all duration-300 ${activeItem === item.path ? 'text-primary-500' : ''}`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
