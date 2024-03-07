import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

enum themes {
  light = 'light',
  dark = 'dark',
  system = 'system'
}

export function useThemeConfig() {
  const { theme: t, systemTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const theme = t === themes.system ? systemTheme : t
  const isDark = theme === themes.dark

  const handleChangeTheme = () => {
    setTheme(t === themes.dark ? themes.light : themes.dark)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return { isDark, handleChangeTheme, isMounted }
}
