import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Language } from './Icon'

export function LanguageButton() {
  const pathName = usePathname()
  const path = pathName.includes('pt-BR') ? 'en-US' : 'pt-BR'
  return (
    <Link
      className="flex gap-2 transition-all hover:fill-primary-500 hover:text-primary-500 active:scale-90"
      href={`/${path}`}
    >
      <Language size={20} />
      <span>{path}</span>
    </Link>
  )
}
