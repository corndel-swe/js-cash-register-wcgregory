/**
 * Accepts a recipe object and returns a summary string as below:
 * "Spaghetti Bolognese has 3 ingredients and serves 4 people"
 * "Vegetable Stir Fry has 4 ingredients and serves 2 people"
 */
function recipeSummary(recipe) {
  // code here
  const { name, ingredients, servings } = recipe
  return `${name} has ${ingredients.length} ingredients and serves ${servings} people`
}

// We have provided two recipes for debugging:
const recipe1 = {
  name: 'Spaghetti Bolognese',
  ingredients: ['spaghetti', 'beef', 'tomato sauce'],
  servings: 4,
  isVegetarian: false
}

const recipe2 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
  servings: 2,
  isVegetarian: true
}

// don't change below:
export default recipeSummary
