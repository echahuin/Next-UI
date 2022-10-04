import '../styles/globals.css'
import { AppProps } from 'next/app'

interface PageProps {
  title: string;
  subtitle: string;
}

function MyApp({ Component, pageProps }:  AppProps<PageProps>) {
  return <Component {...pageProps} />
}

export default MyApp
