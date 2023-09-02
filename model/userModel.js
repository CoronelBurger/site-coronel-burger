import { auth } from './fbCfg'
import {
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'

export const login = async (values) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.senha)
    return { status: 'sucess', value: userCredential.user.email }
  } catch (error) {
    return { status: 'error', value: error }
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    return { status: 'sucess', value: null }
  } catch (error) {
    return { status: 'error', value: error }
  }
}
