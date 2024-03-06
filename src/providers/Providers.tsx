'use client'

import { ActiveMenuItemProvider } from './ActiveMenuItemProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ActiveMenuItemProvider>{children}</ActiveMenuItemProvider>
}
