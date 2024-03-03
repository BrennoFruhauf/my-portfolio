import { IconProps } from '@/types/types'

export default function Language({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      viewBox="0 0 24 23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.882 22.754a1.141 1.141 0 001.358-.65l1.016-2.371a.138.138 0 01.127-.084h5.323c.058 0 .11.036.13.09l.831 2.264a1.203 1.203 0 102.236-.887L18.875 9.348c-.335-.784-1.448-.78-1.777.007l-4.96 11.86a1.14 1.14 0 00.744 1.539zm6.811-5.705c.037.09-.03.19-.128.19h-3.167a.138.138 0 01-.127-.193l1.645-3.777a.138.138 0 01.254.004l1.523 3.776z"
      />
      <path d="M2.298 17.282c-.5.333-.678.996-.377 1.517.279.484.878.682 1.363.405 1.44-.822 3.476-2.366 5.473-4.658a21.615 21.615 0 002.187 2.053c.466.378 1.141.308 1.548-.134.494-.534.397-1.39-.16-1.858a22.954 22.954 0 01-2.056-1.972 27.16 27.16 0 003.845-7.589h1.963a1.137 1.137 0 000-2.273H9.712V1.671a1.171 1.171 0 00-2.342 0v1.102H1.137a1.137 1.137 0 100 2.273h10.642c-.356 1.28-1.36 3.474-3.004 5.81a23.657 23.657 0 01-2.344-3.703c-.294-.58-.993-.847-1.583-.571-.557.26-.815.907-.549 1.46A27.414 27.414 0 007.274 12.8c-1.362 1.61-3.022 3.186-4.976 4.482z" />
    </svg>
  )
}
