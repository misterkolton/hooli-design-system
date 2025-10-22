import { findDirection } from './findDirection'
import { findBorderDirection } from './findBorderDirection'
import { findBorderRadiusDirection } from './findBorderRadiusDirection'
import { makeResponsive } from './makeResponsive'
import { mapArrayToObject } from './mapArrayToObject'
import { HOCBaseProps } from '../hoc-types/hocBasePropTypes'
import { Entities } from 'src/theme/theming/entities'
import { findColor } from './findColor'

export const generateStyles = (props: HOCBaseProps, entities: Entities) => {
  const {
    inset,
    outset,
    borderRadius,
    borderWidth,
    borderStyle,
    backgroundColor,
    borderColor,
    boxShadow,
    height,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    position,
    top,
    bottom,
    left,
    right,
    justifyContent,
    alignContent,
    alignItems,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    rowGap,
    columnGap,
    justifyItems,
    order,
    cursor,
    zIndex,
    opacity,
    display,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    transform,
    transformOrigin,
    overflow,
    overflowX,
    overflowY,
    color,
    gradient,
  } = props
  const styles = [
    inset && findDirection('padding', inset, entities.hocs.spacing),
    outset && findDirection('margin', outset, entities.hocs.spacing),
    borderRadius &&
      findBorderRadiusDirection(borderRadius, entities.hocs.borderRadius),
    borderColor && findColor('borderColor', borderColor, entities.hocs.colors),
    borderWidth &&
      findBorderDirection('width', borderWidth, entities.hocs.borders),
    borderStyle && findBorderDirection('style', borderStyle),
    backgroundColor &&
      findColor('backgroundColor', backgroundColor, entities.hocs.colors),
    color && makeResponsive('color', color, entities.hocs.textColors),
    boxShadow && makeResponsive('boxShadow', boxShadow, entities.hocs.shadows),
    height && makeResponsive('height', height, entities.hocs.spacing),
    width && makeResponsive('width', width, entities.hocs.spacing),
    maxHeight && makeResponsive('maxHeight', maxHeight, entities.hocs.spacing),
    maxWidth && makeResponsive('maxWidth', maxWidth, entities.hocs.spacing),
    minHeight && makeResponsive('minHeight', minHeight, entities.hocs.spacing),
    minWidth && makeResponsive('minWidth', minWidth, entities.hocs.spacing),
    top && makeResponsive('top', top, entities.hocs.spacing),
    bottom && makeResponsive('bottom', bottom, entities.hocs.spacing),
    left && makeResponsive('left', left, entities.hocs.spacing),
    right && makeResponsive('right', right, entities.hocs.spacing),
    justifyContent && makeResponsive('justifyContent', justifyContent),
    alignContent && makeResponsive('alignContent', alignContent),
    alignItems && makeResponsive('alignItems', alignItems),
    flexDirection && makeResponsive('flexDirection', flexDirection),
    flexGrow && makeResponsive('flexGrow', flexGrow),
    flexShrink && makeResponsive('flexShrink', flexShrink),
    flexWrap && makeResponsive('flexWrap', flexWrap),
    rowGap && makeResponsive('rowGap', rowGap, entities.hocs.spacing),
    columnGap && makeResponsive('columnGap', columnGap, entities.hocs.spacing),
    justifyItems && makeResponsive('justifyItems', justifyItems),
    order && makeResponsive('order', order),
    cursor && makeResponsive('cursor', cursor),
    opacity && makeResponsive('opacity', opacity),
    display && makeResponsive('display', display),
    backgroundImage &&
      makeResponsive('backgroundImage', `url(${backgroundImage})`),
    backgroundPosition &&
      makeResponsive('backgroundPosition', backgroundPosition),
    backgroundRepeat && makeResponsive('backgroundRepeat', backgroundRepeat),
    backgroundSize && makeResponsive('backgroundSize', backgroundSize),
    transformOrigin && makeResponsive('transformOrigin', transformOrigin),
    transform && makeResponsive('transform', transform),
    overflow && makeResponsive('overflow', overflow),
    overflowX && makeResponsive('overflowX', overflowX),
    overflowY && makeResponsive('overflowY', overflowY),
    position && makeResponsive('position', position),
    (zIndex || zIndex === 0) && makeResponsive('zIndex', zIndex),
    gradient && makeResponsive('background', gradient),
  ]

  return mapArrayToObject(styles)
}
