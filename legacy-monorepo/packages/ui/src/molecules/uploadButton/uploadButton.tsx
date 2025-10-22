import React, { useImperativeHandle, useRef, useState } from 'react'
import { Div, Icon, Text, LoadingSpinner } from 'src/exports/atoms'
import { Image } from 'src/exports/molecules'
import {
  BackgroundColor,
  Width,
  Height,
} from 'src/helpers/hoc-types/hocBaseUnion'
import { Shadows } from 'src/helpers/hoc-types/entityValueTypes'
import { motion, useAnimation } from 'framer-motion'
import styles from './styles'
import { css } from '@emotion/react'

export type UploadButtonRef = {
  clearPreview: () => void
}

export type UploadButtonProps = {
  onUpload: (upload: File | null) => void
  title: string
  backgroundColor?: BackgroundColor
  width?: Width
  height?: Height
  boxShadow?: Shadows
}

export const UploadButton = React.forwardRef(
  (props: UploadButtonProps, ref) => {
    const {
      onUpload,
      title,
      width = '162px',
      height,
      boxShadow = 'mediumLight',
      backgroundColor,
    } = props
    const inputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>()
    const [isAnimating, setIsAnimating] = useState(false)

    const uploadControls = useAnimation()
    const loadingControls = useAnimation()
    const doneControls = useAnimation()
    const loadingBarControls = useAnimation()

    const startPreUploadAnimations = async () => {
      uploadControls.start({
        zIndex: 1,
      })
      await loadingControls.start({
        top: 0,
        transition: { duration: 0.3 },
      })
      loadingBarControls.start({
        width: '100%',
        transition: { duration: 1.35 },
      })
    }

    const startUploadAnimations = async () => {
      uploadControls.start({
        top: '-100%',
        transition: { duration: 0 },
      })
      await doneControls.start({
        top: 0,
        transition: { delay: 1.5, duration: 0.3 },
      })
      loadingControls.start({
        top: '-100%',
        transition: { duration: 0 },
      })
    }

    const startPostUploadAnimations = async () => {
      loadingBarControls.start({
        width: '0%',
      })
      await uploadControls.start({
        top: 0,
        zIndex: 4,
        transition: { delay: 2, duration: 0.3 },
      })
      doneControls.start({
        top: '-100%',
        transition: { duration: 0 },
      })
    }

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      if (event.target.files == null) {
        return
      }
      const file = event.target.files[0]

      if (!!onUpload) {
        setIsAnimating(true)

        await startPreUploadAnimations()
        onUpload(file)

        const reader = new FileReader()

        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        await startUploadAnimations()

        reader.readAsDataURL(file)

        await startPostUploadAnimations()

        setIsAnimating(false)
      } else {
        setPreview(null)
      }
    }

    useImperativeHandle(ref, () => ({
      clearPreview() {
        setPreview(null)
      },
    }))

    return (
      <Div
        backgroundColor={backgroundColor ?? 'background'}
        boxShadow={boxShadow}
        borderRadius={'default'}
        width={width}
        height={height}
        cursor="pointer"
        onClick={() => !isAnimating && inputRef.current?.click()}
        display="grid"
        style={{ placeItems: 'center center' }}
      >
        <Div css={styles.wrapper} alignItems="center" borderRadius={'default'}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={inputRef}
            onChange={handleUpload}
          />
          <Div
            width="35px"
            height="35px"
            display="flex"
            justifyContent="center"
            borderRadius="default"
            alignItems="center"
            backgroundColor={'background'}
            borderStyle="solid"
            borderColor="gray"
            borderWidth="thin"
            inset={!preview ? 'x_5' : 'x0'}
            zIndex={5}
            position="absolute"
            left="2%"
          >
            {!preview ? (
              <Icon
                name="upload"
                size="xSmall"
                primaryColor="primaryHeadingText"
              />
            ) : (
              <Image
                width="35px"
                height="35px"
                isActive
                image={{ url: preview }}
                backgroundSize="cover"
              />
            )}
          </Div>
          <motion.div
            whileHover="hover"
            animate={uploadControls}
            css={css`
              ${styles.container};
              ${styles.upload}
            `}
          >
            <Text
              type="caption"
              content={title}
              color="primaryHeading"
              inset={{ left: 'x1_5' }}
              alignment="center"
              whiteSpace="nowrap"
            />
          </motion.div>
          <motion.div
            animate={loadingControls}
            css={css`
              ${styles.container};
              ${styles.loading}
            `}
          >
            <LoadingSpinner hasNoColor size="xSmall" />
            <Text
              type="caption"
              content="Uploading"
              color="inverseHeading"
              inset={{ left: 'x1' }}
              whiteSpace="nowrap"
            />
            <motion.div
              className="loading-bar"
              animate={loadingBarControls}
              css={styles.loadingBar}
            />
          </motion.div>
          <motion.div
            animate={doneControls}
            css={css`
              ${styles.container};
              ${styles.done}
            `}
          >
            <Text
              type="caption"
              content="Done"
              color="primaryHeading"
              inset={{ left: 'x1_5' }}
              whiteSpace="nowrap"
            />
          </motion.div>
        </Div>
      </Div>
    )
  },
)
