import React, { FC, useState, useEffect } from 'react'
import { List } from 'src/atoms/list/list'
import styles from './styles'
import { ListItem, ListOrientation } from 'src/exports/atoms'
import { Div } from 'src/atoms/div/div'

export type SelectableListProps = {
  limit?: number
  orientation?: ListOrientation
  selectedIndexes: number[]
  setSelectedIndexes: (selectedIndexes: number[]) => void
}

export const SelectableList: FC<SelectableListProps> = ({
  limit = 1,
  orientation = 'vertical',
  children,
  selectedIndexes,
  setSelectedIndexes,
}) => {
  const isFadeNonSelected = limit > 1 ? true : false

  const [isDisabled, setIsDisabled] = useState(false)

  const handleSelect = (index: number) => {
    const hasFoundDuplicate = selectedIndexes.some(selectedIndex => {
      return selectedIndex === index
    })
    if (hasFoundDuplicate) {
      const filteredIndexes = selectedIndexes.filter(selectedIndex => {
        return selectedIndex !== index
      })
      setSelectedIndexes(filteredIndexes)
    } else {
      if (limit === 1) {
        setSelectedIndexes([index])
      } else {
        if (selectedIndexes.length < limit) {
          setSelectedIndexes([...selectedIndexes, index])
        }
      }
    }
  }

  useEffect(() => {
    if (selectedIndexes.length >= limit) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [selectedIndexes, limit])

  return (
    <List
      orientation={orientation}
      alignment="left"
      css={styles.selectableListContainer}
    >
      {React.Children.map(children, (child, index) => {
        const isActive = selectedIndexes.some(selected => selected === index)
        return (
          <ListItem
            onClick={() => handleSelect(index)}
            key={index}
            orientation="vertical"
            inset={{ vertical: 'x1' }}
          >
            <Div
              animate={
                isFadeNonSelected && isDisabled && !isActive
                  ? { opacity: 0.3 }
                  : { opacity: 1 }
              }
              initial={
                isFadeNonSelected && isDisabled && !isActive
                  ? { opacity: 0.3 }
                  : { opacity: 1 }
              }
              cursor="pointer"
            >
              {child}
            </Div>
          </ListItem>
        )
      })}
    </List>
  )
}
