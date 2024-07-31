'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.location.replace('https://pedido.anota.ai/loja/coronel-burger-1?f=msa')
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