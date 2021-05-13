import React from "react";
import styles from "../Dialogs.module.css";
import {MessageType} from "../../../redux/dialogs-reducer";

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}