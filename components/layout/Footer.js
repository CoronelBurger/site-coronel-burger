import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

import styles from '../../styles/components/layout/Footer.module.sass'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.social}>
        <a href='https://www.coronelburger.com.br/'><BsTwitter /></a>
        <a href='https://www.coronelburger.com.br/'><BsFacebook /></a>
        <a href='https://www.instagram.com/coronelburger_oficial/' target='_blank' rel='noreferrer'><BsInstagram /></a>
      </div>
      <p>&copy;2023 Coronel Burger.</p>
    </footer>
  )
}

export default Footer
