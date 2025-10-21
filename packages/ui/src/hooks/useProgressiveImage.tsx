import React, { useEffect } from 'react'

export const useProgressiveImage = (src: string) => {
  const [source, setSource] = React.useState<string | null>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  }, [src])

  return source
}
