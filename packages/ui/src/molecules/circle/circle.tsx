import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Icon } from 'src/atoms/iconography/components/icon'
import { SizeType } from 'src/types/global'
import { IconType, IconColors } from 'src/atoms/iconography/types'
import { useEntities } from 'src/hooks/useEntities'

export type CircleProps = {
  icon: IconType
  fill: IconColors
  size?: SizeType
  scale?: number
  layer?: number
  onClick?: () => void
  animate?: {}
}

export const Circle: FC<CircleProps> = ({
  icon,
  fill,
  size = 'small',
  scale,
  layer,
  onClick,
  animate,
}) => {
  const getInset = (size: SizeType) => {
    if (size === 'large' || size === 'xLarge') {
      return 'x2'
    }
    return 'x1'
  }
  const { hocs } = useEntities()

  const circleStyles = {
    background: `linear-gradient(150deg, ${hocs.colors.swatches.grayScale._700},
      ${hocs.colors.swatches.grayScale._200}
      )}`,
  }
  return (
    <Div
      animate={animate}
      position={'relative'}
      inset={getInset(size)}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="circle"
      onClick={onClick && (() => onClick())}
      cursor="pointer"
      transform={`scale(${scale})`}
      zIndex={layer || 1}
      maxWidth="fit-content"
      maxHeight="fit-content"
      css={circleStyles}
    >
      <Icon name={icon} primaryColor={fill} size={size} />
    </Div>
  )
}
