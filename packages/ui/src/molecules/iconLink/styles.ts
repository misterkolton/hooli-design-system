import { css } from '@emotion/react'
import { IconsEntity } from 'src/theme/theming/entities'

export default {
  iconLinkContainer: (
    isStacked: boolean,
    isActive: boolean,
    icons: IconsEntity,
    isBackgroundDisabled?: boolean,
  ) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: ${isStacked ? 'column' : 'row'};
    cursor: pointer;
    height: ${isStacked ? 'max-content' : 'min-content'};
    width: min-content;
    background: ${isActive && !isBackgroundDisabled
      ? icons.colors.background
      : 'none'};
    &:hover {
      background: ${!isBackgroundDisabled && icons.colors.background};
    }
  `,
  iconContainer: css`
    justify-content: center;
    align-items: center;
    display: flex;
  `,
  titleContainer: css`
    white-space: nowrap;
  `,
}
