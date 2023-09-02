import { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { API } from '../../model/API'
import { setLogged } from '../../redux/actions/user'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/components/layout/Aside.module.sass'

const Aside = ({ setLogged }) => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)
  const smallScreen = useMediaQuery({ query: '(max-width: 480px)' })
  const asideRef = useRef(null)

  const handlerLogout = () => {
    API('logout')
      .then((resp) => {
        if (resp.status === 'sucess') setLogged(false)
        else console.log('Erro logout:', resp.value)
      })
      .catch((err) => console.log('Erro API logout:', err))
  }

  useEffect(() => {
    const menu = document.getElementById('menu').children
    for (let i = 0; i < menu.length; i++) {
      menu.item(i).classList.remove(styles.select)
      if (menu.item(i).getAttribute('href') === router.asPath)
        menu.item(i).classList.add(styles.select)
    }
  }, [router.asPath])

  useEffect(() => {
    const closeMenu = (e) => {
      if (asideRef.current && !asideRef.current.contains(e.target)) {
        setMenu(false)
      }
    }

    if (!menu && smallScreen) {
      document.getElementById('menu').style.display = 'none'
      document.removeEventListener('click', closeMenu)
    } else {
      document.getElementById('menu').style.display = 'flex'
      document.addEventListener('click', closeMenu)
    }

    return () => document.removeEventListener('click', closeMenu)
  }, [menu, smallScreen])

  useEffect(() => {
    const menu = document.getElementById('menu').children

    const handlerSelect = (item) => {
      if (smallScreen) setMenu(false)

      for (let i = 0; i < menu.length; i++) {
        menu.item(i).classList.remove(styles.select)
      }
      item.classList.add(styles.select)
    }

    for (let i = 0; i < menu.length; i++) {
      if (menu.item(i).hasAttribute('href'))
        menu.item(i).addEventListener('click', (e) => handlerSelect(e.currentTarget))
    }

    return () => {
      for (let i = 0; i < menu.length; i++) {
        if (menu.item(i).hasAttribute('href'))
          menu.item(i).removeEventListener('click', (e) => handlerSelect(e.currentTarget))
      }
    }
  }, [smallScreen])

  return (
    <div className={styles.container}>
      <aside ref={asideRef}>
        <div className={styles.menu} id='menu'>
          <Link href='/'>Início</Link>
          <Link href='/gestor'>Principal</Link>
          <Link href='/gestor/pedidos'>Pedidos</Link>
          <Link href='/gestor/cardapio'>Cardápio</Link>
          <Link href='/gestor/estoque'>Estoque</Link>
          <a onClick={() => handlerLogout()} className={styles.sair}>Sair</a>
        </div>
        {smallScreen && (
          <button onClick={() => setMenu(!menu)}>{menu ? 'Fechar' : 'Abrir'}</button>
        )}
      </aside>
    </div>
  )
}

const mapDispatch = {
  setLogged
}

export default connect(null, mapDispatch)(Aside)
