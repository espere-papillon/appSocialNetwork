import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redax/state";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type dataPropsType = {
    DialogsPage: DialogsMessagePropsType
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs: React.FC<dataPropsType> = (props) => {

    let dialogsElements = props.DialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = props.DialogsPage.messages.map(message => <Message message={message.message} />)

    const newDialogElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const addMessage = () => {
        props.addMessage()
    }

    const updateMessageText = () => {
        // @ts-ignore
        let text = newDialogElement.current.value;
        props.updateNewMessageText(text)
    }


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
                    <textarea ref={newDialogElement}
                              value={props.DialogsPage.newMessageText}
                              placeholder={"Enter text"}
                              onChange={updateMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}
