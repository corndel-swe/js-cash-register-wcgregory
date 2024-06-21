import { drawer } from '../drawer.js'

// Level 6

/**
 * Works out the amount of change the customer is owed based on the cost of
 * their items and the amount they have paid. Adds the customer's paid amount
 * to the drawer, removes their change from the drawer, then returns the new
 * drawer. In addition calculates a discount from the cost price.
 *
 * N.b. assume that the paid amount and the change are given in the largest
 * denominations available, i.e. 2.25 should be 2 dollar bills and 1 quarter
 * (if available)rather than 2 dollar bills and 5 nickels (however if no
 * quarters and dimes are available you will use nickels, etc)
 *
 * E.g. (14, 5, 20, drawer) adds 1 twenty to the drawer, and removes 1 five, 1
 * one 2 quarters and 2 dimes from the drawer to give to the customer as change
 *
 * @param {number} cost - the cost of the customer's basket
 * @param {number} discount - the discount in percent to be applied to the cost price
 * @param {number} paid - the amount of cash they hand the cashier
 * @param {object[]} drawer
 * @returns {object[]} the drawer, after the transaction has taken place
 */
export function discountedAmount(cost, discount, paid, drawer) {
  let change = 0
  const changeGiven = Array()
  if (discount) {change = paid - (cost * ((100 - discount) / 100 ))}
  else {change = paid - cost}

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
  if (change !== 0) {
    console.log("Apologise to customer because there is not enough cash in the cash register!")
    console.log("How embarrassing, maybe give a bigger discount!")
    // TODO work out how to get the next biggest cash value and return to customer and deduct from drawer
    // const cashOverChange = drawer
    //  .filter(item => item.quantity > 0 && item.value > change)
    //  .map(item => item.name)
    // console.log(`${cashOverChange} change left ${change}`)
    // const cashInRegister = drawer.filter(item => item.quantity > 0).map(item => item.name)
    // console.log(`${cashInRegister} change left ${change}`)
  }
  // console.log(`Change given: ${changeGiven}`)
  return drawer
}
