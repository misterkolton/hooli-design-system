import React, { FC } from 'react'
import styles from './styles'
import { Text, AlignmentType } from 'src/atoms/typography/text'
import { computeTextTypeFromInfoBlockSize } from 'src/helpers/style-functions/computeTextTypeFromSize'
import ReactCountryFlag from 'react-country-flag'
import { Country } from 'src/types/global'

export type InfoBlockProps = {
  heading: string
  caption: string
  size: InfoBlockSizeType
  alignment?: AlignmentType
  country?: Country
}

export type InfoBlockSizeType = 'large' | 'medium' | 'small'

export const InfoBlock: FC<InfoBlockProps> = ({
  heading,
  caption,
  size,
  alignment = 'left',
  country,
}) => {
  return (
    <div css={styles.infoBlockContainer}>
      <div css={styles.textContainer}>
        <Text
          type={computeTextTypeFromInfoBlockSize(size).heading}
          color="primaryHeading"
          content={heading}
          alignment={alignment}
          outset={size === 'large' ? { bottom: 'x1' } : { bottom: 'x_5' }}
          lineHeight={1}
          weight="semiBold"
        />
        <div css={styles.captionContainer}>
          {country && (
            <ReactCountryFlag
              countryCode={country.isoCode}
              svg
              style={{
                width: '24px',
                height: '19px',
                borderRadius: '3px',
                marginRight: '4px',
              }}
            />
          )}
          <Text
            type={computeTextTypeFromInfoBlockSize(size).caption}
            color="primaryBody"
            content={caption}
            alignment={alignment}
            lineHeight={1}
          />
        </div>
      </div>
    </div>
  )
}
