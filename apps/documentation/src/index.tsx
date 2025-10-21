import React from 'react'
import ReactDOM from 'react-dom'
import { QuantumThemeWrapper } from '@sendoutcards/quantum-design-ui'
import App from './app/App'

ReactDOM.render(
  <React.StrictMode>
    <QuantumThemeWrapper>
      <App />
    </QuantumThemeWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
)
