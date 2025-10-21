const fs = require('fs')
const prompt = require('prompt')

const schema = {
  properties: {
    element: {
      description:
        'Please enter your element type (atoms, molecules, organisms, templates or pages)',
      pattern: /\b(atoms|molecules|organisms|templates|pages)\b/g,
      message:
        'Element must be either atoms, molecules, organisms, templates, or pages!',
      required: true,
    },
    component: {
      description: 'Please enter your component name (PascalCase)',
      pattern: /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/g,
      message: 'Components must be written in PascalCase!',
      required: true,
    },
  },
}
prompt.start()
prompt.get(schema, async function (err, result) {
  const elementDirectory = await result.element
  const componentName = await result.component

  try {
    createDirectory(componentName, elementDirectory)
    writeComponent(componentName, elementDirectory)
    writeStyles(componentName, elementDirectory)
    writeExport(componentName, elementDirectory)
    writeStory(componentName, elementDirectory)
  } catch (err) {
    console.log(err)
    throw err
  }
})

const createDirectory = (componentName, elementDirectory) => {
  fs.mkdir(
    process.cwd() +
      `/packages/ui/src/${elementDirectory}/${toCamelCase(componentName)}`,
    { recursive: true },
    error => {
      if (error) {
        throw error
      } else {
        console.log(
          `Directory ${toCamelCase(componentName)} was created successfully`,
        )
      }
    },
  )
}

const writeComponent = async (componentName, elementDirectory) => {
  fs.writeFile(
    `packages/ui/src/${elementDirectory}/${componentName}/${toCamelCase(
      componentName,
    )}.tsx`,
    `
  import React, { FC } from 'react'
  import styles from './styles'
  
  export type ${componentName}Props = {}
  
  export const ${componentName}: FC<${componentName}Props> = () => {
    return <div css={styles.${toCamelCase(componentName)}Container}></div>
  }
  `,
    err => {
      // throws an error, you could also catch here
      if (err) throw err
      // success case, the file was saved
      console.log(`React component: ${componentName} was created successfully`)
    },
  )
}

const writeExport = (componentName, elementDirectory) => {
  const exportData = `\n export * from 'src/${elementDirectory}/${toCamelCase(
    componentName,
  )}/${toCamelCase(componentName)}'`
  fs.appendFileSync(
    `packages/ui/src/exports/${elementDirectory}.ts`,
    exportData,
  )
}
const writeStyles = (componentName, elementDirectory) => {
  fs.writeFile(
    `packages/ui/src/${elementDirectory}/${toCamelCase(
      componentName,
    )}/styles.ts`,
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

const writeStory = (componentName, elementDirectory) => {
  const storyTemplate = `
  import React from 'react'
  import { ${componentName}, ${componentName}Props } from 'src/exports/${elementDirectory}'
  import { Meta, Story } from '@storybook/react/types-6-0'

  export default {
    title: '${elementDirectory}/${componentName}',
    component: ${componentName}
  } as Meta
  
  // If a template is required write it like this (Delete comments if not using)
  /*
    const Template: Story<${componentName}Props> = args => <${componentName} {...args} />

    export StoryName = Template.bind({})
    StoryName.args = {
      args here
    }
  */

  export const StoryName: Story<${componentName}Props> = args => <${componentName} {...args} />
  `
  fs.writeFile(
    `packages/ui/src/stories/${elementDirectory}/${componentName}.stories.tsx`,
    storyTemplate,
    err => {
      // throws an error, you could also catch it here
      if (err) throw err
      // success case, the file was saved
      console.log('Story was created successfully')
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
