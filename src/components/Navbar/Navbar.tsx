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
                <NavLink to="">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="">Saved</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="">Settings</NavLink>
            </div>
        </nav>
    )
}
