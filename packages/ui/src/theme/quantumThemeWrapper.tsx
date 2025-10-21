/// <reference types="@emotion/react/types/css-prop" />

import React from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'
import { entities, Entities } from '../theme/theming/entities'
import {
  sendogoTheme,
  bellaCadaeuxTheme,
  greenerStillTheme,
  promptingUTheme,
  streamMarketingTheme,
  streamVATheme,
  blue42Theme,
  sendOutCardsTheme,
  promptingsTheme,
} from 'src/exports/themes'

type Theme =
  | 'sendogo'
  | 'bellaCadeaux'
  | 'greenerStill'
  | 'streamVA'
  | 'streamMarketing'
  | 'promptingU'
  | 'blue42'
  | 'sendOutCards'
  | 'promptings'
  | 'promptingsAcademy'

export type QuantumThemeProviderProps = {
  theme?: Theme
  children?: React.ReactNode
}
export const QuantumThemeWrapper = ({
  children,
  theme,
}: QuantumThemeProviderProps) => {
  const getTheme = (theme?: Theme): Entities => {
    switch (theme) {
      case 'sendogo':
        return sendogoTheme
      case 'bellaCadeaux':
        return bellaCadaeuxTheme
      case 'greenerStill':
        return greenerStillTheme
      case 'promptingU':
        return promptingUTheme
      case 'streamMarketing':
        return streamMarketingTheme
      case 'streamVA':
        return streamVATheme
      case 'blue42':
        return blue42Theme
      case 'sendOutCards':
        return sendOutCardsTheme
      case 'promptings':
        return promptingsTheme
      case 'promptingsAcademy':
        return promptingUTheme
      default:
        return entities
    }
  }
  const selectedTheme = getTheme(theme)
  return (
    <ThemeProvider theme={selectedTheme}>
      <Global
        styles={css`
          @import url(${selectedTheme.text.imports.body});
          @import url(${selectedTheme.text.imports.heading});
          body {
            font-family: ${selectedTheme.text.families.body};
            font-size: 16px;
            line-height: 1.65;
            * {
              box-sizing: border-box;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: ${selectedTheme.text.families.heading};
            }
            button {
              font-family: ${selectedTheme.text.families.body};
            }
          }
        `}
      />
      <div
        css={css`
          font-size: 16px;
          > div {
            font-size: inherit;
          }
        `}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
