import { useState } from 'react'


import './App.css'
import Test from './Components/Headers/Test'
import Headers from './Components/Headers/Headers'
import Heading from './Components/Headers/Heading'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'

function App() {
  const [credit, setCredit] = useState(0)
  const [player, Setplayer] = useState(0)
  const addCredit = () => {
    setCredit(credit + 1000000);

    const see = credit.length;
    console.log(see)
  }
  const buyplayer = (buy) => {
    if (credit > 50000) {
      const newBuyplayer = credit - buy;
      setCredit(newBuyplayer)
    }
    else {
      alert('add money first')
    }
  }


  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={addCredit}>clik {credit.length}</button>

      <Heading credit={credit}></Heading>
      <Headers addCredit={addCredit} ></Headers>

      <Players buyplayer={buyplayer} ></Players>
      <Footer></Footer>



    </>
  )
}

export default App
