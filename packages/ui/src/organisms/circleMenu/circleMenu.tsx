import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Circle } from 'src/molecules/circle/circle'
import styles from './styles'
import { IconType } from 'src/atoms/iconography/types'
import { SizeType } from 'src/types/global'

export type CircleMenuProps = {
  icon: IconType
  size: SizeType
  setIsSheetOpen: (isOpen: boolean) => void
  isOpen: boolean
}

export const CircleMenu: FC<CircleMenuProps> = ({
  icon,
  size,
  isOpen,
  setIsSheetOpen,
}) => {
  return (
    <motion.div css={styles.circleMenuContainer} id="circleMenuEvent">
      <Circle
        animate={
          isOpen
            ? { transform: 'rotate(45deg)' }
            : { transform: 'rotate(0deg)' }
        }
        onClick={() => setIsSheetOpen(!isOpen)}
        fill="inverseBodyText"
        icon={icon}
        size={size}
        scale={0.85}
        layer={4}
      />
    </motion.div>
  )
}
