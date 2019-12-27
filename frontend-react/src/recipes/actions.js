import {
  RECIPE_CREATING,
  RECIPE_CREATE_SUCCESS,
  RECIPE_CREATE_ERROR,
} from './constants'

// Create requires that we pass it our current logged in client AND recipe params
// which you can view at http://recipeizer.jcolemorrison.com/explorer OR at
// localhost:3002/explorer if you're using the local API version.
export const recipeCreate = function recipeCreate (client, recipe) {
  return {
    type: RECIPE_CREATING,
    client,
    recipe,
  }
}

export const recipeCreateSuccess = function recipeCreateSuccess (recipe) {
  return {
    type: RECIPE_CREATE_SUCCESS,
    recipe,
  }
}

export const recipeCreateError = function recipeCreateError (error) {
  return {
    type: RECIPE_CREATE_ERROR,
    error,
  }
}
