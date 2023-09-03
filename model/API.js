import { AES } from 'crypto-js'

export const API = async (func, values) => {
  const json = JSON.stringify({ 'func': func, 'values': values })
  const body = AES.encrypt(json, process.env.NEXT_PUBLIC_SECURE_KEY).toString()

  const resp = await fetch('https://www.coronelburger.com.br/api/user', {
  // const resp = await fetch('http://192.168.100.110:3000/api/user', {
  // const resp = await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    body: body
  })
    .catch((err) => console.log('Erro fetch: ', err))

  if (resp.status === 200) {
    return await resp.json()
  }
  return { status: 'error', value: 'Deu ruim!!!' }
}
