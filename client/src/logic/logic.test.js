import React from 'react'
import { shallow } from 'enzyme'
import {calculatePercentages, getRandomStudent} from './logic.js'

describe('calculatePercentages', () => {
  const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'red'}]

  it('returns the right percentage', () => {
    expect(calculatePercentages(test)).toEqual({ green: 20, yellow: 60, red: 20 })
  })
})

describe('getRandomStudent', () => {
  const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'red'}]

  it('returns a defined', () => {
    expect(getRandomStudent(test)).toBeDefined()
  })
})

describe('getRandomStudent', () => {
    const test = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'yellow'},{name: 'c', evaluation : 'yellow'},{name: 'd', evaluation : 'yellow'},{name: 'e', evaluation : 'yellow'}]
    const test1 = [{name: 'a', evaluation : 'green'},{name: 'b', evaluation : 'green'},{name: 'c', evaluation : 'green'},{name: 'd', evaluation : 'green'},{name: 'e', evaluation : 'green'}]

    it('if the first color is not present in the collection, it randomizes until it returns a color that is present', () => {
      expect(getRandomStudent(test)).toBeDefined()
      expect(getRandomStudent(test1)).toBeDefined()
    })
})
