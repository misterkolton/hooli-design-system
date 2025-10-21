import React, { FC } from 'react'
import { Div } from 'src/atoms/div/div'
import { Flex, HStack, Icon } from 'src/exports/atoms'
import { Text } from '../../atoms/typography/text'
import styles from './styles'

export type SettingInputProps = {
  value: string | null
  settingsType: 'color' | 'image'
  inactiveTitle: string
  onRemove: () => void
  onClick?: () => void
  onMouseEvent?: () => void
}

export const SettingInput: FC<SettingInputProps> = ({
  value,
  settingsType = 'color',
  inactiveTitle,
  onRemove,
  onClick,
}) => {
  const label = settingsType === 'color' ? 'Color' : 'Image'
  const size = '24px'
  return (
    <Div minWidth="230px" cursor="pointer">
      <Flex
        justifyContent="space-between"
        minWidth="230px"
        onClick={onClick}
        width="100%"
        inset="8px 14px"
        display="flex"
        alignItems="center"
        style={{
          borderRadius: '14px',
          border: '1px solid #F3F4F6',
          background: 'rgba(255, 255, 255, 0.60)',
        }}
      >
        {value ? (
          <Flex width="100%" flexDirection="column">
            <Text
              type="body"
              content={label}
              style={{
                fontSize: '10px',
                fontWeight: 700,
                fontFamily: 'Montserrat, san serif',
                color: '#6B7280',
              }}
            />
            <Flex
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <HStack gap="0" justify="start">
                <Div
                  backgroundPosition="center"
                  backgroundSize="cover"
                  backgroundRepeat="no-repeat"
                  backgroundColor={settingsType === 'color' ? value : undefined}
                  backgroundImage={settingsType === 'image' ? value : undefined}
                  borderRadius="circle"
                  width="24px"
                  height="24px"
                  style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.12)' }}
                />
                <Text
                  alignment="left"
                  outset={{ left: 'x2' }}
                  type="body"
                  content={settingsType === 'color' ? value : 'Image'}
                  style={{
                    color: '#171717',
                    fontSize: '14px',
                    fontFamily: 'Montserrat, san serif',
                  }}
                />
              </HStack>
            </Flex>
          </Flex>
        ) : (
          <Flex flexDirection="column" rowGap="x_5">
            <Text
              type="body"
              content={label}
              style={{
                fontSize: '10px',
                fontWeight: 700,
                fontFamily: 'Montserrat, san serif',
                color: '#6B7280',
              }}
            />
            <Flex justifyContent="center" alignItems="center">
              {settingsType === 'color' ? (
                <Div
                  width={size}
                  height={size}
                  overflow="visible"
                  backgroundColor={{ swatch: 'grayScale', shade: '_900' }}
                  borderRadius="circle"
                  style={{
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.12)',
                  }}
                />
              ) : (
                <Div
                  css={styles.fillRuleWrapper}
                  width={size}
                  height={size}
                  style={{ borderRadius: '100%' }}
                />
              )}
              <Text
                alignment="left"
                outset={{ left: 'x2' }}
                type="body"
                content={inactiveTitle}
                style={{
                  color: '#E5E7EB',
                  fontSize: '14px',
                  fontFamily: 'Montserrat, san serif',
                }}
              />
            </Flex>
          </Flex>
        )}
        {value ? (
          <Div
            display="flex"
            alignItems="center"
            onMouseEvent={e => {
              e.stopPropagation()
              onRemove()
            }}
            onClick={onRemove}
          >
            <Icon name="closeCircle" size="xSmall" primaryColor="danger" />
          </Div>
        ) : settingsType === 'color' ? (
          <Div
            cursor="pointer"
            borderRadius="circle"
            style={{
              backgroundImage:
                'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)',
              width: '24px',
              height: '24px',
              boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
            }}
            onClick={onClick}
          />
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRadius="circle"
            width="24px"
            height="24px"
            backgroundColor="#fff"
            onClick={onClick}
            style={{
              boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
              border: '1px solid #fff',
            }}
          >
            <Icon
              size="xSmall"
              name="image"
              primaryColor="primaryHeadingText"
            />
          </Flex>
        )}
      </Flex>
    </Div>
  )
}
