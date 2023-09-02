import { setCookie } from 'cookies-next'
import * as tt from '../types'

const initialState = {
  logged: false,
}

const user = (state = initialState, action) => {

  if (action.type === tt.SET_LOGGED) {
    const logged = action.payload
    setCookie('logged', logged)
    return { ...state, logged: logged }
  }

  return { ...state }
}

export default user
