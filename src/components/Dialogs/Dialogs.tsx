import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type dataPropsType = {
    dialogsPage: DialogsMessagePropsType
    isAuth: boolean
    addMessage: () => void
    updateMessageText: (text: string) => void
}

export const Dialogs: React.FC<dataPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />)

    const addMessage = () => {
        props.addMessage()
    }

    const updateMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {props.updateMessageText(event.currentTarget.value)}

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.areaAddMessage}>
                <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              placeholder={"Enter text"}
                              onChange={updateMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    );
}
