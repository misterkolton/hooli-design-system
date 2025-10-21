import '@emotion/react'
import { Entities } from 'src/theme/theming/entities'

declare module '@emotion/react' {
  export interface Theme extends Entities {}
}
