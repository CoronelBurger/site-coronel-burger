import {
  login,
  logout
} from '../../model/userModel'
import { AES, enc } from 'crypto-js'

export default function handler(req, res) {
  const body = AES.decrypt(req.body, process.env.NEXT_PUBLIC_SECURE_KEY).toString(enc.Utf8)
  const json = JSON.parse(body)
  const func = json.func

  if (req.method !== 'POST' || !func) {
    res.status(200).json({ status: 'error', value: 'Método errado ou nenhuma função.' })
    return
  }

  if (func === 'login') {
    const values = json.values
    login(values).then((result) => res.status(200).json(result))
    return
  }

  if (func === 'logout') {
    logout().then((result) => res.status(200).json(result))
    return
  }

  res.status(200).json({ status: 'error', value: 'Função não encontrada.' })
}
