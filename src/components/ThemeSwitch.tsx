'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/hooks/useTheme'

export function ThemeSwitch() {
  const { isDark, isMounted, handleChangeTheme } = useTheme()

  if (!isMounted)
    return (
      <div className="toggle">
        <input
          placeholder="checkbox"
          type="checkbox"
          id="ck"
          className="checkbox"
          readOnly
          checked={false}
        />
        <label htmlFor="ck" className="input">
          <div className="circle"></div>
        </label>
      </div>
    )

  return (
    <div className="toggle">
      <input
        placeholder="checkbox"
        type="checkbox"
        id="ck"
        className="checkbox"
        onClick={handleChangeTheme}
        readOnly
        checked={isDark}
      />
      <label htmlFor="ck" className="input">
        <div className="circle">{isDark ? <Sun /> : <Moon />}</div>
      </label>
    </div>
  )
}
