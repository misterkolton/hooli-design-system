import React, { useRef } from 'react'
import { Menu } from 'src/molecules/menu/menu'
import { MenuSection } from 'src/molecules/menu/components/menuSection'
import { MenuItem } from 'src/molecules/menu/components/menuItem'
import { springTransition } from 'src/animations/transitions'
import { IconType } from 'src/atoms/iconography/types'
import { UserCard } from '../userCard/userCard'
import { Icon } from 'src/atoms/iconography/components/icon'
import { motion, AnimatePresence } from 'framer-motion'
import { ListItem } from 'src/atoms/listItem/listItem'
import { Div } from 'src/atoms/div/div'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import styles from './styles'
import { UserInfo } from '../qdsChrome/qdsChrome'

export type AccountMenuProps = {
  sections: AccountMenuItem[][]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  navOpen: boolean
  user?: UserInfo
  children?: React.ReactNode
}
export type AccountMenuItem = {
  icon?: IconType
  title: string
  onClick: () => void
  badge?: string
}
export const AccountMenu = ({
  isOpen,
  navOpen,
  sections,
  setIsOpen,
  user,
}: AccountMenuProps) => {
  const offsetVariants = {
    open: {
      x: 200,
    },
    closed: {
      x: 50,
    },
  }
  const menuVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  const ref = useRef<HTMLHeadingElement>(null)

  useOutsideClick(
    ref,
    () => {
      setIsOpen(true)
    },
    'accountMenuClickEvent',
  )
  return (
    <motion.div
      animate={navOpen ? 'open' : 'closed'}
      variants={offsetVariants}
      initial={'closed'}
      css={styles.accountMenuContainer}
      transition={springTransition}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            key="menu"
            exit={'closed'}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            initial={'closed'}
          >
            <Menu>
              {user && (
                <MenuSection divider={true}>
                  <ListItem orientation="vertical">
                    <Div
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                      cursor="pointer"
                      onClick={() => {
                        user.onClick && user.onClick()
                        setIsOpen(false)
                      }}
                    >
                      <UserCard
                        size={'small'}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        profileImage={user.profileImage}
                        caption={'Manage Account'}
                        minimize={!isOpen}
                        active={true}
                        heading={`Hello ${user.firstName}`}
                      />

                      <Icon
                        size="small"
                        name="chevron"
                        primaryColor="default"
                        orientation="right"
                      />
                    </Div>
                  </ListItem>
                </MenuSection>
              )}
              {sections.map((section, index) => {
                return (
                  <MenuSection key={index} divider={true}>
                    {section.map((item, index) => {
                      return (
                        <motion.div
                          exit={'closed'}
                          key={index}
                          css={styles.itemWrapper}
                          variants={itemVariants}
                        >
                          <MenuItem
                            onClick={() => {
                              item.onClick()
                              setIsOpen(false)
                            }}
                            title={item.title}
                            icon={item.icon}
                            badge={item.badge}
                          />
                        </motion.div>
                      )
                    })}
                  </MenuSection>
                )
              })}
            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
