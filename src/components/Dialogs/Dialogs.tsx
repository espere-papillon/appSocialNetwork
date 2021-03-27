import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "dialogs/1" + props.id;

    return(
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name={"Marina"} id={"1"} />
                <DialogItem name={"Karina"} id={"2"} />
                <DialogItem name={"Stas"} id={"3"} />
            </div>
            <div className={styles.messages}>
                <Message message={"Hi"} />
                <Message message={"Yoo"} />
            </div>
        </div>
    )
}
