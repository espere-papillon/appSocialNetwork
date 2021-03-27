import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/description" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            {/*<div className={styles.item}>*/}
            {/*    <NavLink to="/saved">Saved</NavLink>*/}
            {/*</div>*/}
            <div className={styles.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}
