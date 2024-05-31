import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

import '../styles/globals.sass'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Coronel Burger</title>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default MyApp
