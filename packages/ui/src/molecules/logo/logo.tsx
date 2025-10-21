import React, { FC } from 'react'
import { GreenerStillLogo } from './greenerStill/greenerStillLogo'
import { GreenerStillIcon } from './greenerStill/greenerStillIcon'
import { BellaCadeauxLogo } from './bellaCadeaux/bellaCadeauxLogo'
import { PromptingULogo } from './promptingU/promptingULogo'
import { PromptingUIcon } from './promptingU/promptingUIcon'
import { SOCLogo } from './soc/socLogo'
import { SOCIcon } from './soc/socIcon'
import { StreamVALogo } from './streamVA/streamVALogo'
import { StreamVAIcon } from './streamVA/streamVAIcon'
import { StreamMarketingLogo } from './streamMarketing/streamMarketingLogo'
import { Blue42Logo } from './blue42/blue42Logo'
import { Flex, Span } from 'src/exports/atoms'
import { PromptingsAcademyLogo } from './promptingsAcademy/propmtingsAcademyLogo'
import { PromptingsAcademyIcon } from './promptingsAcademy/promptingsAcademyIcon'
import { PromptingsLogo } from './promptings/promptingsLogo'
import { PromptingsIcon } from './promptings/promptingsIcon'

export type BrandTypes =
  | 'soc'
  | 'greenerStill'
  | 'bellaCadeaux'
  | 'promptingU'
  | 'blue42'
  | 'streamVA'
  | 'streamMarketing'
  | 'soc'
  | 'promptingsAcademy'
  | 'promptings'

export type LogoColorTypes = 'white' | 'black' | 'color'

export type SecodaryLogo = {
  width?: string
  fontSize?: string
}

export type LogoProps = {
  brand: BrandTypes
  color: LogoColorTypes
  type?: 'fullLogo' | 'icon'
  width?: string
  href?: string
  onClick?: () => void
  secondaryLogo?: SecodaryLogo
  shouldShowParentBrand?: boolean
}

export const Logo: FC<LogoProps> = ({
  brand,
  color,
  type = 'fullLogo',
  width = '100px',
  href,
  onClick,
  secondaryLogo,
  shouldShowParentBrand,
}) => {
  const selectLogo = {
    bellaCadeaux: { fullLogo: BellaCadeauxLogo },
    blue42: { fullLogo: Blue42Logo },
    greenerStill: { fullLogo: GreenerStillLogo, icon: GreenerStillIcon },
    soc: { fullLogo: SOCLogo, icon: SOCIcon },
    promptingU: { fullLogo: PromptingULogo, icon: PromptingUIcon },
    streamVA: { fullLogo: StreamVALogo, icon: StreamVAIcon },
    promptingsAcademy: {
      fullLogo: PromptingsAcademyLogo,
      icon: PromptingsAcademyIcon,
    },
    streamMarketing: { fullLogo: StreamMarketingLogo },
    promptings: { fullLogo: PromptingsLogo, icon: PromptingsIcon },
  }

  const SelectedLogo = selectLogo[brand]?.[type] || PromptingsLogo

  return (
    <Span
      style={{ lineHeight: 0 }}
      display="inline-block"
      width={'fit-content'}
    >
      <Flex
        flexDirection="column"
        columnGap="x_5"
        alignItems="center"
        style={{ color: '#000' }}
      >
        <a href={href} onClick={onClick} style={{ cursor: 'pointer' }}>
          <SelectedLogo color={color} width={width} />
        </a>
        {shouldShowParentBrand && (
          <Flex
            alignItems="center"
            style={{
              fontFamily: 'Ubuntu',
              fontStyle: 'italic',
              fontSize: secondaryLogo?.fontSize ?? '12px',
            }}
            justifyContent="flex-end"
            flexDirection="row"
            columnGap="x_25"
            opacity={0.5}
            width="100%"
            inset={{ right: 'x1_5' }}
          >
            The
            <a href={href} onClick={onClick} style={{ cursor: 'pointer' }}>
              <PromptingsLogo
                brand="promptings"
                color={color}
                width={secondaryLogo?.width ?? width}
                type="fullLogo"
              />
            </a>
            mechanism
          </Flex>
        )}
      </Flex>
    </Span>
  )
}
