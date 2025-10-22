const fs = require('fs')
const prompt = require('prompt')

const schema = {
  properties: {
    documentationType: {
      description: 'Are you creating a new page or a new component?',
      pattern: /\b(page|component)\b/g,
      message: 'Please enter page or component',
      required: true,
    },
    component: {
      description: 'Please enter your page or component name (PascalCase)',
      pattern: /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/g,
      message: 'Components must be written in PascalCase!',
      required: true,
    },
  },
}
prompt.start()

prompt.get(schema, async function (err, result) {
  const { documentationType } = await result
  const dirName = `${documentationType}s`
  const componentName = await result.component

  try {
    if (dirName === 'components') {
      createDirectory(componentName, dirName)
      writeComponent(componentName, dirName, true)
      writeStyles(componentName, dirName, true)
    } else {
      writeComponent(componentName, dirName, false)
    }
  } catch (err) {
    console.log('There was an Error, ' + err)
    throw err
  }
})

const createDirectory = (componentName, elementDirectory) => {
  fs.mkdir(
    process.cwd() +
      `/apps/documentation/src/app/${elementDirectory}/${componentName}`,
    { recursive: true },
    error => {
      if (error) {
        throw error
      } else {
        console.log(`Directory ${elementDirectory} was created successfully`)
      }
    },
  )
}

const writeComponent = async (componentName, elementDirectory, hasNamedDir) => {
  const filePath = hasNamedDir
    ? `apps/documentation/src/app/${elementDirectory}/${componentName}/${componentName}.tsx`
    : `apps/documentation/src/app/${elementDirectory}/${componentName}.tsx`

  const fileWrite =
    elementDirectory === 'components'
      ? `
  import React, { FC } from 'react'
  import { Div } from '@sendoutcards/quantum-design-ui'
  import styles from './styles'
  
  export type ${componentName}Props = {}
  
  export const ${componentName}: FC<${componentName}Props> = () => {
    return <Div css={styles.${toCamelCase(componentName)}Container}></Div>
  }
  `
      : `
  import React, { FC } from 'react'
  import { Div } from '@sendoutcards/quantum-design-ui'
  
  export type ${componentName}Props = {}
  
  export const ${componentName}: FC<${componentName}Props> = () => {
    return <Div>{${componentName}} Page</Div>
  }
  `

  fs.writeFile(filePath, fileWrite, err => {
    // throws an error, you could also catch here
    if (err) throw err
    // success case, the file was saved
    console.log(`React component: ${componentName} was created successfully`)
  })
}

const writeStyles = (componentName, elementDirectory, hasNamedDir) => {
  fs.writeFile(
    `apps/documentation/src/app/${elementDirectory}/${componentName}/styles.ts`,
    `
  import { css } from '@emotion/react'
  
  export default {
    ${toCamelCase(componentName)}Container: css\`\`
  }
  `,
    err => {
      if (err) throw err
      console.log('Styles were created successfully')
    },
  )
}

const toCamelCase = str => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase()
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase()
    })
}
