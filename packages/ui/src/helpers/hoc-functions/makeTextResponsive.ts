import { Responsive } from '../hoc-types/entityValueTypes'
import { TextType } from 'src/atoms/typography/text'
import { isTextType } from './typeChecks'
import { entities } from 'src/theme/theming/entities'

const { mediaQueries } = entities

export const makeTextResponsive = (
  size: TextType | Responsive<TextType>,
  callback: (type: TextType) => JSX.Element | undefined,
  windowSize: number,
): JSX.Element | undefined => {
  // TODO - Change this function to allow cases to fall through, as of now you have to specify every media query size
  let lastQuery: TextType = 'body'

  if (isTextType(size)) {
    return callback(size)
  } else {
    if (size.xSmall && windowSize >= mediaQueries.rawValues.xSmall) {
      lastQuery = size.xSmall
    }
    if (size.small && windowSize >= mediaQueries.rawValues.small) {
      lastQuery = size.small
    }
    if (size.medium && windowSize >= mediaQueries.rawValues.medium) {
      lastQuery = size.medium
    }
    if (size.large && windowSize >= mediaQueries.rawValues.large) {
      lastQuery = size.large
    }
    if (size.xLarge && windowSize >= mediaQueries.rawValues.xLarge) {
      lastQuery = size.xLarge
    }
  }
  return callback(lastQuery)
}
