import React from 'react'
import { Meta, StoryFn } from '@storybook/react/types-6-0'
import { Flex, Icon, IconProps } from 'src/exports/atoms'

export default {
  title: 'atoms/Icon',
  component: Icon,
  args: {
    primaryColor: 'primaryBrand',
    size: 'medium',
    orientation: 'up',
  },
  argTypes: {
    primaryColor: {
      control: {
        type: 'select',
        options: [
          'default',
          'primaryBrand',
          'secondaryBrand',
          'success',
          'warning',
          'danger',
          'primaryBodyText',
          'primaryHeadingText',
          'inverseBodyText',
          'inverseHeadingText',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
      },
    },
    name: {
      control: {
        type: 'select',
        options: [
          'fullBleedPortrait',
          'fullBleedIcon',
          'sliderVertical',
          'frame',
          'Cut',
          'wand',
          'layerAdd',
          'layerRemove',
          'layerDisabled',
          'signature',
          'shadows',
          'rotateLeft',
          'rotateRight',
          'colorPalette',
          'dropper',
          'textBox',
          'fontSize',
          'flipHorizontal',
          'flipVertical',
          'filter',
          'brightness',
          'aText',
          'frameWidth',
          'frameHeight',
          'cropRotate',
          'layerUp',
          'layerDown',
          'capitalizedText',
          'uppercaseText',
          'lowercaseText',
          'fullBleedImage',
          'fullBleedText',
          'panelMode',
          'viewPanels',
          'rotate',
          'view',
          'replaceImage',
          'quotation',
          'facebook',
          'instagram',
          'twitter',
          'linkedIn',
          'youTube',
          'pinterest',
          'visible',
          'invisible',
          'elementIcon',
          'allPanel',
          'closeCircle',
          'backgroundSettings',
          'upload',
          'stickers',
          'imageSwap',
          'clearPanel',
          'viewCarousel',
          'viewSinglePanel',
          'editorText',
          'layout',
          'background',
          'save',
          'signaturePen',
          'size',
          'variable',
          'imageUpload',
          'squareCheck',
          'userTag',
          'map',
          'mapLocation',
          'location',
          'creditCard',
          'home',
          'bag',
          'swap',
          'warning',
          'coaching',
          'promptingsIcon',
        ],
      },
    },
    orientation: {
      control: {
        default: 'left',
        type: 'select',
        options: ['left', 'right', 'up', 'down'],
      },
    },
  },
} as Meta

const IconTemplate: StoryFn<IconProps> = args => (
  <Flex inset="x2">
    <Icon {...args} />
  </Flex>
)

export const LeftChevron = IconTemplate.bind({})
LeftChevron.args = {
  name: 'chevron',
  orientation: 'left',
}

export const RightChevron = IconTemplate.bind({})
RightChevron.args = {
  name: 'chevron',
  orientation: 'right',
}

export const UpChevron = IconTemplate.bind({})
UpChevron.args = {
  name: 'chevron',
}

export const DownChevron = IconTemplate.bind({})
DownChevron.args = {
  name: 'chevron',
  orientation: 'down',
}

export const Add = IconTemplate.bind({})
Add.args = {
  name: 'add',
}
export const ImageUpload = IconTemplate.bind({})
ImageUpload.args = {
  name: 'imageUpload',
}

export const AlignCenter = IconTemplate.bind({})
AlignCenter.args = {
  name: 'alignCenter',
}

export const AlignLeft = IconTemplate.bind({})
AlignLeft.args = {
  name: 'alignLeft',
}

export const AlignRight = IconTemplate.bind({})
AlignRight.args = {
  name: 'alignRight',
}

export const AllPanel = IconTemplate.bind({})
AllPanel.args = {
  name: 'allPanel',
}
export const AText = IconTemplate.bind({})
AText.args = {
  name: 'aText',
}

export const Award = IconTemplate.bind({})
Award.args = {
  name: 'award',
}

export const Background = IconTemplate.bind({})
Background.args = {
  name: 'background',
}

export const Bag = IconTemplate.bind({})
Bag.args = {
  name: 'bag',
}

export const Brightness = IconTemplate.bind({})
Brightness.args = {
  name: 'brightness',
}

export const Calendar = IconTemplate.bind({})
Calendar.args = {
  name: 'calendar',
}

export const Campaigns = IconTemplate.bind({})
Campaigns.args = {
  name: 'campaigns',
}

export const CapitalizedText = IconTemplate.bind({})
CapitalizedText.args = {
  name: 'capitalizedText',
}

export const Cart = IconTemplate.bind({})
Cart.args = {
  name: 'cart',
}

export const Catalog = IconTemplate.bind({})
Catalog.args = {
  name: 'catalog',
}

export const Check = IconTemplate.bind({})
Check.args = {
  name: 'check',
}

export const ClearPanel = IconTemplate.bind({})
ClearPanel.args = {
  name: 'clearPanel',
}

export const CloseCircle = IconTemplate.bind({})
CloseCircle.args = {
  name: 'closeCircle',
}
export const Close = IconTemplate.bind({})
Close.args = {
  name: 'close',
}

export const Coaching = IconTemplate.bind({})
Coaching.args = {
  name: 'coaching',
}

export const Color = IconTemplate.bind({})
Color.args = {
  name: 'color',
}

export const ColorPalette = IconTemplate.bind({})
ColorPalette.args = {
  name: 'colorPalette',
}

export const Complete = IconTemplate.bind({})
Complete.args = {
  name: 'complete',
}

export const Contact = IconTemplate.bind({})
Contact.args = {
  name: 'contact',
}

export const Copy = IconTemplate.bind({})
Copy.args = {
  name: 'copy',
}

export const CreditCard = IconTemplate.bind({})
CreditCard.args = {
  name: 'creditCard',
}

export const CropRotate = IconTemplate.bind({})
CropRotate.args = {
  name: 'cropRotate',
}

export const Cut = IconTemplate.bind({})
Cut.args = {
  name: 'cut',
}

export const Delete = IconTemplate.bind({})
Delete.args = {
  name: 'delete',
}

export const Drag = IconTemplate.bind({})
Drag.args = {
  name: 'drag',
}

export const Download = IconTemplate.bind({})
Download.args = {
  name: 'download',
}

export const ElementIcon = IconTemplate.bind({})
ElementIcon.args = {
  name: 'elementIcon',
}
export const EdtiorText = IconTemplate.bind({})
EdtiorText.args = {
  name: 'editorText',
}

export const Envelope = IconTemplate.bind({})
Envelope.args = {
  name: 'envelope',
}

export const Exclamation = IconTemplate.bind({})
Exclamation.args = {
  name: 'exclamation',
}

export const Facebook = IconTemplate.bind({})
Facebook.args = {
  name: 'facebook',
}

export const Filter = IconTemplate.bind({})
Filter.args = {
  name: 'filter',
}

export const FilterBy = IconTemplate.bind({})
FilterBy.args = {
  name: 'filterBy',
}

export const FlipHorizontal = IconTemplate.bind({})
FlipHorizontal.args = {
  name: 'flipHorizontal',
}

export const FlipVertical = IconTemplate.bind({})
FlipVertical.args = {
  name: 'flipVertical',
}

export const FontSize = IconTemplate.bind({})
FontSize.args = {
  name: 'fontSize',
}

export const Frame = IconTemplate.bind({})
Frame.args = {
  name: 'frame',
}

export const FrameHeight = IconTemplate.bind({})
FrameHeight.args = {
  name: 'frameHeight',
}

export const FrameWidth = IconTemplate.bind({})
FrameWidth.args = {
  name: 'frameWidth',
}

export const FullBleed = IconTemplate.bind({})
FullBleed.args = {
  name: 'fullBleed',
}

export const FullBleedImage = IconTemplate.bind({})
FullBleedImage.args = {
  name: 'fullBleedImage',
}

export const FullBleedText = IconTemplate.bind({})
FullBleedText.args = {
  name: 'fullBleedText',
}

export const Gift = IconTemplate.bind({})
Gift.args = {
  name: 'gift',
}

export const Groups = IconTemplate.bind({})
Groups.args = {
  name: 'groups',
}

export const Hamburger = IconTemplate.bind({})
Hamburger.args = {
  name: 'hamburger',
}

export const Home = IconTemplate.bind({})
Home.args = {
  name: 'home',
}

export const IDCard = IconTemplate.bind({})
IDCard.args = {
  name: 'idCard',
}

export const Instagram = IconTemplate.bind({})
Instagram.args = {
  name: 'instagram',
}

export const Image = IconTemplate.bind({})
Image.args = {
  name: 'image',
}

export const ImageSwap = IconTemplate.bind({})
ImageSwap.args = {
  name: 'imageSwap',
}

export const Information = IconTemplate.bind({})
Information.args = {
  name: 'information',
}

export const Layer = IconTemplate.bind({})
Layer.args = {
  name: 'layer',
}

export const LayerAdd = IconTemplate.bind({})
LayerAdd.args = {
  name: 'layerAdd',
}

export const LayerDisabled = IconTemplate.bind({})
LayerDisabled.args = {
  name: 'layerDisabled',
}

export const LayerDown = IconTemplate.bind({})
LayerDown.args = {
  name: 'layerDown',
}

export const LayerRemove = IconTemplate.bind({})
LayerRemove.args = {
  name: 'layerRemove',
}

export const Layout = IconTemplate.bind({})
Layout.args = {
  name: 'layout',
}
export const LinkedIn = IconTemplate.bind({})
LinkedIn.args = {
  name: 'linkedIn',
}

export const Loading = IconTemplate.bind({})
Loading.args = {
  name: 'loading',
}

export const Location = IconTemplate.bind({})
Location.args = {
  name: 'location',
}

export const Lock = IconTemplate.bind({})
Lock.args = {
  name: 'lock',
}

export const LowercaseText = IconTemplate.bind({})
LowercaseText.args = {
  name: 'lowercaseText',
}

export const Map = IconTemplate.bind({})
Map.args = {
  name: 'map',
}

export const MapLocation = IconTemplate.bind({})
MapLocation.args = {
  name: 'mapLocation',
}

export const Minus = IconTemplate.bind({})
Minus.args = {
  name: 'minus',
}

export const MultipleUsers2x = IconTemplate.bind({})
MultipleUsers2x.args = {
  name: 'multipleUsers2x',
}

export const MultipleUsers3x = IconTemplate.bind({})
MultipleUsers3x.args = {
  name: 'multipleUsers3x',
}

export const NoUsers = IconTemplate.bind({})
NoUsers.args = {
  name: 'noUsers',
}

export const PanelMode = IconTemplate.bind({})
PanelMode.args = {
  name: 'panelMode',
}

export const Pinterest = IconTemplate.bind({})
Pinterest.args = {
  name: 'pinterest',
}

export const Play = IconTemplate.bind({})
Play.args = {
  name: 'play',
}

export const Plus = IconTemplate.bind({})
Plus.args = {
  name: 'add',
}

export const PlusSquare = IconTemplate.bind({})
PlusSquare.args = {
  name: 'plusSquare',
}
export const PromptingsIcon = IconTemplate.bind({})
PromptingsIcon.args = {
  name: 'promptingsIcon',
}

export const Quotation = IconTemplate.bind({})
Quotation.args = {
  name: 'quotation',
}

export const Redo = IconTemplate.bind({})
Redo.args = {
  name: 'redo',
}

export const ReplaceImage = IconTemplate.bind({})
ReplaceImage.args = {
  name: 'replaceImage',
}

export const Rotate = IconTemplate.bind({})
Rotate.args = {
  name: 'rotate',
}

export const RotateLeft = IconTemplate.bind({})
RotateLeft.args = {
  name: 'rotateLeft',
}

export const RotateRight = IconTemplate.bind({})
RotateRight.args = {
  name: 'rotateRight',
}

export const Search = IconTemplate.bind({})
Search.args = {
  name: 'search',
}

export const Shadows = IconTemplate.bind({})
Shadows.args = {
  name: 'shadows',
}

export const Signature = IconTemplate.bind({})
Signature.args = {
  name: 'signature',
}
export const Size = IconTemplate.bind({})
Size.args = {
  name: 'size',
}

export const SliderHorizontal = IconTemplate.bind({})
SliderHorizontal.args = {
  name: 'sliderHorizontal',
}

export const SliderVertical = IconTemplate.bind({})
SliderVertical.args = {
  name: 'sliderVertical',
}

export const SOCLogo = IconTemplate.bind({})
SOCLogo.args = {
  name: 'socLogo',
}

export const Star = IconTemplate.bind({})
Star.args = {
  name: 'star',
}
export const Save = IconTemplate.bind({})
Save.args = {
  name: 'save',
}
export const SignaturePen = IconTemplate.bind({})
SignaturePen.args = {
  name: 'signaturePen',
}

export const Stickers = IconTemplate.bind({})
Stickers.args = {
  name: 'stickers',
}
export const SquareCheck = IconTemplate.bind({})
SquareCheck.args = {
  name: 'squareCheck',
}

export const Swap = IconTemplate.bind({})
Swap.args = {
  name: 'swap',
}

export const Template = IconTemplate.bind({})
Template.args = {
  name: 'template',
}

export const TenDoor = IconTemplate.bind({})
TenDoor.args = {
  name: 'tenDoor',
}

export const Text = IconTemplate.bind({})
Text.args = {
  name: 'text',
}

export const TextBox = IconTemplate.bind({})
TextBox.args = {
  name: 'textBox',
}

export const Twitter = IconTemplate.bind({})
Twitter.args = {
  name: 'twitter',
}

export const Undo = IconTemplate.bind({})
Undo.args = {
  name: 'undo',
}

export const UserTag = IconTemplate.bind({})
UserTag.args = {
  name: 'userTag',
}

export const Upload = IconTemplate.bind({})
Upload.args = {
  name: 'upload',
}

export const UppercaseText = IconTemplate.bind({})
UppercaseText.args = {
  name: 'uppercaseText',
}

export const User = IconTemplate.bind({})
User.args = {
  name: 'user',
}

export const UserSuccess = IconTemplate.bind({})
UserSuccess.args = {
  name: 'userSuccess',
  primaryColor: 'primary',
  secondaryColor: 'secondary',
}

export const Variable = IconTemplate.bind({})
Variable.args = {
  name: 'variable',
}
export const View = IconTemplate.bind({})
View.args = {
  name: 'view',
}

export const ViewCarousel = IconTemplate.bind({})
ViewCarousel.args = {
  name: 'viewCarousel',
}

export const ViewPanels = IconTemplate.bind({})
ViewPanels.args = {
  name: 'viewPanels',
}

export const ViewSinglePanel = IconTemplate.bind({})
ViewSinglePanel.args = {
  name: 'viewSinglePanel',
}

export const Wand = IconTemplate.bind({})
Wand.args = {
  name: 'wand',
}
export const Warning = IconTemplate.bind({})
Warning.args = {
  name: 'warning',
}

export const Youtube = IconTemplate.bind({})
Youtube.args = {
  name: 'youtube',
}
