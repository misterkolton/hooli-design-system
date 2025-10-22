export type BorderStyles =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'initial'
  | 'inherit'

export type Cursor =
  | 'pointer'
  | 'auto'
  | 'text'
  | 'zoom-out'
  | 'zoom-in'
  | 'initial'
  | 'inherit'
  | 'move'
  | 'row-resize'
  | 'col-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'not-allowed'

export type Display =
  | 'relative'
  | 'absolute'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'grid'
  | 'none'
  | 'contents'
  | 'inline-flex'

export type Position = 'absolute' | 'fixed' | 'sticky' | 'relative' | 'static'

type FlexBaseValues =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit'

export type CSSGridBaseValues = 'start' | 'end' | 'space-evenly' | 'center'

export type JustifyContent = FlexBaseValues | CSSGridBaseValues

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch'

export type AlignContent =
  | 'space-evenly'
  | 'stretch'
  | 'start'
  | 'end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe'
  | 'unsafe'
  | CSSGridBaseValues
  | FlexBaseValues

export type AlignItems =
  | AlignContent
  | 'self-start'
  | 'self-end'
  | CSSGridBaseValues

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'

export type BackgroundSize =
  | 'auto'
  | 'length'
  | 'cover'
  | 'contain'
  | 'initial'
  | 'inherit'

export type BackgroundPosition =
  | 'center'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom'

export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'initial'
  | 'inherit'

export type Overflow = 'visible' | 'auto' | 'scroll' | 'hidden'

export type Initials = 'inherit' | 'initial'

export type CSSValues =
  | BorderStyles
  | Cursor
  | Display
  | JustifyContent
  | AlignContent
  | AlignItems
  | JustifyItems
  | FlexDirection
  | BackgroundSize
  | BackgroundPosition
  | BackgroundRepeat
  | Overflow
  | Position
