import '../globals.css'

import { useLocale } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'

import { i18n } from '@/config/i18n.config'
import { ActiveMenuItemProvider } from '@/hooks/useActiveMenuItem'
import { Locale } from '@/types/i18n'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto-sans'
})

const robotoMono = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto-mono'
})

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

interface IRootLayout {
  children: React.ReactNode
  params: { locale: Locale }
}

export default function RootLayout({
  children,
  params
}: Readonly<IRootLayout>) {
  const locale = useLocale()
  unstable_setRequestLocale(params.locale)

  if (params.locale !== locale) notFound()

  return (
    <html lang={params.locale}>
      <body className={`${roboto.className} ${robotoMono.variable}`}>
        <ActiveMenuItemProvider>{children}</ActiveMenuItemProvider>
      </body>
    </html>
  )
}
