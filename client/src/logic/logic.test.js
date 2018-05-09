import React from 'react'
import { shallow } from 'enzyme'
import {calculatePercentages, getRandomStudent} from './logic.js'

describe('calculatePercentages', () => {
  const test = [{name: 'a', latestEvaluation : 'green'},{name: 'b', latestEvaluation : 'yellow'},{name: 'c', latestEvaluation : 'yellow'},{name: 'd', latestEvaluation : 'yellow'},{name: 'e', latestEvaluation : 'red'}]

  it('returns the right percentage', () => {
    expect(calculatePercentages(test)).toEqual({ green: 20, yellow: 60, red: 20, grey: 0 })
  })
})

describe('getRandomStudent', () => {
  const test = [{name: 'a', latestEvaluation : 'green'},{name: 'b', latestEvaluation : 'yellow'},{name: 'c', latestEvaluation : 'yellow'},{name: 'd', latestEvaluation : 'yellow'},{name: 'e', latestEvaluation : 'red'}]

  it('returns a defined', () => {
    expect(getRandomStudent(test)).toBeDefined()
  })
})

describe('getRandomStudent', () => {
    const test = [{name: 'a', latestEvaluation : 'green'},{name: 'b', latestEvaluation : 'yellow'},{name: 'c', latestEvaluation : 'yellow'},{name: 'd', latestEvaluation : 'yellow'},{name: 'e', latestEvaluation : 'yellow'}]
    const test1 = [{name: 'a', latestEvaluation : 'green'},{name: 'b', latestEvaluation : 'green'},{name: 'c', latestEvaluation : 'green'},{name: 'd', latestEvaluation : 'green'},{name: 'e', latestEvaluation : 'green'}]

    it('if the first color is not present in the collection, it randomizes until it returns a color that is present', () => {
      expect(getRandomStudent(test)).toBeDefined()
      expect(getRandomStudent(test1)).toBeDefined()
    })
})

describe('getRandomStudent', () => {
    const test = [{name: 'a', latestEvaluation : 'grey'},{name: 'b', latestEvaluation : 'grey'},{name: 'c', latestEvaluation : 'grey'},{name: 'd', latestEvaluation : 'grey'},{name: 'e', latestEvaluation : 'yellow'}]
    const test1 = [{name: 'a', latestEvaluation : 'grey'},{name: 'b', latestEvaluation : 'grey'},{name: 'c', latestEvaluation : 'grey'},{name: 'd', latestEvaluation : 'grey'},{name: 'e', latestEvaluation : 'grey'}]

    it('if only one student has been evaluated, they will be picked', () => {
      expect(getRandomStudent(test)).toEqual({name: 'e', latestEvaluation : 'yellow'})
      expect(getRandomStudent(test1)).toBeDefined()
    })

    it('if no students have been evaluated, the function will return a random student anyway', () => {
      expect(getRandomStudent(test1)).toBeDefined()
    })
})
