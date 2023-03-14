import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export function Nav({ onSearch }) {
  return (
    <div className={style.container}>
      <div className={style.navegador}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${style.enlace} ${style.active}` : style.enlace)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? `${style.enlace} ${style.active}` : style.enlace)}
        >
          About
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
