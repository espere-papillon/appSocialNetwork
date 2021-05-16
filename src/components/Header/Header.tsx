import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type PropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: PropsType) => {
    return (
        <header className={styles.header}>
            <img src="https://i.stack.imgur.com/dDQbw.png" alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
