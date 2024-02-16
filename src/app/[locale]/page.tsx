import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import IconButton from '@/components/IconButton'
import IconsList from '@/components/IconsList'
import { IMetaData } from '@/types/metadata'
import { Icon } from '@/types/types'

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

// Temporary Data
interface TempData {
  social: {
    name: Icon
    link: string
  }[]
}

const tempData: TempData = {
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/BrennoFruhauf'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/brennofruhauf/'
    },
    {
      name: 'Email',
      link: 'mailto:brennofruhauf@outlook.com'
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/5564992600577'
    }
  ]
}

export default function Index() {
  return (
    <>
      <IconsList>
        {tempData.social.map((s) => (
          <IconButton
            key={s.name}
            name={s.name}
            link={s.link}
            tooltipDirection="left"
          />
        ))}
      </IconsList>
    </>
  )
}
