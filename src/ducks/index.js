import merge from 'lodash.merge'
import { combineReducers } from 'redux'

import counter, { counterInitialState } from './counter'

export const initialState = merge(
  {},
  counterInitialState
)

export default combineReducers({
  counter
})
