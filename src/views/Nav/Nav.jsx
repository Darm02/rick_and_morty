import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export function Nav({onSearch}) {
    return (
        <div className={style.container}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}