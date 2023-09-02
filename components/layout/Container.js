import { useEffect } from 'react'
import { setAlert } from '../../redux/actions/main'
import { connect } from 'react-redux'

import Footer from './Footer'
import Alerta from './Alerta'

import styles from '../../styles/components/layout/Container.module.sass'

const Container = ({ children, setAlert }) => {
  useEffect(() => {
    setAlert({
      tipo: 'alerta',
      titulo: 'Site em construção!',
      mensagem: 'Todas as funções estão em teste.'
    })
  }, [setAlert])

  return (
    <>
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
      <Alerta />
    </>
  )
}

const mapDispatch = {
  setAlert
}

export default connect(null, mapDispatch)(Container)