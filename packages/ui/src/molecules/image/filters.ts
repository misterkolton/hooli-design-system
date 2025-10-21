export type FilterType = {
  name: string
  filter?: string
  background?: string
  mixBlendMode?: string
  opacity?: string
}
export const filters: FilterListType = [
  {
    name: 'none',
    filter: 'initial',
    background: 'initial',
  },
  {
    name: '1977',
    filter: 'contrast(110%) brightness(110%) saturate(130%)',
    background: 'rgba(243, 106, 188, 0.3)',
    mixBlendMode: 'screen',
  },
  {
    name: 'Aden',
    filter: 'contrast(90%) brightness(120%) saturate(85%) hue-rotate(20deg)',
    background:
      'linear-gradient(to right, rgba(66, 10, 14, 0.2) 1, rgba(66, 10, 14, 0))',
    mixBlendMode: 'darken',
  },
  {
    name: 'Amaro',
    filter: 'contrast(90%) brightness(110%) saturate(150%) hue-rotate(-10deg)',
  },
  {
    name: 'Brannan',
    filter: 'contrast(140%) sepia(50%)',
    background: 'rgba(161, 44, 199, 0.31)',
    mixBlendMode: 'lighten',
  },
  {
    name: 'Brooklyn',
    filter: 'contrast(90%) brightness(110%)',
    background:
      'radial-gradient(50% 50%, circle closest-corner, rgba(168, 223, 193, 0.4) 1, rgba(183, 196, 200, 0.2))',
    mixBlendMode: 'overlay',
  },
  {
    name: 'Clarendon',
    filter: 'contrast(120%) saturate(125%)',
    background: 'rgba(127, 187, 227, 0.2)',
    mixBlendMode: 'overlay',
  },
  {
    name: 'Earlybird',
    filter: 'contrast(90%) sepia(20%)',
    background:
      'radial-gradient(50% 50%, circle closest-corner, rgba(208, 186, 142, 1) 20, rgba(29, 2, 16, 0.2))',
    mixBlendMode: 'overlay',
  },
  {
    name: 'Gingham',
    filter: 'brightness(105%) hue-rotate(350deg)',
    background:
      'linear-gradient(to right, rgba(66, 10, 14, 0.2) 1, rgba(0, 0, 0, 0))',
    mixBlendMode: 'darken',
  },
  {
    name: 'Hudson',
    filter: 'contrast(90%) brightness(120%) saturate(110%)',
    background:
      ' radial-gradient(50% 50%, circle closest-corner, rgba(255, 177, 166, 1) 50, rgba(52, 33, 52, 1))',
    mixBlendMode: 'multiply',
    opacity: '0.5',
  },
  {
    name: 'Inkwell',
    filter: 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)',
    background: 'rgba(0, 0, 0, 0)',
  },
  {
    name: 'Lofi',
    filter: 'contrast(150%) saturate(110%)',
    mixBlendMode: 'multiply',
    background:
      'radial-gradient(50% 50%, circle closest-corner, rgba(0, 0, 0, 0) 70, rgba(34, 34, 34, 1))',
  },
  {
    name: 'Maven',
    filter: 'contrast(95%) brightness(95%) saturate(150%) sepia(25%)',
    background: 'rgba(3, 230, 26, 0.2)',
    mixBlendMode: 'hue',
  },
  {
    name: 'Perpetua',
    background:
      'linear-gradient(to bottom, rgba(0, 91, 154, 1) 1, rgba(61, 193, 230, 0))',
    mixBlendMode: 'soft-light',
    opacity: '0.5',
  },
  {
    name: 'Reyes',
    filter: 'contrast(85%) brightness(110%) saturate(75%) sepia(22%)',
    background: 'rgba(173, 205, 239, 1)',
    mixBlendMode: 'soft-light',
    opacity: '0.5',
  },
  {
    name: 'Stinson',
    filter: 'contrast(75%) brightness(115%) saturate(85%)',
    background: 'rgba(240, 149, 128, 0.2)',
    mixBlendMode: 'soft-light',
  },
  {
    name: 'Toaster',
    filter: 'contrast(150%) brightness(90%)',
    background:
      'radial-gradient(50% 50%, circle closest-corner, rgba(15, 78, 128, 1) 1, rgba(59, 0, 59, 1))',
    mixBlendMode: 'screen',
    opacity: '0.5',
  },
  {
    name: 'Walden',
    filter: 'brightness(110%) saturate(160%) sepia(30%) hue-rotate(350deg)',
    background: 'rgba(204, 68, 0, 1)',
    mixBlendMode: 'screen',
    opacity: '0.3',
  },
  {
    name: 'Valencia',
    filter: 'contrast(108%) brightness(108%) sepia(8%)',
    background: 'rgba(58, 3, 57, 1)',
    mixBlendMode: 'exclusion',
    opacity: '0.5',
  },
  {
    name: 'Xpro2',
    filter: 'sepia(30%)',
    background:
      'radial-gradient(50% 50%, circle closest-corner, rgba(224, 231, 230, 1) 40, rgba(43, 42, 161, 0.6))',
    mixBlendMode: 'color-burn',
  },
  {
    name: 'Locked',
    filter: 'grayscale(100%) invert(35%) blur(1px)',
  },
]
export type FilterListType = FilterType[]
