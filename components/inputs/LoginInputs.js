import { useField } from 'formik'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

import styles from '../../styles/components/inputs/LoginInputs.module.sass'

export const Email = ({ loading, ...props }) => {
  const [field, meta] = useField(props)
  const onError = meta.error ? { className: styles.error } : null

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.icon}>
          <AiOutlineUser />
        </div>
        <input
          maxLength='40'
          type='text'
          autoCapitalize='none'
          spellCheck={false}
          inputMode='email'
          placeholder='E-mail'
          disabled={loading}
          {...onError}
          {...field}
          {...props}
        />
      </div>
      {meta.error ? (
        <div className={styles.errorInput}>{meta.error}</div>
      ) : null}
    </div>
  )
}

export const Senha = ({ loading, ...props }) => {
  const [field, meta] = useField(props)
  const onError = meta.error ? { className: styles.error } : null

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.icon}>
          <RiLockPasswordLine />
        </div>
        <input
          maxLength='40'
          type='password'
          autoCapitalize='none'
          spellCheck={false}
          placeholder='Senha'
          disabled={loading}
          {...onError}
          {...field}
          {...props}
        />
      </div>
      {meta.error ? (
        <div className={styles.errorInput}>{meta.error}</div>
      ) : null}
    </div>
  )
}