import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'

export type AwardGroupLabelProps = {
  image: string
  label: string
}
export const AwardGroupLabel: FC<AwardGroupLabelProps> = ({ image, label }) => {
  return (
    <Div display="flex" alignItems="center">
      <Div
        width="34px"
        height="34px"
        borderRadius="small"
        backgroundImage={image}
        backgroundSize="cover"
        backgroundPosition="center"
        outset={{ right: 'x2' }}
      ></Div>
      <Text type="body">{label}</Text>
    </Div>
  )
}
