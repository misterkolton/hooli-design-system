import React, { FC } from 'react'
import styles from './styles'
import {
  LoadingSpinner,
  Div,
  Text,
  Flex,
  AnimatedCheckMark,
  Icon,
} from 'src/exports/atoms'

export type TransitionProps = {
  title: string
  subtitle?: string
  isLoading: boolean
  loadedStatus?: 'success' | 'error'
}

export const Transition: FC<TransitionProps> = ({
  title,
  subtitle,
  isLoading,
  loadedStatus,
}) => {
  return (
    <div css={styles.transitionContainer}>
      <Div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        inset={{ bottom: 'x2' }}
      >
        {isLoading ? (
          <LoadingSpinner size={'xLarge'} />
        ) : loadedStatus === 'success' ? (
          <AnimatedCheckMark filled size={'xLarge'} />
        ) : (
          <Div
            width="84px"
            height="84px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderWidth="default"
            borderColor={{ swatch: 'danger', shade: 'base' }}
            borderStyle="solid"
            borderRadius="circle"
          >
            <Icon name="exclamation" primaryColor="danger" size="xLarge" />
          </Div>
        )}
      </Div>
      <Flex flexDirection="column" alignItems="center">
        <Text
          type="body"
          color="primaryBody"
          content={title}
          outset={'x0'}
          alignment="center"
          inset={{ bottom: 'x1' }}
        />
        <Text
          type={loadedStatus === 'error' ? 'body' : 'largeBody'}
          color="primaryHeading"
          content={subtitle}
          alignment="center"
        />
      </Flex>
    </div>
  )
}
