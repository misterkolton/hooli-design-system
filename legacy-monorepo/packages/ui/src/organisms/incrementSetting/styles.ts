import { css } from '@emotion/react'

export default {
  incrementSettingContainer: (isStacked?: boolean) => css`
    display: flex;
    flex-direction: ${isStacked ? 'column' : 'row'};
    align-items: ${isStacked ? 'flex-start' : 'center'};
    justify-content: ${!isStacked && 'space-between'};
  `,
}
