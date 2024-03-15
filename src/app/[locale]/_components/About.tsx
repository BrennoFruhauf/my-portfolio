import { useTranslations } from 'next-intl'

import { Code, Code2 } from '@/components/Icon'
import { Tag } from '@/components/Tag'

type Props = {
  id: string
}

export function About(props: Props) {
  const t = useTranslations('Home.data.about')
  const { id } = props

  return (
    <section className="section flex flex-col justify-center" id={id}>
      <h1 className="text-heading leading-[1.5] font-extrabold">
        {t('title')}
      </h1>
      <div className="flex flex-wrap gap-8 grid-cols-[3fr_1fr]">
        <div className="flex flex-[3_1_300px] flex-col text-lg sm:text-xl gap-4 text-neutral-500 dark:text-neutral-400">
          <p>{t('first-paragraph')}</p>

          <p>{t('second-paragraph')}</p>

          <p>{t('third-paragraph')}</p>

          <p>{t('fourth-paragraph')}</p>
        </div>

        <div className="flex flex-col flex-[1_1_200px] gap-4">
          <div className="flex gap-2 items-center">
            <Code className="fill-primary-500" size={24} />
            <h2 className="text-xl font-bold text-nowrap">{t('main-tech')}</h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {[
              'React',
              'Next',
              'Express',
              'Tailwind',
              'Prisma',
              'Java',
              'Spring',
              'Git'
            ].map((tech, index) => (
              <li key={index}>
                <Tag text={tech} />
              </li>
            ))}
          </ul>

          <div className="flex gap-2 items-center">
            <Code2 className="fill-primary-500" size={24} />
            <h2 className="text-xl font-bold text-nowrap">
              {t('secondary-tech')}
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {['Angular', 'React Native', 'PHP', 'C & C++'].map(
              (tech, index) => (
                <li key={index}>
                  <Tag text={tech} />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
