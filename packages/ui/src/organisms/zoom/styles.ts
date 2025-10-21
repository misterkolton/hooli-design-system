import { css } from '@emotion/react'
import { HOCEntity } from 'src/theme/theming/entities'

export default {
  iconContainer: (hocEntity: HOCEntity) => css`
    &:hover {
      background: ${hocEntity.colors.background};
    }
  `,
}
