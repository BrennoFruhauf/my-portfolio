import { ComponentProps } from 'react'

import * as icon from '../../public/index'

export interface IconProps extends ComponentProps<'svg'> {
  size?: number
}

export type Icon = keyof typeof icon
