export const mapArrayToObject = (input: any[]) => {
  var output = {}
  input.forEach((item: {}) => {
    openObject(item, output)

    function openObject(objectToOpen: {}, setOpenObjectTo: {}) {
      if (!objectToOpen) {
        return
      }
      Object.keys(objectToOpen).forEach(key => {
        if (key === undefined) {
          return
        } else if (typeof setOpenObjectTo[key] === 'object') {
          openObject(objectToOpen[key], setOpenObjectTo[key])
        } else {
          setOpenObjectTo[key] = objectToOpen[key]
        }
      })
    }
  })
  return output
}
