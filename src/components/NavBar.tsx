'use client'

import Link from 'next/link'

import { useActiveMenuItem } from '@/hooks/useActiveMenuItem'
import { useNav } from '@/hooks/useNav'
import { MenuItem } from '@/types/types'

import { Button } from './Button'
import { Hamburguer } from './Hamburguer'
import { LanguageButton } from './LanguageButton'
import { ThemeSwitch } from './ThemeSwitch'

type Props = {
  menuItems: MenuItem[]
  resume: string
}

export function NavBar({ menuItems, resume }: Readonly<Props>) {
  const activeItem = useActiveMenuItem()
  const { isOpen, handleCloseOnClick, handleToggleView } = useNav()

  return (
    <nav
      className={`flex transition-colors duration-500 gap-10 flex-col items-center justify-between z-50 font-mono ${isOpen ? 'py-10 px-5 fixed top-0 left-0 bg-neutral-50 dark:bg-neutral-900 w-full min-h-dvh' : ''} lg:relative lg:flex-row lg:w-full lg:justify-end`}
    >
      <div className="flex self-end lg:hidden">
        <Hamburguer isCheck={isOpen} onclick={handleToggleView} />
      </div>

      <div
        className={`flex-col gap-10 items-center ${isOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row lg:absolute lg:right-[40%] lg:gap-8`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={`#${item.path}`}
            className={`p-2 hover:text-primary-500 hover:-translate-y-0.5 active:scale-90 transition-all duration-300 ${activeItem === item.path ? 'text-primary-500' : ''}`}
            onClick={handleCloseOnClick}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div
        className={`flex flex-col min-[380px]:flex-row items-center gap-5 mb-auto ${isOpen ? 'flex' : 'hidden'} lg:flex`}
      >
        <Button text={resume} target="_blank" link="/resume" />
        <LanguageButton />
        <ThemeSwitch />
      </div>
    </nav>
  )
}
