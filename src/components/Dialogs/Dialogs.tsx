import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redax/state";

type dataPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export const Dialogs: React.FC<dataPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = props.messages.map(message => <Message message={message.message} />)

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
