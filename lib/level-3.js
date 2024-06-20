import { drawer } from '../drawer.js'

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
export function sumDrawer(drawer) {
  let totalAmount = 0
  // reduce method for reference
  // const numbers = [1, 2, 3, 4, 5]
  // const total = numbers.reduce((acc, curr) => acc + curr, 0)
  // const totalAmount = drawer.reduce((cashObj.value, cashObj.quantity) => cashObj.value * cashObj.quantity, 0)
  for (let currencyValue of drawer) {
    totalAmount += (currencyValue.value * currencyValue.quantity) / 100
  }
  return `$${totalAmount.toFixed(2)}`
}
