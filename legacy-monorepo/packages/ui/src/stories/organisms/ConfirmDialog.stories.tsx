import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { ConfirmDialog, ConfirmDialogProps } from 'src/exports/organisms'
import { Div } from 'src/exports/atoms'
import { Button } from 'src/exports/molecules'

export default {
  title: 'organisms/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    hasStackedActions: { control: { type: 'boolean' } },
    primaryAction: {
      // type: 'select',
      options: ['accept', 'decline'],
    },
  },
} as Meta

const Template: StoryFn<ConfirmDialogProps> = args => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <ConfirmDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      ></ConfirmDialog>
    </Div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  description:
    'We use your information to make sure that you have the most tailored experience possible with jarvis.',
  title: 'Why we need your information',
  accept: {
    title: 'Ok, Thanks',
    onClick: () => console.log('Accept'),
  },
  primaryAction: 'accept',
}

export const Confirm = Template.bind({})
Confirm.args = {
  description:
    'You will be unable to log back into your account if you continue. Are you sure you want to continue removing access?',
  title: 'Oh, no! Are you sure?',
  accept: {
    title: 'Yes, log me out',
    onClick: () => console.log('Logout action'),
  },
  decline: {
    title: 'Save my account',
    onClick: () => console.log('Decline'),
  },
  primaryAction: 'accept',
}
export const UpsaleDialogCard = Template.bind({})
UpsaleDialogCard.args = {
  description:
    'You will be unable to log back into your account if you continue. Are you sure you want to continue removing access?',
  title: 'Oh, no! Are you sure?',
  accept: {
    title: 'Yes, log me out',
    onClick: () => console.log('Logout action'),
  },
  decline: {
    title: 'Save my account',
    onClick: () => console.log('Decline'),
  },
  primaryAction: 'accept',
}
export const HasStackedActions = Template.bind({})
HasStackedActions.args = {
  description:
    'You will be unable to log back into your account if you continue. Are you sure you want to continue removing access?',
  title: 'Oh, no! Are you sure?',
  accept: {
    title: 'Yes, log me out',
    onClick: () => console.log('Logout action'),
  },
  decline: {
    title: 'Save my account',
    onClick: () => console.log('Decline'),
  },
  primaryAction: 'accept',
  hasStackedActions: true,
}

export const Disclaimer = Template.bind({})
Disclaimer.args = {
  title: 'Terms and Conditions',
  requireScroll: true,
  primaryAction: 'accept',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Purus gravida quis blandit turpis cursus in. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dignissim sodales ut eu sem integer vitae justo eget magna. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Ligula ullamcorper malesuada proin libero nunc consequat. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.' +
    'Faucibus vitae aliquet nec ullamcorper sit amet risus. Sagittis purus sit amet volutpat consequat. Faucibus in ornare quam viverra orci sagittis eu volutpat. Congue quisque egestas diam in arcu. Cursus in hac habitasse platea dictumst quisque sagittis. Aliquam faucibus purus in massa tempor nec feugiat nisl. Phasellus vestibulum lorem sed risus ultricies tristique. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vitae purus faucibus ornare suspendisse sed nisi lacus. Fringilla urna porttitor rhoncus dolor. Nibh sit amet commodo nulla facilisi nullam vehicula.' +
    'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Elementum nibh tellus molestie nunc non blandit massa. Vulputate dignissim suspendisse in est ante in nibh mauris. Placerat orci nulla pellentesque dignissim. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Tincidunt ornare massa eget egestas purus viverra accumsan. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Tincidunt lobortis feugiat vivamus at. Gravida cum sociis natoque penatibus et magnis dis. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Magna sit amet purus gravida quis blandit turpis cursus. Consequat mauris nunc congue nisi vitae suscipit.' +
    'Amet nulla facilisi morbi tempus. Velit laoreet id donec ultrices tincidunt arcu non sodales. Et odio pellentesque diam volutpat commodo. Integer vitae justo eget magna fermentum iaculis eu non. Cursus sit amet dictum sit amet justo. Ut enim blandit volutpat maecenas volutpat blandit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Ornare massa eget egestas purus viverra accumsan. Aliquam purus sit amet luctus. Urna neque viverra justo nec ultrices. Aliquam nulla facilisi cras fermentum odio eu feugiat. Ridiculus mus mauris vitae ultricies leo integer malesuada. Egestas purus viverra accumsan in. Tempus egestas sed sed risus. Malesuada pellentesque elit eget gravida. Adipiscing elit ut aliquam purus sit amet luctus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum.' +
    'Ac placerat vestibulum lectus mauris ultrices eros in cursus. Fringilla est ullamcorper eget nulla facilisi etiam. Nunc id cursus metus aliquam eleifend mi. Egestas sed tempus urna et pharetra pharetra massa. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. At in tellus integer feugiat scelerisque varius morbi enim. Faucibus purus in massa tempor nec feugiat. Dictumst quisque sagittis purus sit amet volutpat. Neque gravida in fermentum et sollicitudin. Sed enim ut sem viverra aliquet eget sit. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Ornare aenean euismod elementum nisi quis eleifend. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Sagittis eu volutpat odio facilisis. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Accumsan tortor posuere ac ut. Tellus at urna condimentum mattis pellentesque id nibh. Morbi leo urna molestie at elementum eu facilisis sed odio.',
  accept: {
    title: 'Accept',
    onClick: () => console.log('Accept'),
  },
  decline: {
    title: 'Decline',
    onClick: () => console.log('Decline'),
  },
  additionalLink: {
    title: 'Download',
    onClick: () => console.log('Download'),
  },
}
