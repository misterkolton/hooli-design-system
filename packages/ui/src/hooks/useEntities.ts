import { useTheme } from '@emotion/react'

// TODO: remoev this, we can just useTheme directly
export const useEntities = () => {
  return useTheme()
}
