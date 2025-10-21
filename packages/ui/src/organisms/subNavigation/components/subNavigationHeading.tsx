import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Span } from 'src/atoms/span/span'
import { IconType } from 'src/atoms/iconography/types'

type SubNavigationHeadingProps = {
  title: string
  isActive: boolean
  icon: IconType
  isMobile: boolean
}
export const SubNavigationHeading: FC<SubNavigationHeadingProps> = ({
  title,
  isActive,
  icon,
  isMobile,
}) => {
  return (
    <Div
      display={'flex'}
      justifyContent="center"
      alignItems="center"
      outset={{ bottom: 'x1' }}
    >
      <Span
        display="flex"
        justifyContent="center"
        alignItems="center"
        inset={{ right: 'x1' }}
        height="100%"
      >
        <Icon
          size="small"
          primaryColor={isMobile ? 'inverseBodyText' : 'primaryBodyText'}
          name={icon}
        />
      </Span>
      <Text
        type="footnote"
        color={isMobile ? 'inverseHeading' : 'primaryHeading'}
        content={title}
      />
      {isActive && (
        <Span
          outset={{ left: 'x1' }}
          width="6px"
          height="6px"
          backgroundColor={
            isMobile ? 'foreground' : { swatch: 'primaryBrand', shade: 'base' }
          }
          borderRadius="circle"
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Span>
      )}
    </Div>
  )
}
