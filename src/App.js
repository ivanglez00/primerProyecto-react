import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  // hacer peticion a la api de rick & morty
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character/');

    const characterApi = await api.json();

    //console.log(characterApi);
    //sacar solo la informacion y meterlo en un arreglo results
    setCharacters(characterApi.results);
  }

  //console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>

        {characters ? (
        
          < Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
        <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-hone' />
          <button onClick={reqApi} className="btn-search"> buscar personajes </button>
      </>
      )}



      </header>
    </div>
  );
}

export default App;
