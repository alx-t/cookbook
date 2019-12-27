import {
  RECIPE_CREATING,
  RECIPE_CREATE_SUCCESS,
  RECIPE_CREATE_ERROR,
} from './constants'

const initialState = {
  list: [], // where we'll store recipes
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const reducer = function recipeReducer (state = initialState, action) {
  switch (action.type) {
    case RECIPE_CREATING:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{
          body: `Recipe: ${action.recipe.name} being created...`,
          time: new Date(),
        }],
        errors: [],
      }

    // On success include the new recipe into our list
    // We'll render this list later.
    case RECIPE_CREATE_SUCCESS:
      return {
        list: state.list.concat([action.recipe]),
        requesting: false,
        successful: true,
        messages: [{
          body: `Recipe: ${action.recipe.name} awesomely created!`,
          time: new Date(),
        }],
        errors: [],
      }

    case RECIPE_CREATE_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
      }

    default:
      return state
  }
}

export default reducer
