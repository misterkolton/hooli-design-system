import * as React from 'react'

import { cn } from '@/lib/utils'
import { AnimatedCheckmark } from '@/components/ui/animated-checkmark'

export type SizeType = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'

type AvatarSizeSpec = { avatarSize: number; bubbleLeftPosition: number; bubbleSize: number }

const AVATAR_SIZES: Record<SizeType, AvatarSizeSpec> = {
  // Pulled from legacy QDS theme entities for visual parity
  xSmall: { avatarSize: 34, bubbleLeftPosition: 22, bubbleSize: 12 },
  small: { avatarSize: 44, bubbleLeftPosition: 28, bubbleSize: 14 },
  medium: { avatarSize: 60, bubbleLeftPosition: 40, bubbleSize: 16 },
  large: { avatarSize: 76, bubbleLeftPosition: 52, bubbleSize: 20 },
  xLarge: { avatarSize: 96, bubbleLeftPosition: 64, bubbleSize: 28 },
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  initials?: string
  size?: SizeType
  isActive?: boolean
  isSelected?: boolean
}

function textSizeClass(size: SizeType) {
  switch (size) {
    case 'xSmall':
      return 'text-[10px]'
    case 'small':
      return 'text-xs'
    case 'medium':
      return 'text-sm'
    case 'large':
      return 'text-sm'
    case 'xLarge':
      return 'text-base'
  }
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, initials, size = 'small', isActive, isSelected, ...props }, ref) => {
    const spec = AVATAR_SIZES[size]
    const [showImage, setShowImage] = React.useState<boolean>(!!src)

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center overflow-hidden rounded-[15%] border border-border text-foreground shadow-sm',
          src ? 'bg-muted' : 'bg-accent',
          className,
        )}
        style={{ width: spec.avatarSize, height: spec.avatarSize, minWidth: spec.avatarSize }}
        {...props}
      >
        {showImage && src ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={src}
            alt={alt ?? ''}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            onError={() => setShowImage(false)}
          />
        ) : initials ? (
          <span className={cn('font-semibold', textSizeClass(size), 'text-accent-foreground')}>{initials}</span>
        ) : (
          <span className={cn('font-semibold', textSizeClass(size), 'text-accent-foreground')}>{initials ?? ''}</span>
        )}

        {isSelected ? (
          <div
            className="absolute bottom-0"
            style={{ left: spec.bubbleLeftPosition }}
          >
            <AnimatedCheckmark
              size={size}
              filled
              tone="success"
              sizeMap={{
                xSmall: AVATAR_SIZES.xSmall.bubbleSize,
                small: AVATAR_SIZES.small.bubbleSize,
                medium: AVATAR_SIZES.medium.bubbleSize,
                large: AVATAR_SIZES.large.bubbleSize,
                xLarge: AVATAR_SIZES.xLarge.bubbleSize,
              }}
              duration={600}
            />
          </div>
        ) : isActive ? (
          <span
            className="absolute bottom-0 rounded-full bg-emerald-500 shadow"
            style={{
              left: spec.bubbleLeftPosition,
              width: spec.bubbleSize,
              height: spec.bubbleSize,
            }}
            aria-hidden
          />
        ) : null}
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'
