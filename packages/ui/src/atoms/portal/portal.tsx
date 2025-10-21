import React from 'react'
import ReactDOM from 'react-dom'

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const [container] = React.useState(() => {
    const element = document.createElement('div')
    return element
  })

  React.useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}
