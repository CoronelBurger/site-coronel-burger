import { combineReducers } from '@reduxjs/toolkit'
import main from './main'
import user from './user'

const rootReducer = combineReducers({
  main: main,
  user: user
})

export default rootReducer