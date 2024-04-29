import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/pages/Home.module.sass'
import logo from '../assets/logo.jpg'
import whatsapp from '../assets/whatsapp.jpg'
import { useEffect } from 'react'


useEffect(() => {
  window.location.replace('https://menu.brendi.com.br/coronel-burger-arinos/')
}, [])

const Home = () => {
  return (
  <>
  <div></div>
    {/*<section className={styles.container}>
      <Image
        src={logo}
        alt='Logo Coronel Burger'
        className={styles.logo}
        quality={100}
        priority
      />
      <p>
        EM BREVE!
      </p>
      <Link href='https://wa.me/553899611876?text=Ol%C3%A1,%20quero%20fazer%20um%20pedido.' target='_blank'>
        <Image
          src={whatsapp}
          alt='Logo Whatsapp'
          className={styles.whatsapp}
        />
      </Link>
  </section>*/}
  </>
  )
}

export default Home