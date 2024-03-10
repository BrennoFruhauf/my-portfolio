import { useTranslations } from 'next-intl'

import { Link } from '@/navigation'
import { MenuItem } from '@/types/types'

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
      <div className="py-10 flex px-12 gap-5 justify-between items-center select-none absolute w-full">
        <h1 className="text-5xl font-bold font-mono transition-all duration-300 active:scale-90">
          <Link className="relative leading-none" href="/">
            B
            <span className="text-primary-500 absolute leading-none left-full bottom-2 -indent-4">
              .
            </span>
          </Link>
        </h1>
        <NavBar menuItems={menuItems} resume={tMenu('resume.title')} />
      </div>
      <SideNavBar menuItems={menuItems} />
    </>
  )
}
