import { ComponentProps } from 'react'

import * as icon from '../components/Icon/index'

export interface IconProps extends ComponentProps<'svg'> {
  size?: number
}

export type Icon = keyof typeof icon
