import { useCallback, useRef, useState } from 'react'

export const useLongPress = (
  onLongPress: (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.TouchEvent<HTMLInputElement>,
  ) => void,
  onLongPressEnd: (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.TouchEvent<HTMLInputElement>,
  ) => void,
  onClick: () => void,
  { isPreventDefault = true, delay = 300 } = {},
) => {
  const [hasLongPress, setHasLongPress] = useState(false)
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const target = useRef<EventTarget | null>(null)

  const start = useCallback(
    (
      event:
        | React.MouseEvent<HTMLInputElement>
        | React.TouchEvent<HTMLInputElement>,
    ) => {
      if (isPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        })
        target.current = event.target
      }
      timeout.current = setTimeout(() => {
        onLongPress(event)
        setHasLongPress(true)
      }, delay)
    },
    [onLongPress, delay, isPreventDefault],
  )

  const clear = useCallback(
    (
      event:
        | React.MouseEvent<HTMLInputElement>
        | React.TouchEvent<HTMLInputElement>,
      shouldTriggerClick = true,
    ) => {
      timeout.current && clearTimeout(timeout.current)
      shouldTriggerClick && !hasLongPress && onClick()
      setHasLongPress(false)
      onLongPressEnd(event)
      if (isPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault)
      }
    },
    [isPreventDefault, onClick, hasLongPress, onLongPressEnd],
  )

  const preventDefault = (event: Event) => {
    if (
      event instanceof TouchEvent &&
      event.touches.length < 2 &&
      event.preventDefault
    ) {
      event.preventDefault()
    }
  }

  return {
    onMouseDown: (e: React.MouseEvent<HTMLInputElement>) => start(e),
    onTouchStart: (e: React.TouchEvent<HTMLInputElement>) => start(e),
    onMouseUp: (e: React.MouseEvent<HTMLInputElement>) => clear(e),
    onMouseLeave: (e: React.MouseEvent<HTMLInputElement>) => clear(e, false),
    onTouchEnd: (e: React.TouchEvent<HTMLInputElement>) => clear(e),
  }
}
