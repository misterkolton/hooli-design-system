import React, { FC } from 'react'
import {
  Div,
  IconType,
  Icon,
  IconColors,
  Span,
  Section,
  Spacer,
} from 'src/exports/atoms'
import { IconLink } from 'src/exports/molecules'

export type OptionType = {
  title: string
  icon: IconType
  onClick: () => void
  isActive: boolean
}
export type InnerContentsProps = {
  logo: {
    color: IconColors
    icon: IconType
  }
  mainMenuAction: () => void
  options: OptionType[]
}
export const InnerContents: FC<InnerContentsProps> = ({
  logo,
  mainMenuAction,
  options,
}) => {
  return (
    <Div
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Section
        position="absolute"
        top={'0'}
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Span inset={{ vertical: 'x2' }}>
          <Icon name={logo.icon} primaryColor={logo.color} size="medium" />
        </Span>
        <IconLink
          icon="hamburger"
          fill={'primaryBodyText'}
          size="small"
          onClick={mainMenuAction}
        />
      </Section>
      <Section>
        {options.map((option, index) => {
          return (
            <>
              <IconLink
                key={index}
                onClick={option.onClick}
                icon={option.icon}
                title={option.icon}
                size="xSmall"
                isStacked={true}
                isActive={option.isActive}
              />
              <Spacer space={'x4'} />
            </>
          )
        })}
      </Section>
    </Div>
  )
}
