const assert = require('power-assert')
const { parse, last, transpile } = require('../lib/utils')

describe('last()', () => {
  describe('success', () => {
    it('should return last item of array', () => {
      assert(last([1, 2, 3, 4]) === 4)
    })

    it('should return last charactor of string', () => {
      assert(last('abcdefg') === 'g')
    })
  })

  describe('failure', () => {
    it('should return `undefined` when got not array object ', () => {
      assert(last(null) === undefined)
    })
  })
})
