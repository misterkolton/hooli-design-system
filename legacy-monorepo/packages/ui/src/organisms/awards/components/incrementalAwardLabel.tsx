import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { IncrementalAwardType } from '../types'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Span } from 'src/atoms/span/span'
import styles from '../styles'

export interface IncrementalAwardLabelProps extends IncrementalAwardType {
  isExpanded: boolean
}
export const IncrementalAwardLabel: FC<IncrementalAwardLabelProps> = ({
  title,
  count,
  icon,
  isExpanded,
}) => {
  return (
    <Div
      css={styles.incremental}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Span
        inset={{ right: 'x1' }}
        display="flex"
        justifyContent="center"
        alignItems={isExpanded ? 'flex-start' : 'center'}
      >
        <Icon
          name={icon}
          primaryColor={count > 0 ? 'success' : 'primaryBodyText'}
          size={isExpanded ? 'medium' : 'small'}
        />
      </Span>
      <Text
        isItalic={true}
        type={isExpanded ? 'caption' : 'footnote'}
        content={`${title}: ${count}`}
        color="primaryBody"
      />
    </Div>
  )
}
