import { useState } from 'react'


import './App.css'
import Test from './Components/Headers/Test'
import Headers from './Components/Headers/Headers'
import Heading from './Components/Headers/Heading'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
import Selets from './Components/selects/Selets'

function App() {
  const [credit, setCredit] = useState(0)
  const [player, Setplayer] = useState([])
  const addCredit = () => {
    setCredit(credit + 1000000);

    const see = credit.length;
    console.log(see)
  }
  const buyplayer = (buy, name) => {
    if (credit > 50000) {
      const newBuyplayer = credit - buy;
      setCredit(newBuyplayer)
      const sp = [...player, name, buy]
      Setplayer(sp)

      // console.log('button are cont')
      // console.log(player)
      // const newply = player.filter(p => p.name === name)

      // console.log(newply)
      // Setplayer(newply)

    }
    else {
      alert('add money first')
    }
  }



  // const buyplayer = (buy, name) => {
  //   if (credit > 50000) {
  //     const newBuyplayer = credit - buy;
  //     setCredit(newBuyplayer);

  //     // ✅ Find the full player object and add it to the list
  //     const selectedPlayer = { name, price: buy }; // Create object with name & price
  //     const updatedPlayers = [...player, selectedPlayer];
  //     Setplayer(updatedPlayers); // Update state with full player object

  //     console.log("Updated Selected Players:", updatedPlayers);
  //   } else {
  //     alert("Add money first");
  //   }
  // };
  const addplayer = (buy) => {

  }


  return (
    <>

      <h1>Vite + React</h1>
      <button onClick={addCredit}>clik {credit.length}</button>

      <Heading credit={credit}></Heading>

      <Headers addCredit={addCredit} ></Headers>
      <Selets player={player} credit={credit}></Selets>

      <Players buyplayer={buyplayer} addplayer={addplayer} ></Players>

      <Footer></Footer>



    </>
  )
}

export default App
