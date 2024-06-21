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
  let totalAmount = 0
  let targetAmount = target

  for (let currencyValue of drawer) {
    totalAmount += currencyValue.value * currencyValue.quantity
  }
  // Is not possible if target amount is greater than cash register
  if (target > totalAmount) return false
  
  // Main code to deduct currency values from the target amount to see
  // whether the cash drawer can return the amount.
  for (let cashItem of drawer) {
    // console.log(`Amount: ${targetAmount} at ${cashItem.name} - ${cashItem.quantity}`)
    if (targetAmount < cashItem.value || !cashItem.quantity) {
      // console.log(`Amount: ${targetAmount} - less than or no ${cashItem.name} - continue`)
      continue
    }
    // while target amount remaining is more than currency value and currency quantity is > 0
    while (targetAmount >= cashItem.value && cashItem.quantity) {
      targetAmount -= cashItem.value
      cashItem.quantity--
      // console.log(`Amount: ${targetAmount} after deducting ${cashItem.name} with ${cashItem.quantity} left`)
    }
    if (targetAmount === 0) return true
  } 
  
  return false
}

/*
PDE Tim's solution
export function canMakeAmount(target, drawer) {
  let remainder = target
  for (let i = 0; i < drawer.length; i++) {
    const denomination = drawer[i]

    const neededAmount = Math.floor(remainder / denomination.value)

    remainder -= denomination.value * Math.min(neededAmount, denomination.quantity)
    if (remainder === 0) {
      return true
    }
  }

  return false
}
*/
