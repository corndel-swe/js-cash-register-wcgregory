/**
 * This function changes the recipeBook's name to the newName
 * and then returns the updated recipeBook
 * e.g. renameBook(recipeBook, "Good eats") => { title: 'Good eats' }
 */
function renameBook(recipeBook, newName) {
  recipeBook.title = newName
  return recipeBook
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: []
}

// don't change below
export default renameBook
