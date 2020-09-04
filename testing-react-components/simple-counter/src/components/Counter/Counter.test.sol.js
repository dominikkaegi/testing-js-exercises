import React from 'react'
import {render} from '@testing-library/react'
import user from '@testing-library/user-event'

import Counter from './Counter'

const DEFAULT_COUNT_VALUE = 0

const INCREASE_BTN_REGEX = /increase/i
const DECREASE_BTN_REGEX = /decrease/i
const WARNING_MSG_REGEX = /Can't go below 0/i

test('Counter renders', () => {
  const {getByText, queryByText} = render(<Counter />)
  expect(getByText(INCREASE_BTN_REGEX)).toHaveAttribute('type', 'button')
  expect(getByText(DECREASE_BTN_REGEX)).toHaveAttribute('type', 'button')
  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(WARNING_MSG_REGEX)).toBeNull()
})

test('Counter increase and decreases value', () => {
  const {getByText, queryByText, debug} = render(<Counter />)
  const decreaseBtn = getByText(DECREASE_BTN_REGEX)
  const increaseBtn = getByText(INCREASE_BTN_REGEX)

  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()

  user.click(increaseBtn)
  expect(queryByText(`1`)).not.toBeNull()

  user.click(increaseBtn)
  expect(queryByText(`2`)).not.toBeNull()

  user.click(decreaseBtn)
  expect(queryByText(`1`)).not.toBeNull()
})

test('Counter show alert when trying to go below zero', () => {
  const {getByText, queryByText, debug} = render(<Counter />)
  const decreaseBtn = getByText(DECREASE_BTN_REGEX)

  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(WARNING_MSG_REGEX)).toBeNull()

  user.click(decreaseBtn)

  expect(queryByText(WARNING_MSG_REGEX)).not.toBeNull()
})

test('Counter hides alert when number is > 0', () => {
  const {getByText, queryByText, debug} = render(<Counter />)
  const decreaseBtn = getByText(DECREASE_BTN_REGEX)
  const increaseBtn = getByText(INCREASE_BTN_REGEX)

  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(WARNING_MSG_REGEX)).toBeNull()

  user.click(decreaseBtn)

  expect(queryByText(WARNING_MSG_REGEX)).not.toBeNull()

  user.click(increaseBtn)

  expect(queryByText(WARNING_MSG_REGEX)).toBeNull()
})