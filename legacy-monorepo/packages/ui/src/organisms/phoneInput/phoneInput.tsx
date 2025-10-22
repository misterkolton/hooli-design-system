import React, { FC } from 'react'
import { Select } from 'src/molecules/select/select'
import { Input } from 'src/molecules/input/input'
import styles from './styles'
import { Div } from 'src/atoms/div/div'
import { IconType, Text } from 'src/exports/atoms'
import { Separator } from 'src/exports/molecules'
import { useEntities } from 'src/hooks/useEntities'
import ReactCountryFlag from 'react-country-flag'
import { Country } from 'src/types/global'

export type PhoneInputProps = {
  countries: Country[]
  phoneNumber: string
  selectedCountryIndex: number
  onSelectedCountryIndexChange: (selectedCountryIndex: number) => void
  onPhoneNumberChange: (phoneNumber: string) => void
  message?: {
    type: 'success' | 'danger' | 'warning'
    content: string
    icon?: IconType
    onClick?: () => void
  }
  maxHeight?: string
}

export const PhoneInput: FC<PhoneInputProps> = ({
  countries,
  selectedCountryIndex,
  onSelectedCountryIndexChange,
  onPhoneNumberChange,
  phoneNumber,
  message,
  maxHeight,
}) => {
  const options = countries.map(country => {
    return {
      value: country.isoCode,
      label: (
        <>
          <ReactCountryFlag
            countryCode={country.isoCode}
            svg
            style={{ width: '24px', height: '19px', borderRadius: '3px' }}
          />
          <div style={{ minWidth: '70px' }} className="hide-on-active">
            <Text
              type="caption"
              inset={{ left: 'x1' }}
              content={`+${country.callingCode} ${country.isoCode}`}
            />
          </div>
        </>
      ),
      hasSeparator: country.hasSeparator,
    }
  })
  const { inputs } = useEntities()
  return (
    <Div css={styles.phoneInputWrapper}>
      <Div
        css={styles.phoneInputContainer}
        backgroundColor={inputs.backgroundColor}
        borderRadius={inputs.select.borderRadius}
      >
        <Div width="100%" height="100%" position="relative">
          <Div height="100%" position="absolute" zIndex={1}>
            <Select
              dropDownMaxHeight={maxHeight}
              type="reactNode"
              options={options}
              onChange={onSelectedCountryIndexChange}
              selectedOptionIndex={selectedCountryIndex}
              alignment="left"
              selectWidth="65px"
              scrollBarWidth="thin"
              shouldAlignDropDownToLeft={true}
            />
          </Div>
          <Div
            height="100%"
            inset={{ vertical: 'x_5' }}
            position="absolute"
            left="65px"
            zIndex={1}
          >
            <Separator orientation="vertical" />
          </Div>
          <Input
            message={message}
            name="tel"
            placeholder="Enter Phone Number"
            type="text"
            value={phoneNumber}
            onChange={value => onPhoneNumberChange(value)}
            isFullWidth={true}
            isPhoneInput={true}
          />
        </Div>
      </Div>
    </Div>
  )
}
