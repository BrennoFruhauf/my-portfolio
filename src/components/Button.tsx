import { HTMLAttributeAnchorTarget } from 'react'

import { Link, Pathname } from '@/navigation'

interface Props {
  text: string
  link: Pathname
  target?: HTMLAttributeAnchorTarget
}

export function Button({ text, link, target = '_self' }: Props) {
  return (
    <Link
      target={target}
      href={link}
      className={`inline-block select-none border-2 rounded px-5 py-2 uppercase transition-all duration-500 hover:shadow-primary-500/30 hover:shadow-md relative bg-transparent border-neutral-900 dark:border-neutral-50 dark:hover:border-primary-500 overflow-hidden hover:text-primary-50 hover:border-primary-500 before:content-[''] before:absolute before:top-full before:left-full before:bg-primary-500 before:-z-10 before:h-40 before:w-52 before:rounded-full before:transition-all before:duration-700 hover:before:-top-8 hover:before:-left-8 active:scale-90`}
    >
      {text}
    </Link>
  )
}
