import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import ProductList from '../components/ProductList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Ordering App</title>
        <meta name="description" content="Just a simple ordering app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductList />
    </>
  )
}
