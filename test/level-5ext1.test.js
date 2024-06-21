import { describe, it } from 'mocha'
import assert from 'assert'
import { discountedAmount } from '../lib/level-5ext1.js'

describe('discountedAmount', function () {
  it('returns the drawer with the right adjustments after discounts applied', function () {
    const cost = 800
    const discount = 50
    const paid = 1000
    const drawer = [
      { name: 'ten', value: 1000, quantity: 1 },
      { name: 'five', value: 500, quantity: 1 },
      { name: 'one', value: 100, quantity: 2 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const expectedDrawer = [
      { name: 'ten', value: 1000, quantity: 2 },
      { name: 'five', value: 500, quantity: 0 },
      { name: 'one', value: 100, quantity: 1 },
      { name: 'quarter', value: 25, quantity: 3 },
      { name: 'dime', value: 10, quantity: 0 },
      { name: 'nickel', value: 5, quantity: 0 },
      { name: 'penny', value: 1, quantity: 2 }
    ]
    const testDrawer = discountedAmount(cost, discount, paid, drawer)
    assert.deepStrictEqual(testDrawer, expectedDrawer)
  })
})
