import React from 'react'
import { useEvent } from './useEvent'

export const useInnerHeight = () => {
  const [innerHeight, setInnerHeight] = React.useState(window.innerHeight)
  const getDevice = React.useCallback(() => {
    const innerHeight = window.innerHeight
    setInnerHeight(innerHeight)
  }, [])
  useEvent('resize', getDevice)

  return innerHeight
}
