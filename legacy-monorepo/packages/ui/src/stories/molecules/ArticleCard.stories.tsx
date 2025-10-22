import React from 'react'
import {
  ArticleCard,
  ArticleCardProps,
  Grid,
  GridItem,
} from 'src/exports/molecules'
import { Meta, StoryFn } from '@storybook/react/types-6-0'

export default {
  title: 'molecules/ArticleCard',
  component: ArticleCard,
  args: {
    imageURL:
      'https://cdn.sanity.io/images/oneb1r22/production/f7ca028f5ee1a0e5b21f67a9aa167416a007da98-1548x1120.png?q=100&w=400&fm=webp&dpr=2',
    category: 'Product',
    categoryColor: 'secondaryBrand',
    title: '5 Advanced Components Created with Variants',
    date: 'February 1, 2021',
    rowSpan: 1,
  },
} as Meta

const Template: StoryFn<ArticleCardProps> = args => (
  <Grid columnSize={320} rowSize={420} gap={16} maxWidth={1200}>
    <GridItem gridColSpan={2}>
      <ArticleCard {...args}></ArticleCard>
    </GridItem>
    <GridItem gridColSpan={1}>
      <ArticleCard {...args}></ArticleCard>
    </GridItem>
    <GridItem gridColSpan={1}>
      <ArticleCard {...args}></ArticleCard>
    </GridItem>
  </Grid>
)

export const RegularCard = Template.bind({})

export const ReversedCard = Template.bind({})
ReversedCard.args = {
  isContentOnTop: true,
}

export const CategoryColorCard = Template.bind({})
CategoryColorCard.args = {
  categoryColor: 'accent',
}
