import { wrapper } from '../redux/store'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

import Container from '../components/layout/Container'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Head>
        <title>Coronel Burger</title>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Container>
  )
}

export default wrapper.withRedux(MyApp)
