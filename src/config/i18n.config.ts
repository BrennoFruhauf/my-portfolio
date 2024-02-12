import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const defaultLocale = 'en-US'
export const langs = [defaultLocale, 'pt-BR'] as const

const locales = langs as unknown as string[]
export const i18n = { defaultLocale, locales, localeDetection: true }

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  return {
    messages: await import(`../dictionary/${locale}.json`)
  }
})
