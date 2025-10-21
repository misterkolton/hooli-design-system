import { css } from '@emotion/react'

export default {
  badge: (item: string) => css`
    height: ${isNaN(parseInt(item))
      ? '18px'
      : item === '10+'
      ? '22px'
      : '18px'};
    width: ${isNaN(parseInt(item)) ? 'none' : item === '10+' ? '24px' : '18px'};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}
