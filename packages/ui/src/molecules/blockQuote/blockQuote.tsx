import React from 'react'
import { useEntities } from 'src/hooks/useEntities'
import {
  Flex,
  Icon,
  Spacer,
  Text,
  TextType,
  TextColor,
  IconColors,
} from 'src/exports/atoms'
import {
  BorderRadiusDirection,
  HOCBorderRadiusKeys,
  LiteralUnion,
  Responsive,
  Shadows,
} from 'src/helpers/hoc-types/entityValueTypes'
import { ThemeMode } from 'src/types/global'

type QuoteType = Omit<ThemeMode, 'accent' | 'shadow'>

export type BlockQuoteProps = {
  author?: string
  background?: 'background' | 'foreground'
  type?: QuoteType
  textColor?: TextColor
  content?: string
  contentTextType?: TextType | Responsive<TextType>
  borderRadius?: BorderRadiusDirection | LiteralUnion<HOCBorderRadiusKeys>
  boxShadow?: Shadows
  children?: React.ReactNode
}

export const BlockQuote = ({
  author,
  background = 'background',
  textColor = 'primaryBody',
  type = 'primary',
  content,
  contentTextType = 'largeBody',
  borderRadius = 'none',
  boxShadow,
  children,
}: BlockQuoteProps) => {
  const { hocs } = useEntities()

  const mapTypeToColor = (type: QuoteType): IconColors => {
    switch (type) {
      case 'primary':
        return 'primaryBrand'
      case 'secondary':
        return 'secondaryBrand'
      case 'warning':
        return 'warning'
      case 'success':
        return 'success'
      case 'danger':
        return 'danger'
      default:
        return 'primaryBrand'
    }
  }

  return (
    <Flex
      style={{
        borderLeft: `8px solid ${
          hocs.colors.swatches[mapTypeToColor(type)].base
        }`,
      }}
      height="100%"
      width="100%"
      backgroundColor={background}
      inset={{ vertical: 'x2', horizontal: 'x3' }}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      <Flex height="100%" inset={{ vertical: 'x2' }}>
        <Icon
          name="quotation"
          primaryColor={mapTypeToColor(type)}
          size="medium"
        />
      </Flex>
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        inset="x3"
        justifyContent="space-between"
        alignItems="space-between"
      >
        <Text type={contentTextType} color={textColor} isItalic>
          {content ?? children}
        </Text>
        {author && (
          <>
            <Spacer orientation="vertical" space="x3" />
            <Text type="subtitle" weight="extraBold" isItalic>
              {author}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  )
}
