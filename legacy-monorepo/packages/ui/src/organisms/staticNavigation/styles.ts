import { css } from '@emotion/react'
import { HOCEntity } from 'src/theme/theming/entities'

export default {
  staticNavigationContainer: (hocEntity: HOCEntity, isFrosted?: boolean) => css`
    backdrop-filter: ${isFrosted ? 'blur(10px)' : 'none'};
    background: ${isFrosted
      ? 'rgba(255, 255, 255, 0.7)'
      : hocEntity.colors.foreground};
  `,
}
