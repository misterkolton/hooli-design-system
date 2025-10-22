import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Progress, Scrollable, ScrollableProps } from 'src/exports/molecules'
import { Div, Text } from 'src/exports/atoms'

export default {
  title: 'molecules/Scrollable',
  component: Scrollable,
  args: {
    maxHeight: 216,
  },
} as Meta

export const ScrollableContent: StoryFn<ScrollableProps> = args => {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  return (
    <Div inset={{ top: 'x4', horizontal: 'x6' }}>
      <Progress percentage={Math.floor(scrollProgress * 100)} />
      <Scrollable {...args} onChange={setScrollProgress}>
        <Text type="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          lectus proin nibh nisl condimentum id venenatis. Nibh tortor id
          aliquet lectus proin nibh nisl condimentum. Ultrices eros in cursus
          turpis massa tincidunt dui ut. Eu augue ut lectus arcu bibendum at
          varius vel. Est pellentesque elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus. Pretium vulputate sapien nec sagittis.
          Egestas egestas fringilla phasellus faucibus. Neque convallis a cras
          semper auctor. Pretium aenean pharetra magna ac placerat vestibulum
          lectus mauris. Est velit egestas dui id ornare arcu odio ut sem. Magna
          fringilla urna porttitor rhoncus dolor purus. Ac felis donec et odio
          pellentesque. Tristique senectus et netus et. Nibh sed pulvinar proin
          gravida hendrerit lectus a. Nam aliquam sem et tortor consequat id
          porta nibh. Ornare lectus sit amet est placerat in egestas. Integer
          malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
          Pharetra sit amet aliquam id diam maecenas ultricies. Metus dictum at
          tempor commodo ullamcorper a lacus vestibulum sed. Aliquam ultrices
          sagittis orci a scelerisque purus semper eget duis. Ultricies mi eget
          mauris pharetra. Arcu non sodales neque sodales ut. Sit amet volutpat
          consequat mauris nunc congue. Vel quam elementum pulvinar etiam non
          quam lacus. Porta lorem mollis aliquam ut porttitor leo a. In est ante
          in nibh mauris. Cras sed felis eget velit aliquet sagittis. Vulputate
          dignissim suspendisse in est ante in nibh mauris. Gravida quis blandit
          turpis cursus in hac habitasse platea dictumst. Metus aliquam eleifend
          mi in nulla posuere sollicitudin aliquam. Mauris vitae ultricies leo
          integer malesuada nunc vel. Mattis pellentesque id nibh tortor id
          aliquet lectus proin. Tortor pretium viverra suspendisse potenti
          nullam ac tortor vitae purus. Euismod in pellentesque massa placerat.
          Eleifend donec pretium vulputate sapien nec sagittis aliquam
          malesuada. Sodales ut eu sem integer vitae justo eget magna. Morbi
          tristique senectus et netus. Malesuada fames ac turpis egestas integer
          eget. Purus sit amet luctus venenatis lectus magna fringilla. At
          volutpat diam ut venenatis tellus in metus vulputate eu. Sed turpis
          tincidunt id aliquet risus. Vestibulum sed arcu non odio euismod. Et
          netus et malesuada fames ac turpis egestas integer eget. Sollicitudin
          tempor id eu nisl nunc mi ipsum. Rhoncus urna neque viverra justo nec
          ultrices dui. Donec et odio pellentesque diam volutpat commodo. Turpis
          egestas pretium aenean pharetra. Magna fringilla urna porttitor
          rhoncus dolor purus non enim. Vulputate sapien nec sagittis aliquam
          malesuada. Pellentesque adipiscing commodo elit at imperdiet dui
          accumsan. Vel eros donec ac odio. Sed vulputate odio ut enim blandit.
          Magna eget est lorem ipsum dolor sit amet. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum leo vel. Vitae ultricies
          leo integer malesuada nunc vel risus commodo viverra. Vel quam
          elementum pulvinar etiam. Nulla at volutpat diam ut venenatis tellus.
          Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.
          Sodales ut eu sem integer vitae justo. Lacus vel facilisis volutpat
          est velit. Elit eget gravida cum sociis natoque penatibus et. Vitae
          justo eget magna fermentum iaculis eu non diam phasellus. In aliquam
          sem fringilla ut morbi tincidunt augue interdum velit. Scelerisque
          varius morbi enim nunc faucibus a pellentesque. Commodo quis imperdiet
          massa tincidunt nunc pulvinar sapien et ligula. Massa tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada proin. Rhoncus dolor
          purus non enim. Suspendisse ultrices gravida dictum fusce ut placerat
          orci nulla pellentesque. Purus in mollis nunc sed id semper risus in
          hendrerit. Dictum sit amet justo donec enim diam. Volutpat blandit
          aliquam etiam erat velit scelerisque in. Aenean euismod elementum nisi
          quis eleifend quam adipiscing. Ut tristique et egestas quis ipsum
          suspendisse ultrices gravida. Eu nisl nunc mi ipsum faucibus vitae
          aliquet. Lectus mauris ultrices eros in cursus turpis massa tincidunt.
        </Text>
      </Scrollable>
    </Div>
  )
}
