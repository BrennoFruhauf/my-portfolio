import { IconProps } from '@/types/types'

export default function Email({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" />
    </svg>
  )
}
