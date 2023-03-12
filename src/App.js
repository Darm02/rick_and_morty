import './App.css'
import Cards from './components/Cards/Cards.jsx'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './views/Nav/Nav'
import { useState } from 'react'
import About from './views/About/About'
import DetailCard from './views/DetailCard/DetailCard'
function App() {

  const [characters, setCharacters] = useState([]);
  
  function onSearch(id, button) {
    button.disabled = true;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.some( char => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('Error');
        }
      }).finally(() => {
        button.disabled = false;
      });
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id));
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

    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/' element={<Cards characters = {characters} onClose= {onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<DetailCard />} />
      </Routes>
    </>
  )
}

export default App
