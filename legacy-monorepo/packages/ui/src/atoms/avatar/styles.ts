import { css } from '@emotion/react'
import { SizeType } from 'src/types/global'
import {
  computeAvatarProperties,
  AvatarSizeMap,
} from 'src/helpers/style-functions/computeAvatarProperties'
import { AvatarEntity } from 'src/theme/theming/entities'

export default {
  avatarContainer: (
    size: SizeType,
    sizeMap: AvatarSizeMap,
    avatarEntity: AvatarEntity,
    avatarImage?: string,
  ) => css`
    position: relative;
    border-radius: 15%;
    height: ${computeAvatarProperties(size, sizeMap).avatarSize}px;
    width: ${computeAvatarProperties(size, sizeMap).avatarSize}px;
    min-width: ${computeAvatarProperties(size, sizeMap).avatarSize}px;
    background-color: ${avatarEntity.backgroundColor};
    background-image: ${avatarImage
      ? `url(${avatarImage})`
      : `linear-gradient(${avatarEntity.defaultBackgroundColors.accent}, ${avatarEntity.defaultBackgroundColors.accent})`};
    background-position: center;
    background-size: cover;
    border: ${avatarEntity.borderWidth} solid ${avatarEntity.borderColor};
    box-shadow: ${avatarEntity.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  activeBubble: (
    avatarEntity: AvatarEntity,
    size: SizeType,
    sizeMap: AvatarSizeMap,
    isActive?: boolean,
  ) => css`
    position: absolute;
    left: ${computeAvatarProperties(size, sizeMap).bubbleLeftPosition}px;
    bottom: 0px;
    background: ${isActive
      ? avatarEntity.bubbleBackgroundColors.isActive
      : avatarEntity.bubbleBackgroundColors.default};
    width: ${computeAvatarProperties(size, sizeMap).bubbleSize}px;
    height: ${computeAvatarProperties(size, sizeMap).bubbleSize}px;
    border-radius: 50%;
    z-index: 1;
    box-shadow: ${avatarEntity.boxShadow};
  `,
  checkmarkContainer: (size: SizeType, sizeMap: AvatarSizeMap) => css`
    position: absolute;
    left: ${computeAvatarProperties(size, sizeMap).bubbleLeftPosition}px;
    bottom: 0px;
  `,
}
