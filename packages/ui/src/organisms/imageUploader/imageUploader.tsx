import React, { useCallback } from 'react'
import { Text, Icon, Flex } from 'src/exports/atoms'
import { FileRejection, useDropzone } from 'react-dropzone'
import { BackgroundColor } from 'src/helpers/hoc-types/hocBaseUnion'

type AcceptedFileType = 'jpg' | 'png' | 'gif' | 'jpeg' // Add additional supported file types here

export type ImageUploaderProps = {
  onUpload: (
    files: { accepted: File[]; rejected: FileRejection[] },
    fileList?: FileList | null,
  ) => void
  acceptedFiles: AcceptedFileType[]
  hasMultiupload?: boolean
  maxFileSize?: number
  maxAcceptedFiles?: number
  uploadTitle?: string
  backgroundColor?: BackgroundColor
}

export type AcceptedFiles = File[]
export type RejectedFiles = FileRejection[]

const isDragEventType = (event: any): event is DragEvent => {
  return 'dataTransfer' in event
}

export const ImageUploader = (props: ImageUploaderProps) => {
  const [error, setError] = React.useState<string | null>(null)
  const { onUpload } = props
  const onDrop = useCallback(
    (
      acceptedFiles: AcceptedFiles,
      rejectedFiles: RejectedFiles,
      event: DragEvent | Event,
    ) => {
      const element = isDragEventType(event)
        ? event.dataTransfer
        : (event.target as HTMLInputElement)

      const fileList = element?.files

      const hasMaxFilesBeenExceeded = rejectedFiles.some(rejectedFile =>
        rejectedFile.errors.some(file => file.code === 'too-many-files'),
      )
      if (hasMaxFilesBeenExceeded) {
        setError('Too many files were attempted to upload')
      } else {
        onUpload({ accepted: acceptedFiles, rejected: rejectedFiles }, fileList)
      }
    },
    [onUpload],
  )

  const parseAcceptedFiles = (acceptedFiles: AcceptedFileType[]) => {
    return acceptedFiles.map(file => `image/${file}`)
  }

  const onDragEnter = useCallback(() => {
    setError(null)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: parseAcceptedFiles(props.acceptedFiles),
    multiple: props.hasMultiupload,
    maxFiles: props.maxAcceptedFiles,
    maxSize: props.maxFileSize,
    onDragEnter,
  })
  return (
    <>
      <Flex
        inset="x1"
        flexWrap="wrap"
        width={'100%'}
        height={'100%'}
        backgroundColor={props.backgroundColor ?? 'background'}
        borderColor={
          isDragActive
            ? { swatch: 'success', shade: 'base' }
            : { swatch: 'grayScale', shade: '_1000' }
        }
        borderStyle="solid"
        borderWidth="default"
        borderRadius="large"
        overflowY="auto"
        cursor="pointer"
        justifyContent="center"
        alignItems="center"
      >
        <div
          {...getRootProps()}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input {...getInputProps()} onClick={onDragEnter} />
          <Flex flexDirection="column" alignItems="center">
            <Icon name="upload" size="medium" primaryColor="primaryBodyText" />
            <Text
              type="largeBody"
              content={props.uploadTitle ?? 'Upload Photo'}
            />
          </Flex>
        </div>
      </Flex>
      {error && (
        <Text
          type="footnote"
          content={error}
          color="danger"
          outset={{ top: 'x1', left: 'x_5' }}
        />
      )}
    </>
  )
}
