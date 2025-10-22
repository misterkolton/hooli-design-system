import React, { FC } from 'react'
import { Div } from 'src/exports/atoms'
import Input from '../input/input'
import { Button } from '../button/button'
import { useEntities } from 'src/hooks/useEntities'

export type ClipboardProps = {
  copyText: string
  width?: string
  type?: 'text' | 'link'
}

export const Clipboard: FC<ClipboardProps> = ({
  copyText,
  width = '100%',
  type = 'link',
}) => {
  const { inputs } = useEntities()

  const [isCopied, setIsCopied] = React.useState(false)

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleCopy = () => {
    copyTextToClipboard(copyText)
      // eslint-disable-next-line
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 4000)
      })
      // eslint-disable-next-line
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Div
      position="relative"
      width={width}
      backgroundColor={inputs.backgroundColor}
      borderRadius={inputs.text.borderRadius}
    >
      <Div
        width="calc(100% - 100px)"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      >
        <Input
          type="text"
          value={copyText}
          onChange={() => {}}
          icon="catalog"
          isFullWidth
        />
      </Div>
      <Div position="absolute" top="10px" right="10px">
        <Button
          type={isCopied ? 'success' : 'secondary'}
          size="xSmall"
          title={
            isCopied
              ? `Copied ${type === 'text' ? 'Text' : 'Link'}`
              : `Copy ${type === 'text' ? 'Text' : 'Link'}`
          }
          onClick={handleCopy}
        />
      </Div>
    </Div>
  )
}
