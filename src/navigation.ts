import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

import { i18n } from './config/i18n.config'

const { locales, pathnames } = i18n
const localePrefix = 'always'

export type Pathname = keyof typeof pathnames

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
