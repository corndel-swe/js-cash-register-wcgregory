import { drawer } from '../drawer.js'

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
export function canMakeAmount(target, drawer) {
  let isPossible = false
  let totalAmount = 0

  for (let currencyValue of drawer) {
    totalAmount += (currencyValue.value * currencyValue.quantity) / 100
  }
  totalAmount = totalAmount.toFixed(2)
  if (target > totalAmount) return isPossible
  
  // quantity of currencyValues deducted from target to make amount
  let targetAmount = target
  
}
