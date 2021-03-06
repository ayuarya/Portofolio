import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aryan Back-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main/>
    </div>

  )
}
