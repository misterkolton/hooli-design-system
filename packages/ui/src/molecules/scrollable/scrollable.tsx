import React, { useRef } from 'react'
import { useElementScroll } from 'framer-motion'
import { Div } from 'src/atoms/div/div'
import styles from './styles'

export type ScrollableProps = {
  maxHeight?: number
  onChange?: (progress: number) => void
  hasScrollBar?: boolean
  children?: React.ReactNode
}
export const Scrollable = ({
  maxHeight,
  onChange,
  children,
  hasScrollBar = true,
}: ScrollableProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const elementScroll = useElementScroll(ref)
  const { scrollYProgress } =
    process.env.NODE_ENV === 'test'
      ? { scrollYProgress: { onChange: () => {}, get: () => 0 } }
      : elementScroll

  const handleOnChange = (scrollYPosition: number) => {
    onChange && onChange(scrollYPosition)
  }
  scrollYProgress.onChange(() => handleOnChange(scrollYProgress.get()))

  return (
    <Div
      borderRadius="default"
      backgroundColor="foreground"
      ref={ref}
      maxHeight={`${maxHeight}px`}
      width="100%"
      inset={{ bottom: 'x2' }}
      overflow="auto"
      css={styles.scrollableContainer(hasScrollBar)}
    >
      {children}
    </Div>
  )
}
