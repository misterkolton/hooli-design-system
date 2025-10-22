import React, { useState } from 'react'
import styles from '../styles'
import { AlignmentOptions, Span, Div } from 'src/exports/atoms'
import { IconType } from 'src/atoms/iconography/types'
import { OptionContent } from './optionContent'

type OptionProps = {
  alignment?: AlignmentOptions
  onClick?: (id: number) => void
  isSelected: boolean
  graphic?: IconType
  icon?: IconType
  id: number
} & (TextLabelProps | IconLabelProps | IconTextLabelProps | ReactNodeLabelProps)
export type TextLabelProps = {
  type: 'text'
  label: string
}
export type IconLabelProps = {
  type: 'graphic'
  label:
    | {
        icon: IconType
        url?: undefined
      }
    | {
        icon?: undefined
        url: string
      }
}
export type IconTextLabelProps = {
  type: 'graphicText'
  label:
    | {
        icon: IconType
        url?: undefined
        text: string
      }
    | {
        icon?: undefined
        url: string
        text: string
      }
}
export type ReactNodeLabelProps = {
  type: 'reactNode'
  label: React.ReactNode
}

export const Option = React.forwardRef(
  (props: OptionProps, ref: React.RefObject<HTMLDivElement>) => {
    const { alignment, isSelected, onClick, id } = props
    const [isHover, setIsHover] = useState(false)
    return (
      <Div
        ref={ref}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        onClick={() => onClick && onClick(id)}
        backgroundColor={isSelected ? 'background' : 'foreground'}
        borderRadius="default"
        css={styles.option(alignment)}
      >
        <Div
          animate={isHover ? (isSelected ? { x: 0 } : { x: 6 }) : { x: 0 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          css={{ whiteSpace: 'nowrap' }}
        >
          <Span display="flex" justifyContent="center" alignItems="center">
            {/* TODO Refactor to avoid conditions in multiple areas*/}
            {props.type === 'text' ? (
              <OptionContent type={props.type} label={props.label} />
            ) : props.type === 'graphicText' ? (
              <OptionContent type={props.type} label={props.label} />
            ) : props.type === 'reactNode' ? (
              <OptionContent type={props.type} label={props.label} />
            ) : (
              <OptionContent type={props.type} label={props.label} />
            )}

            {/* <OptionContent type={props.type} label={props.label} /> */}
            {/* Really seems like this should just work. ^^^*/}
          </Span>
        </Div>
      </Div>
    )
  },
)
