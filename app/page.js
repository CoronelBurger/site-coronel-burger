import Image from 'next/image'
import coronel from './coronel.jpeg'
import whatsapp from './whatsapp.jpg'
import './page.css'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Image
          src={coronel}
          alt='Logo Coronel Burger'
          className='App-logo'
          quality={100}
          priority
        />
        <p>
          EM BREVE!
        </p>
        <a href='https://wa.me/553899611876?text=Ol%C3%A1,%20quero%20fazer%20um%20pedido.' target='_blank'>
          <Image
            src={whatsapp}
            alt='Logo Whatsapp'
          />
        </a>
      </header>
    </div>
  )
}
