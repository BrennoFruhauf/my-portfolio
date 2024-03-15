import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { IconsList } from '@/components/IconsList'
import { Menu } from '@/components/Menu'
import { IMetaData } from '@/types/metadata'

import { About } from './_components/About'
import { Hero } from './_components/Hero'

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
      <main className="mx-auto px-6 sm:px-12 md:px-24 xl:px-36 max-w-[1600px]">
        <Hero id={tMenu('home.path')} />
        <About id={tMenu('about.path')}></About>
        <section className="section" id={tMenu('projects.path')}></section>
        <section className="section" id={tMenu('contact.path')}></section>
      </main>
      <IconsList />
    </>
  )
}
