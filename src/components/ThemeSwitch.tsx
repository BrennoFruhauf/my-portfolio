'use client'

import { useEffect, useState } from 'react'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

enum themes {
  light = 'light',
  dark = 'dark'
}

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const isDarkTheme = theme === themes.dark

  const handleThemeChange = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
        onClick={handleThemeChange}
        readOnly
        checked={isDarkTheme}
      />
      <label htmlFor="ck" className="input">
        <div className="circle">{isDarkTheme ? <Sun /> : <Moon />}</div>
      </label>
    </div>
  )
}
