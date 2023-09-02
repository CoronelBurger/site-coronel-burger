import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useEffect, useCallback } from 'react'
import { setAlert } from '../../redux/actions/main'
import { connect } from 'react-redux'
import Link from 'next/link'

import styles from '../../styles/components/layout/Alerta.module.sass'

// setAlert({
//   timerOff: boolean,
//   tipo: string,
//   titulo: string,
//   mensagem: string,
//   link: {
//     href: string,
//     label: string
//   }
// })

const Alerta = ({ alert, setAlert }) => {
  const closeAlert = useCallback(() => {
    document.getElementById('alert').style.display = 'none'
    setAlert(null)
  }, [setAlert])

  useEffect(() => {
    if (alert) {
      document.getElementById('alert').style.display = 'flex'
      if (!alert?.timerOff) {
        const timer = setTimeout(() => closeAlert(), 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [alert, closeAlert])

  return (
    <div className={styles.container} id='alert'>
      <div className={`${styles.msg} ${styles[alert?.tipo]}`}>
        {alert?.titulo && <h2>{alert?.titulo}</h2>}
        {alert?.mensagem && <p>{alert?.mensagem}</p>}
        {alert?.link && <Link onClick={() => closeAlert()} href={alert?.link.href}>{alert?.link.label}</Link>}
      </div>
      <AiOutlineCloseCircle onClick={() => closeAlert()} />
    </div>
  )
}

const mapState = (state) => ({
  alert: state.main.alert
})

const mapDispatch = { setAlert }

export default connect(mapState, mapDispatch)(Alerta)