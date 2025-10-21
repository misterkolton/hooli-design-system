export const getNumberFromString = (str: string) => {
  let parsedStr
  if (str.endsWith('px')) {
    parsedStr = str.substring(0, str.length - 2)
  } else if (str.endsWith('%')) {
    parsedStr = str.substring(0, str.length - 1)
  } else {
    parsedStr = str
  }
  return parseInt(parsedStr)
}
