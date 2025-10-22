import React from 'react'
import { useEvent } from './useEvent'

/* DO NOT USE THIS HOOK - Will be depricated after implementing changes to QDSChrome, please use useWindowSize hook instead */
// TODO Depricate this hook
export const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth)
  const getDevice = React.useCallback(() => {
    const innerHeight = window.innerHeight
    setInnerWidth(innerHeight)
  }, [])
  useEvent('resize', getDevice)

  return innerWidth
}
