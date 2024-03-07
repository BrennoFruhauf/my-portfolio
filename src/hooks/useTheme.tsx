import { useEffect, useState } from 'react'

import { useTheme as useNextTheme } from 'next-themes'

enum themes {
  light = 'light',
  dark = 'dark',
  system = 'system'
}

export function useTheme() {
  const { theme: t, systemTheme, setTheme } = useNextTheme()
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
