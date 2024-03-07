import '../globals.css'

import { Roboto, Roboto_Mono } from 'next/font/google'

import { i18n } from '@/config/i18n.config'
import { Providers } from '@/providers/Providers'
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
  return (
    <html suppressHydrationWarning lang={params.locale}>
      <body
        className={`${roboto.className} ${robotoMono.variable} bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
