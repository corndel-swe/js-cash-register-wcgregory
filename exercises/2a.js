/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  return recipes.filter(recipe => recipe.isVegetarian).length
  // const numOfVegetarianOptions = recipes.filter(recipe => recipe.isVegetarian).length
  // return numOfVegetarianOptions
  /*
  let count = 0
  * for loop which is the same as the filter option to return count
  for (let recipe of recipes) {
    if (recipe.isVegetarian) {
      count++
    }
  }
  return count
  */
}

// array provided for debugging:
const recipes = [
  {
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'beef', 'tomato sauce'],
    servings: 4,
    isVegetarian: false
  },

  {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
    servings: 2,
    isVegetarian: true
  }
]

// don't change below
export default countVeggies
