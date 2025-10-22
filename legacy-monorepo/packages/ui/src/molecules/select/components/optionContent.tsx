import React, { FC } from 'react'
import {
  TextLabelProps,
  IconTextLabelProps,
  IconLabelProps,
  ReactNodeLabelProps,
} from './option'
import { Text, WeightType } from 'src/atoms/typography/text'
import { Icon } from 'src/atoms/iconography/components/icon'
import { Div } from 'src/exports/atoms'

type OptionContentProps = {
  shouldBoldText?: boolean
} & (TextLabelProps | IconLabelProps | IconTextLabelProps | ReactNodeLabelProps)

export const OptionContent: FC<OptionContentProps> = props => {
  const boldTextProp: { weight?: WeightType } = props.shouldBoldText
    ? { weight: 'bold' }
    : {}
  return (
    <>
      {props.type === 'text' ? (
        <Text
          content={props.label}
          type="caption"
          whiteSpace="nowrap"
          {...boldTextProp}
        />
      ) : props.type === 'graphic' ? (
        <Div display="flex" justifyContent="center" alignItems="center">
          {props.label.icon ? (
            <Icon name={props.label.icon} size="small" primaryColor="default" />
          ) : (
            <Div
              backgroundImage={props.label.url}
              backgroundPosition="center"
              width="24px"
              height="24px"
              borderRadius="circle"
            />
          )}
        </Div>
      ) : props.type === 'reactNode' ? (
        <Div display="flex" justifyContent="center" alignItems="center">
          {props.label}
        </Div>
      ) : (
        <Div display="flex" justifyContent="center" alignItems="center">
          {props.label.icon ? (
            <Icon name={props.label.icon} size="small" primaryColor="default" />
          ) : (
            <Div
              backgroundImage={props.label.url}
              width="24px"
              height="24px"
              borderRadius="circle"
              backgroundPosition="center"
            />
          )}
          <Text
            inset={{ left: 'x1' }}
            content={props.label.text}
            type="caption"
            whiteSpace="nowrap"
            {...boldTextProp}
          />
        </Div>
      )}
    </>
  )
}
