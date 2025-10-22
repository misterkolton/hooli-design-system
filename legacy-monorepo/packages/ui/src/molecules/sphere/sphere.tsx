import React, { FC } from 'react'
import { Flex, Text, TextColor } from 'src/exports/atoms'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'
import { SizeType } from 'src/types/global'
import { useEntities } from 'src/hooks/useEntities'
import { Char } from 'src/types/global'

export type SphereProps = {
  backgroundColor: BackgroundColor
  step: { content: Char | number; color?: TextColor }
  size: SizeType
}

export const Sphere: FC<SphereProps> = ({ backgroundColor, step, size }) => {
  const { sphere } = useEntities()
  const sphereProperties = sphere[size]

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor={
        backgroundColor ?? { swatch: 'primaryBrand', shade: 'base' }
      }
      width={`${sphereProperties.circumference}px`}
      height={`${sphereProperties.circumference}px`}
      borderRadius="circle"
    >
      <Text
        type={sphereProperties.textType}
        content={step.content}
        weight="bold"
        color={step.color ?? 'inverseBody'}
      />
    </Flex>
  )
}
