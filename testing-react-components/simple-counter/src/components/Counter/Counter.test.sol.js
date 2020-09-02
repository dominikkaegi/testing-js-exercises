import React from 'react'
import {render} from '@testing-library/react'
import user from '@testing-library/user-event'

import Counter from './Counter'

const DEFAULT_COUNT_VALUE = 0

test('Counter renders', () => {
  const {getByText, queryByText} = render(<Counter />)
  expect(getByText(/increase/i)).toHaveAttribute('type', 'button')
  expect(getByText(/decrease/i)).toHaveAttribute('type', 'button')
  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(/Can not go below 0/i)).toBeNull()
})

test('Counter increase and decreases value', () => {
  const {getByText, queryByText, debug} = render(<Counter />)
  const decreaseBtn = getByText(/decrease/i)
  const increaseBtn = getByText(/increase/i)

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
  const decreaseBtn = getByText(/decrease/i)

  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(/Can not go below 0/i)).toBeNull()

  user.click(decreaseBtn)

  expect(queryByText(/Can not go below 0/i)).not.toBeNull()
})

test('Counter hides alert when number is > 0', () => {
  const {getByText, queryByText, debug} = render(<Counter />)
  const decreaseBtn = getByText(/decrease/i)
  const increaseBtn = getByText(/increase/i)

  expect(queryByText(`${DEFAULT_COUNT_VALUE}`)).not.toBeNull()
  expect(queryByText(/Can not go below 0/i)).toBeNull()

  user.click(decreaseBtn)

  expect(queryByText(/Can not go below 0/i)).not.toBeNull()

  user.click(increaseBtn)

  expect(queryByText(/Can not go below 0/i)).toBeNull()
})