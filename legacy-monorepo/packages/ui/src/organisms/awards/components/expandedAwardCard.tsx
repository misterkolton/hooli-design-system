import React, { FC } from 'react'
import styles from '../styles'
import { Div } from 'src/atoms/div/div'
import { Text } from 'src/atoms/typography/text'
import { Card } from 'src/atoms/card/card'
import { List } from 'src/atoms/list/list'
import { ListItem } from 'src/atoms/listItem/listItem'
import { Todo } from 'src/molecules/todo/todo'
import { Button } from 'src/molecules/button/button'
import { Progress } from 'src/molecules/progress/progress'
import { Image } from 'src/molecules/image/image'
import { Icon } from 'src/atoms/iconography/components/icon'
import { IncrementalAwardType } from '../types'
import { IncrementalAwardLabel } from './incrementalAwardLabel'

export type ExpandedAwardProps = {
  image: string
  title: string
  description: string
  checklist: string[]
  checklistTitle: string
  checklistSubtitle: string
  close: () => void
  progress: IncrementalAwardType | number
}

export const ExpandedAwardCard: FC<ExpandedAwardProps> = ({
  image,
  title,
  checklist,
  checklistTitle,
  checklistSubtitle,
  description,
  close,
  progress,
}) => {
  return (
    <Card
      backgroundColor={'foreground'}
      outset="auto"
      overflow="auto"
      width="100%"
      maxWidth="720px"
      minWidth="320px"
      minHeight={{ xSmall: '500px' }}
      maxHeight={{
        xSmall: '780px',
        small: `${
          typeof progress === 'number'
            ? progress === 100
              ? '702px'
              : '530px'
            : progress.count > 0
            ? '702px'
            : '530px'
        }`,
      }}
      inset={{
        vertical: { xSmall: 'x4' },
        horizontal: { xSmall: 'x2', small: 'x4' },
      }}
      outsideClick={() => close()}
    >
      <Div
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        position="absolute"
        top={'16px'}
        right={'16px'}
        onClick={() => close()}
      >
        <Icon size="xSmall" name="close" primaryColor="primaryHeadingText" />
      </Div>
      {/* Flex Container */}
      <Div
        display="flex"
        justifyContent={
          typeof progress === 'number'
            ? progress === 100
              ? 'center'
              : { xSmall: 'center', small: 'flex-start' }
            : progress.count > 0
            ? 'center'
            : { xSmall: 'center', small: 'flex-start' }
        }
        alignItems="center"
        flexDirection={
          typeof progress === 'number'
            ? progress === 100
              ? 'column'
              : { xSmall: 'column', small: 'row' }
            : progress.count > 0
            ? 'column'
            : { xSmall: 'column', small: 'row' }
        }
        outset={{ bottom: { xSmall: 'x2', small: 'x4' } }}
        width="100%"
      >
        <Div
          outset={{ bottom: { xSmall: 'x2', small: 'x0' } }}
          width={{
            xSmall:
              typeof progress === 'number'
                ? progress === 100
                  ? '196px'
                  : '145px'
                : progress.count > 0
                ? '196px'
                : '145px',
            small:
              typeof progress === 'number'
                ? progress === 100
                  ? '276px'
                  : '145px'
                : progress.count > 0
                ? '276px'
                : '145px',
          }}
          height={{
            xSmall:
              typeof progress === 'number'
                ? progress === 100
                  ? '147px'
                  : '145px'
                : progress.count > 0
                ? '147px'
                : '145px',
            small:
              typeof progress === 'number'
                ? progress === 100
                  ? '207px'
                  : '145px'
                : progress.count > 0
                ? '207px'
                : '145px',
          }}
        >
          <Image
            isActive={true}
            image={{
              url: image,
            }}
            activeFilter={
              typeof progress === 'number'
                ? progress === 100
                  ? {
                      name: 'none',
                      filter: 'initial',
                      background: 'initial',
                    }
                  : {
                      name: 'Locked',
                      filter: 'grayscale(100%) invert(35%) blur(1px)',
                    }
                : progress.count > 0
                ? {
                    name: 'none',
                    filter: 'initial',
                    background: 'initial',
                  }
                : {
                    name: 'Locked',
                    filter: 'grayscale(100%) invert(35%) blur(1px)',
                  }
            }
            width={
              typeof progress === 'number'
                ? progress === 100
                  ? '100%'
                  : '145px'
                : progress.count > 0
                ? '100%'
                : '145px'
            }
            height={
              typeof progress === 'number'
                ? progress === 100
                  ? '100%'
                  : '145px'
                : progress.count > 0
                ? '100%'
                : '145px'
            }
          />
        </Div>
        {/* Flex Container */}
        <Div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={
            typeof progress === 'number'
              ? progress === 100
                ? 'center'
                : { xSmall: 'center', small: 'flex-start' }
              : progress.count > 0
              ? 'center'
              : { xSmall: 'center', small: 'flex-start' }
          }
          outset={
            typeof progress === 'number'
              ? progress === 100
                ? { top: { xSmall: 'x1', small: 'x2' } }
                : { left: { xSmall: 'x0', small: 'x4' } }
              : progress.count > 0
              ? { top: { xSmall: 'x1', small: 'x2' } }
              : { left: { xSmall: 'x0', small: 'x4' } }
          }
        >
          <Div
            outset={{
              top: { xSmall: 'x1', small: 'x0' },
              bottom: { xSmall: 'x1_5', small: 'x1' },
            }}
          >
            <Text
              weight="semiBold"
              type="largeBody"
              alignment="center"
              content={title}
              color="primaryHeading"
            />
          </Div>
          <Text
            type={{
              xSmall: 'caption',
              small: 'body',
              medium: 'body',
              large: 'body',
              xLarge: 'body',
            }}
            color="primaryBody"
            content={description}
          />
        </Div>
      </Div>
      <Div
        width="100%"
        height="16px"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        {typeof progress === 'number' ? (
          <Progress percentage={progress} />
        ) : (
          <IncrementalAwardLabel
            isExpanded={true}
            title={progress.title}
            count={progress.count}
            icon={progress.icon}
          />
        )}
      </Div>
      <Div
        width="100%"
        outset={{ top: { xSmall: 'x2', small: 'x3' }, bottom: 'x0' }}
      >
        <Text color="primaryBody" type="body" content={checklistTitle} />
      </Div>
      <Div width="100%">
        <Div inset={{ bottom: { xSmall: 'x1', small: 'x2' } }}>
          <Text
            isItalic={true}
            type={{
              xSmall: 'footnote',
              small: 'caption',
              medium: 'caption',
              large: 'caption',
              xLarge: 'caption',
            }}
            color="primaryBody"
            content={checklistSubtitle}
          />
        </Div>
      </Div>
      <List
        outset={{ bottom: 'x3' }}
        width="100%"
        orientation="vertical"
        alignment="center"
      >
        {checklist.map((item, i) => {
          return (
            <ListItem
              key={i}
              inset={{
                top: { xSmall: 'x_5' },
                right: { xSmall: 'x_5' },
                bottom: { xSmall: 'x_5' },
                left: { xSmall: 'x0' },
              }}
              orientation="vertical"
            >
              <Todo todo={item}></Todo>
            </ListItem>
          )
        })}
      </List>
      <Div css={styles.expandedButtonContainer}>
        <Button
          onClick={() => close()}
          type="secondary"
          size="medium"
          title="Close Details"
        />
      </Div>
    </Card>
  )
}
