import { useEntities } from './useEntities'
import { useWindowSize } from './useWindowSize'
import { MediaQueriesEntity } from '../theme/theming/entities'

export const deviceSize = (
  currentWidth: number,
  querySizes: MediaQueriesEntity,
) => {
  if (currentWidth < querySizes.rawValues.small) {
    return 'xSmall'
  } else if (currentWidth < querySizes.rawValues.medium) {
    return 'small'
  } else if (currentWidth < querySizes.rawValues.large) {
    return 'medium'
  } else if (currentWidth < querySizes.rawValues.xLarge) {
    return 'large'
  } else if (currentWidth > querySizes.rawValues.xLarge) {
    return 'xLarge'
  } else {
    return "Couldn't find device"
  }
}

export const useDeviceSize = () => {
  const innerWidth = useWindowSize().width
  const { mediaQueries } = useEntities()
  const device = deviceSize(innerWidth, mediaQueries)

  return {
    device,
  }
}
