import { useEffect } from 'react'

export const useEvent = (event: string, handler: () => void) => {
  useEffect(() => {
    // initiate the event handler

    window.addEventListener(event, handler)

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler)
    }
  }, [event, handler])
}
