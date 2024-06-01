'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.location.replace('https://menu.brendi.com.br/coronel-burger-arinos/')
  }, [])

  return 
      <Image
        src={logo}
        alt='Logo Coronel Burger'
        quality={100}
        priority
      />
}

export default Home