import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import styles from '../styles'

type RevealingContentProps = {
  zone: ZoneType
  width: string
  height: string
  isMobile: boolean
}
type ZoneType = 'bottom' | 'top' | 'left' | 'right'
export const RevealingContent: FC<RevealingContentProps> = ({
  children,
  zone,
  width,
  height,
  isMobile,
}) => {
  return (
    <Div
      display={'flex'}
      outset={zone === 'left' && !isMobile ? { left: '50px' } : 'x0'}
      justifyContent={zone === 'left' ? 'flex-start' : 'flex-end'}
      alignItems={zone === 'top' ? 'flex-start' : 'flex-end'}
      css={styles.revealingContent}
      backgroundColor={
        isMobile ? { swatch: 'primaryBrand', shade: 'base' } : 'foreground'
      }
    >
      <Div width={width} height={height}>
        {children}
      </Div>
    </Div>
  )
}
