'use client'

import Image from 'next/image'
import styles from '../styles/pages/Home.module.sass'
import logo from '../assets/logo.jpg'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.location.replace('https://menu.brendi.com.br/coronel-burger-arinos/')
  }, [])

  return (
    <section className={styles.container}>
      <Image
        src={logo}
        alt='Logo Coronel Burger'
        className={styles.logo}
        quality={100}
        priority
      />
    </section>
  )
}

export default Home