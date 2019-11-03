import { combineReducers } from 'redux'
import home from './HomeReducer/HomeReducer'
import isDisplayLogin from "./LoginReducer/openLogin"

const appReducer = combineReducers({
  home: home,
  isDisplayLogin: isDisplayLogin
})

export default appReducer
