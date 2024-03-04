import { useTranslations } from 'next-intl'

import { MenuItem } from '@/types/types'

import { Button } from './Button'
import { LanguageButton } from './LanguageButton'
import { NavBar } from './NavBar'
import { SideNavBar } from './SideNavBar'

export function Menu() {
  const tMenu = useTranslations('Menu')
  const menuItems: MenuItem[] = [
    {
      title: tMenu('home.title'),
      path: tMenu('home.path'),
      icon: 'Home'
    },
    {
      title: tMenu('about.title'),
      path: tMenu('about.path'),
      icon: 'About'
    },
    {
      title: tMenu('projects.title'),
      path: tMenu('projects.path'),
      icon: 'Code'
    },
    {
      title: tMenu('contact.title'),
      path: tMenu('contact.path'),
      icon: 'Message'
    }
  ]

  return (
    <>
      <div className="py-10 flex px-5 gap-5 justify-between items-center select-none">
        <h1 className="text-3xl font-bold font-mono">B</h1>
        <NavBar menuItems={menuItems} />
        <div className="flex items-center gap-4">
          <Button text={tMenu('resume.title')} target="_blank" link="/resume" />
          <LanguageButton />
          <a href="#">Theme</a>
        </div>
      </div>
      <SideNavBar menuItems={menuItems} />
    </>
  )
}
