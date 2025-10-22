export const computeSpace = (baseValue: number, baseUnits: string) => {
  return (multiplier: number) => {
    return baseValue * multiplier + baseUnits
  }
}
