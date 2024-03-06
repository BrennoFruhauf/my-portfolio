'use client'

import { ThemeProvider } from 'next-themes'

import { ActiveMenuItemProvider } from './ActiveMenuItemProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ActiveMenuItemProvider>{children}</ActiveMenuItemProvider>
    </ThemeProvider>
  )
}
