import React from 'react'
import { Text, Flex, Div, Spacer } from '@sendoutcards/quantum-design-ui'

function App() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text type="title">
        Welcome to Quantum Design System's Documentation Site
      </Text>
      <Spacer space="x9" />
      <Div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        width="200px"
        height="200px"
        backgroundColor={{ swatch: 'primaryBrand', shade: 'base' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Div>
    </Flex>
  )
}

export default App
