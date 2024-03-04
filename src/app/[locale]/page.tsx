import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { IconsList } from '@/components/IconsList'
import { Menu } from '@/components/Menu'
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
  const tMenu = useTranslations('Menu')
  return (
    <>
      <Menu />
      <main className="h-[400dvh] flex flex-col gap-4">
        <section className="section" id={tMenu('home.path')}></section>
        <section className="section" id={tMenu('about.path')}></section>
        <section className="section" id={tMenu('projects.path')}></section>
        <section className="section" id={tMenu('contact.path')}></section>
      </main>
      <IconsList />
    </>
  )
}
