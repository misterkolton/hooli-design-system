export const atomicDir = (file: any) => {
  const filePath = file.split('/')
  return filePath.slice(filePath.length - 2, filePath.length - 1)[0]
}
