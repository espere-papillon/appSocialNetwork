import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

export const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog + ' ' + styles.active}><NavLink to={"dialogs/1"}>Marina</NavLink></div>
                <div className={styles.dialog}><NavLink to={"dialogs/2"}>Karina</NavLink></div>
                <div className={styles.dialog}><NavLink to={"dialogs/3"}>Stas</NavLink></div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Hello</div>
            </div>
        </div>
    )
}
