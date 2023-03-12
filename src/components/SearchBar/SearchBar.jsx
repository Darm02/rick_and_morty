import style from "./SearchBar.module.css";
import { useState, useRef } from "react";
export default function SearchBar(props) {
   const [id, setId] = useState("");

   const inputRef = useRef(null);

   const handleChangeInput = (event) => {
      setId(event.target.value);
   };


   function handleClick(event) {     
      props.onSearch(id, event.target);
      inputRef.current.value = "";
   }

   return (
      <div className={style.container}>
         <input ref={inputRef} onChange={handleChangeInput} className={style.input} name ="busqueda" type="search" />
         <button className={style.boton} onClick={handleClick}>Agregar</button>
      </div>
   );
}
