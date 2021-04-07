import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebImmo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Home</div>
      </Layout>
    </div>
  )
}
