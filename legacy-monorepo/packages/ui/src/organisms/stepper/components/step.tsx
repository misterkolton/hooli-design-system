import React, { FC } from 'react'
import { Flex } from 'src'

export type StepProps = {
  order: number
  flexDirection?: 'row' | 'column'
}

export const Step: FC<StepProps> = ({ flexDirection = 'column', children }) => (
  <Flex flexDirection={flexDirection} height="100%" width="100%">
    {children}
  </Flex>
)
