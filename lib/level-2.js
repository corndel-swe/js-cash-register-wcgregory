import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  // let totalCoins = 0
  // const maxCoinValue = 99
  // const totalNumberOfCoins = drawer.filter(coinValue => coinValue.quantity)
  // return drawer.filter(coinValue => coinValue < coinValue.value; coinValue.quantity)
  // for (let currencyValue of drawer) {
  //  if (currencyValue.value <= maxCoinValue) {
  //    totalCoins += currencyValue.quantity
  //  }
  //}
  // return totalCoins
  //const sumOfCoins = drawer
  //  .filter(cashItem => cashItem.value < 100)
  //  .reduce((number, cashItem,) => number + cashItem.quantity, 0)
  // return sumOfCoins
  // ## Final version ##
  return drawer
    .filter(cashItem => cashItem.value < 100)
    .reduce((number, cashItem,) => number + cashItem.quantity, 0)
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  /*
  * refactored code to use filter and reduce
  let totalNotes = 0
  const minNoteValue = 100
  for (let currencyValue of drawer) {
    if (currencyValue.value >= minNoteValue) {
      totalNotes += currencyValue.quantity
    }
  }
  return totalNotes
  */
  // ## Finale versions ##
  return drawer
    .filter(cashItem => cashItem.value >= 100)
    .reduce((number, cashItem,) => number + cashItem.quantity, 0)
}
