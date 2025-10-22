import React from 'react'

type ContextType = {
  activeIndexes: (number | string)[]
  setActiveIndexes: (index: (string | number)[]) => void
  defaultActiveIndexes: (number | string)[]
  isExclusive: boolean
}

const context = {
  activeIndexes: [0],
  setActiveIndexes: () => {},
  defaultActiveIndexes: [0],
  isExclusive: false,
}

export const AccordionContext = React.createContext<ContextType>(context)
