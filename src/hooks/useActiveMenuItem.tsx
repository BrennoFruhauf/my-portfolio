import { useContext } from 'react'

import { ActiveMenuItemContext } from '@/components/contexts/ActiveMenuItemContext'

export const useActiveMenuItem = () => useContext(ActiveMenuItemContext)
