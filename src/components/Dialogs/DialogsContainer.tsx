import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, StateType} from "../../redax/store";
import {addMessageAC, DialogItemType, MessageType, updateNewMessageTextAC} from "../../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type dataPropsType = {
    // DialogsPage: StateType
    // dispatch: (action: ActionsType) => void
}

export const DialogsContainer: React.FC<dataPropsType> = (props) => {

    // let dialogsElements = props.DialogsPage.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
    //
    // let messagesElements = props.DialogsPage.dialogsPage.messages.map(message => <Message message={message.message} />)
    //
    // const addMessage = () => {
    //     props.dispatch(addMessageAC(props.DialogsPage.dialogsPage.newMessageText))
    // }
    //
    // const updateMessageText = (text: string) => {props.dispatch(updateNewMessageTextAC(text))}
    //
    // return (
    //     <Dialogs updateMessageText={updateMessageText} addMessage={addMessage} dialogsPage={props.DialogsPage.dialogsPage} />
    // );
    return (
        <StoreContext.Consumer>
            {(store) => {
                let dialogsElements = store.getState().dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name}
                                                                                                      id={dialogs.id}/>)

                let messagesElements = store.getState().dialogsPage.messages.map(message => <Message message={message.message}/>)

                const addMessage = () => {
                    store.dispatch(addMessageAC(store.getState().dialogsPage.newMessageText))
                }

                const updateMessageText = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                return <Dialogs updateMessageText={updateMessageText} addMessage={addMessage}
                                dialogsPage={store.getState().dialogsPage}/>
            }
            }
        </StoreContext.Consumer>
    );
}
