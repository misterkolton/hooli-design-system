import { SizeType } from 'src/types/global'
import { TextType } from 'src/atoms/typography/text'
import { mapSizeType } from './mapSizeType'

export const computeTextTypeFromIconLinkSize = (size: SizeType): TextType => {
  return mapSizeType(size, {
    xSmall: 'footnote',
    small: 'footnote',
    medium: 'body',
    large: 'subtitle',
    xLarge: 'title',
  })
}

export const computeTextTypeFromSize = (size: SizeType): TextType => {
  return mapSizeType(size, {
    xSmall: 'caption',
    small: 'body',
    medium: 'largeBody',
    large: 'largeBody',
    xLarge: 'subtitle',
  })
}
export const computeTextTypeFromButtonSize = (size: SizeType): TextType => {
  return mapSizeType(size, {
    xSmall: 'footnote',
    small: 'caption',
    medium: 'body',
    large: 'largeBody',
    xLarge: 'subtitle',
  })
}

export type InfoBlockSize = {
  heading: TextType
  caption: TextType
}
export const computeTextTypeFromInfoBlockSize = (
  size: SizeType,
): InfoBlockSize => {
  return mapSizeType(size, {
    xSmall: { heading: 'caption', caption: 'footnote' },
    small: { heading: 'body', caption: 'caption' },
    medium: { heading: 'largeBody', caption: 'body' },
    large: { heading: 'subtitle', caption: 'largeBody' },
    xLarge: { heading: 'title', caption: 'subtitle' },
  })
}
