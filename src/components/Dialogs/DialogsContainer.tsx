import React from "react";
import {
    addMessageAC,
    DialogItemType,
    MessageType,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type DialogsMessagePropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

type dataPropsType = {
    // DialogsPage: StateType
    // dispatch: (action: ActionsType) => void
}

// export const DialogsContainer: React.FC<dataPropsType> = (props) => {
//
//     // let dialogsElements = props.DialogsPage.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)
//     //
//     // let messagesElements = props.DialogsPage.dialogsPage.messages.map(message => <Message message={message.message} />)
//     //
//     // const addMessage = () => {
//     //     props.dispatch(addMessageAC(props.DialogsPage.dialogsPage.newMessageText))
//     // }
//     //
//     // const updateMessageText = (text: string) => {props.dispatch(updateNewMessageTextAC(text))}
//     //
//     // return (
//     //     <Dialogs updateMessageText={updateMessageText} addMessage={addMessage} dialogsPage={props.DialogsPage.dialogsPage} />
//     // );
//     return (
//         <StoreContext.Consumer>
//             {(store: Store) => {
//                 let dialogsElements = store.getState().dialogsPage.dialogs.map((dialogs: DialogItemType )=> <DialogItem name={dialogs.name}
//                                                                                                       id={dialogs.id}/>)
//
//                 let messagesElements = store.getState().dialogsPage.messages.map((message: MessageType) => <Message message={message.message}/>)
//
//                 const addMessage = () => {
//                     store.dispatch(addMessageAC())
//                 }
//
//                 const updateMessageText = (text: string) => {
//                     store.dispatch(updateNewMessageTextAC(text))
//                 }
//                 return <Dialogs updateMessageText={updateMessageText}
//                                 addMessage={addMessage}
//                                 dialogsPage={store.getState().dialogsPage}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)