import { shadows } from 'src/theme/tokens/shadows'

type ShadowConceptKey = keyof typeof shadows

export const computeShadow = (
  shadow: ShadowConceptKey | number[],
  color?: string,
  reverseOffset?: boolean,
) => {
  const shadowArray = typeof shadow === 'string' ? shadows[shadow] : shadow

  const formattedShadow = shadowArray
    .map((item, index) => {
      if (index === 1 && reverseOffset) {
        return `-${item}px`
      }
      return `${item}px`
    })
    .toString()
    .split(',')
    .join(' ')
  return `${formattedShadow} ${color}`
}
