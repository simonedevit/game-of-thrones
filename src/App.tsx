import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters, type Character } from './api/httpService';
import { Character as Personaggio } from './components/character/Character';

function App() {

  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {

    getCharacters().then((characters) => {
      setCharacters(characters);
    });

  }, [])

  return (
    <div className="App">
      Game of Thrones app
      <br />
      <br />
      <br />
      <div>
        <b>Personaggi:</b>
        <br />
        <br />
        {characters.map(character => <Personaggio
          key={character.id}
          id={character.id}
          firstName={character.firstName}
          lastName={character.lastName}
          title={character.title}
        />)}
      </div>
    </div>
  );
}

export default App;
