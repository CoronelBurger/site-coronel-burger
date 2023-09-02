import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Email, Senha } from '../inputs/LoginInputs'
import Loading from '../layout/Loading'

import styles from '../../styles/components/gestor/Login.module.sass'

const Login = () => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    email: '',
    senha: ''
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
    console.log(values)
    setTimeout(() => setLoading(false), 1500)
    setTimeout(() => alert('Deu bom, malandragem!'), 1501)
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

export default Login
