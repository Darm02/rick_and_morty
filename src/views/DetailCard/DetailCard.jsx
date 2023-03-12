import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailCard(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navegate = useNavigate();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      
    return setCharacter({});
  }, [id]);

  const {origin} = character;
  function idk(){
    let string ="";
    for(let i in origin){
      string += i + " "
    }
    return string;
  }

  const goBack = () => {
    navegate("/");
  };

  return (
    <>
      <button onClick={goBack}>Volver</button>
      <h1>{character.name}</h1>
      {console.log(idk())}
      
    </>
  );
}

export default DetailCard;
