import React, { FC } from 'react'
import { Accordion } from '../accordion/accordion'
import { List } from 'src/atoms/list/list'
import { ListItem } from 'src/atoms/listItem/listItem'
import { Anchor } from 'src/atoms/anchor/anchor'
import { SubNavigationHeading } from './components/subNavigationHeading'
import { IconType } from 'src/atoms/iconography/types'
import { Div } from 'src/atoms/div/div'
import styles from './styles'

export type SubNavigationProps = {
  sections: SubNavigationType[]
  isMobile: boolean
  setIsMobileExpanded: (isMobileExpanded: boolean) => void
}

export type SubNavigationType = {
  title: string
  isActive: boolean
  links: SubNavigationLinkType[]
  icon: IconType
}
export type SubNavigationLinkType = {
  title: string
  isActive: boolean
  onClick: () => void
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
}
const linkVariants = {
  open: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    scale: 0.9,
    y: 64,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const SubNavigation: FC<SubNavigationProps> = ({
  sections,
  isMobile,
  setIsMobileExpanded,
}) => {
  const activeKeys = sections.map(section => {
    return sections.indexOf(section)
  })
  return (
    <aside css={styles.subNavContainer(isMobile)}>
      <div css={styles.accordionContainer}>
        {sections.map((section, index) => {
          return (
            <Accordion
              key={index}
              defaultActiveKeys={activeKeys}
              isExclusive={false}
              sections={[
                {
                  key: index,
                  heading: (
                    <SubNavigationHeading
                      icon={section.icon}
                      title={section.title}
                      isActive={section.isActive}
                      isMobile={isMobile}
                    />
                  ),
                  body: (
                    <List alignment="left" orientation="vertical">
                      <Div
                        animate={'open'}
                        variants={listVariants}
                        initial={'closed'}
                      >
                        {section.links.map((link, index) => {
                          return (
                            <ListItem
                              variants={linkVariants}
                              inset={{ vertical: 'x1_5', horizontal: 'x3' }}
                              orientation="vertical"
                              key={index}
                            >
                              <Anchor
                                cursor="pointer"
                                size="small"
                                color={
                                  link.isActive
                                    ? isMobile
                                      ? 'inverseBody'
                                      : 'primaryBrand'
                                    : isMobile
                                    ? 'inverseBody'
                                    : 'primaryBody'
                                }
                                title={link.title}
                                onClick={() => {
                                  link.onClick()
                                  setIsMobileExpanded(false)
                                }}
                              />
                            </ListItem>
                          )
                        })}
                      </Div>
                    </List>
                  ),
                },
              ]}
            />
          )
        })}
      </div>
    </aside>
  )
}
