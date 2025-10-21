import React, { FC } from 'react'
import { UpsaleDialog, UpsaleDialogProps } from 'src/exports/socPortfolio'
import { ComparisonIncludesList } from 'src/exports/organisms'
// TODO: replace the need to have the same constant for each subscription, replace with function that takes [ids]
import {
  comparisonItems37,
  comparisonItems97,
  comparisonItems10420,
} from './constants/constants'
import { useWindowSize } from 'src/hooks/useWindowSize'

export const SubscriptionUpsaleDialog: FC<UpsaleDialogProps> = ({
  title,
  description,
  checkoutTitle,
  checkoutDescription,
  selectableOptions,
  upsaleContentTitle,
  isOpen,
  setIsDialogOpen,
  optionFormLocation = 'right',
  children,
  selectedOption,
  removeSelectedOption,
  successComponent,
  insetOverride,
  handleSelectedOption,
  sponsorId,
  upsaleContent,
  ...rest
}) => {
  const device = useWindowSize().width
  return (
    <div>
      <UpsaleDialog
        sponsorId={sponsorId}
        title={title}
        description={description}
        checkoutTitle={checkoutTitle}
        checkoutDescription={checkoutDescription}
        selectableOptions={selectableOptions}
        selectedOption={selectedOption}
        handleSelectedOption={(optionId: string) =>
          handleSelectedOption(optionId)
        }
        removeSelectedOption={removeSelectedOption}
        upsaleContentTitle={upsaleContentTitle}
        upsaleContent={
          <ComparisonIncludesList
            isMinified={device <= 1017}
            items={
              selectedOption === '6' //this is the item code for the 37 subscription
                ? comparisonItems37
                : selectedOption === '122'
                ? comparisonItems10420
                : comparisonItems97
            }
          />
        }
        optionFormLocation={optionFormLocation}
        setIsDialogOpen={() => setIsDialogOpen(!isOpen)}
        isOpen={isOpen}
        successComponent={successComponent}
        insetOverride={insetOverride}
        maxWidth={'1500px'}
        {...rest}
      >
        {children}
      </UpsaleDialog>
    </div>
  )
}
