import React, { FC } from 'react'
import { Gift } from '../icons/gift'
import { Catalog } from '../icons/catalog'
import { Award } from '../icons/award'
import { Contact } from '../icons/contact'
import { Campaigns } from '../icons/campaigns'
import { SOCLogo } from '../icons/socLogo'
import { RightChevron } from '../icons/rightChevron'
import { Close } from '../icons/close'
import { TenDoor } from '../icons/tenDoor'
import { IconProps } from '../types/index'
import { MultipleUsers2x } from '../icons/multipleUsers2x'
import { MultipleUsers3x } from '../icons/multipleUsers3x'
import { Hamburger } from '../icons/hamburger'
import { LeftChevron } from '../icons/leftChevron'
import { Chevron } from '../icons/chevron'
import { Information } from '../icons/information'
import { Plus } from '../icons/plus'
import { Minus } from '../icons/minus'
import { FilterBy } from '../icons/filterBy'
import { Groups } from '../icons/groups'
import { IDCard } from '../icons/idCard'
import { Star } from '../icons/star'
import { PlusSquare } from '../icons/plusSquare'
import { Search } from '../icons/search'
import { Cart } from '../icons/cart'
import { Slider } from '../icons/slider'
import { PriceTag } from '../icons/priceTag'
import { Layer } from '../icons/layer'
import { Loading } from '../icons/loading'
import { Play } from '../icons/play'
import { Lock } from '../icons/lock'
import { User } from '../icons/user'
import { NoUsers } from '../icons/noUsers'
import { Add } from '../icons/add'
import { Check } from '../icons/check'
import { Exclamation } from '../icons/exclamation'
import { Envelope } from '../icons/envelope'
import { UserSuccess } from '../icons/userSuccess'
import { Image } from '../icons/image'
import { Text } from '../icons/text'
import { Color } from '../icons/color'
import { Template } from '../icons/template'
import { Redo } from '../icons/redo'
import { Undo } from '../icons/undo'
import { Copy } from '../icons/copy'
import { Drag } from '../icons/drag'
import { Delete } from '../icons/delete'
import { Crop } from '../icons/crop'
import { AlignCenter } from '../icons/alignCenter'
import { AlignLeft } from '../icons/alignLeft'
import { AlignRight } from '../icons/alignRight'
import { FullBleed } from '../icons/fullBleed'
import { FullBleedLandscape } from '../icons/fullBleedLandscape'
import { FullBleedPortrait } from '../icons/fullBleedPortrait'
import { SliderVertical } from '../icons/sliderVertical'
import { Frame } from '../icons/frame'
import { Cut } from '../icons/cut'
import { Wand } from '../icons/wand'
import { LayerAdd } from '../icons/layerAdd'
import { LayerRemove } from '../icons/layerRemove'
import { LayerDisabled } from '../icons/layerDisabled'
import { Signature } from '../icons/signature'
import { Shadows } from '../icons/shadows'
import { RotateLeft } from '../icons/rotateLeft'
import { RotateRight } from '../icons/rotateRight'
import { ColorPalette } from '../icons/colorPalette'
import { Dropper } from '../icons/dropper'
import { TextBox } from '../icons/textBox'
import { FontSize } from '../icons/fontSize'
import { FlipHorizontal } from '../icons/flipHorizontal'
import { FlipVertical } from '../icons/flipVertical'
import { Filter } from '../icons/filter'
import { Brightness } from '../icons/brightness'
import { AText } from '../icons/aText'
import { FrameWidth } from '../icons/frameWidth'
import { FrameHeight } from '../icons/frameHeight'
import { CropRotate } from '../icons/cropRotate'
import { LayerUp } from '../icons/layerUp'
import { LayerDown } from '../icons/layerDown'
import { CapitalizedText } from '../icons/capitalizedText'
import { UppercaseText } from '../icons/uppercaseText'
import { LowercaseText } from '../icons/lowercaseText'
import { FullBleedImage } from '../icons/fullBleedImage'
import { FullBleedText } from '../icons/fullBleedText'
import { PanelMode } from '../icons/panelMode'
import { ViewPanels } from '../icons/viewPanels'
import { Rotate } from '../icons/rotate'
import { View } from '../icons/view'
import { ReplaceImage } from '../icons/replaceImage'
import { Quotation } from '../icons/quotation'
import { Facebook } from '../icons/facebook'
import { Instagram } from '../icons/instagram'
import { Twitter } from '../icons/twitter'
import { LinkedIn } from '../icons/linkedin'
import { YouTube } from '../icons/youtube'
import { Pinterest } from '../icons/pinterest'
import { Visible } from '../icons/visible'
import { Invisible } from '../icons/invisible'
import { ElementIcon } from '../icons/elementIcon'
import { Complete } from '../icons/complete'
import { Download } from '../icons/download'
import { AllPanel } from '../icons/allPanel'
import { useEntities } from 'src/hooks/useEntities'
import { CloseCircle } from '../icons/closeCircle'
import { BackgroundSettings } from '../icons/backgroundSetting'
import { Upload } from '../icons/upload'
import { Stickers } from '../icons/stickers'
import { ImageSwap } from '../icons/imageSwap'
import { ClearPanel } from '../icons/clearPanel'
import { ViewCarousel } from '../icons/viewCarousel'
import { ViewSinglePanel } from '../icons/viewSinglePanel'
import { EdtiorText } from '../icons/editorText'
import { Layout } from '../icons/layout'
import { Background } from '../icons/background'
import { Save } from '../icons/save'
import { SignaturePen } from '../icons/signaturePen'
import { Variable } from '../icons/variable'
import { ImageUpload } from '../icons/imageUpload'
import { Size } from '../icons/size'
import { SquareCheck } from '../icons/squareCheck'
import { UserTag } from '../icons/usertag'
import { Map } from '../icons/map'
import { Location } from '../icons/location'
import { CreditCard } from '../icons/creditCard'
import { MapLocation } from '../icons/mapLocation'
import { Calendar } from '../icons/calendar'
import { Home } from '../icons/home'
import { Bag } from '../icons/bag'
import { Swap } from '../icons/swap'
import { Warning } from '../icons/warning'
import { Coaching } from '../icons/coaching'
import { PromptingsIcon } from '../icons/promptingsIcon'

