import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { IMetaData } from '@/types/metadata'

export async function generateMetadata({
  params
}: IMetaData): Promise<Metadata> {
  const locale = params.locale
  const t = await getTranslations({ locale, namespace: 'Home.metadata' })
  return {
    title: t('title', { name: 'Brenno Fruhauf' }),
    description: t('description')
  }
}

export default function Home() {
  return ''
}
