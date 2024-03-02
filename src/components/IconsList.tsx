import { ReactNode } from 'react'

type Props = {
  children: ReactNode | ReactNode[]
}

export function IconsList({ children }: Props) {
  return (
    <div className="fixed bottom-0 right-4 flex flex-col gap-4 after:m-auto after:w-[2px] after:rounded-sm after:h-16 after:bg-neutral-900">
      {children}
    </div>
  )
}
