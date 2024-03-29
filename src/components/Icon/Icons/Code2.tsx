import { IconProps } from '@/types/types'

export default function Code2({ size = 24, ...props }: IconProps) {
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
        d="M3.097 0A3.097 3.097 0 000 3.097v17.806A3.097 3.097 0 003.097 24h17.806A3.097 3.097 0 0024 20.903V3.097A3.097 3.097 0 0020.903 0H3.097zm7.169 9.002l-3.482 3.024 3.502 3.089a.898.898 0 01-1.177 1.356L4.343 12.4a.446.446 0 01-.104-.128.448.448 0 01.098-.562l.567-.484.488-.428 3.706-3.153a.894.894 0 011.168 1.356zm3.314 0l3.48 3.024-3.5 3.089a.898.898 0 001.176 1.356l4.766-4.07a.445.445 0 00.104-.128.448.448 0 00-.098-.562l-.567-.484-.488-.428-3.706-3.153a.894.894 0 00-1.167 1.356z"
      />
    </svg>
  )
}
