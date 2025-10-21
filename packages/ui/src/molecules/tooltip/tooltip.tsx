import React from 'react'
import { Span } from 'src/atoms/span/span'
import { Text, WhiteSpaceType } from 'src/atoms/typography/text'
import { useEntities } from 'src/hooks/useEntities'
import { ColorModeType } from 'src/types/global'

import styles from './styles'

export type TooltipProps = {
  title: string
  direction: DirectionType
  background?: ColorModeType
  repositionTooltip?: boolean
  zIndex?: number
  whiteSpace?: WhiteSpaceType
  children?: React.ReactNode
}
export type DirectionType = 'left' | 'right' | 'top' | 'bottom'

export const Tooltip = ({
  title,
  children,
  direction,
  background = 'light',
  repositionTooltip,
  zIndex,
  whiteSpace = 'nowrap',
}: TooltipProps) => {
  const { tooltip } = useEntities()
  const backgroundColor =
    background === 'light'
      ? tooltip.lightBackgroundColor
      : tooltip.darkBackgroundColor
      ? tooltip.darkBackgroundColor
      : tooltip.lightBackgroundColor // TODO this is because the dark bg color is set from a color swatch which can alter through the theme, come up with fix when colors get sorted out

  return (
    <Span
      css={styles.tooltip(direction, backgroundColor, repositionTooltip)}
      borderRadius="small"
      inset={{ vertical: 'x_5', horizontal: 'x1' }}
      boxShadow={tooltip.boxShadow}
      zIndex={zIndex}
      position="relative"
    >
      <Text
        type="footnote"
        color={background === 'light' ? 'primaryBody' : 'inverseBody'}
        whiteSpace={whiteSpace}
      >
        {children || title}
      </Text>
    </Span>
  )
}
