import { AppProps } from 'next/app'
import { Header } from '../components/Header/Header'
import '../styles/global.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
