import React, { FC } from 'react'
import { Flex, Div, Text } from 'src/exports/atoms'
import { Separator, Button, Dialog, Scrollable } from 'src/exports/molecules'
import {
  UpsaleOptions,
  UpsaleOptionsType,
  SubmitOptionType,
} from './upsaleOptions'
import { useWindowSize } from 'src/hooks/useWindowSize'
import {
  Responsive,
  LiteralUnion,
  HOCSpacingKeys,
} from 'src/helpers/hoc-types/entityValueTypes'
import useResizeObserver from 'use-resize-observer'
import { Accordion } from '../../../organisms/accordion/accordion'

export type ExtraLinkType = {
  title: string
  onClick?: () => void
  href?: string
}

export type AcceptSelectedOptionType = {
  title: string
  onClick: () => void
}

export type UpsaleDialogProps = {
  title: string
  description: string
  checkoutTitle: string
  checkoutDescription: string
  upsaleContent?: React.ReactNode
  optionFormLocation?: 'right' | 'left'
  isOpen: boolean
  setIsDialogOpen: (isOpen: boolean) => void
  children: React.ReactNode //Form that gets passed in from client
  maxWidth?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  maxHeight?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  height?:
    | Responsive<LiteralUnion<HOCSpacingKeys>>
    | LiteralUnion<HOCSpacingKeys>
  zIndex?: number
  insetOverride?: HOCSpacingKeys
  successComponent?: React.ReactNode
  upsaleContentTitle?: string
  sponsorId?: string
  extraLink?: ExtraLinkType
  defaultNumOptionsShown?: number
  submitAction?: SubmitOptionType
  acceptSelectedAction?: AcceptSelectedOptionType
  shouldHideSendFreeCard?: boolean
  upsaleBanner?: React.ReactNode
  checkoutOnly?: boolean
} & UpsaleOptionsType

const SOC_FRONT_Z_INDEX = 103

