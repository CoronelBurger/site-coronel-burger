import { useLayoutEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { setLogged } from '../redux/actions/user'
import { setAlert } from '../redux/actions/main'
import { connect } from 'react-redux'
import { API } from '../model/API'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import { Email, Senha } from '../components/inputs/LoginInputs'
import Loading from '../components/layout/Loading'

import styles from '../styles/pages/Login.module.sass'

const Login = ({ logged, setLogged, setAlert }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    if (logged) router.push('/gestor')
  }, [logged])

  const initialValues = {
    email: 'teste@teste.com',
    senha: '123456'
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('E-mail inválido')
      .required('Nenhum valor inserido'),
    senha: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('Nenhum valor inserido')
  })

  const submit = (values, setSubmitting) => {
    setLoading(true)
    setSubmitting(false)
    try {
      API('login', values)
        .then((resp) => {
          if (resp.status === 'sucess') {
            setLogged(true)
            router.push('/gestor')
          } else {
            const error = resp.value
            if (error?.name === 'FirebaseError') {
              if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                setAlert({
                  tipo: 'alerta',
                  titulo: 'Email ou senha errado!'
                })
              } else {
                console.log('Erro login:', error)
              }
            } else {
              console.log('Erro login:', error)
            }
          }
          setLoading(false)
        })
    } catch (err) {
      console.log('Erro API login:', err)
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => submit(values, setSubmitting)}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form id='login'>
          <Email name='email' autoComplete='username' loading={loading} />
          <Senha name='senha' autoComplete='current-password' loading={loading} />
          <div className={styles.buttons}>
            {loading ? <Loading /> : <button type='submit'>Entrar</button>}
          </div>
        </Form>
      </Formik>
    </div>
  )
}

const mapState = (state) => ({
  logged: state.user.logged
})

const mapDispatch = {
  setLogged,
  setAlert
}

export default connect(mapState, mapDispatch)(Login)
