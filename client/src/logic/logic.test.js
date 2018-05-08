import React from 'react'
import { shallow } from 'enzyme'
import {calculatePercentages, getRandomStudent} from './logic.js'

describe('calculatePercentages', () => {
  const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'red'}]

  it('returns the right percentage', () => {
    expect(calculatePercentages(test)).toEqual({ green: 20, yellow: 60, red: 20 })
  })
})
