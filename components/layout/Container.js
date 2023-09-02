import { useLayoutEffect, useEffect } from 'react'
import { setLogged } from '../../redux/actions/user'
import { setAlert } from '../../redux/actions/main'
import { getCookie, hasCookie } from 'cookies-next'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Aside from './Aside'
import Footer from './Footer'
import Alerta from './Alerta'

import styles from '../../styles/components/layout/Container.module.sass'

const Container = ({ children, logged, setLogged, setAlert }) => {
  const router = useRouter()

  useEffect(() => {
    setAlert({
      tipo: 'alerta',
      titulo: 'Site em construção!',
      mensagem: 'Todas as funções estão em teste.'
    })
  }, [setAlert])

  useEffect(() => {
    const pattern = new RegExp('gestor')
    const url = router.asPath
    if (!logged && pattern.test(url)) {
      router.push('/login')
    }
  }, [logged])

  useLayoutEffect(() => {
    if (hasCookie('logged') && !logged) {
      const user = getCookie('logged')
      if (user === 'true') {
        setLogged(true)
      }
    }
  }, [])

  return (
    <>
      <main className={styles.container}>
        {logged && <Aside />}
        {children}
      </main>
      <Footer />
      <Alerta />
    </>
  )
}

const mapState = (state) => ({
  logged: state.user.logged
})

const mapDispatch = {
  setLogged,
  setAlert
}

export default connect(mapState, mapDispatch)(Container)