import { combineReducers } from 'redux'
import { tours } from './tours'
import { tour } from './tour'


export const rootReducer = combineReducers({
  tours,
  tour,
})