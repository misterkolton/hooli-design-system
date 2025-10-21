import React, { FC } from 'react'
import { PromotionWidget } from 'src/exports/organisms'
import { Clipboard } from 'src/exports/molecules'

export type AffiliateShareWidgetProps = {
  title: string
  shareLink: string
}

export const AffiliateShareWidget: FC<AffiliateShareWidgetProps> = ({
  title,
  shareLink,
}) => {
  return (
    <PromotionWidget
      capsuleTitle="Share"
      title={title}
      type="secondary"
      description=""
      backgroundColor="foreground"
    >
      <Clipboard copyText={shareLink} />
    </PromotionWidget>
  )
}
