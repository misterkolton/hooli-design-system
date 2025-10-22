import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React, { useRef } from 'react'
import { Div, Flex } from 'src/exports/atoms'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import { SizeType } from 'src/types/global'
import { getSize } from './components/colorOption'
import Color from 'color'
import { useEntities } from 'src/hooks/useEntities'

export type StoplightProps = {
  activeIndex: number
  setActiveIndex: (index: number) => void
  isExpanded?: boolean
  setIsExpanded?: (isExpanded: boolean) => void
  type: 'colors' | 'icons'
  onClick?: () => void
  orientation?: 'horizontal' | 'vertical'
  isCollapsible?: boolean
  children?: React.ReactNode
}

export const Stoplight = ({
  activeIndex,
  setActiveIndex,
  isExpanded = true,
  setIsExpanded,
  type,
  onClick,
  orientation = 'vertical',
  isCollapsible = false,
  children,
}: StoplightProps) => {
  const stoplightChildren: React.ReactElement[] | any[] =
    React.Children.toArray(children)

  const stoplightRef = useRef<HTMLDivElement>(null)

  const { colorOption } = useEntities()

  const computeBorderRadiusFromSize = (size: SizeType) => {
    switch (size) {
      case 'xSmall':
        return '12px'
      case 'small':
        return '16px'
      case 'medium':
        return '20px'
      case 'large':
        return '24px'
      case 'xLarge':
        return '28px'
      default:
        return '20px'
    }
  }

  const isIconLargeOrXL: boolean =
    stoplightChildren[0].props.size === 'large' ||
    stoplightChildren[0].props.size === 'xLarge'

  const handleClick = (index: number) => {
    setActiveIndex(index)
    onClick?.()
    isCollapsible && setIsExpanded && setIsExpanded(true)
  }

  useOutsideClick(stoplightRef, () => {
    isCollapsible && setIsExpanded && setIsExpanded(false)
  })

  return (
    <AnimateSharedLayout>
      <Div
        style={{
          borderRadius: computeBorderRadiusFromSize(
            stoplightChildren[0].props.size,
          ),
        }}
        backgroundColor="foreground"
        boxShadow="light"
        height="100%"
        width="100%"
        display="flex"
        position="relative"
        alignItems={orientation === 'vertical' ? 'space-between' : 'center'}
        justifyContent={orientation === 'vertical' ? 'center' : 'space-between'}
        flexDirection={orientation === 'vertical' ? 'column' : 'row'}
        cursor="pointer"
        ref={stoplightRef}
        layout
      >
        {isExpanded ? (
          <AnimatePresence>
            {stoplightChildren.map(
              (child: React.ReactElement, index: number) => {
                const { hexColor, size } = child.props
                const shade = Color(hexColor).luminosity()
                const shadow = `inset ${colorOption.defaults.innerRing}, ${colorOption.defaults.outerRing}`
                return (
                  <Flex
                    onClick={() => {
                      handleClick(index)
                    }}
                    inset={
                      type === 'icons'
                        ? isIconLargeOrXL
                          ? 'x1'
                          : 'x_75'
                        : 'x0'
                    }
                    alignItems="center"
                    justifyContent="center"
                    height={getSize(size)}
                    width={getSize(size)}
                    flexDirection="column"
                    initial={isCollapsible ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                    layout
                  >
                    {child}
                    {type === 'colors' && activeIndex === index && (
                      <Div
                        height={getSize(size)}
                        width={getSize(size)}
                        layoutId="circle"
                        position="absolute"
                        borderRadius={computeBorderRadiusFromSize(size)}
                        borderStyle="solid"
                        borderWidth="default"
                        borderColor={hexColor}
                        boxShadow={shade > 0.9 ? shadow : undefined}
                      />
                    )}
                  </Flex>
                )
              },
            )}
          </AnimatePresence>
        ) : (
          <Flex
            onClick={() => setIsExpanded && setIsExpanded(true)}
            alignItems="center"
            justifyContent="center"
            width={getSize(stoplightChildren[0].props.size)}
            height={getSize(stoplightChildren[0].props.size)}
            inset={type === 'icons' ? (isIconLargeOrXL ? 'x1' : 'x_75') : 'x0'}
            borderRadius={computeBorderRadiusFromSize(
              stoplightChildren[0].props.size,
            )}
            layout
          >
            {stoplightChildren[activeIndex]}
          </Flex>
        )}
      </Div>
    </AnimateSharedLayout>
  )
}
