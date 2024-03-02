import { HTMLAttributeAnchorTarget } from 'react'

import Link from 'next/link'

import { Icon } from '@/types/types'

import * as icons from '../../public/index'

interface Props {
  name: Icon
  color?: string
  size?: number
  href: string
  target?: HTMLAttributeAnchorTarget
  tooltipDirection: 'left' | 'right'
}

export function IconButton({
  name,
  color = 'fill-neutral-900',
  href,
  size = 24,
  target = '_self',
  tooltipDirection
}: Props) {
  const Icon = icons[name]
  const tooltip = {
    left: 'right-full before:right-[-3px] mr-3',
    right: 'left-full before:left-[-3px] ml-3'
  }

  return (
    <div className="group flex relative select-none">
      <Link href={href} className="p-1" target={target} rel="noreferrer">
        <Icon
          className={`${color} transition duration-300 group-hover:fill-primary-500 group-hover:-translate-y-1`}
          size={size}
        />
        <span
          className={`${tooltip[tooltipDirection]} font-mono absolute z-50 invisible opacity-0 rounded transition duration-300 top-1/2 -translate-y-1/2 text-neutral-50 text-xs py-1 px-2 bg-neutral-900 before:absolute before:content-[''] before:h-2 before:w-2 before:bg-neutral-900 before:top-1/2 before:-translate-y-1/2 before:rotate-45 whitespace-nowrap group-hover:transition group-hover:duration-300 group-hover:visible group-hover:translate-y-[calc(-50%-0.25rem)] group-hover:opacity-100`}
        >
          {name}
        </span>
      </Link>
    </div>
  )
}
