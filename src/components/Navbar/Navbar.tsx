import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            {/*<div className={styles.item}>*/}
            {/*    <NavLink to="/saved">Saved</NavLink>*/}
            {/*</div>*/}
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}
