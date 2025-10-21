export const textControl = {
  control: {
    type: 'text',
  },
}

export const numberControl = {
  control: {
    type: 'number',
  },
}

export const spacingControls = {
  control: {
    type: 'select',
    options: [
      'x0',
      'x_25',
      'x_5',
      'x_75',
      'x1',
      'x1_5',
      'x2',
      'x2_5',
      'x3',
      'x4',
      'x5',
      'x6',
      'x7',
      'x8',
      'x9',
    ],
  },
}

export const borderRadiusControls = {
  control: {
    type: 'select',
    options: ['none', 'small', 'medium', 'default', 'large', 'circle'],
  },
}

export const borderWidthControls = {
  control: {
    type: 'select',
    options: ['thin', 'default', 'bold'],
  },
}

export const borderStyleControls = {
  control: {
    type: 'select',
    options: [
      'inset',
      'outset',
      'hidden',
      'none',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'initial',
      'inherit',
    ],
  },
}

export const borderColorControls = {
  control: {
    type: 'select',
    options: ['background', 'foreground'],
  },
}

export const backgroundColorControls = {
  control: {
    type: 'select',
    options: ['background', 'foreground'],
  },
}

export const boxShadowControls = {
  control: {
    type: 'select',
    options: ['dark', 'mediumDark', 'mediumLight', 'light', 'generate'],
  },
}

export const justifyContentControls = {
  control: {
    type: 'select',
    options: [
      'inset',
      'outset',
      'hidden',
      'none',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'initial',
      'inherit',
    ],
  },
}

export const alignContentControls = {
  control: {
    type: 'select',
    options: [
      'space-evenly',
      'stretch',
      'start',
      'end',
      'baseline',
      'first baseline',
      'last baseline',
      'safe',
      'unsafe',
      'center',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'initial',
      'inherit',
    ],
  },
}

export const alignItemsControls = {
  control: {
    type: 'select',
    options: [
      'space-evenly',
      'stretch',
      'start',
      'end',
      'baseline',
      'first baseline',
      'last baseline',
      'safe',
      'unsafe',
      'center',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'initial',
      'inherit',
      'self-end',
      'self-start',
    ],
  },
}

export const flexDirectionControls = {
  control: {
    type: 'select',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
}

export const cursorControls = {
  control: {
    type: 'select',
    options: [
      'pointer',
      'auto',
      'text',
      'zoom-out',
      'zoom-in',
      'initial',
      'inherit',
      'move',
      'row-resize',
      'col-resize',
      'nesw-resize',
      'nwse-resize',
      'not-allowed',
    ],
  },
}

export const displayControls = {
  control: {
    type: 'select',
    options: [
      'relative',
      'absolute',
      'inline',
      'inline-block',
      'flex',
      'grid',
      'none',
      'contents',
    ],
  },
}

export const backgroundSizeControls = {
  control: {
    type: 'select',
    options: ['auto', 'length', 'cover', 'contain', 'initial', 'inherit'],
  },
}
export const backgroundPositionControls = {
  control: {
    type: 'select',
    options: [
      'center',
      'left top',
      'left center',
      'left bottom',
      'right top',
      'right center',
      'right bottom',
      'center top',
    ],
  },
}

export const overflowControls = {
  control: {
    type: 'select',
    options: ['visible', 'auto', 'scroll', 'hidden'],
  },
}

export const gradientControls = {
  control: {
    type: 'text',
  },
}

export const orientationControls = {
  control: {
    type: 'select',
    options: ['vertical', 'horizontal'],
  },
}

export const hocControls = {
  inset: spacingControls,
  outset: spacingControls,
  borderRadius: borderRadiusControls,
  borderWidth: borderWidthControls,
  borderStyle: borderStyleControls,
  borderColor: borderColorControls,
  backgroundColor: backgroundColorControls,
  boxShadow: boxShadowControls,
  height: textControl,
  width: textControl,
  maxHeight: textControl,
  maxWidth: textControl,
  minHeight: textControl,
  minWidth: textControl,
  position: spacingControls,
  top: spacingControls,
  left: spacingControls,
  bottom: spacingControls,
  right: spacingControls,
  justifyContent: justifyContentControls,
  alignContent: alignContentControls,
  alignItems: alignItemsControls,
  flexDirection: flexDirectionControls,
  flexGrow: numberControl,
  control: numberControl,
  order: numberControl,
  cursor: cursorControls,
  zIndex: numberControl,
  opacity: numberControl,
  display: displayControls,
  backgroundImage: textControl,
  backgroundSize: backgroundSizeControls,
  backgroundPosition: backgroundPositionControls,
  transform: textControl,
  transformOrigin: textControl,
  overflow: overflowControls,
  overflowX: overflowControls,
  overflowY: overflowControls,
  gradient: gradientControls,
  orientation: orientationControls,
}