export const Icon: FC<IconProps> = ({
  primaryColor,
  secondaryColor,
  onClick,
  name,
  size,
  orientation,
}) => {
  const { icons } = useEntities()
  const entity = icons
  const props = {
    primaryColor,
    secondaryColor,
    onClick,
    name,
    size,
    entity,
    orientation,
  }
  switch (props.name) {
    case 'catalog':
      return <Catalog {...props} />
    case 'socLogo':
      return <SOCLogo {...props} />
    case 'campaigns':
      return <Campaigns {...props} />
    case 'gift':
      return <Gift {...props} />
    case 'tenDoor':
      return <TenDoor {...props} />
    case 'rightChevron':
      return <RightChevron {...props} />
    case 'leftChevron':
      return <LeftChevron {...props} />
    case 'chevron':
      return <Chevron {...props} />
    case 'close':
      return <Close {...props} />
    case 'award':
      return <Award {...props} />
    case 'allPanel':
      return <AllPanel {...props} />
    case 'contact':
      return <Contact {...props} />
    case 'multipleUsers2x':
      return <MultipleUsers2x {...props} />
    case 'multipleUsers3x':
      return <MultipleUsers3x {...props} />
    case 'information':
      return <Information {...props} />
    case 'hamburger':
      return <Hamburger {...props} />
    case 'plus':
      return <Plus {...props} />
    case 'plusSquare':
      return <PlusSquare {...props} />
    case 'minus':
      return <Minus {...props} />
    case 'filterBy':
      return <FilterBy {...props} />
    case 'fullBleed':
      return <FullBleed {...props} />
    case 'groups':
      return <Groups {...props} />
    case 'idCard':
      return <IDCard {...props} />
    case 'star':
      return <Star {...props} />
    case 'search':
      return <Search {...props} />
    case 'cart':
      return <Cart {...props} />
    case 'sliderHorizontal':
      return <Slider {...props} />
    case 'sliderVertical':
      return <SliderVertical {...props} />
    case 'priceTag':
      return <PriceTag {...props} />
    case 'layer':
      return <Layer {...props} />
    case 'layerUp':
      return <LayerUp {...props} />
    case 'layerDown':
      return <LayerDown {...props} />
    case 'loading':
      return <Loading {...props} />
    case 'play':
      return <Play {...props} />
    case 'lock':
      return <Lock {...props} />
    case 'user':
      return <User {...props} />
    case 'noUsers':
      return <NoUsers {...props} />
    case 'add':
      return <Add {...props} />
    case 'check':
      return <Check {...props} />
    case 'exclamation':
      return <Exclamation {...props} />
    case 'envelope':
      return <Envelope {...props} />
    case 'userSuccess':
      return <UserSuccess {...props} />
    case 'image':
      return <Image {...props} />
    case 'imageSwap':
      return <ImageSwap {...props} />
    case 'text':
      return <Text {...props} />
    case 'color':
      return <Color {...props} />
    case 'template':
      return <Template {...props} />
    case 'redo':
      return <Redo {...props} />
    case 'undo':
      return <Undo {...props} />
    case 'copy':
      return <Copy {...props} />
    case 'drag':
      return <Drag {...props} />
    case 'delete':
      return <Delete {...props} />
    case 'crop':
      return <Crop {...props} />
    case 'alignCenter':
      return <AlignCenter {...props} />
    case 'alignLeft':
      return <AlignLeft {...props} />
    case 'alignRight':
      return <AlignRight {...props} />
    case 'fullBleedLandscape':
      return <FullBleedLandscape {...props} />
    case 'fullBleedPortrait':
      return <FullBleedPortrait {...props} />
    case 'cropRotate':
      return <CropRotate {...props} />
    case 'frame':
      return <Frame {...props} />
    case 'cut':
      return <Cut {...props} />
    case 'wand':
      return <Wand {...props} />
    case 'layerAdd':
      return <LayerAdd {...props} />
    case 'layerRemove':
      return <LayerRemove {...props} />
    case 'layerDisabled':
      return <LayerDisabled {...props} />
    case 'signature':
      return <Signature {...props} />
    case 'shadows':
      return <Shadows {...props} />
    case 'rotateLeft':
      return <RotateLeft {...props} />
    case 'rotateRight':
      return <RotateRight {...props} />
    case 'colorPalette':
      return <ColorPalette {...props} />
    case 'dropper':
      return <Dropper {...props} />
    case 'textBox':
      return <TextBox {...props} />
    case 'fontSize':
      return <FontSize {...props} />
    case 'flipHorizontal':
      return <FlipHorizontal {...props} />
    case 'flipVertical':
      return <FlipVertical {...props} />
    case 'filter':
      return <Filter {...props} />
    case 'brightness':
      return <Brightness {...props} />
    case 'aText':
      return <AText {...props} />
    case 'frameWidth':
      return <FrameWidth {...props} />
    case 'frameHeight':
      return <FrameHeight {...props} />
    case 'capitalizedText':
      return <CapitalizedText {...props} />
    case 'uppercaseText':
      return <UppercaseText {...props} />
    case 'lowercaseText':
      return <LowercaseText {...props} />
    case 'fullBleedImage':
      return <FullBleedImage {...props} />
    case 'fullBleedText':
      return <FullBleedText {...props} />
    case 'panelMode':
      return <PanelMode {...props} />
    case 'viewPanels':
      return <ViewPanels {...props} />
    case 'rotate':
      return <Rotate {...props} />
    case 'view':
      return <View {...props} />
    case 'replaceImage':
      return <ReplaceImage {...props} />
    case 'quotation':
      return <Quotation {...props} />
    case 'facebook':
      return <Facebook {...props} />
    case 'instagram':
      return <Instagram {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'linkedIn':
      return <LinkedIn {...props} />
    case 'youtube':
      return <YouTube {...props} />
    case 'pinterest':
      return <Pinterest {...props} />
    case 'visible':
      return <Visible {...props} />
    case 'invisible':
      return <Invisible {...props} />
    case 'elementIcon':
      return <ElementIcon {...props} />
    case 'complete':
      return <Complete {...props} />
    case 'download':
      return <Download {...props} />
    case 'closeCircle':
      return <CloseCircle {...props} />
    case 'backgroundSettings':
      return <BackgroundSettings {...props} />
    case 'upload':
      return <Upload {...props} />
    case 'stickers':
      return <Stickers {...props} />
    case 'clearPanel':
      return <ClearPanel {...props} />
    case 'viewCarousel':
      return <ViewCarousel {...props} />
    case 'viewSinglePanel':
      return <ViewSinglePanel {...props} />
    case 'editorText':
      return <EdtiorText {...props} />
    case 'layout':
      return <Layout {...props} />
    case 'background':
      return <Background {...props} />
    case 'save':
      return <Save {...props} />
    case 'signaturePen':
      return <SignaturePen {...props} />
    case 'size':
      return <Size {...props} />
    case 'variable':
      return <Variable {...props} />
    case 'imageUpload':
      return <ImageUpload {...props} />
    case 'squareCheck':
      return <SquareCheck {...props} />
    case 'userTag':
      return <UserTag {...props} />
    case 'map':
      return <Map {...props} />
    case 'mapLocation':
      return <MapLocation {...props} />
    case 'location':
      return <Location {...props} />
    case 'creditCard':
      return <CreditCard {...props} />
    case 'calendar':
      return <Calendar {...props} />
    case 'home':
      return <Home {...props} />
    case 'bag':
      return <Bag {...props} />
    case 'swap':
      return <Swap {...props} />
    case 'warning':
      return <Warning {...props} />
    case 'coaching':
      return <Coaching {...props} />
    case 'promptingsIcon':
      return <PromptingsIcon {...props} />
  }
}
