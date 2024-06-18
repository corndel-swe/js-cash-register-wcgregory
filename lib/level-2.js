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
  let totalCoins = 0
  const maxCoinValue = 99
  // const totalNumberOfCoins = drawer.filter(coinValue => coinValue.quantity)
  // return drawer.filter(coinValue => coinValue < coinValue.value; coinValue.quantity)
  for (let currencyValue of drawer) {
    if (currencyValue.value <= maxCoinValue) {
      totalCoins += currencyValue.quantity
    }
  }
  return totalCoins
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  let totalNotes = 0
  const minNoteValue = 100
  for (let currencyValue of drawer) {
    if (currencyValue.value >= minNoteValue) {
      totalNotes += currencyValue.quantity
    }
  }
  return totalNotes
}
