import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './views/Nav/Nav';
import { useState } from 'react';
import About from './views/About/About';
import DetailCard from './views/DetailCard/DetailCard'; 

export let personajes = [];
 

function App() {

  const [characters, setCharacters] = useState([]);
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "a89ddacf7dee.874182cd7d4a54e358e0";
  function onSearch(id, button) {
    button.disabled = true;
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.some(char => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          personajes = [...characters];
        } else {
          window.alert('Error');
        }
      }).finally(() => {
        button.disabled = false;
      });
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id));
    personajes = [...characters];
  }
  /*<div className='App'>
      <Nav onSearch={onSearch} />
      <div>
        <Cards
          onClose={onClose}
          characters={characters}
        />
      </div>
    </div> */
  return (
    <div className={style.App}>
      <Nav onSearch={onSearch} />
      <div className={style.container}>
        <Routes>
          <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<DetailCard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
