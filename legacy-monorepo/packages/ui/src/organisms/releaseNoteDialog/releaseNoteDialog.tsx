import React, { FC } from 'react'
import {
  ButtonType,
  Button,
  Dialog,
  ReleaseNote,
  CapsuleType,
  Separator,
} from 'src/exports/molecules'
import { Text, Flex, Spacer } from 'src/exports/atoms'

export type NoteSection = {
  releaseType: CapsuleType
  notes: string[]
}

export type ReleaseNoteDialogProps = {
  title: string
  versionTitle?: string
  versionNumber: string
  releaseDate: string
  description: string
  listType?: 'ordered' | 'unordered'
  noteSections: NoteSection[]
  onClose: () => void
  isOpen: boolean
  button: { title: string; type: ButtonType; onClick?: () => void }
  maxWidth?: number
  maxHeight?: number
}

export const ReleaseNoteDialog: FC<ReleaseNoteDialogProps> = ({
  title,
  versionTitle = 'Version',
  versionNumber,
  releaseDate,
  description,
  noteSections,
  button,
  isOpen,
  onClose,
  maxWidth = 665,
  maxHeight = 500,
}) => {
  return (
    <Dialog closeButtonId={versionTitle} isOpen={isOpen} onClose={onClose}>
      <Flex
        maxHeight={`${maxHeight}px`}
        maxWidth={`${maxWidth}px`}
        minWidth="320px"
        flexDirection="column"
      >
        <Text
          type={{
            xSmall: 'largeBody',
            small: 'subtitle',
          }}
          color="primaryHeading"
          weight="bold"
          content={title}
          alignment="center"
        />
        <Spacer space="x1" />
        <Text
          type="caption"
          color="primaryBody"
          content={description}
          alignment="center"
          lineHeight={1.6}
        />
        <Spacer space="x3" />
        <Separator orientation="horizontal" />
        <Spacer space="x2_5" />
        <Flex>
          <Text
            type={{ xSmall: 'caption', small: 'body' }}
            color="primaryHeading"
            weight="semiBold"
            content={`${versionTitle}: ${versionNumber}`}
          />
          <Text
            type="caption"
            color="primaryBody"
            weight="regular"
            content={releaseDate}
            outset={{ left: 'auto' }}
            alignment="right"
          />
        </Flex>
        <Spacer space="x2_5" />
        <Flex
          flexDirection="column"
          overflowY="auto"
          height="100%"
          inset={{ right: 'x2' }}
        >
          {noteSections.map(noteSection =>
            noteSection.notes.map((note, index) => (
              <>
                <ReleaseNote
                  key={index}
                  capsule={{
                    title: noteSection.releaseType,
                  }}
                  note={{ title: note }}
                />
                <Spacer orientation="vertical" space="x3" />
              </>
            )),
          )}
        </Flex>
        <Flex
          width="35%"
          justifyContent="center"
          style={{ margin: '1rem auto 0 auto' }}
        >
          <Button
            size="medium"
            title={button.title}
            onClick={() => {
              onClose()
              button.onClick?.()
            }}
            type={button.type}
            fullWidth
          />
        </Flex>
      </Flex>
    </Dialog>
  )
}
