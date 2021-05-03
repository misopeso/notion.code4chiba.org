import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import '../styles/global.css'
import '../styles/notion-page.scss'

import 'katex/dist/katex.css'
import Footer from '../components/footer'

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
