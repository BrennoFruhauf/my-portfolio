type Props = {
  text: string
  style?: 'fill' | 'link'
}

export function Tag(props: Props) {
  const { text, style = 'fill' } = props

  const styles = {
    fill: 'bg-neutral-200 text-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 rounded-lg',
    link: 'text-neutral-600 dark:text-neutral-400'
  }
  return (
    <span
      className={`select-none py-1 px-2 font-medium font-mono ${styles[style]}`}
    >
      {text}
    </span>
  )
}
