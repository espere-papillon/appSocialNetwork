import React from "react";
import styles from "./Dialogs.module.css";

export const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={styles.dialog + ' ' + styles.active}>Marina</div>
                <div className={styles.dialog}>Karina</div>
                <div className={styles.dialog}>Stas</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Hello</div>
            </div>
        </div>
    )
}
