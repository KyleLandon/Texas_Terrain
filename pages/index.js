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
      <navigator>

      <img src="/logo+text.png" alt="Logo" class="logo"></img>

      <div class="navbar">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      
      </navigator>

      <main>
        <div class="main_panel">
          <div class="panel_1">
            <Header title="Panel One"/>
          </div>
          <div class="panel_2">
            <Header title="Panel Two"/>
          </div>
          <div class="panel_3">
            <Header title="Panel Three"/>
          </div>
          <div class="panel_4">
            <Header title="Panel Four"/>
          </div>
        </div>

        <img src="/Contact_Info_QR.png" alt="Contact_QR" class="contact_QR"></img>
        <script id="housecall-pro-chat-bubble" src="https://chat.housecallpro.com/proChat.js" type="text/javascript" data-color="#2378cf" data-organization="1c362d34-771a-42a9-a95e-26a22ca2634a"></script>
      </main>
      
      <Footer />
    </div>
  )
}
