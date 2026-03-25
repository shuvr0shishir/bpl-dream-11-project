import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import PlayersBox from './components/playersBox/PlayersBox'
import { Suspense } from 'react'

// const fetchPlayer = fetch('/players-data.json').then(res => res.json());

const fetchPlayer = async () => {
  const res = await fetch('/players-data.json')
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <Suspense fallback={<span class="loading loading-dots loading-xl mx-auto block my-20"></span>}>
          <PlayersBox playersPromise={playersPromise} />
        </Suspense>
      </main>
    </>
  )
}

export default App
