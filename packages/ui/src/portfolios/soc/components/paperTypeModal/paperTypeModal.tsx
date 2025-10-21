import React, { FC } from 'react'
import styles from './styles'
import {
  Grid,
  GridItem,
  Overlay,
  CloseButton,
  DisplayCard,
} from 'src/exports/molecules'
import { Flex, Text, Div } from 'src/exports/atoms'
import { Image } from 'src/exports/molecules'
import { AnimatePresence } from 'framer-motion'

export type DisplayCardPaperOptions = {
  title: string
  description: string
  image: string
}

export type PaperTypeModalProps = {
  title: string
  subtitle: string
  isOpen: boolean
  onClose?: () => void
  zIndex?: number
  options: DisplayCardPaperOptions[]
}

export const PaperTypeModal: FC<PaperTypeModalProps> = ({
  title,
  subtitle,
  isOpen,
  onClose,
  zIndex,
  options,
}) => {
  const overlayVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  const isEven = options.length % 2 === 0

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          animate={isOpen ? 'open' : 'closed'}
          initial={'closed'}
          zIndex={zIndex ?? 3}
          exit={'closed'}
        >
          <Flex
            maxWidth="650px"
            maxHeight="750px"
            minWidth="320px"
            top={0}
            left={0}
            backgroundColor="foreground"
            borderRadius="default"
            flexDirection="column"
            position="fixed"
            inset="x4"
          >
            {onClose && <CloseButton onClose={onClose} />}
            <Flex flexWrap="wrap" width="100%" justifyContent="center">
              <Text
                type="subtitle"
                weight="bold"
                color="primaryHeading"
                content={title}
              />
              <Text
                type="body"
                color="primaryBody"
                content={subtitle}
                alignment="left"
                lineHeight={2}
              />
            </Flex>
            <Flex
              css={styles.paperTypeCardContainer}
              outset={{ top: 'x2' }}
              overflowY="auto"
              width="100%"
              inset={{ horizontal: 'x1', vertical: 'x3' }}
            >
              <Grid columnSize={280} rowSize={425} gap={8}>
                {options.map((option, index) => {
                  return (
                    <GridItem
                      key={index}
                      gridRowSpan={1}
                      gridColSpan={
                        !isEven && index === options.length - 1 ? 2 : 1
                      }
                    >
                      <Div style={{ flexBasis: '100%' }} flexShrink={1}>
                        <DisplayCard
                          key={index}
                          title={option.title}
                          description={option.description}
                        >
                          <Image
                            width={'100%'}
                            height={'100%'}
                            isActive={true}
                            image={{
                              url: option.image,
                            }}
                          />
                        </DisplayCard>
                      </Div>
                    </GridItem>
                  )
                })}
              </Grid>
            </Flex>
          </Flex>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
