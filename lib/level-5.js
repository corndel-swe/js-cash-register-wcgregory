import { drawer } from '../drawer.js'

// Level 5

/**
 * Works out the amount of change the customer is owed based on the cost of
 * their items and the amount they have paid. Adds the customer's paid amount
 * to the drawer, removes their change from the drawer, then returns the new
 * drawer.
 *
 * N.b. assume that the paid amount and the change are given in the largest
 * denominations available, i.e. 2.25 should be 2 dollar bills and 1 quarter
 * (if available)rather than 2 dollar bills and 5 nickels (however if no
 * quarters and dimes are available you will use nickels, etc)
 *
 * E.g. (14, 20, drawer) adds 1 twenty to the drawer, and removes 1 five and 1
 * one from the drawer to give to customer as change
 *
 * @param {number} cost - the cost of the customer's basket
 * @param {number} paid - the amount of cash they hand the cashier
 * @param {object[]} drawer
 * @returns {object[]} the drawer, after the transaction has taken place
 */
export function transaction(cost, paid, drawer) {
  let change = paid - cost
  const changeGiven = Array()

  for (let cashItem of drawer) {
    // first - add cash to the drawer
    if (paid === cashItem.value) {
      cashItem.quantity++
      // console.log(`Added: ${paid} into drawer item ${cashItem.name} quantity ${cashItem.quantity}`)
    }
    // second - deduct change
    // console.log(`Amount: ${change} at ${cashItem.name} - ${cashItem.quantity}`)
    if (change === 0) break
    else if (change < cashItem.value || !cashItem.quantity) {
        // console.log(`Amount: ${change} - less than or no ${cashItem.name} - continue`)
        continue
      }
      // while change remaining is more than currency value and currency quantity is > 0
      while (change >= cashItem.value && cashItem.quantity) {
        change -= cashItem.value
        cashItem.quantity--
        changeGiven.push(cashItem.name)
        // console.log(`Amount: ${change} after deducting ${cashItem.name} with ${cashItem.quantity} left`)
      }
    }
  // console.log(`Change given: ${changeGiven}`)
  return drawer
}

/**
 * 
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
  } 
  if (targetAmount !== 0) return false
  return true
*/
