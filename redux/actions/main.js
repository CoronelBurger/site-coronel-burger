import * as tt from '../types'

export const setLoading = (loading) => dispatch => {
  dispatch({
    type: tt.SET_LOADING,
    payload: loading
  })
}

export const setAlert = (alert) => dispatch => {
  dispatch({
    type: tt.SET_ALERT,
    payload: alert
  })
}