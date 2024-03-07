'use client'

import { ThemeProvider } from 'next-themes'

import { ActiveMenuItemProvider } from './ActiveMenuItemProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <ActiveMenuItemProvider>{children}</ActiveMenuItemProvider>
    </ThemeProvider>
  )
}
