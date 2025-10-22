import React, { FC } from 'react'
import styles from './styles'
import { Div } from 'src/atoms/div/div'

export type MenuProps = {
  children?: React.ReactNode
}

export const Menu: FC<MenuProps> = ({ children }: MenuProps) => {
  return (
    <Div
      backgroundColor="foreground"
      borderRadius="small"
      boxShadow="mediumLight"
      css={styles.menuContainer}
    >
      {children}
    </Div>
  )
}
