import React, { useEffect, useState } from 'react';
import './App.css';
import { getCharacters, type Character } from './api/httpService';
import { Character as Personaggio } from './components/character/Character';
import { Cart } from './components/cart/Cart';

function App() {

  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);


  const [favouriteCharacters, setFavouriteCharacters] = useState<Array<string>>([]);

  const handleClick = (character: string, isFavourite: boolean) => {
    // copia dell'array
    let newFavouriteCharacters = [...favouriteCharacters];
    if (isFavourite) {
      // rimuoviamo l'elemento dall'array copiato
      newFavouriteCharacters = newFavouriteCharacters.filter(favouriteCharacter => favouriteCharacter !== character)
    }
    else {
      // aggiungiamo l'elemento nell'array copiato
      newFavouriteCharacters.push(character);
    }
    // sostituiamo il vecchio con il nuovo array
    setFavouriteCharacters(newFavouriteCharacters);
  };

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
        <div className='page-container'>
          <div className='characters-container'>
            {characters.map(character => (
              <Personaggio
                handleClick={handleClick}
                key={character.id}
                id={character.id}
                firstName={character.firstName}
                lastName={character.lastName}
                title={character.title}
                imageUrl={character.imageUrl}
              />
            ))}
          </div>
          <Cart favourites={favouriteCharacters} />
        </div>
      </div>
    </div>
  );
}

export default App;
