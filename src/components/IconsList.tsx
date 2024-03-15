import { Icon } from '@/types/types'

import { IconButton } from './IconButton'

type IconData = {
  name: Icon
  link: string
}

const data: IconData[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/BrennoFruhauf'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brennofruhauf/'
  },
  {
    name: 'Email',
    link: 'mailto:brennofruhauf@outlook.com'
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/5564992600577'
  }
]

export function IconsList() {
  return (
    <div className="fixed bottom-0 right-4 hidden md:flex flex-col gap-4 after:m-auto after:w-[2px] after:rounded-sm after:h-16 dark:after:bg-neutral-500 after:bg-neutral-900">
      {data.map((s) => (
        <IconButton
          key={s.name}
          name={s.name}
          href={s.link}
          target="_blank"
          tooltipDirection="left"
        />
      ))}
    </div>
  )
}
