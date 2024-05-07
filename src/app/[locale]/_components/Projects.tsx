import { useTranslations } from 'next-intl'

import { ProjectCard } from '../../../components/ProjectCard'

type Props = {
  id: string
}

export function Projects(props: Props) {
  const t = useTranslations('Home.data.projects')
  const { id } = props

  return (
    <section className="section" id={id}>
      <h1 className="text-heading leading-[1.5] font-extrabold text-center">
        {t('title')}
      </h1>
      <h2 className="text-lg sm:text-xl gap-4 text-center text-neutral-500 dark:text-neutral-400">
        {t('description')}
      </h2>

      <ul>
        <li>
          <ProjectCard />
        </li>
      </ul>
    </section>
  )
}
