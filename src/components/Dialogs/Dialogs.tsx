import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType} from "../../redax/state";
import {addMessageAC, DialogItemType, MessageType, updateNewMessageTextAC} from "../Navbar/dialogs-reducer";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type dataPropsType = {
    DialogsPage: DialogsMessagePropsType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<dataPropsType> = (props) => {

    let dialogsElements = props.DialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = props.DialogsPage.messages.map(message => <Message message={message.message} />)

    const addMessage = () => {
        props.dispatch(addMessageAC(props.DialogsPage.newMessageText))
    }

    const updateMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {props.dispatch(updateNewMessageTextAC(event.currentTarget.value))}

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
                    <textarea value={props.DialogsPage.newMessageText}
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
