import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { i18n } from '@/config/i18n.config'

const intlMiddleware = createIntlMiddleware(i18n)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const regex = new RegExp(`^/(${i18n.locales.join('|')})(/.*)?$`)

  const shouldHandle = pathname === '/' || regex.test(request.nextUrl.pathname)

  if (!shouldHandle) return

  return intlMiddleware(request)
}
