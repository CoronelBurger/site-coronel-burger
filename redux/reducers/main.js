import * as tt from '../types'

const initialState = {
  loading: false,
  alert: null
}

const main = (state = initialState, action) => {
  if (action.type === tt.SET_LOADING) {

    return {
      ...state,
      loading: action.payload
    }
  }

  if (action.type === tt.SET_ALERT) {
    return {
      ...state,
      alert: action.payload
    }
  }

  return { ...state }
}

export default main
