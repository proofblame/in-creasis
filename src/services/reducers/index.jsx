import { combineReducers } from 'redux'
import navbarReducer from './navbar'



export const rootReducer = combineReducers({
  nav: navbarReducer,
})