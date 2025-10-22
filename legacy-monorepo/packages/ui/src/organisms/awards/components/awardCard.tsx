import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { Card } from 'src/atoms/card/card'
import { Progress } from 'src/molecules/progress/progress'
import { Image } from 'src/molecules/image/image'
import styles from '../styles'
import { IncrementalAwardType } from '../types'
import { IncrementalAwardLabel } from './incrementalAwardLabel'

export type AwardCardProps = {
  image: string
  title: string
  onClick?: () => void
  progress: IncrementalAwardType | number
}

export const AwardCard: FC<AwardCardProps> = ({
  image,
  title,
  onClick,
  progress,
}) => {
  return (
    <Card
      cursor="pointer"
      onClick={onClick && (() => onClick())}
      width="210px"
      height="285px"
      inset={{ vertical: 'x3', horizontal: 'x2' }}
      css={styles.awardCardContainer}
      borderRadius="large"
    >
      <Div
        outset={{ bottom: 'x1_5' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          isActive={true}
          image={{
            url: image,
          }}
          activeFilter={
            typeof progress === 'number'
              ? progress === 100
                ? {
                    name: 'none',
                    filter: 'initial',
                    background: 'initial',
                  }
                : {
                    name: 'Locked',
                    filter: 'grayscale(100%) invert(35%) blur(1px)',
                  }
              : progress.count > 0
              ? {
                  name: 'none',
                  filter: 'initial',
                  background: 'initial',
                }
              : {
                  name: 'Locked',
                  filter: 'grayscale(100%) invert(35%) blur(1px)',
                }
          }
          width="145px"
          height="145px"
        />
      </Div>
      <Text type="body" alignment="center" content={title} />
      <Div
        width="100%"
        height="16px"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        outset={{ top: 'x_75' }}
      >
        {typeof progress === 'number' ? (
          <Progress percentage={progress} />
        ) : (
          <IncrementalAwardLabel
            isExpanded={false}
            title={progress.title}
            count={progress.count}
            icon={progress.icon}
          />
        )}
      </Div>
    </Card>
  )
}
