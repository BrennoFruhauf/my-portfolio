'use client'

import { PropsWithChildren } from 'react'

import { useScroll } from '@/hooks/useScroll'

type Props = PropsWithChildren

export function NavScroll(props: Props) {
  const { children } = props
  const { isPageTop, scrollDirection } = useScroll()
  const isMenuHidden = !isPageTop && scrollDirection === 'down'

  return (
    <div
      className={`${isPageTop ? 'py-10 pb-5' : 'py-6 shadow-md lg:shadow-none'} ${isMenuHidden ? '-translate-y-36' : ''} fixed backdrop-blur-md dark:bg-neutral-900/90 bg-neutral-50/90 lg:absolute px-7 md:px-10 lg:px-12 gap-5 flex justify-between items-center select-none w-full z-[100] transition-all duration-300`}
    >
      {children}
    </div>
  )
}
