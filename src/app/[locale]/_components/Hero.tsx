import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'

type Props = {
  id: string
}

export function Hero(props: Props) {
  const { id } = props
  const tMenu = useTranslations('Menu')
  const t = useTranslations('Home.data.hero')

  return (
    <section className="section flex flex-col justify-center" id={id}>
      <h1 className="flex flex-col">
        <span className="font-mono text-primary-500 font-normal text-smallheading">
          {t('title')}
        </span>
        <span className="text-heading font-extrabold leading-tight -indent-1">
          Brenno Fruhauf<span className="text-primary-500">.</span>
        </span>
      </h1>
      <h2 className="text-subheading font-medium -indent-0.5">
        <span>{t('subtitle')} </span>
        <span className="text-primary-500 font-bold">{t('stack')}</span>
      </h2>
      <p className="text-neutral-500 max-w-xl text-xl">{t('description')}</p>
      <div className="mt-10">
        <Button
          text={t('cta')}
          link={`#${tMenu('projects.path')}`}
          size="large"
        />
      </div>

      <div className="relative left-1/2 -translate-x-1/2 -bottom-[10dvh] w-5 h-8 border-[3px] border-primary-500 rounded-[50px] mb-4 before:content-[''] before:absolute before:bottom-[14px] before:right-1/2 before:translate-x-1/2 before:w-[3px] before:h-[0.3rem] before:ml-[-3px] before:bg-primary-500 before:rounded before:animate-scrolldown">
        <div className="pt-[6px] ml-[-9px] mt-6 w-8 flex flex-col items-center">
          <div className="relative border-0 border-r-[2px] border-b-[2px] inline-block w-[6px] h-[6px] rotate-45 border-primary-500 animate-pulse"></div>
          <div className="relative border-0 border-r-[2px] border-b-[2px] inline-block w-[6px] h-[6px] rotate-45 border-primary-500 animate-pulse delay-200"></div>
        </div>
      </div>
    </section>
  )
}
