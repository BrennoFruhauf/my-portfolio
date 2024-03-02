import { IconProps } from '@/types/types'

export default function Code({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.903 0H3.097A3.097 3.097 0 000 3.097v17.806A3.097 3.097 0 003.097 24h17.806A3.097 3.097 0 0024 20.903V3.097A3.097 3.097 0 0020.903 0zM9.598 12.267L5.983 9.125a.929.929 0 011.212-1.407l3.842 3.28.007-.007.507.446.589.502c.175.15.208.396.102.584a.466.466 0 01-.108.133l-4.95 4.226a.932.932 0 01-1.222-1.408l3.636-3.207zm3.873 4.84a.93.93 0 110-1.858h4.335a.929.929 0 110 1.858h-4.335z"
      />
    </svg>
  )
}
