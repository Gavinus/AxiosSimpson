// mes imports
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
// import Citation from './components/Citation';
import './App.css'


function App() {
  //state avec la citation écrite de base pour pas afficher page blanche
  // const [citationSimpson, setCitationSimpson] = useState("By chilling my loins I increase the chances of impregnating my wife.")
  const[fullData, setFullData] = useState("")
  //fonction qui appel API
  const citSimpson = () => {
    // Send the request
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then((res) => res.data)
      // Use this data to update the state
      .then((data) => {
        setFullData(data[0])
        // setCitationSimpson(data[0].quote);
        // setImgSimpson(data[0].image);
      });
  };
  return (
    <div className="App">
      <h2>{fullData.character}</h2>
      <p>{fullData.quote}</p>
      <img src={fullData.image} alt="" />
      <button type="button" onClick={() => citSimpson()}>Generate</button>
    </div>
  );
}

export default App;
