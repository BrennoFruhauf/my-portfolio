type Props = {
  onclick: () => void
  isCheck: boolean
}

export function Hamburguer({ onclick, isCheck }: Props) {
  return (
    <label className="hamburger" onClick={onclick}>
      <input
        placeholder="Hamburguer"
        type="checkbox"
        readOnly
        checked={isCheck}
        onClick={(e) => e.stopPropagation()}
      />
      <svg className="transition-transform duration-500" viewBox="0 0 32 32">
        <path
          className="line line-top-bottom"
          d="M27 10H13c-2.2 0-4-1.8-4-4 0-2.5 1.8-4 4-4s4 1.8 4 4v20c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4H7"
        />
        <path className="line" d="M7 16h20" />
      </svg>
    </label>
  )
}
