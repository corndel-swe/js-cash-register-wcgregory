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
  if (target > totalAmount) return false
  
  // quantity of currencyValues deducted from the target amount to see
  // whether the cash drawer can make the amount
  for (let cashItem of drawer) {
    console.log(`Starting targetAmount: ${targetAmount} on ${cashItem.name}`)
    if (targetAmount >= cashItem.value && cashItem.quantity) {
      cashItem.quantity--
      targetAmount -= cashItem.value
      console.log(`TargetAmount: ${targetAmount} after deducting ${cashItem.name} quantity left ${cashItem.quantity}`)
    }
    if (targetAmount < cashItem.value || !cashItem.quantity) {
      console.log(`TargetAmount: ${targetAmount} - moving to next currency value was: ${cashItem.name}`)
      continue
    }
    if (targetAmount >= cashItem.value) {
      continue
    }
    if (targetAmount === 0) {
      isPossible = true
    } else {
      while (targetAmount >= cashItem.value || cashItem.quantity) {
        cashItem.quantity--
        targetAmount -= cashItem.value
      }
    }
    /*
    if (!currencyValue.quantity || targetAmount < currencyValue.value) {
      continue
    }
    if ((targetAmount >= currencyValue.value) && currencyValue.quantity) {
      targetAmount -= currencyValue.value
      currencyValue.quantity--
      continue
    } else isPossible = false
    */
  }
  return isPossible
}
