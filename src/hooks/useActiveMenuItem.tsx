import { useContext } from 'react'

import { ActiveMenuItemContext } from '@/contexts/ActiveMenuItemContext'

export const useActiveMenuItem = () => useContext(ActiveMenuItemContext)
