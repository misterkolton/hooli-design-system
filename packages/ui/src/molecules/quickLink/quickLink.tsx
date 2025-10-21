import React, { FC } from 'react'
import { Item } from 'src/organisms/qdsChrome/qdsChrome'
import { Card } from '../../atoms/card/card'

type QuickLinkType = {
  link: Item
}

export const QuickLink: FC<QuickLinkType> = ({ link }) => {
  return <Card>{link.title}</Card>
}
