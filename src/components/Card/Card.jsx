import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.CardContainer}>
      <div className={style.CloseButton}>
        <button
          onClick={() => {
            props.onClose(props.id);
          }}
        >
          𐄂
        </button>
      </div>

      <NavLink className={style.link} to={`/detail/${props.id}`}>
        <div className={style.imageContainer}>
          <img src={props.image} alt={`Foto de ${props.name}`} />
          <span>{props.name}</span>
        </div>

        <div className={style.InfoCard}>
          <div className={[style.section, style.borderRight].join(" ")}>
            <img
              src="https://static.thenounproject.com/png/3088638-200.png"
              alt=""
            />
            <span>{props.species}</span>
          </div>

          <div className={style.section}>
            <img
              src="https://static.thenounproject.com/png/944041-200.png"
              alt=""
            />{" "}
            <span>{props.gender}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
