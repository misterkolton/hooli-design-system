import React, { FC, useState, useEffect } from 'react'
import { HStack } from 'src/exports/atoms'
import { Text } from 'src/exports/atoms'
import { SizeType } from 'src/types/global'
import { computeTextTypeFromSize } from 'src/helpers/style-functions/computeTextTypeFromSize'

enum DateStrBrand {}

type DateStr = string & DateStrBrand

type Month = {
  index: number
  name: string
  dayCount: number
}
const getDifference = (currentDate: number, endDate: number) => {
  return Math.abs(currentDate - endDate)
}

const checkValidDateStr = (str: string): str is DateStr => {
  return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null
}

const toDateStr = (date: Date | string): DateStr => {
  if (typeof date === 'string') {
    if (checkValidDateStr(date)) {
      return date
    } else {
      throw new Error(
        `Invalid date string: ${date}, please use format YYYY-MM-DD`,
      )
    }
  }
  throw new Error(`Shouldn't get here (invalid toDateStr provided): ${date}`)
}
const isLeapYear = () => {
  const fullYear = new Date().getFullYear()
  if (fullYear % 4 === 0) {
    return true
  }
  return false
}

const getMonthDetails = (index: number): Month | null => {
  switch (index) {
    case 0:
      return {
        index: 0,
        name: 'January',
        dayCount: 31,
      }
    case 1:
      return {
        index: 1,
        name: 'February',
        dayCount: isLeapYear() ? 29 : 28,
      }
    case 2:
      return {
        index: 2,
        name: 'March',
        dayCount: 30,
      }
    case 3:
      return {
        index: 3,
        name: 'April',
        dayCount: 30,
      }
    case 4:
      return {
        index: 4,
        name: 'May',
        dayCount: 31,
      }
    case 5:
      return {
        index: 5,
        name: 'June',
        dayCount: 30,
      }
    case 6:
      return {
        index: 6,
        name: 'July',
        dayCount: 31,
      }
    case 7:
      return {
        index: 7,
        name: 'August',
        dayCount: 31,
      }
    case 8:
      return {
        index: 8,
        name: 'September',
        dayCount: 30,
      }
    case 9:
      return {
        index: 9,
        name: 'October',
        dayCount: 31,
      }
    case 10:
      return {
        index: 10,
        name: 'November',
        dayCount: 30,
      }
    case 11:
      return {
        index: 11,
        name: 'December',
        dayCount: 31,
      }
    default:
      return null
  }
}

export type CountdownTimerProps = {
  endDate: DateStr
  endTime?: {
    hour: number
    minute: number
    second: number
  }
  size?: SizeType
  timeReachedMessage?: string
}

export const CountdownTimer: FC<CountdownTimerProps> = ({
  endDate: date,
  endTime,
  size = 'medium',
  timeReachedMessage = 'No time left',
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [endDate] = useState(
    new Date(
      `${toDateStr(date)}${
        endTime
          ? `T${endTime.hour}:${endTime.minute}:${endTime.second}`
          : 'T00:00:00'
      }`,
    ),
  )

  const getRemainingYears = () => {
    return getDifference(currentDate.getFullYear(), endDate.getFullYear())
  }

  const getRemainingMonths = () => {
    return getDifference(currentDate.getMonth(), endDate.getMonth())
  }

  const getRemainingDays = () => {
    const currentDateDate = currentDate.getDate()
    const endDateDate = endDate.getDate()

    return getDifference(currentDateDate, endDateDate)
  }

  const compareDates = () => {
    return currentDate.getDate() - endDate.getDate()
  }

  const computeRemainingDates = () => {
    if (compareDates() > 1) {
      // Run the logic to calculate month - 1 and date difference by future month - 1 remaining days plus month days
      return {
        monthsRemaing: getRemainingMonths() - 1,
        daysRemaining:
          getDifference(
            getMonthDetails(endDate.getMonth())?.dayCount ?? 0,
            currentDate.getDate(),
          ) + endDate.getDate(),
        yearsRemaining: getRemainingYears(),
      }
    } else {
      return {
        monthsRemaing: getRemainingMonths(),
        daysRemaining: getRemainingDays(),
        yearsRemaining: getRemainingYears(),
      }
    }
  }

  const computeRemainingTime = () => {
    const difference = +endDate - +currentDate
    const timeLeft = {
      hoursRemaining: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutesRemaining: Math.floor((difference / 1000 / 60) % 60),
      secondsRemaining: Math.floor((difference / 1000) % 60),
    }
    return timeLeft
  }
  const { monthsRemaing, daysRemaining, yearsRemaining } =
    computeRemainingDates()

  const { hoursRemaining, minutesRemaining, secondsRemaining } =
    computeRemainingTime()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  })

  if (
    yearsRemaining <= 0 &&
    monthsRemaing <= 0 &&
    daysRemaining <= 0 &&
    hoursRemaining <= 0 &&
    minutesRemaining <= 0 &&
    secondsRemaining <= 0
  ) {
    return <Text type="subtitle">{timeReachedMessage}</Text>
  }
  return (
    <HStack justify="center" gap="x1">
      {daysRemaining < 1 && yearsRemaining < 1 && monthsRemaing < 1 ? (
        <HStack justify="center" gap="x1">
          {hoursRemaining > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {hoursRemaining} {hoursRemaining > 1 ? 'Hours' : 'Hour'}
            </Text>
          )}
          {minutesRemaining > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {minutesRemaining} {minutesRemaining > 1 ? 'Minutes' : 'Minute'}
            </Text>
          )}
          {secondsRemaining > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {secondsRemaining} {secondsRemaining > 1 ? 'Seconds' : 'Second'}
            </Text>
          )}
        </HStack>
      ) : (
        <HStack justify="center" gap="x1">
          {yearsRemaining > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {yearsRemaining} {yearsRemaining > 1 ? 'Years' : 'Year'}
            </Text>
          )}
          {monthsRemaing > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {monthsRemaing} {monthsRemaing > 1 ? 'Months' : 'Month'}
            </Text>
          )}
          {daysRemaining > 0 && (
            <Text type={computeTextTypeFromSize(size)}>
              {daysRemaining} {daysRemaining > 1 ? 'Days' : 'Day'}
            </Text>
          )}
        </HStack>
      )}
      <Text type={computeTextTypeFromSize(size)}>Left</Text>
    </HStack>
  )
}
