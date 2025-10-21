import { TextType, TextColor } from 'src/exports/atoms'
import { SizeProperties, ThemeModeProperies } from '../types/global'

type SphereProperties = {
  circumference: number
  textType: TextType
}

export type Sphere = SizeProperties<SphereProperties>

type WidgetProperties = {
  backgroundColor: string
  fontColor: TextColor
}

export type Widget = ThemeModeProperies<WidgetProperties>
