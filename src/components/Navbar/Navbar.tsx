import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a className={styles.item} href="/description">Profile</a>
            </div>
            <div>
                <a className={styles.item} href="">News</a>
            </div>
            <div>
                <a className={styles.item} href="/dialogs">Messages</a>
            </div>
            <div>
                <a className={styles.item} href="">Music</a>
            </div>
            <div>
                <a className={styles.item} href="">Saved</a>
            </div>
            <div>
                <a className={styles.item} href="">Sattings</a>
            </div>
        </nav>
    )
}
