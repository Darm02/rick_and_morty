import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./DetailCard.module.css";
import { personajes } from "../../App";

function DetailCard(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navegate = useNavigate();
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "a89ddacf7dee.874182cd7d4a54e358e0";

  useEffect(() => {
    console.log(personajes);
    const characterEncontrado = personajes.find(char => char.id === id);
    if(characterEncontrado?.name){
      setCharacter(characterEncontrado);
    }
  }, [id]);

  const goBack = () => {
    navegate("/");
  };

  const { name, status, species, gender, origin, image } = character;

  return (
    <div>
      <button className={style.boton} onClick={goBack}>
        Volver
      </button>
      <div className={style.infoContainer}>
        <div className={style.textInfo}>
          <h2>{name}</h2>
          <p>Estatus: <span className={style.hide}>{status}</span></p>
          <p>Origen: {origin?.name}</p>
          <p>Género: {gender}</p>
          <p>Especie: {species}</p>
        </div>

        <div className={style.image}>
          <img src={image} alt={`Imagen de ${name}`} />
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
