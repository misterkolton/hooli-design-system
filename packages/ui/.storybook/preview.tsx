import React from 'react'
import { QuantumThemeWrapper } from '../src/theme/quantumThemeWrapper'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [
  (Story: React.FC) => (
    <QuantumThemeWrapper>
      <Story />
    </QuantumThemeWrapper>
  ),
]
