import Head from 'next/head'

import Content from '../components/Content'
import Nav from '../components/Nav'

import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>liv kobayashi</title>
      </Head>
      <Nav />
      <div className={styles.container}>
        <Content />
      </div>
    </>
  )
}