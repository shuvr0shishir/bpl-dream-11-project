import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import PlayersBox from './components/playersBox/PlayersBox'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

// const fetchPlayer = fetch('/players-data.json').then(res => res.json());

const fetchPlayer = async () => {
  const res = await fetch('/players-data.json')
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000)

  return (
    <>
      <header>
        <Navbar coin={coin} />
      </header>
      <main>
        <Banner />
        <Suspense fallback={<span className="loading loading-dots loading-xl mx-auto block min-h-screen"></span>}>
          <PlayersBox playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
      </main>
      <Footer />


      {/* react toastify */}
      <ToastContainer />
    </>
  )
}

export default App