export const UpsaleDialog: FC<UpsaleDialogProps> = ({
  title,
  description,
  checkoutTitle,
  checkoutDescription,
  selectableOptions,
  isOpen,
  setIsDialogOpen,
  upsaleContent,
  children,
  selectedOption,
  handleSelectedOption,
  removeSelectedOption,
  insetOverride,
  maxWidth,
  maxHeight,
  zIndex = SOC_FRONT_Z_INDEX, //Soc-frontend
  successComponent,
  upsaleContentTitle,
  sponsorId = '9070',
  extraLink,
  defaultNumOptionsShown,
  submitAction,
  acceptSelectedAction,
  shouldHideSendFreeCard,
  upsaleBanner,
  checkoutOnly,
}) => {
  const [shouldShowCheckoutView, setShouldShowCheckoutView] = React.useState(
    checkoutOnly ?? false,
  )
  const { ref, width, height } = useResizeObserver<HTMLDivElement>()
  const dialogFooterHeight = shouldHideSendFreeCard ? '120px' : '170px'
  const device = useWindowSize().width
  const isMobile = device <= 910
  const findOption = (selectedOption: string) => {
    return selectableOptions.filter(
      option => option.optionId === selectedOption,
    )
  }
  const activeSelectedOption = findOption(selectedOption)

  const handleOnClick = () => {
    setShouldShowCheckoutView(true)
    acceptSelectedAction?.onClick()
  }

  return (
    <Dialog
      ref={ref}
      isOpen={isOpen}
      onClose={() => setIsDialogOpen(!isOpen)}
      zIndex={zIndex}
      insetOverride={insetOverride}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={isMobile ? 'unset' : '80%'}
      shouldScroll
      width="100%"
    >
      {successComponent ? (
        <Flex
          width={`${width}px`}
          height={`${height}px`}
          justifyContent="center"
          alignItems={'center'}
        >
          {successComponent}
        </Flex>
      ) : (
        <>
          <Div width="100%" inset={{ bottom: 'x4', top: 'x8' }}>
            <Text
              type="subtitle"
              weight="bold"
              content={shouldShowCheckoutView ? checkoutTitle : title}
              alignment="center"
            />
            <Text
              type="body"
              content={
                shouldShowCheckoutView ? checkoutDescription : description
              }
              alignment="center"
            />
          </Div>

          <Scrollable>
            <Flex
              justifyContent={'center'}
              alignItems={'flex-start'}
              width={'100%'}
              inset={
                device <= 1367 && device > 580
                  ? {
                      top: 'x4',
                      horizontal: 'x8',
                      bottom: dialogFooterHeight,
                    }
                  : device <= 580
                  ? {
                      top: 'x4',
                      horizontal: 'x4',
                      bottom: dialogFooterHeight,
                    }
                  : {
                      top: 'x4',
                      horizontal: '10rem',
                      bottom: dialogFooterHeight,
                    }
              }
              flexWrap="wrap"
              overflowY="hidden"
              flexDirection={isMobile ? 'column' : 'row'}
            >
              <Flex
                flexWrap="wrap"
                inset={{ top: 'x3', horizontal: 'x3' }}
                overflowY="auto"
                width={isMobile || !upsaleContent ? '100%' : 'calc(50% - 12px)'}
                order={3}
              >
                <UpsaleOptions
                  selectableOptions={selectableOptions}
                  selectedOption={selectedOption}
                  handleSelectedOption={(optionId: string) =>
                    handleSelectedOption(optionId)
                  }
                  removeSelectedOption={removeSelectedOption}
                  showCheckoutView={shouldShowCheckoutView}
                  handleShouldShowCheckoutView={(value: boolean) =>
                    setShouldShowCheckoutView(value)
                  }
                  activeSelectedOption={activeSelectedOption[0]}
                  extraLink={{
                    title: extraLink?.title,
                    onClick: extraLink?.onClick,
                    href: extraLink?.href,
                  }}
                  defaultNumOptionsShown={defaultNumOptionsShown}
                  submitAction={submitAction}
                >
                  {children}
                </UpsaleOptions>
                {!shouldShowCheckoutView && (
                  <Flex
                    justifyContent="center"
                    position={isMobile ? 'fixed' : 'relative'}
                    bottom={isMobile ? '0' : 'unset'}
                    height="100px"
                    alignItems="center"
                    width="100%"
                    backgroundColor={isMobile ? 'foreground' : undefined}
                    boxShadow={isMobile ? 'mediumDark' : undefined}
                    left="0"
                    zIndex={isMobile ? 10 : undefined}
                  >
                    <Button
                      type={'primary'}
                      size="large"
                      fullWidth
                      title={
                        acceptSelectedAction?.title ?? 'Continue to Checkout'
                      }
                      disabled={!selectedOption.length}
                      onClick={handleOnClick}
                    />
                  </Flex>
                )}
                {upsaleBanner && <Div width="100%">{upsaleBanner}</Div>}
              </Flex>
              {!isMobile && <Div width="x3" order={2} />}
              {upsaleContent && (
                <Flex
                  overflowY="auto"
                  width={isMobile ? '100%' : 'calc(50% - 12px)'}
                  order={1}
                >
                  <Div width="100%" inset={{ top: '1.4rem' }}>
                    <Accordion
                      defaultActiveKeys={[1]}
                      arrowLocation="right"
                      background="background"
                      inset="x0"
                      isExclusive
                      sections={[
                        {
                          body: <>{upsaleContent}</>,
                          heading: (
                            <Div
                              inset={
                                isMobile ? { left: '4.1rem' } : { left: 'x4' }
                              }
                              width="100%"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Text
                                weight="bold"
                                type="caption"
                                content={upsaleContentTitle}
                              />
                              <Div
                                width="34px"
                                height="34px"
                                borderRadius="small"
                                backgroundSize="cover"
                                backgroundPosition="center"
                                outset={{ right: 'x2' }}
                              ></Div>
                            </Div>
                          ),
                          key: 1,
                        },
                      ]}
                    />
                  </Div>
                </Flex>
              )}
            </Flex>
          </Scrollable>
          {!shouldHideSendFreeCard && (
            <Div
              backgroundColor="foreground"
              width={device <= 1367 ? '100%' : 'calc(100% - 10rem)'}
              position={isMobile ? 'relative' : 'absolute'}
              bottom={isMobile ? dialogFooterHeight : 'x0'}
              inset={isMobile ? 'x1' : { bottom: 'x4' }}
              left="50%"
              transform="translateX(-50%)"
              zIndex={!isMobile ? SOC_FRONT_Z_INDEX : undefined}
            >
              <Separator
                orientation="horizontal"
                caption="Want to try it first?"
                shouldCaptionWrap={false}
              />
              <Flex
                width="100%"
                justifyContent="center"
                alignItems="center"
                inset={{ top: 'x2_5' }}
              >
                <Button
                  type="secondary"
                  outlined
                  hover
                  size="medium"
                  title="Send a Free Card"
                  onClick={() =>
                    window.open(
                      `https://www.sendoutcards.com/${sponsorId}/send/`,
                    )
                  }
                />
              </Flex>
            </Div>
          )}
        </>
      )}
    </Dialog>
  )
}
