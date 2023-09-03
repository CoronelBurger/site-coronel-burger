import { useEffect } from 'react'

import styles from '../../styles/components/layout/Header.module.sass'

const Header = ({ setView, links }) => {
  useEffect(() => {
    const menu = document.getElementById('nav').children

    let count = 0
    for (let i = 0; i < menu.length; i++) {
      if (!menu.item(i).classList.contains(styles.select)) count++
    }
    if (count === menu.length) {
      menu.item(0).classList.add(styles.select)
    }

    const handlerSelect = (item) => {
      let count = 0
      for (let i = 0; i < menu.length; i++) {
        menu.item(i).classList.remove(styles.select)
      }
      console.log(count, menu.length)
      item.classList.add(styles.select)
    }

    for (let i = 0; i < menu.length; i++) {
      menu.item(i).addEventListener('click', (e) => handlerSelect(e.currentTarget))
    }

    return () => {
      for (let i = 0; i < menu.length; i++) {
        menu.item(i).removeEventListener('click', (e) => handlerSelect(e.currentTarget))
      }
    }
  }, [])

  return (
    <nav className={styles.container} id='nav'>
      {links.map((menu) => {
        return <button key={menu.name} onClick={() => setView(menu.view)}>{menu.name}</button>
      })}
    </nav>
  )
}

export default Header
