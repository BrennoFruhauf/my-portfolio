import { HTMLAttributeAnchorTarget } from 'react'

import LinkNext from 'next/link'

import { isPathname, Link, Pathname } from '@/navigation'

type Props = {
  text: string
  link: Pathname | string
  size?: 'small' | 'medium' | 'large'
  target?: HTMLAttributeAnchorTarget
}

export function Button({
  text,
  link,
  target = '_self',
  size = 'medium'
}: Props) {
  const buttonStyle = {
    base: 'inline-block select-none border-2 w-max rounded transition-all duration-500 hover:shadow-primary-500/30 hover:shadow-md relative bg-transparent border-neutral-900 dark:border-neutral-50 dark:hover:border-primary-500 overflow-hidden hover:text-primary-50 hover:border-primary-500 before:content-[""] before:absolute before:top-full before:left-full before:bg-primary-500 before:-z-10 before:h-40 before:w-[150%] before:rounded-full before:transition-all before:duration-700 hover:before:-top-8 hover:before:-left-8 active:scale-90',
    size: {
      small: 'py-1 px-4 text-sm',
      medium: 'py-2 px-6 text-base',
      large: 'py-3 px-8 text-lg'
    }
  }

  if (!isPathname(link))
    return (
      <LinkNext
        target={target}
        href={link}
        className={`${buttonStyle.base} ${buttonStyle.size[size]}`}
      >
        {text}
      </LinkNext>
    )

  return (
    <Link
      target={target}
      href={link}
      className={`${buttonStyle.base} ${buttonStyle.size[size]}`}
    >
      {text}
    </Link>
  )
}
