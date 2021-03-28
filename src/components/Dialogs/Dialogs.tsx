import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";


export const Dialogs = (props: DialogItemType) => {
    let DialogsData: Array<DialogItemType> = [
        {id: "1", name: "Marina"},
        {id: "2", name: "Karina"},
        {id: "3", name: "Stas"}
    ]

    let MessagesData: Array<MessageType> = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are u?"},
        {id: "3", message: "Yoo"}
    ]

    let dialogsElements = DialogsData.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = MessagesData.map(message => <Message message={message.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
