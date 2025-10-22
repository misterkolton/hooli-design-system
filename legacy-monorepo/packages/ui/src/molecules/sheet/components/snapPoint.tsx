import React, { FC } from 'react'

type SnapPointProps = {
  name?: string
}
export const SnapPoint: FC<SnapPointProps> = ({ name }) => {
  return <div className="snapPoint" data-name={name}></div>
}
