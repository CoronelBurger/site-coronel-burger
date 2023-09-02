import * as tt from '../types'

export const setLogged = (logged) => dispatch => {
  dispatch({
    type: tt.SET_LOGGED,
    payload: logged
  })
}
