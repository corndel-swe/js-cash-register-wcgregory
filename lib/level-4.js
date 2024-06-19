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
  let targetAmount = target

  for (let currencyValue of drawer) {
    totalAmount += currencyValue.value * currencyValue.quantity
  }
  // Is not possible if target amount is greate than cash register
  if (target > totalAmount) return isPossible
  
  // Main code to deduct currency values from the target amount to see
  // whether the cash drawer can make the amount.
  for (let cashItem of drawer) {
    // console.log(`Target amount: ${targetAmount} at ${cashItem.name} - ${cashItem.quantity}`)
    if (targetAmount < cashItem.value || !cashItem.quantity) {
      // console.log(`Target amount: ${targetAmount} - less than ${cashItem.name} - continue`)
      continue
    }
    while (targetAmount >= cashItem.value && cashItem.quantity) {
      cashItem.quantity--
      targetAmount -= cashItem.value
      // console.log(`Amount ${targetAmount} after deducting ${cashItem.name} with ${cashItem.quantity} left`)
    }
  } 
  if (targetAmount === 0) isPossible = true
  return isPossible
}
