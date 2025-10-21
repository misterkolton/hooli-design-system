import React from 'react'
import {
  Button,
  UploadButton,
  UploadButtonProps,
  UploadButtonRef,
} from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Div } from 'src/exports/atoms'

export default {
  title: 'molecules/UploadButton',
  component: UploadButton,
  args: {
    title: 'Upload Image',
  },
} as Meta

export const StoryName: StoryFn<UploadButtonProps> = args => {
  const ref = React.useRef<UploadButtonRef>(null)
  const onUpload = (upload: File | null) => {
    console.log(upload)
  }

  return (
    <Div
      display="flex"
      justifyContent="center"
      inset={{ top: 'x2' }}
      width="100%"
    >
      <UploadButton ref={ref} {...args} onUpload={onUpload} />
      <Button
        onClick={() => ref.current?.clearPreview()}
        title="Clear Preview"
      />
    </Div>
  )
}
