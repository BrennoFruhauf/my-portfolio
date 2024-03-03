import { getRequestConfig } from 'next-intl/server'
import { redirect } from 'next/navigation'

const defaultLocale = 'en-US'
export const langs = [defaultLocale, 'pt-BR'] as const

const locales = langs as unknown as string[]
const pathnames = {
  '/': '/',
  '/resume': {
    'en-US': '/resume',
    'pt-BR': '/curriculo'
  }
}

export const i18n = {
  defaultLocale,
  locales,
  pathnames,
  localeDetection: true
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) redirect('/')

  return {
    messages: await import(`../dictionary/${locale}.json`)
  }
})
