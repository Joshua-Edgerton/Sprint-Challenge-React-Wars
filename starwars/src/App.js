//IMPORTS
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Cards from './Cards'
import './App.css';
//APP
const App = () => {
  // STATE
  const [charactersCollection, setCharactersCollection] = useState('');
  //USE EFFECT
  useEffect(() => {
   axios.get('https://swapi.co/api/people/')
    .then(success => {
      console.log('results', success.data.results);
      //assign to the state
      setCharactersCollection(success.data.results);
    })
    .catch(failure => {
      console.log('Failed');
    })
  }
    ,[] // RENDER ONCE
  )

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters </h1>
      <Cards charactersCollection={charactersCollection} />

    </div>
  );
}

export default App;

