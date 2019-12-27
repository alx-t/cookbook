import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import user from './user/reducer'
import signup from './signup/reducer'
import login from './login/reducer'
import recipes from './recipes/reducer'

const IndexReducer = combineReducers({
  signup,
  login,
  user,
  form,
  recipes,
})

export default IndexReducer
