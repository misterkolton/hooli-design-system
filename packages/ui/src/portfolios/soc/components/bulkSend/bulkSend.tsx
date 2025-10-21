import React, { FC } from 'react'
import { Flex, Text, Div, VStack } from 'src/exports/atoms'
import {
  Button,
  SliderProgressColor,
  Separator,
  Overlay,
  Tooltip,
} from 'src/exports/molecules'
import {
  ConfigurationCard,
  ConfigurationCardProps,
  ConfirmDialog,
  ConfirmDialogProps,
} from 'src/exports/organisms'
import { CardQuantitySlider } from './cardQuantitySlider'
import { AnimatePresence } from 'framer-motion'

export type ConfigurationOptionSection = {
  title: string
  description: string
  tag?: string
  activeConfigurationId: string
  setActiveConfigurationId: (configurationId: string) => void
  configurationList: ConfigurationListOption[]
}

type ConfigurationListOption = {
  graphicType?: ConfigurationCardProps['graphic']
  configurationId: string
  configurationTitle: string
  configurationDescription: string
  configurationPrice?: number
  configurationItemPriceTitle?: string
}

export type BulkSendProps = {
  quantity: number
  setQuantity: (quantity: number) => void
  quantityDescription: string
  minQuantity: number
  maxQuantity: number
  sliderFill: SliderProgressColor
  sliderWidth: number
  unitPrice: number
  salePrice?: number
  title: string
  description: string
  configurationSections: ConfigurationOptionSection[]
  isDisabled?: boolean
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  addDialog?: ConfirmDialogProps
  removeDialog?: ConfirmDialogProps
  hasIncrement?: boolean
  isConfigurable?: boolean
  disableMessage: string
  sliderImage?: string
  sliderOrientation?: 'vertical' | 'horizontal'
  secondaryAction?: React.ReactNode
}

