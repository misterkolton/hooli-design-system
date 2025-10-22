import React, { FC } from 'react'
import { Text } from 'src/atoms/typography/text'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Div } from 'src/atoms/div/div'
import styles from './styles'

export type ProgressProps = {
  percentage: string | number
  hasLabel?: boolean
}
export const Progress: FC<ProgressProps> = ({
  percentage,
  hasLabel = true,
}) => {
  return (
    <Div css={styles.progressContainer}>
      <Div
        css={styles.progress(percentage)}
        backgroundColor={{ swatch: 'grayScale', shade: '_1000' }}
        borderRadius="circle"
      >
        <Div></Div>
      </Div>
      {percentage === 100 ? (
        <Icon primaryColor="primaryBodyText" name="award" size="small" />
      ) : (
        hasLabel && (
          <Text type="body" color="primaryBody">
            {percentage}%
          </Text>
        )
      )}
    </Div>
  )
}
