import React, { FC } from 'react'
import { Loader } from '../../../exports/molecules'

export type IncrementSettingLoaderProps = {
  width: number
}

export const IncrementSettingLoader: FC<IncrementSettingLoaderProps> = ({
  width,
}) => {
  return (
    <Loader width={width} height={80}>
      <rect width={'88px'} height={'8px'} y={0} rx={3} />
      <rect width={'88px'} height={'40px'} rx={10} ry={10} y={18} />
      <circle cx={136} cy={37} r={9} y={35} />
      <rect
        width={`calc(100% - ${112}px`}
        height={'6px'}
        y={35}
        rx={3}
        ry={3}
        x={112}
      />
    </Loader>
  )
}