export const BulkSend: FC<BulkSendProps> = ({
  quantity,
  setQuantity,
  quantityDescription,
  minQuantity,
  maxQuantity,
  sliderFill,
  sliderWidth,
  unitPrice,
  salePrice,
  title,
  description,
  configurationSections,
  isActive,
  setIsActive,
  addDialog,
  removeDialog,
  hasIncrement,
  isConfigurable,
  disableMessage,
  sliderOrientation,
  sliderImage,
  secondaryAction,
}) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = React.useState(false)

  const clearBulkOption = () => {
    configurationSections.forEach(section =>
      section.setActiveConfigurationId(''),
    )
    setIsActive(false)
  }

  const handleSetRemoveDialog = () => {
    setIsRemoveDialogOpen(true)
  }

  const handleSetAddDialog = () => {
    setIsAddDialogOpen(true)
  }

  const overlayVariants = {
    open: {
      opacity: 0.5,
    },
    closed: {
      opacity: 0,
    },
  }

  return (
    <Flex inset="x3" flexDirection={{ xSmall: 'column', large: 'row' }}>
      {isAddDialogOpen && addDialog ? (
        <ConfirmDialog
          title={addDialog?.title}
          description={addDialog.description}
          isOpen
          accept={{
            title: addDialog.accept.title,
            onClick: () => {
              setIsActive(true)
              setIsAddDialogOpen(!isAddDialogOpen)
              addDialog.accept.onClick()
            },
          }}
          decline={{
            title: 'Cancel',
            onClick: () => {
              setIsAddDialogOpen(!isAddDialogOpen)
              addDialog.decline?.onClick()
            },
          }}
          requireScroll={false}
        />
      ) : (
        isRemoveDialogOpen &&
        removeDialog && (
          <ConfirmDialog
            title={removeDialog?.title}
            description={removeDialog?.description}
            isOpen
            accept={{
              title: removeDialog.accept.title,
              onClick: () => {
                clearBulkOption()
                removeDialog.accept.onClick()
                setIsRemoveDialogOpen(!isRemoveDialogOpen)
              },
            }}
            decline={{
              title: 'Cancel',
              onClick: () => {
                removeDialog.decline?.onClick()
                setIsRemoveDialogOpen(!isRemoveDialogOpen)
              },
            }}
            requireScroll={false}
          />
        )
      )}
      <Flex
        width={{ xSmall: '100%', large: '50%' }}
        flexDirection="column"
        outset={{ top: { xSmall: 'x4', large: 'x0' } }}
        order={{ xSmall: 2, large: 0 }}
      >
        <AnimatePresence>
          {!isConfigurable && (
            <Overlay
              variants={overlayVariants}
              initial={'closed'}
              animate={!isConfigurable ? 'open' : 'closed'}
              exit={'closed'}
              position="absolute"
              zIndex={1}
            />
          )}
        </AnimatePresence>
        <Div outset={{ bottom: 'x3' }} position="relative">
          <AnimatePresence>
            {!isConfigurable && (
              <Flex
                position="absolute"
                top="-32px"
                initial={{ opacity: 0 }}
                animate={!isConfigurable ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Tooltip
                  title={disableMessage}
                  direction="bottom"
                  background="light"
                  zIndex={2}
                />
              </Flex>
            )}
          </AnimatePresence>

          <Text
            type={{ xSmall: 'largeBody', medium: 'subtitle', large: 'title' }}
            weight="bold"
            color="primaryHeading"
            content={title}
          />
          <Text
            type={{ xSmall: 'caption', medium: 'body', large: 'largeBody' }}
            content={description}
          />
        </Div>
        {isActive && isConfigurable && (
          <>
            {configurationSections.map((section, index) => {
              return (
                <>
                  <Flex flexDirection="column" maxWidth="1200px" key={index}>
                    <Div outset={{ bottom: 'x3' }}>
                      {section.tag && (
                        <Text
                          type="caption"
                          color="secondaryBrand"
                          weight="semiBold"
                          content={section.tag}
                        />
                      )}
                      <Text
                        type={{
                          xSmall: 'largeBody',
                          medium: 'subtitle',
                          large: 'title',
                        }}
                        weight="bold"
                        color="primaryHeading"
                        content={section.title}
                        lineHeight={1.4}
                        outset={{ bottom: 'x1' }}
                      />
                      <Text
                        type={{
                          xSmall: 'caption',
                          medium: 'body',
                          large: 'largeBody',
                        }}
                        content={section.description}
                      />
                    </Div>
                    <VStack gap="x1">
                      {section.configurationList.map((config, index) => {
                        return (
                          <ConfigurationCard
                            key={index}
                            graphic={config.graphicType}
                            title={config.configurationTitle}
                            configurationId={config.configurationId}
                            description={config.configurationDescription}
                            onSelect={configurationId => {
                              section.setActiveConfigurationId(configurationId)
                            }}
                            isSelected={
                              config.configurationId ===
                              section.activeConfigurationId
                            }
                            cost={config.configurationPrice}
                            itemPriceTitle={config.configurationItemPriceTitle}
                          />
                        )
                      })}
                    </VStack>
                    {index !== configurationSections.length - 1 && (
                      <Div outset={{ vertical: 'x2' }}>
                        <Separator orientation="horizontal" />
                      </Div>
                    )}
                  </Flex>
                </>
              )
            })}
          </>
        )}
      </Flex>
      <Flex
        width={{ xSmall: '100%', large: '50%' }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        order={{ xSmall: 1, large: 0 }}
      >
        <CardQuantitySlider
          unitPrice={unitPrice}
          salePrice={salePrice}
          min={minQuantity}
          width={sliderWidth}
          max={maxQuantity}
          quantityDescription={quantityDescription}
          quantity={quantity}
          setQuantity={setQuantity}
          sliderFill={sliderFill}
          hasIncrement={hasIncrement}
          cardImage={sliderImage}
          cardOrientation={sliderOrientation}
          secondaryAction={secondaryAction}
        />
        <Flex outset={{ top: 'x4' }}>
          <Button
            type="secondary"
            size="medium"
            title={isActive ? 'Remove Bulk Option' : 'Add Bulk Option'}
            onClick={
              isActive && isConfigurable
                ? handleSetRemoveDialog
                : !isConfigurable
                ? undefined
                : handleSetAddDialog
            }
            fullWidth
            outlined
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
