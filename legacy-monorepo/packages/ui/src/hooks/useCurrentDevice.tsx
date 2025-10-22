import { querySizes } from 'src/helpers/hoc-functions/mediaQueries'

/* DO NOT USE THIS HOOK - Will be depricated after implementing changes to QDSChrome, please use useDeviceSize hook instead */
// TODO Depricate this hook
export const currentDevice = (currentWidth: number) => {
  if (currentWidth < querySizes.small) {
    return 'xSmall'
  } else if (currentWidth < querySizes.medium) {
    return 'small'
  } else if (currentWidth < querySizes.large) {
    return 'medium'
  } else if (currentWidth < querySizes.xLarge) {
    return 'large'
  } else if (currentWidth > querySizes.xLarge) {
    return 'xLarge'
  } else {
    return "Couldn't find device"
  }
}

export const useCurrentDevice = (innerWidth: number) => {
  const device = currentDevice(innerWidth)

  return device
}
