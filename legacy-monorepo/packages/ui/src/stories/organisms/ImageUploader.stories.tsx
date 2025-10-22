import React from 'react'
import {
  ImageUploader,
  ImageUploaderProps,
  AcceptedFiles,
  RejectedFiles,
} from 'src/exports/organisms'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex, Div } from 'src/exports/atoms'

export default {
  title: 'organisms/ImageUploader',
  component: ImageUploader,
  args: {
    title: 'grab some files',
    hasMultiupload: true,
    acceptedFiles: ['png'],
    maxAcceptedFiles: 3,
    uploadTitle: 'Upload Photos',
  },
} as Meta

export const StoryName: StoryFn<ImageUploaderProps> = args => {
  const onUpload = (
    {
      accepted,
      rejected,
    }: { accepted: AcceptedFiles; rejected: RejectedFiles },
    fileList: FileList,
  ) => console.log(fileList, accepted, rejected)
  return (
    <Flex width="100%" justifyContent="center">
      <Div width="350px" height="250px" outset={{ top: 'x2' }}>
        <ImageUploader {...args} onUpload={onUpload} />
      </Div>
    </Flex>
  )
}
