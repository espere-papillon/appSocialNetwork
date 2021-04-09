import React from "react";
import { MessageType } from "../../../redax/state";
import styles from "../Dialogs.module.css";

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}