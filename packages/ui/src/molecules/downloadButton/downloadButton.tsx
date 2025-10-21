import React, { FC } from 'react'
import { ButtonProps, Button } from 'src/exports/molecules'
import { Div, Anchor } from 'src/exports/atoms'

export type DownloadButtonProps = {
  buttonProps: ButtonProps
  href: string
  id: string
}

export const DownloadButton: FC<DownloadButtonProps> = ({
  buttonProps,
  href,
  id,
}) => {
  return (
    <Div>
      <Anchor href={href} shouldDownload={true} id={id}>
        <Button
          type={buttonProps.type}
          title={buttonProps.title}
          size={buttonProps.size}
          onClick={buttonProps.onClick}
          onMouseEvent={buttonProps.onMouseEvent}
          disabled={buttonProps.disabled}
          hover={buttonProps.hover}
          outlined={buttonProps.outlined}
          fullWidth={buttonProps.fullWidth}
          textColorOverride={buttonProps.textColorOverride}
          disabledCaption={buttonProps.disabledCaption}
          disabledDirection={buttonProps.disabledDirection}
        />
      </Anchor>
    </Div>
  )
}
