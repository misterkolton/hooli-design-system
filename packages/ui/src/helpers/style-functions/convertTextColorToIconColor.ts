import { TextColor } from 'src/atoms/typography/text'
import { IconColors } from 'src/exports/atoms'

export const convertTextColorToIconColor = (
  textColor: TextColor,
): IconColors => {
  switch (textColor) {
    case 'primaryBody':
      return 'primaryBodyText'
    case 'primaryHeading':
      return 'primaryHeadingText'
    case 'inverseBody':
      return 'inverseBodyText'
    case 'inverseHeading':
      return 'inverseHeadingText'
    default:
      return textColor as IconColors
  }
}
