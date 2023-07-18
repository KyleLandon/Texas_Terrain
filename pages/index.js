import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Texas Terrain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="navbar">
          <img src="/logo+text.png" alt="Logo" class="logo"></img>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <Header title="Texas Terrain, LLC" />
        <Header title="Working on The Website Right Now <3" />
        <Header title="Scan QR Below to Contact Us!" />
        <img src="/Contact_Info_QR.png"></img>


      </main>

      <Footer />
    </div>
  )
}
